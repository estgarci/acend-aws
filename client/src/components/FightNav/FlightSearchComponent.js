import React, { useState} from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlightTravelers from './modals/FlightTravelers';
import FlightClass from './modals/FlightClass';
import AirportInput from './modals/AirportInputComponent';
import { DateRangePicker, SingleDatePicker } from 'react-dates';

function FlightDates(props){
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <>
            {props.showReturn ?
             <DateRangePicker
              className="mt-2"
              startDateId="startDate"
              endDateId="endDate"
              startDate={props.flightSearchInfo.startDate}
              endDate={props.flightSearchInfo.endDate}
              onDatesChange={({ startDate, endDate }) => {props.setFlightSearchInfo(prevState => ({...prevState, ["startDate"]: startDate }));props.setFlightSearchInfo(prevState => ({...prevState, ["endDate"]: endDate }))}}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => { setFocusedInput(focusedInput)}}
              numberOfMonths={2}
              keepOpenOnDateSelect
            />:
            <SingleDatePicker
              className="mt-2"
              startDateId="startDate"
              date={props.flightSearchInfo.startDate} // momentPropTypes.momentObj or null
              onDateChange={startDate => props.setFlightSearchInfo(prevState => ({...prevState, ["startDate"]: startDate }))} // PropTypes.func.isRequired
              focused={focusedInput} // PropTypes.bool
              onFocusChange={ ({focused})  => setFocusedInput(focused)} // PropTypes.func.isRequired
               // PropTypes.string.isRequired,
              autoFocus 
            />}
      </>
  );
}

function FlightSearch(props) {
  // buttons&toggle states
  const [visibleModal, setVisibleModal] = useState(null);

  const [flightSearchInfo, setFlightSearchInfo] = useState({
    flightClass: 'economy',
    roundTrip: true,
    travelers: {
      adults: 1,
      children:0,
      infants:0
    },
    origin: null,
    destination: null,
    startDate: null,
    endDate: null
  });

  const handleInputChange = (event) => {
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;

    // setFlightSearchInfo({[name]})
  }

  const handleSubmit = (event) => {
    console.log(flightSearchInfo)
    console.log(props.countries)
    console.log(props.airports)

    props.fetchFlights({ 
                        origin: flightSearchInfo.origin.ident,
                        destination: flightSearchInfo.destination.ident,
                        departure: flightSearchInfo.startDate,
                        return: flightSearchInfo.endDate})
  }

  return (
    <div id="flights-nav" className="container-sm text-nowrap header-main ">
      <Row id="topRow" className="mb-3">
        <Col xs={12} sm={6}className="text-left">
          <ButtonGroup className="roundtripBtnGroup">
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["roundTrip"]: true }))} active={flightSearchInfo.roundTrip === true}>Round Trip</Button>
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["roundTrip"]: false }))} active={flightSearchInfo.roundTrip === false}>One Way</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} sm={6} className="text-left text-sm-right">
            <FlightTravelers  setFlightSearchInfo={setFlightSearchInfo} flightSearchInfo={flightSearchInfo} setVisibleModal={setVisibleModal} visibleModal={visibleModal}/>
            <FlightClass  setFlightSearchInfo={setFlightSearchInfo} flightSearchInfo={flightSearchInfo} setVisibleModal={setVisibleModal} visibleModal={visibleModal}/>
        </Col>
      </Row>
      <Row className="middleRow mb-2">
        <Col lg={4}>
          <div className="flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg">
            <Row className="text-left">
              <Col>
                <FontAwesomeIcon icon="plane-departure"/>&nbsp;&nbsp;&nbsp;Leaving from 
              </Col>
            </Row>
            <Row >
              <Col className="d-flex justify-content-center" >
                <AirportInput countries={props.countries} airports={props.airports} setFlightSearchInfo={setFlightSearchInfo} flightSearchInfo={flightSearchInfo} direction={"origin"}/>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div className="flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg">
            <Row className="text-left">
              <Col>
                <FontAwesomeIcon icon="plane-arrival"/>&nbsp;&nbsp;Going to
              </Col>
            </Row>
            <Row >
              <Col className="d-flex justify-content-center">
                <AirportInput countries={props.countries} airports={props.airports} setFlightSearchInfo={setFlightSearchInfo} flightSearchInfo={flightSearchInfo} direction={"destination"}/>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
        <div className=" flex-column pl-2 pr-2 d-flex justify-content-center text-center search-input search-input-lg">
              <Row className="text-left">
                <Col className="">
                  <FontAwesomeIcon icon="calendar-alt"/>&nbsp;&nbsp;Travel date{flightSearchInfo.roundTrip? "": "s"}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FlightDates flightSearchInfo={flightSearchInfo} setFlightSearchInfo={setFlightSearchInfo} showReturn={flightSearchInfo.roundTrip}/>
                </Col>
              </Row>
            </div>
        </Col>
      </Row>
      <Row className="search-control-row-group">
        <Col xs={12} className="d-flex search-control-col justify-content-center">
          <Button color="primary" className="search-control-btn-lg" size="lg" onClick={handleSubmit}>Search Flights</Button>
        </Col>
      </Row>  
    </div>
  );
}

export default FlightSearch


import React, { useState} from 'react';

import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlightTravelers from './modals/FlightTravelers';
import FlightClass from './modals/FlightClass';
import FilterableInput from './modals/FlightSuggestions';

import { DateRangePicker, SingleDatePicker } from 'react-dates';
// import SingleDatePicker from '../src/components/SingleDatePicker';

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
              date={props.flightSearchInfo.startDate} // momentPropTypes.momentObj or null
              onDateChange={startDate => props.setFlightSearchInfo(prevState => ({...prevState, ["startDate"]: startDate }))} // PropTypes.func.isRequired
              focused={focusedInput} // PropTypes.bool
              onFocusChange={ ({focused})  => setFocusedInput(focused)} // PropTypes.func.isRequired
              id="your_ique_id" // PropTypes.string.isRequired,
              autoFocus 
            />}
      </>
  );
}

const FlightsNavComponent = () => {
  // buttons&toggle states
  const [visibleModal, setVisibleModal] = useState(null);

  const [flightSearchInfo, setFlightSearchInfo] = useState({
    flightClass: 'economy',
    oneWay: true,
    passengers: {
      adults: 1,
      children:0,
      infants:0
    },
    origin: null,
    destination: null,
    startDate: null,
    endDate: null
  });

  return (
    <div id="flights-nav" className="container-sm text-nowrap header-main ">
      <Row id="topRow" className="mb-3">
        <Col xs={12} sm={6}className="text-left">
          <ButtonGroup className="roundtripBtnGroup">
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["oneWay"]: true }))} active={flightSearchInfo.oneWay === true}>Round Trip</Button>
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["oneWay"]: false }))} active={flightSearchInfo.oneWay === false}>One Way</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} sm={6} className="text-left text-sm-right">
            <FlightTravelers  setVisibleModal={setVisibleModal} visibleModal={visibleModal}/>
            <FlightClass  setVisibleModal={setVisibleModal} visibleModal={visibleModal}/>
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
                <FilterableInput/>
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
                <FilterableInput/>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
        <div className=" flex-column pl-2 pr-2 d-flex justify-content-center text-center search-input search-input-lg">
              <Row className="text-left">
                <Col className="">
                  <FontAwesomeIcon icon="calendar-alt"/>&nbsp;&nbsp;Travel date{flightSearchInfo.oneWay? "s": ""}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FlightDates flightSearchInfo={flightSearchInfo} setFlightSearchInfo={setFlightSearchInfo} showReturn={flightSearchInfo.oneWay}/>
                </Col>
              </Row>
            </div>
        </Col>
      </Row>
      <Row className="search-control-row-group">
        <Col xs={12} className="d-flex search-control-col justify-content-center">
          <Button color="primary" className="search-control-btn-lg" size="lg">Search Flights</Button>
        </Col>
      </Row>  
    </div>
  );
}

export default FlightsNavComponent


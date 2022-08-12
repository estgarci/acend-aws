import React, { useState, useEffect} from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlightTravelers from './modals/FlightTravelers';
import FlightClass from './modals/FlightClass';
import AirportInput from './modals/AirportInputComponent';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import FlightDisplay from './FlightDisplay';
import {motion} from 'framer-motion/dist/framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import {fetchFlights, postFavorite} from '../../redux/actionCreators';

function DatePickerDelegate(props){
  const [focusedInput, setFocusedInput] = useState(null);
  const [isMobil, setMobil] = useState(window.innerWidth < 577);

  const updateMedia = () => {
   setMobil(window.innerWidth < 577);
 };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {props.showReturn ?
        <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={props.flightSearchInfo.startDate}
        endDate={props.flightSearchInfo.endDate}
        onDatesChange={({ startDate, endDate }) => {props.setFlightSearchInfo(prevState => ({...prevState, ["startDate"]: startDate }));props.setFlightSearchInfo   (prevState => ({...prevState, ["endDate"]: endDate }))}}
        focusedInput={focusedInput}
        block={true}
        onFocusChange={(focusedInput) => { setFocusedInput(focusedInput)}}
        numberOfMonths={isMobil? 1: 2}
        keepOpenOnDateSelect
        withPortal
        readOnly
        hideKeyboardShortcutsPanel={true}
        renderCalendarInfo={() => (<Button className="ml-4 mt-3" outline>X</Button>)}
        calendarInfoPosition="top"
      />:
      <SingleDatePicker
        startDateId="startDate"
        date={props.flightSearchInfo.startDate}
        onDateChange={startDate => props.setFlightSearchInfo(prevState => ({...prevState, ["startDate"]: startDate }))} // PropTypes.func.isRequired
        focused={focusedInput}
        onFocusChange={ ({focused})  => setFocusedInput(focused)}
        autoFocus
        withPortal
        numberOfMonths={isMobil? 1: 2}
        readOnly 
        hideKeyboardShortcutsPanel={true}
        renderCalendarInfo={() => (<Button className="ml-4 mt-3" outline>X</Button>)}
        calendarInfoPosition="top"
      />}
    </>
  );
}

const FlightSearch = (props) => {

  const [visibleModal, setVisibleModal] = useState(null);
  const dispatch = useDispatch()

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

  const handleSubmit = (event) => {
    if(flightSearchInfo.destination && flightSearchInfo.origin && flightSearchInfo.startDate){
      dispatch(fetchFlights({ 
        origin: flightSearchInfo.origin.ident,
        destination: flightSearchInfo.destination.ident,
        departure: flightSearchInfo.startDate,
        return: flightSearchInfo.endDate}))
      }
    }

  return (
    <motion.div initial={{opacity: .2}} animate={{opacity: 1}} exit={{opacity:.2}}>
      <div id="flights-nav" className="container-sm main-box ">
        <Row id="topRow" className="mb-3">
          <Col xs={12} sm={6}className="text-left text-nowrap">
            <ButtonGroup className="roundtripBtnGroup">
              <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["roundTrip"]: true }))} active={flightSearchInfo.roundTrip === true}>Round Trip</Button>
              <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setFlightSearchInfo(prevState => ({...prevState, ["roundTrip"]: false }))} active={flightSearchInfo.roundTrip === false}>One Way</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} sm={6} className="text-left text-sm-right text-nowrap">
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
                <Row className="d-flex ml-auto mr-auto">
                    {}
                    <DatePickerDelegate flightSearchInfo={flightSearchInfo} setFlightSearchInfo={setFlightSearchInfo} showReturn={flightSearchInfo.roundTrip}/>
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
      
        <FlightDisplay/>
    
      
    </motion.div>
  );
};

export default FlightSearch
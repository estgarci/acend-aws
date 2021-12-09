import React, { useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from "framer-motion";

import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlightTravelers from './modals/FlightTravelers';
import FlightClass from './modals/FlightClass';
import FilterableInput from './modals/FlightSuggestions';

import { DateRangePicker, SingleDatePicker } from 'react-dates';
// import SingleDatePicker from '../src/components/SingleDatePicker';

import mexicanFlag from '../../img/mexico.svg'


function FlightDates(props){

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <>
            {props.showReturn ?
             <DateRangePicker
              className="mt-2"
              startDateId="startDate"
              endDateId="endDate"
              startDate={startDate}
              endDate={endDate}
              onDatesChange={({ startDate, endDate }) => {setStartDate(startDate);setEndDate(endDate)}}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => { setFocusedInput(focusedInput)}}
              numberOfMonths={2}
              keepOpenOnDateSelect
            />:
            <SingleDatePicker
              className="mt-2"
              date={startDate} // momentPropTypes.momentObj or null
              onDateChange={date => setStartDate(date)} // PropTypes.func.isRequired
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
  const [oneWay, setOneWay] = useState(true);

  const [visibleModal, setVisibleModal] = useState(null);
  

  return (
    <div id="flights-nav" className="container-sm text-nowrap header-main ">
      <Row id="topRow" className="mb-3">
        <Col xs={12} sm={6}className="text-left">
          <ButtonGroup className="roundtripBtnGroup">
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setOneWay(true)} active={oneWay === true}>Round Trip</Button>
            <Button size="sm" outline color="primary" className="w115 text-left text-sm-center" onClick={() => setOneWay(false)} active={oneWay === false}>One Way</Button>
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
                  <FontAwesomeIcon icon="calendar-alt"/>&nbsp;&nbsp;Travel date{oneWay? "s": ""}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FlightDates showReturn={oneWay}/>
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


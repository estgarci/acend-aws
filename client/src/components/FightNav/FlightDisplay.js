
import { Loading } from '../LoadingComponent';
import {Row, Col, Button} from 'reactstrap';

function RenderFlight({flight}) {

    const getNormalTime = (dateObj) => {
        //returns normal value given military time
        var hours = dateObj.getHours() ; 
        var AmOrPm = hours >= 12 ? 'pm' : 'am'; 
        hours = (hours % 12) || 12;
        var minutes = Math.floor(dateObj.getMinutes()/10) + '0' ;
        return hours + ":" + minutes + " " + AmOrPm;
    }

    var departureTime = getNormalTime(new Date(flight.scheduled_off));
    var arrivalTime = getNormalTime(new Date(flight.scheduled_in));

    return (
        <div className="container p-3 m-2 bg-white justify-content-center ">
                <Row xs={12} >
                    <Col xs={12} sm={4} className='align-self-center'>
                        <Row className="justify-content-center h5">{flight.origin.code.substring(1)}&nbsp;<svg class="DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg>&nbsp;{flight.destination.code.substring(1)}</Row>
                        <Row xs={12} className='justify-content-center'><small><Button size='sm' color='link'>Details</Button></small></Row>
                        
                    </Col>
                    <Col  sm={4} className='align-self-center'>
                        <Row className='justify-content-center h4'>{departureTime}&nbsp;&nbsp;<svg class="DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg>&nbsp;&nbsp;{arrivalTime}</Row>
                        <Row xs={12} className='justify-content-center'>Operatred by {flight.operator} </Row>
                    </Col>
                    <Col  sm={4} className='align-self-center text-center'>
                        {/* <Row className='justify-content-center h5'>Trip from</Row> */}
                        <Row className='justify-content-center h4'>$777</Row>
                        <Button className='bg-secondary'>Book flight</Button>
                    </Col>
                </Row>
            
            </div>
   
    );
}

function FlightDisplay(props) {
    //list of components
    const flights = props.flights.flights.map(flight => {
        return (
            <RenderFlight flight={flight}/>
        );
    });

   if (props.flights.isLoading) {
        return (
            <div className='container'>
                <div className='row '>
                    <Loading/>
                </div>
            </div>
        );
    }

    if (props.flights.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col header-main text-center'>
                        <h4 className='text-primary'>No flights found </h4>
                    </div>
                </div>
            </div>
        );
    }

   
    return (
        flights.length ? 
        <div id="flights-display" className='container '>
            {flights}
        </div> : 
        <></>
    );
}

export default FlightDisplay;
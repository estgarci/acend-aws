import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loginUser } from '../redux/actionCreators'

function SingleFlight({flight}) {

    const user = useSelector(state => state.auth.user)
    // const dispatch = useDispatch()

    const getNormalTime = (dateObj) => {
        //returns normal value given military time
        let hours = dateObj.getHours() ; 
        let AmOrPm = hours >= 12 ? 'pm' : 'am'; 
        hours = (hours % 12) || 12;
        let minutes = Math.floor(dateObj.getMinutes()/10) + '0' ;
        return hours + ":" + minutes + " " + AmOrPm;
    }

    let departureTime = getNormalTime(new Date(flight.scheduled_off));
    let arrivalTime = getNormalTime(new Date(flight.scheduled_in));
 
    const handleFavorite = () => {




        postFavorite(flight)    
    }

    // const deleteFavorite = () => {

    // }

    return (
        <div className="container p-3 mb-2 bg-white justify-content-center ">
            <Row xs={12} >
                <Col xs={12} sm={4} className='align-self-center'>
                    <Row className="justify-content-center h5">{flight.origin.code}&nbsp;<svg className="DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg>&nbsp;{flight.destination.code}</Row>
                    <Row xs={12} className='justify-content-center'><small><Button size='sm' color='link'>Details</Button></small></Row>
                </Col>
                <Col  sm={4} className='align-self-center'>
                    <Row className='justify-content-center h4'>{departureTime}&nbsp;&nbsp;<svg className="DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg>&nbsp;&nbsp;{arrivalTime}</Row>
                    <Row xs={12} className='justify-content-center'>Operatred by {flight.operator} </Row>
                </Col>
                <Col sm={4} className='align-self-center text-center'>
                    <Button outline color="primary" onClick={handleFavorite}><FontAwesomeIcon size="lg" icon="heart" outline/></Button>
                </Col>
            </Row>
        </div>
   
    );
}

export default SingleFlight
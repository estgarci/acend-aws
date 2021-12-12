import React, {useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import { Col, Row, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, motion } from "framer-motion";

function TravelersChild(props) {

    const [adultNum, setAdultNum] = useState(1);
    const [childNum, setChildNum] = useState(0);
    const [infanNum, setInfanNum] = useState(0);

    const decrement = (value, setter, min) => {
        if ( value > min ){
            setter(--value);
            props.setTravelers(adultNum + childNum + infanNum - 1);
        }
    }

    const increment = (value, setter, max) => {
        if (( value <= max ) && (props.travelers < max)){
            setter(++value);
            props.setTravelers(adultNum + childNum + infanNum + 1);
        }
    }
     
    return(<div id="travelers-modal" className="pb-3 pt-3 text-center">
                <div id="arrow" data-popper-arrow></div>
                <h5>Travelers</h5>
                <hr style={{width: 90+'%'}}/>
                <div className="pb-1 pr-3 pl-3 text-left">
                    <Row className="pb-2 text-right align-text-bottom">
                        <Col xs={4} className="text-left my-auto pr-0 align-text-bottom pr-4">Adults</Col>
                        
                        <Col xs={8} className="text-right pl-0">
                            <button className="select-button" onClick={() => {decrement(adultNum, setAdultNum, 1);}}><FontAwesomeIcon icon="minus" /></button>
                            <input type="submit" className="align-text-bottom" value={adultNum}/>
                            <button className="select-button" onClick={() => increment(adultNum, setAdultNum, 6)}><FontAwesomeIcon icon="plus" /></button>
                        </Col>
                    </Row>
                    <Row className="pb-2 pt-2 text-right">
                        <Col xs={4} className="text-left pr-4 my-auto">Children</Col>
                        <Col xs={8} className="text-right pl-0">
                            <button className="select-button " onClick={() => decrement(childNum, setChildNum, 0)}><FontAwesomeIcon icon="minus" /></button>
                            <input type="submit" className="align-text-bottom" value={childNum} placeholder="0"/>
                            <button className="select-button" onClick={() => increment(childNum, setChildNum, 6)}><FontAwesomeIcon icon="plus"/></button>
                        </Col>
                    </Row>
                    <Row className="pb-3 pt-2 text-right">
                        <Col xs={4} className="text-left pr-0 my-auto">Infants</Col>
                        <Col xs={8} className="text-right pl-0">
                            <button className="select-button" onClick={() => decrement(infanNum, setInfanNum, 0)}><FontAwesomeIcon icon="minus" /></button>
                            <input type="submit" className="align-text-bottom" value={infanNum} placeholder="0"/>
                            <button className="select-button" onClick={() => increment(infanNum, setInfanNum, 6)}><FontAwesomeIcon icon="plus" /></button>
                        </Col>
                    </Row>
                    <Button size="small" color="primary" className="w-100" onClick={props.handleClick}>Done</Button>
                </div>
                
            </div> )
}
function FlightTravelers(props) {
    const [travelers, setTravelers] = useState(1);
    const toggleButton = () => {

        if (props.visibleModal !== "travelers"){
            props.setVisibleModal("travelers")
        }
        else { props.setVisibleModal(null) }

        setTravelers(travelers);
    }
    // tippy animation
    const springConfig = { damping: 15, stiffness: 300 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);
    //onMount and onHide should always be defined when using a headless tippy
    function onMount() {
        opacity.set(.97)
        scale.set(1)
        
    }

    function onHide({ unmount }) {
        const cleanup = scale.onChange(value => {
            if (value <= initialScale) {
                cleanup();
                unmount();}
            });
        scale.set(initialScale);
        opacity.set(0);
    }

    return ( 
            <Tippy
                interactive={true}
                visible={props.visibleModal === "travelers"}
                animation={true}
                onMount={onMount}
                role="tooltip"
                onHide={onHide}
                render={attrs => <motion.div style={{ scale, opacity }} {...attrs} >
                                    
                                    <TravelersChild handleClick={toggleButton} setTravelers={setTravelers} travelers={travelers}/>
                                 </motion.div>}
                >
                <button onClick={toggleButton} className="btn btn-sm btn-link text-left text-sm-right dropdown-toggle travelers-button">
                    {travelers}&nbsp;{travelers === 1 ? "Traveler " : "Travelers"}
                </button>
            </Tippy>)
};
export default FlightTravelers;





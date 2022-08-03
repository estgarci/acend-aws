import React, {useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import {Button, Row, Col} from 'reactstrap';
import { useSpring, motion } from "framer-motion";

function FlightTypeChild(props) {
    //react hooks let you use state and other React features without writting a class
    const[selected, setSelected] = useState("Economy");
    const toggleSelection = (fightClass) => {
        setSelected(fightClass);
        props.setFlightClass(fightClass);
    }
    const selectButtonStyle = "type-button flightType-input pb-2 pt-2 mb-1 focused d-flex w-100 "
    
    return(<div id="flightClassModal" className="text-center">
              <Row>
                  <Col>
                    <h5>Flight Class</h5>
                    <hr style={{width: 90+'%'}}/>
                    <Button active color="white" className={(selected === "Economy") ? selectButtonStyle + "selected": selectButtonStyle} onClick={()=>toggleSelection("Economy")}>Economy</Button>
                <Button color="white" className={(selected === "Business") ? selectButtonStyle + "selected": selectButtonStyle} onClick={()=>toggleSelection("Business")}>Business</Button>
                <Button active={true} color="white" className={(selected === "Premium") ? selectButtonStyle + "selected-premium": selectButtonStyle} onClick={()=>toggleSelection("Premium")}>Premium</Button>
                  </Col>
              </Row>
              <Row className='mt-2'>
                  <Col>
                    <Button size="small" color="primary" className="w-100" onClick={props.handleClick}>Done</Button>
                  </Col>
              </Row>
            </div> )
}

function FlightClass(props) {

    const [flightClass, setFlightClass] = useState("Economy");
    const toggleButton = () => {

        if (props.visibleModal !== "flightClass"){
            props.setVisibleModal("flightClass")
        }
        else { props.setVisibleModal(null) }

        setFlightClass(flightClass);
    }
    //tippy animations
    const springConfig = { damping: 15, stiffness: 300 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);
    //onMount and onHide should always be defined when using animations on a headless tippy
    function onMount() {
        opacity.set(.965)
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
                visible={props.visibleModal === "flightClass" && 1==1}
                animation={true}
                onMount={onMount}
                onHide={onHide}
                arrow={true}
                hideOnClick={true}
                trigger='click'
                
                render={attrs => <motion.div  style={{ scale, opacity }} {...attrs} >
                                    <div id="arrow" data-popper-arrow></div>
                                    <FlightTypeChild handleClick={toggleButton} setFlightClass={setFlightClass}/>
                                 </motion.div>}
                 >
                <button onClick={toggleButton} className="btn btn-sm text-left text-sm-right btn-link dropdown-toggle travelers-button pr-0">
                    {flightClass}
                </button>
            </Tippy>)
};

export default FlightClass;
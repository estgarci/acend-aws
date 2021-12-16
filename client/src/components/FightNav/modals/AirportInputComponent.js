import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from "framer-motion";
import { baseUrl } from '../../../shared/baseUrl'

function Suggestions({onSuggestHandler, suggestions}) {
  
  const digitsRegex = new RegExp('d', "gi")
  if(suggestions.length){
    return(<div id="flightSuggestionModal" className="mr-1 ml-1 bg-white text-center">
            {suggestions.map((suggestion, i) => {
              suggestion.name = suggestion.name.replace('Airport','').replace('International', 'Int.')
              //parse data for display
              const code = (suggestion.iata_code ? suggestion.iata_code + ' - ' : '')
              const name = suggestion.name + ' - ' || ''
              const location = (suggestion.iso_region.match(digitsRegex) ? suggestion.iso_region.substr(suggestion.iso_region.indexOf("-") + 1) : suggestion.iso_country)
              var codeNameLoc = `${code} ${name} ${location}`
              if (name.length > 30){
                codeNameLoc = code + name.slice(0, 30) + '.' + location
              }
              return (<div key={i} class='suggestion' onClick={() => onSuggestHandler(suggestion.iata_code + ' - ' + suggestion.name, suggestion)}>
                        {codeNameLoc}
                      </div>)
            })}
          </div> )
  }
  else{
    return <></>
  }

}

function AirportInput(props) {
  const [airports, setAirports] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [countries, setCountries] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect( () => {

    // const myHeaders = new Headers({
    //   'x-apikey': 'AcI8LX5FloLLatSlDGLwwrq0tfWZ0AXd'
    // });


    // fetch('https://aeroapi.flightaware.com/aeroapi/airports/KLAX/flights/to/KPHX?type=Airline', {
    //     headers: myHeaders
    // }
    // )
    // .then(response => {
    //     console.log(response);
    //         if (response.ok) {
    //             console.log(response);
    //             return response;
            
    //         } else {
    //             const error = new Error(`Error ${response.status}: ${response.statusText}`);
    //             error.response = response;
    //             throw error;
    //         }
    //     },
    //     error => {
    //         const errMess = new Error(error.message);
    //         throw errMess;
    //     }
    // )



    // async function loadAirports() {
    //   const response = await axios.get(baseUrl + 'api/airports')
    //   // console.log('airports loaded', response.data)
    //   var normalAirports = response.data.filter( (airport) => (airport.type === 'large_airport' || airport.type === 'medium_airport'))
    //   normalAirports = normalAirports.filter( airport => (airport.iata_code && airport.municipality && airport.name))
      
    //   setAirports(normalAirports)
    // }
    // loadAirports()

    // async function loadCountries(){
    //   var response = await axios.get(baseUrl + 'api/countries')
    //   // console.log('countries loaded')
    //   setCountries(response.data)
    // }
    // loadCountries()

  },[])
  
  const onSuggestHandler = (text, selectedAirport) => {
    setText(text);
    props.setFlightSearchInfo((prevState) => ({...prevState, [props.direction]: selectedAirport}))
    setSuggestions([])
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

  const airportSearch = (text) => {
    const textRegex = new RegExp(`${text}`, "gi");
    //first we search the list of all props.countries, incase user wants to go to france but doesent know the name of the airports in FR
    var countryMatch = props.countries.filter(country => 
      country.englishShortName.match(textRegex));
    if(countryMatch.length){
      return props.airports.filter( airport => airport.iso_country === countryMatch[0].alpha2Code)
    }
    //then we conduct a search on airports, city and ultimatelly code 
    else{
      var matchesAirport = props.airports.filter(airport => 
        //compares to list of airports, returns list of airports
        airport.municipality.match(textRegex) ||
        airport.iata_code.match(textRegex) ||
        airport.name.match(textRegex) 
        
      );
      if (matchesAirport.length){

        return matchesAirport
      }
      else{

        return false
      }
    }
  }

  const onChangeHandler = (text) => {
    var matches = []
    if (text.length > 0){
        matches = airportSearch(text)
    } else{
      setVisible(false)
    }
    if( matches && matches.length > 3){
      setSuggestions(matches.slice(0,3))
    }
    else{
      setSuggestions(matches)
    }
    setText(text)
    if (!visible){
      setVisible(true)
    }

  }
  return ( 
          <Tippy
              trigger='click'
              interactive={true}
              visible={visible}
              animation={true}
              onMount={onMount}
              placement= 'bottom'
              role="tooltip"
              onHide={onHide}
              render={attrs => <motion.div style={{ scale, opacity }} {...attrs} >
                                  {<Suggestions suggestions={suggestions} onSuggestHandler={onSuggestHandler}/>}
                               </motion.div>}
              >
              <input type="text"
                     id="airport"
                     name="airport"
                     className='b-0'
                     placeholder="City or Airport"
                     onChange={ e => { onChangeHandler(e.target.value) } }
                     value={text}>
              </input>
          </Tippy>)
};

export default AirportInput;
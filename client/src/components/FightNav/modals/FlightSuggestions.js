import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from "framer-motion";

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
              return (<div key={i} class='suggestion' onClick={() => onSuggestHandler(suggestion.iata_code + ' - ' + suggestion.name)}>
                        {codeNameLoc}
                      </div>)
            })}
          </div> )
  }
  else{
    return <></>
  }

}

function FilterInput(props) {
  const [airports, setAirports] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [countries, setCountries] = useState([]);
  const [visible, setVisible] = useState(false);

  // const loadAirports = async() => {
  //   const response = await axios.get('http://localhost:3005/airports')
  //   console.log('airports loaded')
  //   var normalAirports = response.data.filter( (airport) => airport.type === 'large_airport' || airport.type === 'medium_airport' && airport.iata_code && airport.country)
  //   setAirports(normalAirports)
  // }

  // const loadCountries = async() => {
  //   const response = await axios.get('http://localhost:3005/countries')
  //   console.log('countries loaded')
  //   setCountries(response.data)
  // }

  useEffect( async() => {
    var response1 = await axios.get('mongodb://localhost:27017/acend/airports')
    console.log('airports loaded')
    var normalAirports = response1.data.filter( (airport) => airport.type === 'large_airport' || airport.type === 'medium_airport' && airport.iata_code && airport.country)
    setAirports(normalAirports)

    var response = await axios.get('http://localhost:3005/countries')
    console.log('countries loaded')
    setCountries(response.data)
  },[])
  
  const onSuggestHandler = (text) => {
    setText(text);
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
    //first we search the list of all countries, incase user wants to go to france but doesent know the name of the airports
    var countryMatch = countries.filter(country => 
      country.englishShortName.match(textRegex));
    if(countryMatch.length){
      return airports.filter( airport => airport.iso_country === countryMatch[0].alpha2Code)
    }
    //then we conduct a search on airports, city and ultimatelly code 
    else{
      var matchesAirport = airports.filter(airport => 
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
                      className='b-0'
                      placeholder="City or Airport"
                      onChange={ e => { onChangeHandler(e.target.value) } }
                      
                      value={text}>
              </input>
          </Tippy>)
};

export default FilterInput;

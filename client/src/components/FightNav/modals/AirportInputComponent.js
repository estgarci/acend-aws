import React, { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from "framer-motion";
import { Loading } from '../../LoadingComponent';

function Suggestions({airports, onSuggestHandler, suggestions}) {
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
              return (<div key={i} className='suggestion' onClick={() => onSuggestHandler(suggestion.iata_code + ' - ' + suggestion.name, suggestion)}>
                        {codeNameLoc}
                      </div>)
            })}
          </div> )
  }
  var airportEl = document.getElementById('airport')
  var isFocused = (document.activeElement === airportEl)
  if(airports.isLoading &&  isFocused ){
    return (<div id="flightSuggestionModal" className="bg-white"><Loading/></div>);
  }

  else{
    return (<div className="container"></div>);
  }

}

function AirportInput(props) {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [visible, setVisible] = useState(false);
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
    //using regex to perform string match
    const textRegex = new RegExp(`${text}`, "gi");
    //first we search the list of all props.countries, incase user wants to go to france but doesent know the name of the airports in FR
    var countryMatch = props.countries.countries.filter(country => 
      country.englishShortName.match(textRegex));
    if(countryMatch.length){
      return props.airports.airports.filter( airport => airport.iso_country === countryMatch[0].alpha2Code)
    }
    //then we conduct a search on airports, city and ultimatelly code 
    else{
      var matchesAirport = props.airports.airports.filter(airport => 
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


  useEffect(()=>{onChangeHandler(text)}, [props.airports.airports])
  return ( 
          <Tippy
              interactive={true}
              visible={visible}
              animation={true}
              onMount={onMount}
              placement= 'bottom'
              role="tooltip"
              onHide={onHide}
              render={attrs => <motion.div style={{ scale, opacity }} {...attrs} >
                                  {<Suggestions  airports={props.airports} suggestions={suggestions} onSuggestHandler={onSuggestHandler}/>}
                               </motion.div>}
              >
              <input type="text"
                     id="airport"
                     name="airport"
                     className='b-0'
                     placeholder="Airport, Country or city"
                     onChange={ e => { onChangeHandler(e.target.value) } }
                     value={text}>
              </input>
          </Tippy>)
};

export default AirportInput;
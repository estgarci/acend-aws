import React, { Component } from 'react';
import Select from 'react-select';

const FilterableInput = () => (
  <Select options={options} placeholder='Origin' components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} styles={customStyles}/>
)

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'red' : 'blue',
      width: '300px'
    }),
    container: () => ({
      // none of react-select's styles are passed to <Control />
      // height: '90px',
        textAlign: 'left'
    }),
    container: (provided, state) => ({
        ...provided,
        textAlign: 'left',  
    }),
    placeholder: (provided, state) => {
        const textAlign = 'center';
        return {...provided, textAlign}
    },
    control: () => ({
        // none of react-select's styles are passed to <Control />
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

export default FilterableInput;


    // ,
    // border: 'none',

    // font-size: '1.1rem',
    // font-family: 'inherit',
    // letter-spacing: 'inherit',
    // font-weight: '200',
    // text-align: 'center',

    // padding: '11px 11px 9px 11px',

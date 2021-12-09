import React, { useState} from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DateRangePicker, SingleDatePicker } from 'react-dates';
// import SingleDatePicker from '../src/components/SingleDatePicker';

import mexicanFlag from '../../img/mexico.svg'

const DisplaySearch = () => {

  return (
    <div id="flights-nav" className="container-sm text-nowrap header-main z-index-master">
      <Row className="">
        <Col lg={8} className="">
            <FontAwesomeIcon icon="plane-departure"/>&nbsp;&nbsp;&nbsp;Leaving from 
        </Col>
      </Row>  
    </div>
  );
}

// var List = React.createClass({
//     render: function(){
//       return (
//         <ul className="list-group">
//         {
//           this.props.items.map(function(item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//          }
//         </ul>
//       )  
//     }
//   });
// React.render(<FilteredList/>, document.getElementById('app'));

export default DisplaySearch
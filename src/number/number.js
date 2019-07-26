import React from 'react';
import './number.css';

function Number(props) {
    return(
        <div className="num_container">
           <div className="num_box">
            {props.no1}
           </div>
           <div className="num_box">
            {props.no2}
           </div>
           <div className="num_box">
            {props.no3}
           </div>
           <div className="num_box">
             {props.no4}
           </div>
           <div className="num_box">
              {props.no5}
           </div>
           <div className="num_box">
             {props.no6}
           </div>
        </div>
    )
}


export default Number;
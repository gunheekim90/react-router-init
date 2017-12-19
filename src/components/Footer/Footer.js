import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import Responsive from 'react-responsive';
 
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

export default class Footer extends React.Component {

  
  render() {

    return (

      <div style={{textAlign : "center"}}>

        <h2>Footer </h2>
      </div>
    
     
         
    );
  }
}



import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import Responsive from 'react-responsive';
 
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '1rem'
    };
    return (

      <div>
        <Mobile>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
             <a className="navbar-brand" href="#">투움바</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  
                  <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                  <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                  <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
                  
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
          </nav>
        </Mobile>

        <Desktop>

          <div style={{height : '70px',padding : '20px',backgroundColor : '#222'}}>
            <a style={{position : 'absolute', left : '20px', fontSize : '150%', fontWeight : '700',color : '#fff'}}>투움바</a>
            <div style={{position : 'absolute', right : '10px'}}>
                <NavLink exact to="/" activeStyle={activeStyle} style={{marginLeft : '10px'}}>Home</NavLink>
                <NavLink exact to="/about" activeStyle={activeStyle} style={{marginLeft : '10px'}}>About</NavLink>
                <NavLink to="/posts" activeStyle={activeStyle} style={{marginLeft : '10px'}}>Posts</NavLink>
                <form className="form-inline my-2 my-lg-0" style={{display : "inline",marginLeft : '10px'}}>
                  <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
          </div>
     
        </Desktop>

      </div>
    


     

    );
};

export default Menu;
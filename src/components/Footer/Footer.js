import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import Responsive from 'react-responsive';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Footer extends React.Component {

  
  render() {

    return (

      <div className={cx('footerBody','footerBody02')}>

        <h2 className={cx('footerText')}>Footer </h2>

      </div>
    
     
         
    );
  }
}


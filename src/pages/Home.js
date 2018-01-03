import React from 'react';
import Menu from '../components/Header/Menu'
import Footer from '../components/Footer/Footer'

import styles from './pageStyle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


//Input card data list up
const Home = () => {
    return (
        <div className={cx('HomeBody')}>
        	<Menu/>
        	<div className={cx('HomeInnerDiv')}>
        		<h2 style={{color : '#fff'}}>
	                홈
	            </h2>
        	</div>
        	<Footer/>
        </div>
    );
};

export default Home;
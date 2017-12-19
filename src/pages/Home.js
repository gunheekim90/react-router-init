import React from 'react';
import Menu from 'components/Header/Menu'
import Footer from 'components/Footer/Footer'


//Input card data list up
const Home = () => {
    return (
        <div style={{height : "900px"}}>
        	<Menu/>
        	<div style={{backgroundColor : '#2d2d2d', width : '100%', height : '800px'}}>
        		<h2 style={{color : '#fff'}}>
	                홈
	            </h2>
        	</div>
        	<Footer/>
            
        </div>
    );
};

export default Home;
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages'; 
import Menu from '../components/Header/Menu'
import Footer from '../components/Footer/Footer'
/*

Link 는 라우터를 가리킨다
to 는 라우터의 path를 가리킨다

*/
const Posts = ({match}) => {

    return (
        <div>
         <Menu/>
           <h2>Post List</h2> 
           <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
           <Route path={`${match.url}/:id`} component={Post}/>
           <Footer/>
        </div>
    );
};

export default Posts;
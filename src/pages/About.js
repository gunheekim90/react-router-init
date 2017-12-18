import React from 'react';
import queryString from 'query-string';
import Menu from 'components/Header/Menu'
/*
->쿼리를 해석하기 위해선, 라이브러리를 설치해주세요. 자체적으로 구현하는 방법도 있겠지만 라이브러리를 사용하는것이 훨씬 간편합니다.

*/

const About = ({match,location}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    console.log(match);

    return (
        <div>
        	<Menu/>
            <h2>About {match.params.name}</h2>
        </div>
    );
};

export default About;
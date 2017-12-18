import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from 'pages';

/*
먼저, App 컴포넌트를 만들어주세요. 어떤 주소로왔을때 무엇을 보여줄 지, 나중에 여기서 정의를 하도록 하겠습니다. 지금은 일단 비어있는 컴포넌트를 만드세요.

history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.

location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.

->쿼리를 해석하기 위해선, 라이브러리를 설치해주세요. 자체적으로 구현하는 방법도 있겠지만 라이브러리를 사용하는것이 훨씬 간편합니다.

match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

앱 내에서 다른 라우트로 이동 할 때에는, 일반 <a href...>foo</a> 형식으로 하면 안됩니다. 왜냐하면, 이렇게하면 새로고침을 해버리기 때문이지요.

새로고침을 하기 위해선, 리액트 라우터에 있는 Link 컴포넌트를 사용해야합니다. 이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해줍니다.

*/
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/about/:name" component={About}/>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;
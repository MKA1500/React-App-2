import React, {Component} from 'react';
import './Assets/css/scss/default.css';

import Header from './components/headerComponent/header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App;

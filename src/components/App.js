import React, {Component} from 'react';
import 'Common/style/common.scss';
import './App.scss';
import Monkey from 'Images/monkey.jpg';
import Random from 'Images/random.png';

class App extends Component {
    render() {
        return (
            <div>
                <div>Sandbox</div>
                <img src={Monkey} alt="Monkey"/>
                <img src={Random} alt="Random"/>
            </div>
        );
    }
}

export default App;
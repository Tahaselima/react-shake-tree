import React, {Component} from 'react';
import './Style/App.scss';

import {Provider} from 'react-redux';
import {store} from './Utils/store';
import Basket from "./Components/Basket/Basket";
import AppleTree from "./Components/AppleTree/AppleTree";


class App extends Component {


    render() {
        let apples = [];
        let length = Math.random() * 5 + 10;
        for(let i = 0; i < length; i ++) {
            apples.push({
                top: (Math.random() * 40 + 12.5) + '%',
                left: (Math.random() * 50 + 22.5) + '%'
            });
        }
        return (
            <Provider store={store}>
                <div className="App">
                    <AppleTree apples={apples} />
                    <Basket/>
                </div>
            </Provider>
        );
    }
}

export default App;

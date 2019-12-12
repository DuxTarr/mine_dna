import React, {Component} from 'react';
import './menu.scss';

import ReactDOM from 'react-dom';
import TopList from "../top-list/top-list";
import Steve from "../steve/steve";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="item top-list">Top list</div>
                <div className="item top-my-genome">My genome</div>
                <div className="item top-sand-box">Sand box</div>
            </div>
        );
    }

    showTopList() {
        ReactDOM.render(<TopList />, document.getElementById('main'));
    }
    showMyGenome() {
        ReactDOM.render(<Steve />, document.getElementById('main'));
    }
}

export default Menu;

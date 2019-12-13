import React, {Component} from 'react';
import './menu.scss';

import ReactDOM from 'react-dom';
import TopList from "../top-list/top-list";
import Steve from "../steve/steve";
import Sandbox from "../sandbox/sandbox";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="item top-list-button" onClick={this.showTopList}>Top list</div>
                <div className="item top-my-genome-button" onClick={this.showMyGenome}>My genome</div>
                <div className="item top-sand-box-button" onClick={this.showSandbox}>Sand box</div>
            </div>
        );
    }

    showTopList() {
        ReactDOM.render(<TopList />, document.getElementById('main'));
    }
    showMyGenome() {
        ReactDOM.render(<Steve />, document.getElementById('main'));
    }
    showSandbox() {
        ReactDOM.render(<Sandbox />, document.getElementById('main'));
    }
}

export default Menu;

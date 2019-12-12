import React, {Component} from 'react';
import './top-list.scss';

import ReactDOM from 'react-dom';

class TopList extends Component {
    render() {
        return (
            <div className="top-list">
                <div className="item">User 1</div>
                <div className="item">User 2</div>
                <div className="item">User 3</div>
            </div>
        );
    }
}

export default TopList;

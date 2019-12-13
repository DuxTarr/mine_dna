import React, {Component} from 'react';
import './sandbox.scss';
import Steve from "../steve/steve";
import Hash from "../library/hash";

import ReactDOM from 'react-dom';

class Sandbox extends Component {
    render() {
        return (
            <div className="sandbox">
                <div className="genome-test">
                    0x <input type="text" name="genome" onChange={this.validateGenome}/>
                </div>
                <Steve/>
            </div>
        );
    }


    validateGenome = (event) => {
        event.target.value = Hash.convertToValid(event.target.value);
    }
}

export default Sandbox;

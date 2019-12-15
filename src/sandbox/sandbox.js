import React, {Component} from 'react';
import './sandbox.scss';
import Steve from "../steve/steve";
import Hash from "../library/hash";
import UserInfo from "../library/user-info";
import GenomeProcessor from "../library/genome-processor";

import ReactDOM from 'react-dom';

class Sandbox extends Component {
    render() {
        let defaultAppearance = {
            skin: "00",
            eyes: "00",
            hair: "00"
        };
        return (
            <div className="sandbox">
                <div className="row">
                    <div className="col-md-4">
                        <span className="label">Username:</span>
                    </div>
                    <div className="col-md-8">
                        <input type="text" name="genome" onChange={this.changeGenome}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span className="label">Appearance:</span>
                    </div>
                    <div className="col-md-8">
                        0x<span id="genome-preview"></span><br/>
                    </div>
                </div>

                <div id="steve-preview">
                    <Steve appearance = {defaultAppearance}/>
                </div>

            </div>
        );
    }


    changeGenome = (event) => {
        let username = UserInfo.convertToValid(event.target.value).substr(0,4);
        event.target.value = username;
        let hash = Hash.getHash(username);
        ReactDOM.render(hash, document.getElementById('genome-preview'));
        let changedAppearance = GenomeProcessor.getInfoByCode(hash);
        console.log(changedAppearance);
        ReactDOM.render(<Steve appearance = {changedAppearance}/>, document.getElementById('steve-preview'));
    }
}

export default Sandbox;

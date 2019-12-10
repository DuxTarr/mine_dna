import React, {Component} from 'react';
import './steve.scss';
import './skin.scss';
import ReactDOM from 'react-dom';

class Steve extends Component {
    render() {
        return (
            <div className="person">
                {/*HEAD BLOCK*/}
                <div className="head-wrapper">
                    <div className="head skin-part s05"></div>
                    <div className="head hair-part h04"></div>
                    <div className="head eye-part y05"></div>
                </div>
                {/*LEFT HAND BLOCK*/}
                <div className="l-hand-wrapper">
                    <div className="l-hand skin-part s05"></div>
                    <div className="l-hand jacket-part j03"></div>
                </div>

                {/*RIGHT HAND BLOCK*/}
                <div className="r-hand-wrapper">
                    <div className="r-hand skin-part s05"></div>
                    <div className="r-hand jacket-part j03"></div>
                </div>

                {/*BODY BLOCK*/}
                <div className="body-wrapper">
                    <div className="body skin-part s05"></div>
                    <div className="body jacket-part j03"></div>
                </div>

                {/*LEFT LEG BLOCK*/}
                <div className="l-leg-wrapper">
                    <div className="l-leg skin-part s05"></div>
                    <div className="l-leg pants-part p02"></div>
                </div>

                {/*RIGHT LEG BLOCK*/}
                <div className="r-leg-wrapper">
                    <div className="r-leg skin-part s05"></div>
                    <div className="r-leg pants-part p02"></div>
                </div>
            </div>
        );
    }
}

export default Steve;

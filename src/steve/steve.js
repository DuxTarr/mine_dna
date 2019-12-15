import React, {Component} from 'react';
import './steve.scss';
import './skin.scss';
import ReactDOM from 'react-dom';

class Steve extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="person">
                {/*HEAD BLOCK*/}
                <div className="head-wrapper">
                    <div className={"head skin-part s" + this.props.appearance.skin}></div>
                    <div className={"head hair-part h" + this.props.appearance.hair}></div>
                    <div className={"head eye-part y" + this.props.appearance.eyes}></div>
                </div>
                {/*LEFT HAND BLOCK*/}
                <div className="l-hand-wrapper">
                    <div className={"l-hand skin-part s" + this.props.appearance.skin}></div>
                    <div className={"l-hand jacket-part j" + this.props.appearance.jacket}></div>
                </div>

                {/*RIGHT HAND BLOCK*/}
                <div className="r-hand-wrapper">
                    <div className={"r-hand skin-part s" + this.props.appearance.skin}></div>
                    <div className={"r-hand jacket-part j" + this.props.appearance.jacket}></div>
                </div>

                {/*BODY BLOCK*/}
                <div className="body-wrapper">
                    <div className={"body skin-part s" + this.props.appearance.skin}></div>
                    <div className={"body jacket-part j" + this.props.appearance.jacket}></div>
                </div>

                {/*LEFT LEG BLOCK*/}
                <div className="l-leg-wrapper">
                    <div className={"l-leg skin-part s" + this.props.appearance.skin}></div>
                    <div className={"l-leg pants-part p" + this.props.appearance.pants}></div>
                </div>

                {/*RIGHT LEG BLOCK*/}
                <div className="r-leg-wrapper">
                    <div className={"r-leg skin-part s" + this.props.appearance.skin}></div>
                    <div className={"r-leg pants-part p" + this.props.appearance.pants}></div>
                </div>
            </div>
        );
    }
}

export default Steve;

import React from "react";
import Toggler from './Toggler.js';
import './style.css';

class Scene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLight: true
        }
    }

    toggleScene() {
        this.setState({
            isLight: !this.state.isLight
        })
    }

    render() {
        const {isLight} = this.state;
        return (
            <div className={isLight === true ? 'scene-on' : 'scene-off'}>
                <Toggler changeParentState={() => {this.toggleScene()}} />
            </div>
        )
    }
}

export default Scene;

/*

Parent -> Child - props
Child -> Parent - callback

*/
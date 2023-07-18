import React from "react";

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }
    }

    clickHandler() {
        this.setState({
            isOn: !this.state.isOn
        });
    }

    render() {
        return (
            <button onClick={() => {this.clickHandler()}}>{this.state.isOn ? 'On' : 'Off'}</button>
        )
    }
}

export default Toggler;
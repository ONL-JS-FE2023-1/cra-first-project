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
        this.props.changeParentState();
    }

    render() {
        return (
            <button onClick={() => {this.clickHandler()}}>{this.state.isOn ? 'Off' : 'On'}</button>
        )
    }
}

export default Toggler;
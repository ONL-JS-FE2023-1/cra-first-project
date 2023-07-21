import React from "react";
import HelloForm from "./HelloForm";

class HelloParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Anonym'
        }
    }

    getStateFromChild = (username) => {
        this.setState({
            name: username
        })
    }

    render() {
        const {name} = this.state;
        return (
            <>
                <HelloForm sendUsernameToParent={this.getStateFromChild} />
                <p>Helo {name}</p>
            </>
        )
    }
}

export default HelloParent;
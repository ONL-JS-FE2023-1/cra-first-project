import React from "react";
import Aloha from '../Aloha/Aloha.js'

class AlohaDashboard extends React.Component {
    render() {
        return (
            <>
                <Aloha name="Alex" />
                <Aloha name="John" />
                <Aloha name="Jane" />
                <Aloha name="Masha" />
            </>
        )
    }
}

export default AlohaDashboard;
import React from "react";
import Tree from './Tree/Tree.js';
import { ThemeContext } from "../contexts/themeContext";
import CONSTANTS from '../constants';
import { UserContext } from '../contexts/userContext'
const { THEMES } = CONSTANTS;


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: THEMES.LIGHT,
            user: {
                firstName: 'John',
                lastName: 'Doe'
            }
        }
    }


    render() {
        const { user, theme } = this.state;
        return (
            <UserContext.Provider value={{user}}>
                <ThemeContext.Provider value={{theme}}>
                    <Tree />
                </ThemeContext.Provider>
            </UserContext.Provider>
        )
    }
}

export default App;
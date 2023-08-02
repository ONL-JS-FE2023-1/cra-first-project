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
                lastName: 'Doe',
                avatar: 'https://media.istockphoto.com/id/1322277517/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B8%D0%BA%D0%B0-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B3%D0%BE%D1%80%D0%B0%D1%85-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%96-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=2048x2048&w=is&k=20&c=MVLrlWebyQfClCwr0GHonZYVu4Sdl_rTWIA0iTesaao='
            }
        }
    }

    logOut = () => {
        this.setState({
            user: {}
        })
    }

    setTheme = (theme) => {
        this.setState({
            theme
        })
    }


    render() {
        const { user, theme } = this.state;
        return (
            <UserContext.Provider value={{ user, logOut: this.logOut }}>
                <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
                    <Tree />
                </ThemeContext.Provider>
            </UserContext.Provider>
        )
    }
}

export default App;
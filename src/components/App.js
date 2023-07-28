import React from "react";
import TreeWithTheme from './Tree/Tree';
import { UserContext } from '../contexts/userContext';
import { ThemeContext } from '../contexts/themeContext';
import CONSTANTS from "../constants";
const {THEMES} = CONSTANTS;


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek='
            },
            theme: THEMES.LIGHT
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
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={{
                theme,
                setTheme: this.setTheme
            }}>
                <UserContext.Provider value={{
                    user,
                    logOut: this.logOut
                }}>
                    <TreeWithTheme />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

export default App;
import { ThemeContext } from "../contexts/themeContext"

export const withTheme = (Component) => (props) => { // High Order Component, HOC
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => {
                return <Component theme={theme} setTheme={setTheme} {...props} />
            }}
        </ThemeContext.Consumer>
    )
}
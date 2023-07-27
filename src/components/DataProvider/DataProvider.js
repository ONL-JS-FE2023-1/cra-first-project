import React, { Component } from 'react';

/*

+1. Компонента йде за даними
+2. Компонента отримує дані і кладе їх в стейт
+3. Компонента ділиться даними з кимось, хто знає як їх відображати

*/

class DataProvider extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        this.props.children[0]() // MAXIMUM ATTENTION!!!
        .then((data) => {
            this.setState({
                data
            })
        })
        .catch((error) => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }
    
    render() {
        return this.props.children[1](this.state); // MAXIMUM ATTENTION
    }
}

export default DataProvider;
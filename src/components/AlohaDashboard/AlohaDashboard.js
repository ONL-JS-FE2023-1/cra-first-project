import React from "react";
import Aloha from '../Aloha/Aloha.js'

class AlohaDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersArray: [
                {
                    firstName: 'Tony',
                    lastName: 'Stark'
                },
                {
                    firstName: 'Bruce',
                    lastName: 'Brenner'
                },
                {
                    firstName: 'Thor',
                    lastName: 'Odinson'
                },
                {
                    firstName: 'Peter',
                    lastName: 'Parker'
                },
                {
                    firstName: 'Natasha',
                    lastName: 'Romanof'
                }
            ]
        }
    }

    sortUsers() {
        // 1 дія: залізаємо в стейт і дістаємо звідти масив юзерів (оригінальний)
        const {usersArray} = this.state;
        // 2 дія: робимо копію оригінального масиву
        const newArray = [...usersArray];
        // 3 дія: проводимо сортування в копії масиву
        newArray.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
        // 4 дія: робимо setState копії масиву, яку ми відсортували
        this.setState({
            usersArray: newArray
        })
    }

    userToAloha() {
        const {usersArray} = this.state;
        return usersArray.map((user) => <Aloha name={user.firstName} lastName={user.lastName} />)
    }

    render() {
        return (
            <>
                <button onClick={() => {this.sortUsers()}}>Sort!</button>
                {this.userToAloha()}
            </>
        )
    }
}

export default AlohaDashboard;
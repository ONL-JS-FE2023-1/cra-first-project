import React from "react";
import Aloha from '../Aloha/Aloha.js'

class AlohaDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersArray: [
                {
                    id: 1,
                    firstName: 'Tony',
                    lastName: 'Stark'
                },
                {
                    id: 2,
                    firstName: 'Bruce',
                    lastName: 'Brenner'
                },
                {
                    id: 3,
                    firstName: 'Thor',
                    lastName: 'Odinson'
                },
                {
                    id: 4,
                    firstName: 'Peter',
                    lastName: 'Parker'
                },
                {
                    id: 5,
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
        return usersArray.map((user) => <Aloha key={user.id} name={user.firstName} lastName={user.lastName} />)
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

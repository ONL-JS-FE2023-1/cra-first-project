import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
        }
    }

    componentDidMount() {
        getUsers(this.state.userCount).then((data) => {
            const { results } = data;
            this.setState({
                users: results
            })
        });
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0
            ?
            filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
            :
            users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    handleSearch = ({ target: { value } }) => {
        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(value === '') {
            this.setState({
                filteredUsers: []
            })
        }

        // 2
        // Фільтруємо по прізвищу
        const { users } = this.state;

        const searchValue = value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1)

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            //filteredUsers: filteredUsers
            // =
            filteredUsers
        })
    }

    setUserCount = ({target: {value}}) => {
        this.setState({
            userCount: value
        })
    }

    loadUsers = () => {
        getUsers(this.state.userCount).then((data) => {
            const { results } = data;
            this.setState({
                users: results
            })
        });
    }



    render() {
        const { users } = this.state;
        return (
            <>
                <h1>User List</h1>

                <label>
                    Type count users
                    <input type='number' min={1} max={100} onChange={this.setUserCount} />
                </label>
                <button onClick={this.loadUsers}>Load users</button>

                <label>
                    Search by last name:
                    <input type='text' onChange={this.handleSearch} />
                </label>

                <section className="card-container">
                    {users.length > 0 ? this.renderUsers() : <h2>Users is loading!</h2>}
                </section>
            </>
        )
    }
}

export default UserList;

/*

ДЗ.
1. Досконально розберіть як працює код.
2*. Провести оптимізацію loadUsers та componnetDidMount // якось позбутися однакового коду
3**. Реалізуйте пошук за email
4****. Подумайте, як можна реалізувати універсальний універсальний інпут пошуку, який буде шукати за email і прізвищем.
Або, можливо, спробуйте реалізувати інпут, який буде шукати одночасно і за email, прізвищем і за іменем
(4 завдання, на мою думку, виконувати немає необхідності)
*/
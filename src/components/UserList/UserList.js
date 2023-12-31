import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import HashLoader from "react-spinners/HashLoader";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100,
            isLoading: true,
            error: null,
            page: 1
        }
    }

    componentDidMount() {
        const {userCount, page} = this.state;
        this.loadUsers(userCount, page);
    }

    componentDidUpdate(prevProps, prevState) {
        const {userCount, page} = this.state;
        if(prevState.page !== page) {
            this.loadUsers(userCount, page);
        }
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
        if (value === '') {
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

    prevBtnHandler = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    nextBtnHandler = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    setUserCount = ({ target: { value } }) => {
        this.setState({
            userCount: value
        })
    }

    loadUsers = (userCount, page) => {
        getUsers(userCount, page)
            .then((data) => {
                const { results } = data;
                this.setState({
                    users: results
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
            });
    }



    render() {
        const { users, isLoading, error } = this.state;
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
                    {isLoading && <HashLoader
                        size={500}
                        color="rgba(137, 30, 30, 1)"
                        cssOverride={{ margin: "0 auto" }} />
                    }
                    {error && <h2 style={{ backgroundColor: 'red', color: 'white' }}>{error.message}</h2>}
                    <button onClick={this.prevBtnHandler}>Previous page</button>
                    <button onClick={this.nextBtnHandler}>Next page</button>
                    {users.length > 0 ? this.renderUsers() : null}
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
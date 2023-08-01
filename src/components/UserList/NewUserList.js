import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import HashLoader from "react-spinners/HashLoader";

const NewUserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userCount, setUserCount] = useState(100);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const loadUsers = (usersCount, page) => { // функція, яка робить запит на API і оброблює відповідь
        getUsers(usersCount, page)
            .then((data) => {
                const { results } = data;
                setUsers(results)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(() => {
        loadUsers(userCount, page);
    }, [page]);

    const renderUsers = () => {
        return filteredUsers.length > 0
            ?
            filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
            :
            users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    const handleSearch = ({ target: { value } }) => {
        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if (value === '') {
            setFilteredUsers([]);
        }

        // 2
        // Фільтруємо по прізвищу

        const searchValue = value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1)

        // 3
        // кладемо в стейт відфільтрованих юзерів
        setFilteredUsers(filteredUsers);
    }

    const prevBtnHandler = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const nextBtnHandler = () => {
        setPage(page + 1);
    }

    // setUserCount з класової компоненти ми тут робити не будемо
    // замість цього коду, зробимо виклик setUserCount з JSX 

    return (
        <>
                <h1>User List</h1>

                <label>
                    Type count users
                    <input type='number' min={1} max={100} onChange={({ target: { value } }) => setUserCount(value)} />
                </label>
                <button onClick={() => loadUsers(userCount, page)}>Load users</button>

                <label>
                    Search by last name:
                    <input type='text' onChange={handleSearch} />
                </label>

                <section className="card-container">
                    {isLoading && <HashLoader
                        size={500}
                        color="rgba(137, 30, 30, 1)"
                        cssOverride={{ margin: "0 auto" }} />
                    }
                    {error && <h2 style={{ backgroundColor: 'red', color: 'white' }}>{error.message}</h2>}
                    <button onClick={prevBtnHandler}>Previous page</button>
                    <button onClick={nextBtnHandler}>Next page</button>
                    {users.length > 0 ? renderUsers() : null}
                </section>
            </>
    );
}

export default NewUserList;

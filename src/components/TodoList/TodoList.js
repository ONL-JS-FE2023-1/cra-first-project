import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm/TodoForm";
// import './style.css';
import styles from './style.module.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                {
                    id: 1,
                    text: "go to party"
                },
                {
                    id: 2,
                    text: "meet friends"
                },
                {
                    id: 3,
                    text: "have a walk"
                }
            ]
        }
    }

    removeTask(taskIDtoRemove) {
        const { todoList } = this.state;
        const filteredArray = todoList.filter((task) => task.id !== taskIDtoRemove);
        this.setState({
            todoList: filteredArray
        });
    }

    renderLi() {
        const { todoList } = this.state;
        return todoList.map((task) => 
        <TodoItem key={task.id} text={task.text} id={task.id} delCallback={(id) => this.removeTask(id)} />
        )
    }

    formHandler= (text) => {
        const {todoList} = this.state;

        const newObj = {
            id: todoList.length + 1,
            text
        }

        // Задача: додати до старого масиву новий об'єкт завдання
        const newArr = [...todoList, newObj];
        this.setState({
            todoList: newArr
        })
    }

    render() {
        return (
            <>
                <h1>TODO LIST</h1>

                <TodoForm sendData={this.formHandler} />

                <ul className={styles.container}>
                    {this.renderLi()}
                </ul>
            </>
        )
    }
}

export default TodoList;
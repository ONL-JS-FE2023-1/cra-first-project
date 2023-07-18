import React from "react";

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
        const {todoList} = this.state;
        const filteredArray = todoList.filter((task) => task.id !== taskIDtoRemove);
        this.setState({
            todoList: filteredArray
        });
    }

    renderLi() {
        const { todoList } = this.state;
        return todoList.map((task) => <li key={task.id}>
            {task.text}
            <button onClick={() => {this.removeTask(task.id)}}>X</button>
            </li>)
    }

    render() {
        return (
            <>
                <h1>TODO LIST</h1>

                <ul>
                    {this.renderLi()}
                </ul>
            </>
        )
    }
}

export default TodoList;

/*


В кожній li зробити кнопку, за натисненням на яку цей елемент списку має зникунти
(тобто оновити стейт таким чином, щоб зник об'єкт в масиві, на кнопку видалення якого ми натиснули)

*/
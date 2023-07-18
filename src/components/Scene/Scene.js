import React from "react";
import Toggler from './Toggler.js';
import './style.css';

class Scene extends React.Component {
    render() {
        return (
            <div className="scene-on">
                <Toggler />
            </div>
        )
    }
}

export default Scene;

/*

Зробіть так, щоб при кліці на button в компоненті Toggler текст кнопки змінювався

Якщо текст кнопки в момент натиснення був On -> Off
Якщо текст кнопки в момент натиснення був Off -> On

Підказка. Працюйте із стейтом
*/
import FlexContainer from "./FlexContainer/FlexContainer";


function App() {
    return (
        <FlexContainer flexDirection='row' justifyContent='center' alignItems='stretch'>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </FlexContainer>
    )
}

export default App;

/*

Задача: створити різні теми для сайту

1. Робите стильовий модуль для App.js
1.1 Прописуєте стилі для темної версії вашого додатку (робите клас)
Наприклад,
.dark-theme {
    background-color: black,
    color: white
}

2. Заімпортувати стильовий модуль, який ви зробили в компоненту App
3. Переробити App на класову компоненту (для отримання стейту)
4. Прописуєте конструктор -> стейт
4.1 Створити поле isDarkTheme (логічне поле), за замовченням false

5. В компоненті App ви створюєте елемент-обгортку, в яку всі елементи сторінки, які рендерите
6. Обгортца дайте той чи інший клас, в залежності від значення стейту isDarkTheme
cx({
    styles['dark-theme']: this.state.isDarkTheme === true
})

7. Зробити кнопку-перемикач, яка буде інвертувати значення стейту isDarkTheme

НЕ РЕКОМЕНДУЮ ВИКОНУВАТИ ЦЕ ЗАВДАННЯ

*/
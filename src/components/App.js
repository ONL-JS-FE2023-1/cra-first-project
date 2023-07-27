import DataProvider from "./DataProvider/DataProvider";

function App() {
    return (
        <>
            <DataProvider>
                {() => {
                    return fetch('./phones.json')
                        .then((response) => response.json());
                }}

                {(state) => {
                    const { data, isLoading, error } = state;
                    return (
                        <>
                            {isLoading && <div>Loading....</div>}
                            {error && <div>Error happening: {error.message}</div>}
                            <ul>
                                {data.map((data) =>
                                    <li key={`${Date.now()} ${data.brand} ${data.model}`}>{data.brand} - {data.model}. Price: {data.price}</li>
                                )}
                            </ul>
                        </>
                    );
                }}
            </DataProvider>

        </>
    )
}

export default App;

/*

ДЗ.
Відобразіть поруч з компонентою телефонів компоненту телевізорів
Зробіть так, щоб у компоненті телевізорів був нумерований список
Використовуйте реалізований паттерн рендер-пропси (DataProvider)

*/
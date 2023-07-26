


function App() {
    return (
        <>
            {/* window.close() - тестувати цей метод у новій вкладці */}
            <button onClick={() => {window.close()}}>Close</button>
            <button onClick={() => {window.open('https://github.com/')}}>Open</button>
        </>
    )
}

export default App;
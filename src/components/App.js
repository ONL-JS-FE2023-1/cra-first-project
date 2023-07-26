import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            {/* assign - просто завантажує нову сторінку */}
            <button onClick={() => { window.location.assign('https://developer.mozilla.org') }}>Assign</button>
            <button onClick={() => { window.location.reload() }}>Reload</button>
            {/* replace - завантажує нову сторінку, при тому до попередньої ми вже повернутися не можемо */}
            <button onClick={() => { window.location.replace('https://github.com/') }}>Replace</button>

            <p>Lorem ipsum dolor sit amet</p>
            <button
                onClick={() => {
                    window.navigator.clipboard.writeText('Lorem ipsum dolor sit amet');
                    toast.success('Copied to clipboard');
                }}
            >Click to copy text</button>
        </>
    )
}

export default App;
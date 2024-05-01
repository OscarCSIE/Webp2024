import logo from './logo.svg';
import './App.css';
import cgu_login from './cgu_login';

function App() {
    return (
    <div className="App">
        <div>
            {cgu_login()}
        </div>
    </div>
    );
}

export default App;
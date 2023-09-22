import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div className="bg-primary-black overflow-hidden">
    <div className="App">
    <>
    <Navbar />
    <Home />
    </>
    </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <h1>App Component</h1>
     </div>
     <div className="content">
      <Home/>
     </div>
    </div>
  );
}

export default App;

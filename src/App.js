// import LandingLogin from './components/LandingLogin'
import routes from './routes';
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
     {routes}
    </div>
  );
}

export default App;

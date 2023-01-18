import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav/>
      <main className="container">
        <div className='row'>
        <Main/>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;

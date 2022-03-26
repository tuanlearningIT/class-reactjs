import logo from './logo.svg';
import './App.scss';
import Mycomponent from './examples/Mycomponent';
import ListTodos from './Todos/listtodo';
import './Todos/listtodo.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './examples/Home';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import ListUser from './User/ListUser';
import DetailUser from './User/detailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todos">
              <ListTodos />
            </Route>
            <Route path="/About">
              <Mycomponent />
            </Route>
            <Route path="/User" exact>
              <ListUser />
            </Route>
            <Route path="/User/:id" >
              <DetailUser />
            </Route>
          </Switch>
        </header>
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
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home, About } from './views'

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li id='menu1'>
              <Link id='home' to="/">Home</Link>
            </li>
            <li id='menu2'>
              <Link id='about' to="/about">About</Link>
            </li>
            <li id='menu3'>
              <Link id='users' to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

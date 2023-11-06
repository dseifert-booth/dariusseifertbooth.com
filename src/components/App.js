import '../css/App.css';

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="Header">
          <ul>
              <Link to="/about">About Me</Link>
              <Link to="/">DSB</Link>
              <Link to="/contact">Contact Me</Link>
          </ul>
      </nav>

      <div className="InnerBody">
        <Outlet />
      </div>

    </div>
  );
}

export default App;

import '../css/Header.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import InnerBody from './InnerBody';
import Contact from './Contact';

function Header() {
    return (
        <Router>
            <div className="Header">
                <ul>
                    <Link to="/about">About Me</Link>
                    <Link href="/">DSB</Link>
                    <Link href="/contact">Contact Me</Link>
                </ul>

                <Routes>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <InnerBody/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Routes>
            </div>
      </Router>
    );
  }
  
  export default Header;
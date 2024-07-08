import Homepage from "./Homepage";
import About from "./About";
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
function Simplereactapp() {
    return(
        
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/about">About</Link></li>    
                </ul>
            </nav>

         <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/about" Component={About} />
            </Routes>
        </Router>
    
    )
}
export default Simplereactapp;
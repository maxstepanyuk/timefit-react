import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav-bar"><ul>
            <li><Link to="/">landing</Link></li>
            <li><Link to="/workouts">workouts</Link></li>
            <li><Link to="/workout">new workout</Link></li>
            <li><Link to="/workout/123">view workout 123</Link></li>
            <li><Link to="/workout/123/edit">edit workout 123</Link></li>
            <li><Link to="/workout/123/stopwatch">begin workout 123</Link></li>
        </ul></nav>
    )
}

export default NavBar
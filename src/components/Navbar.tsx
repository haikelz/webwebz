import { FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="/" className="nav__logo">Harisawa</a>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <div className="nav__close" id="nav-close">
                            <FaTimes />
                        </div>

                        <ul className="nav__list">
                            <li className="nav__item"><Link to='/' className="nav__link active">Home</Link></li>
                            <li className="nav__item"><Link to='/about' className="nav__link">About</Link></li>
                            <li className="nav__item"><Link to='/skills' className="nav__link">Skills</Link></li>
                            <li className="nav__item"><Link to='/works' className="nav__link">Works</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;

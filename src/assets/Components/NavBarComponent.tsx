import logo from '../../../public/images/logo.svg';
import '../../NavBarStyles.css';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <section className="container mt-5">
                <a className="navbar-brand">
                    <img src={logo} alt="" />
                </a>
                <section className="d-flex flex-row">
                    <ul className="d-flex flex-row align-items-center justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                    </ul>
                </section>
            </section>
        </nav>
    );
}

export default NavBar;
import logo from '/images/logo.svg';
import '../../NavBarStyles.css';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <section className="container mt-lg-5 p-0">
                <a className="navbar-brand">
                    <img src={logo} alt="" />
                </a>
                <section className="d-flex flex-row justify-content-end navbar-container-block">
                    <ul className="d-flex flex-row align-items-center justify-content-between navbar-list-principal">
                        <li className="nav-item p-0 text-right">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item p-0 text-right">
                            <a className="nav-link" href="#">New</a>
                        </li>
                        <li className="nav-item p-0 text-right">
                            <a className="nav-link" href="#">Popular</a>
                        </li>
                        <li className="nav-item p-0 text-right">
                            <a className="nav-link" href="#">Trending</a>
                        </li>
                        <li className="nav-item p-0 text-right">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                    </ul>
                </section>
            </section>
        </nav>
    );
}

export default NavBar;
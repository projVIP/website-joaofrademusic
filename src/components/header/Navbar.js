function Navbar(props) {
    return (
        <nav className="" id="navbar">
            <div className="custom-container">
                <a className="logo-wrapper" href={props.logoSettings.logoLink} title={props.logoSettings.logoTitle}>
                    <img src={props.logoSettings.logoImage} alt={props.logoSettings.logoAlt} />
                </a>
                <ul className="nav-list">
                    {props.navbar.map((elem, index) => {
                        return (
                            <li className="nav-li">
                                <a {...elem.navLinkSettings}>{elem.navLinkContent}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

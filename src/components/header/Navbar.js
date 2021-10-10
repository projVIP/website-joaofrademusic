import logoImage from '../../assets/svg/logo.svg';
import { useContext } from 'react';
import { DataContext } from '../../scripts/Context';

function Navbar(props) {
    const data = useContext(DataContext);

    return (
        <nav className="" id="navbar">
            <div className="custom-container">
                <a className="logo-wrapper" href={data.logo.logoLink} title={data.logo.logoTitle}>
                    <img src={logoImage} alt={data.logo.logoAlt} />
                </a>
                <ul className="nav-list">
                    {data.navbar.map((elem, index) => {
                        return (
                            <li className="nav-li" key={index}>
                                <a onClick={props.linkOnClick} {...elem.navLinkSettings}>{elem.navLinkContent}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
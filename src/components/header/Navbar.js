import logoImage from '../../assets/svg/logo.svg';
import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import { Drawer } from '@material-ui/core';

function Navbar(props) {
    const data = useContext(DataContext);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <nav className="" id="navbar">
            <div className="custom-container">
                <a className="logo-wrapper" href={data.logo.logoLink} title={data.logo.logoTitle}>
                    <img src={logoImage} alt={data.logo.logoAlt} />
                </a>
                <ul className="nav-list desktop-nav">
                    {data.navbar.map((elem, index) => {
                        return (
                            <li className="nav-li" key={index}>
                                <a onClick={props.linkOnClick} {...elem.navLinkSettings}>{elem.navLinkContent}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className="mobile-nav">
                    <a className="open-drawer-btn" onClick={() => setDrawerOpen(true)}><span class="fas fa-bars"></span></a>

                    <Drawer anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                        <ul className="nav-list">
                            {data.navbar.map((elem, index) => {
                                return (
                                    <li className="nav-li" key={index}>
                                        <a onClick={props.linkOnClick} {...elem.navLinkSettings}>{elem.navLinkContent}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
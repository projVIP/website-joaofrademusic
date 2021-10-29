import logoImage from '../../assets/svg/logo.svg';
import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import { Drawer, InputLabel, MenuItem, Select } from '@material-ui/core';
import TranslateIcon from '@mui/icons-material/Translate';

function Navbar(props) {
    const data = useContext(DataContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [lang, setLang] = useState('');

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

                <div className="language-wrapper">
                    <Select
                        id="lang-select"
                        value={lang}
                        onChange={event => setLang(event.target.value)}
                        displayEmpty={true}
                        renderValue={
                            lang !== "" ? undefined : () => <TranslateIcon></TranslateIcon>
                          }
                    >
                        <MenuItem value={10}>PT</MenuItem>
                        <MenuItem value={20}>ES</MenuItem>
                        <MenuItem value={30}>EN</MenuItem>
                    </Select>
                </div>

                <div className="mobile-nav">
                    <a className="open-drawer-btn" onClick={() => setDrawerOpen(true)}><span className="fas fa-bars"></span></a>

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
import logoImage from '../../assets/svg/logo.svg';
import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import { Drawer, InputLabel, MenuItem, Select } from '@material-ui/core';
import PublicIcon from '@mui/icons-material/Public';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {
    const data = useContext(DataContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [lang, setLang] = useState('');

    const GTranslateGetCurrentLang = () => {
        var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');
        return keyValue ? keyValue[2].split('/')[2] : null;
    }

    const GTranslateFireEvent = (element, event) => {
        try {
            if (document.createEventObject) {
                var evt = document.createEventObject();
                element.fireEvent('on' + event, evt)
            } else {
                var evt = document.createEvent('HTMLEvents');
                evt.initEvent(event, true, true);
                element.dispatchEvent(evt)
            }
        } catch (e) { }
    }

    const doGTranslate = (lang_pair) => {
        if (lang_pair.value)
            lang_pair = lang_pair.value;
        if (lang_pair == '')
            return;
        var lang = lang_pair.split('|')[1];

        if (GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])
            return;
        var teCombo;
        var sel = document.getElementsByTagName('select');
        for (var i = 0; i < sel.length; i++)
            if (/goog-te-combo/.test(sel[i].className)) {
                teCombo = sel[i];
                break;
            }

        // if (document.getElementById('google_translate_element') == null || document.getElementById('google_translate_element').innerHTML.length == 0 || teCombo.length == 0 || teCombo.innerHTML.length == 0) {
        //     setTimeout(function () {
        //         doGTranslate(lang_pair)
        //     }, 500)
        // } else {
        //     teCombo.value = lang;
        //     GTranslateFireEvent(teCombo, 'change');
        // }
        teCombo.value = lang;
        GTranslateFireEvent(teCombo, 'change');
    }

    const navOnClick = (e) => {
        setDrawerOpen(false);
        e.preventDefault();

        let clickedItem = e.target.href.split('#')[1];
        setTimeout(() => { document.getElementById(clickedItem).scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 250)
    }
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
                                <a onClick={(e) => navOnClick(e)} {...elem.navLinkSettings}>{elem.navLinkContent}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className="language-wrapper">
                    <Select
                        id="lang-select"
                        value={lang}
                        onChange={event => doGTranslate(event.target.value)}
                        displayEmpty={true}
                        renderValue={
                            lang !== "" ? undefined : () => <PublicIcon></PublicIcon>
                        }
                    >
                        <MenuItem value="pt|pt">PT</MenuItem>
                        <MenuItem value="pt|es">ES</MenuItem>
                        <MenuItem value="pt|en">EN</MenuItem>
                    </Select>
                </div>

                <div className="mobile-nav">
                    <a className="open-drawer-btn" onClick={() => setDrawerOpen(true)}><span className="fas fa-bars"></span></a>

                    <Drawer anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
                        <a className="close-icon" onClick={() => setDrawerOpen(false)}>
                            <CloseIcon></CloseIcon>
                        </a>
                        <ul className="nav-list">
                            {data.navbar.map((elem, index) => {
                                return (
                                    <li className="nav-li" key={index}>
                                        <a onClick={(e) => navOnClick(e)} {...elem.navLinkSettings}>{elem.navLinkContent}</a>
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
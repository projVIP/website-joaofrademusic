import { useContext } from 'react';
import { DataContext } from '../../scripts/Context';
import SocialMedia from '../global/SocialMedia';


const scrollBtnClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });;
}

function Banner(props) {
    const data = useContext(DataContext);

    return (
        <section id="mod-banner">
            <div className="banner-content" style={{ backgroundImage: "url(" + data.banner.bannerImg + ")" }}>
                <div className="banner-content-wrapper">
                    <div className="banner-text-wrapper">
                        <div className="banner-title">{data.banner.bannerTitle}</div>
                        <a className="banner-link main-btn" href={data.banner.bannerBtn.link} title={"Go to " + data.banner.bannerBtn.title} target="_blank">{data.banner.bannerBtn.title}</a>
                    </div>

                    <div className="banner-socialmedia">
                        <SocialMedia />
                    </div>
                </div>
            </div>

            <a onClick={scrollBtnClick} className="scroll-btn" title="Scroll">
                <span className="scroll-text">SCROLL</span>
                <div className="scroll-line"></div>
            </a>
        </section>
    );
}

export default Banner;
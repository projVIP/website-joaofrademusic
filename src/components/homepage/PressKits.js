import { useContext } from 'react';
import { DataContext } from '../../scripts/Context';



function PressKits() {
    const data = useContext(DataContext);

    return (
        <section id="presskits">
            <a className="dl-btn" href={data.presskits.pt} title="Download em Português" target="_blank">
                <span className="dl-text">DOWNLOAD PRESS KIT - PT</span>
                <img src="/assets/svg/down-arrow.svg" alt="Download" />
            </a>
            <a className="dl-btn" href={data.presskits.en} title="Download em Inglês" target="_blank">
                <span className="dl-text">DOWNLOAD PRESS KIT - EN</span>
                <img src="/assets/svg/down-arrow.svg" alt="Download" />
            </a>
        </section>
    )
}

export default PressKits;
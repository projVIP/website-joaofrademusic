import { useContext } from 'react';
import { DataContext } from '../../scripts/Context';

function About() {
    const data = useContext(DataContext);

    return (
        <section id="about">
            <div className="custom-container">
                <div className="about-text-wrapper">
                    <span className="about-title">{data.aboutInfo.title}</span>
                    <div className="about-description">{data.aboutInfo.description}</div>
                    <a className="read-more" title="Read More">Read More</a>
                </div>
                <div className="about-photos">
                    <img className="img-1" src={data.aboutInfo.image1} alt="Image 1" />
                    <img className="img-2" src={data.aboutInfo.image2} alt="Image 2" />
                    <img className="img-3" src={data.aboutInfo.image3} alt="Image 3" />
                </div>

                
            </div>
        </section>
    )
}

export default About;
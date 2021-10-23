import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

const Projects = () => {
    const data = useContext(DataContext);
    const [currentSlideIndex, setcurrentSlideIndex] = useState(1);

    const renderEventsSlider = data.projects.projectList.map((value, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="gallery-image" style={{ backgroundImage: "url(" + value.projectImage + ")" }}>
                    <div className="overlay">
                        <div className="item-title">{value.projectTitle}</div>
                        <div className="item-year">{value.projectYear}</div>
                        <div className="item-desc" dangerouslySetInnerHTML={{__html: value.projectDesc}}></div>
                        <a className="item-link" href={value.projectLink} target="_blank">Listen Here</a>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section id="projects">
            <div className="title">{data.projects.title}</div>

            <Swiper
                slidesPerView={1}
                onSlideChange={(e) => { setcurrentSlideIndex(e.realIndex + 1); }}
            >
                {renderEventsSlider}
            </Swiper>

            <div className="teste"></div>
        </section>
    )
}

export default Projects;
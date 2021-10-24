import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
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
                navigation={{
                    prevEl: '.prev-project',
                    nextEl: '.next-project',
                }}
            >
                {renderEventsSlider}

                <div className="slider-controller">
                            <span className="fas fa-long-arrow-alt-left prev-project"></span>
                            <span className="slide-number">{currentSlideIndex}/{data.projects.projectList.length}</span>
                            <span className="fas fa-long-arrow-alt-right next-project"></span>
                        </div>
            </Swiper>

            <div className="mask"></div>
        </section>
    )
}

export default Projects;
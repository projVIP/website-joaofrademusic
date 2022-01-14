import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import FsLightbox from 'fslightbox-react';
import arrow from '../../assets/svg/left_light.svg';
import play from '../../assets/svg/Vector.svg';

SwiperCore.use([Navigation]);

function Events(props) {
    const data = useContext(DataContext);
    const [currentSlideIndex, setcurrentSlideIndex] = useState(1);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const renderEvents = data.eventos.reduce((acc, value, index) => {
        const today = new Date().setHours(0, 0, 0, 0);;
        const eventDate = new Date(value.eventoDate);

        if (eventDate >= today) {

            const eventItem = (<li className="event-item" key={index}>
                <div className="event-date">{value.eventoDate}</div>
                <div className="event-title">{value.eventoTitle}</div>
                <div className="event-local">{value.eventoLocal}</div>
            </li>);

            acc.push(eventItem);
        }

        return acc;
    }, []);

    const openLightBox = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    const styleGalleryVideo = {
        height: "100%",
        width: "100%",
        display: "block"
    };

    const renderGallery = data.galeria.map((value, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="gallery-image" style={{ backgroundImage: "url(" + value.ImageVideo + ")" }}>
                {value.isVideo == false ?
                    <a onClick={() => openLightBox(index + 1)} className="lightbox"></a>
                    :
                    <a href={value.galleryImageVideo} target="_blank" style={styleGalleryVideo}></a>}

                    {value.isVideo == true &&
                        <div className="overlay">
                            <img src={play} alt="play" />
                        </div>
                    }
                </div>
            </SwiperSlide>
        )
    })

    const renderGallerySources = data.galeria.filter((value) => {    
        if(!value.galleryImageVideo.includes("youtube")){
            return (value.galleryImageVideo)
        } 
    }).map((value) => {
        return (value.galleryImageVideo)
    })

    return (
        <section id="events">
            <div className="events-bg">
                <div className="w-50 events-wrapper">
                    <div className="events-list">
                        <span className="section-title">Próximos Eventos</span>
                        <ul className="events-list-wrapper">
                            {renderEvents.length > 0 ? renderEvents : <li className="no-events">Não existem eventos futuros de momento.</li>}
                        </ul>
                    </div>
                </div>
                <div className="w-50 gallery-wrapper">
                    <Swiper
                        slidesPerView={1}
                        onSlideChange={(e) => { setcurrentSlideIndex(e.realIndex + 1); }}
                        centeredSlides={true}
                        navigation={{
                            prevEl: '.prev-event',
                            nextEl: '.next-event',
                        }}
                    >
                        {renderGallery}

                        <div className="slider-controller">
                            <img src={arrow} className="left prev-event" />
                            <span className="slide-number">{currentSlideIndex}/{data.galeria.length}</span>
                            <img src={arrow} className="right next-event" />
                        </div>
                    </Swiper>
                </div>
            </div>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={renderGallerySources}
                slide={lightboxController.slide}
            />
        </section>
    )
}

export default Events;
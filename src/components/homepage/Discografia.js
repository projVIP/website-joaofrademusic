import { useContext } from 'react';
import { DataContext } from '../../scripts/Context';
import { useState } from 'react';
import SwiperCore, {
    Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import arrow from '../../assets/svg/left.svg';
import play from '../../assets/svg/Vector.svg';

SwiperCore.use([Navigation]);

function Discografia(props) {

    const data = useContext(DataContext);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [currentSlideIndex, setcurrentSlideIndex] = useState(1);

    const firstSlideContent = data.discografia.map((value, index) => {
        return (
            <SwiperSlide key={index}>
                {value.discoLink != null && value.discoLink != "" ?
                    <a className="item" href={value.discoLink} target="_blank">
                        <div className="item-wrapper">
                            <img data-link={value.discoLink} className="disco-image" src={value.discoImg} />
                            <div className="overlay">
                                <img src={play} alt="play" />
                            </div>
                        </div>
                    </a>
                    :
                    <a className="item">
                    <div className="item-wrapper">
                        <img data-link={value.discoLink} className="disco-image" src={value.discoImg} />
                    </div>
                </a>
                }

            </SwiperSlide>
        )
    })


    const secondSlideContent = data.discografia.map((value, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="item">
                    <div className="disco-title notranslate">{value.discoTitle}</div>
                    <div className="disco-year">- {value.discoYear} -</div>
                    <div className="disco-desc" dangerouslySetInnerHTML={{ __html: value.discoDesc }}></div>
                </div>
            </SwiperSlide>
        )
    })

    const changeFirstSwiper = (e) => {
        firstSwiper.slideTo(e.realIndex);

        Array.from(document.querySelectorAll('#mod-discografia .custom-container .swiper-slide')).forEach((el) => el.classList.remove('swiper-slide-active'));
        document.querySelectorAll('#mod-discografia .custom-container .swiper-slide')[e.realIndex].classList.toggle("swiper-slide-active");

        setcurrentSlideIndex(e.realIndex + 1);
    }

    return (
        <section id="mod-discografia">
            <div className="disco-slider-wrapper custom-container">
                <Swiper
                    slidesPerView={1}
                    onSwiper={setFirstSwiper}
                    allowSlideNext={false}
                    allowSlidePrev={false}
                    breakpoints={
                        {
                            "576": {
                                "slidesPerView": 2
                            },
                            "992": {
                                "slidesPerView": 3
                            },
                            "1200": {
                                "slidesPerView": 4
                            }
                        }
                    }
                >
                    {firstSlideContent}
                </Swiper>
            </div>

            <div className="info-slider-wrapper custom-container">
                <Swiper
                    slidesPerView={1}
                    onSlideChange={changeFirstSwiper}
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.prev-album',
                        nextEl: '.next-album',
                    }}
                >
                    {secondSlideContent}

                    <div className="slider-controller">
                        <img src={arrow} className="left prev-album" />
                        <span>{currentSlideIndex}/{data.discografia.length}</span>
                        <img src={arrow} className="right next-album" />
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Discografia;
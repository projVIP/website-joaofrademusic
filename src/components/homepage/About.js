import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import Box from '@mui/material/Box';
import { Modal } from '@material-ui/core';

function About() {
    const data = useContext(DataContext);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section id="about">
            <div className="about-bg">
                <div className="custom-container">
                    <div className="about-text-wrapper">
                        <span className="about-title">{data.aboutInfo.title}</span>
                        <div className="about-description" dangerouslySetInnerHTML={{ __html: data.aboutInfo.description }}></div>
                        <a className="read-more" title="Read More" onClick={() => setModalOpen(true)}>Read More</a>
                        <Modal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            aria-labelledby="about-modal-title"
                            aria-describedby="about-modal-description"
                        >
                            <Box>
                                <div className="about-modal-title">{data.aboutInfo.title}</div>
                                <div className="about-modal-description" dangerouslySetInnerHTML={{ __html: data.aboutInfo.description }}></div>
                            </Box>
                        </Modal>
                    </div>
                    <div className="about-photos">
                        <img className="img-1" src={data.aboutInfo.image1} alt="Image 1" />
                        <img className="img-2" src={data.aboutInfo.image2} alt="Image 2" />
                        <img className="img-3" src={data.aboutInfo.image3} alt="Image 3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
import { useContext, useState } from 'react';
import { DataContext } from '../../scripts/Context';
import Box from '@mui/material/Box';
import { Modal } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

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
                        <a className="read-more main-btn" title="Read More" onClick={() => setModalOpen(true)}>{data.aboutInfo.readMoreText}</a>
                        <Modal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            aria-labelledby="about-modal-title"
                            aria-describedby="about-modal-description"
                        >
                            <Box>
                                <div className="about-modal-title">{data.aboutInfo.title}</div>
                                <div className="about-modal-description" dangerouslySetInnerHTML={{ __html: data.aboutInfo.description }}></div>

                                <a className="close-icon" onClick={() => setModalOpen(false)}>
                                    <CloseIcon></CloseIcon>
                                </a>
                            </Box>
                        </Modal>
                    </div>
                    <div className="about-photos">
                        <div className="img-1" style={{ backgroundImage: "url(" + data.aboutInfo.image1 + ")" }}></div>
                        <div className="img-2" style={{ backgroundImage: "url(" + data.aboutInfo.image2 + ")" }}></div>
                        <div className="img-3" style={{ backgroundImage: "url(" + data.aboutInfo.image3 + ")" }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
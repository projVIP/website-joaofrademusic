import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../scripts/Context';

const Contacts = () => {
    const data = useContext(DataContext);


    useEffect(() => {

    })

    const renderEmails = data.contacts.contactEmails.map((value, index) => {
        return (
            <a className="email-content" key={index} href={"mailto:" + value.email}>{value.email}</a>
        )
    })

    const renderFooterLinks = data.footer.links.map((value, index) => {
        return(
            <a className='footer-link' target="_blank" href={value.url} key={index}>
                <img src={value.image} alt={index} />
            </a>
        )
    })

    return (
        <section id="contacts">
            <div className="contacts-wrapper">
                <div className="title">Contatos</div>
                <div className="text-content">
                    <span className="mobile-text notranslate">TLF:</span>
                    <a className="mobile-content" href={"tel:" + data.contacts.contactPhone}>{data.contacts.contactPhone}</a>
                    <span className="email-text">Email:</span>
                    <div className="email-wrapper">
                        {renderEmails}
                    </div>
                </div>
            </div>
            <div className="contacts-lower">
                <div className='custom-container'>
                    <span className='copyright-content'>© João Frade Music, 2021</span>
                    <div className='footer-links-wrapper'>
                        {renderFooterLinks}
                    </div>
                    <a href='https://github.com/projVIP' className='github' target="_blank">
                        <span>Made By: </span>
                        <span class="fab fa-github"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
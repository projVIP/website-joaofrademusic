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

    return (
        <section id="contacts">
            <div className="contacts-wrapper">
                <div className="title">Contacts</div>
                <div className="text-content">
                <span className="mobile-text">Mobile:</span>
                <a className="mobile-content" href={"tel:" + data.contacts.contactPhone}>{data.contacts.contactPhone}</a>
                <span className="email-text">Email:</span>
                <div className="email-wrapper">
                    {renderEmails}
                </div>
                </div>
            </div>
            <div className="contacts-lower"></div>
        </section>
    )
}

export default Contacts;
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../scripts/Context';

const Contacts = () => {
    const data = useContext(DataContext);


    useEffect(() => {

    })

    const renderEmails = data.contacts.contactEmails.map((value, index) => {
        return (
            <div className="email-content" key={index}>{value.email}</div>
        )
    })

    return (
        <section id="contacts">
            <div className="contacts-wrapper">
                <div className="title">Contacts</div>
                <div className="text-content">
                <span className="mobile-text">Mobile:</span>
                <span className="mobile-content">{data.contacts.contactPhone}</span>
                <span className="email-text">Email:</span>
                <div className="email-wrapper">
                    {renderEmails}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
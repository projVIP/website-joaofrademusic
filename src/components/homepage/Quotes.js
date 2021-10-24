import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../scripts/Context';

const Quotes = () => {
    const data = useContext(DataContext);
    

    useEffect(() => {

    })

    return (
        <section id="quotes">
            <div className="title">{data.quotes.title}</div>

            <div className="marquee">{data.quotes.text}</div>
            <div className="marquee delay">{data.quotes.text}</div>
        </section>
    )
}

export default Quotes;
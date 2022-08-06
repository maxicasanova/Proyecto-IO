import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Carousel.css';

const Carousel = ({productos,show}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [length, setLength] = useState((productos.length + 1));

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    useEffect(() => {
        setLength(productos.length + 1)
        console.log(productos)
    }, [productos])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                { currentIndex > 0 &&
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>}
                <div className="carousel-content-wrapper">
                {currentIndex < (length - show) &&
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>}
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * ((100 / show)-20)}%)` }}>
                        {productos.map(e => (
                            <Item key={e.id} elemento={e} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Carousel
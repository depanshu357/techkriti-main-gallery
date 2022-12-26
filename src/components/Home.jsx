import React, { useRef, useState } from 'react';
import './Home.css';
// import Miscellaneous from './Miscellaneous';


const images = [{ index: 1, src: './images/1.jpg' },
{ index: 2, src: './images/2.jpg' },
{ index: 3, src: './images/3.jpg' },
{ index: 4, src: './images/4.jpg' },
{ index: 5, src: './images/5.jpg' },
{ index: 6, src: './images/6.jpg' },
{ index: 7, src: './images/7.jpg' },
{ index: 8, src: './images/8.jpg' }]

const Home = () => {
    const ref = useRef();
    const [mouseClickLocation, setMouseClickLocation] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const width = images.length * 22 + (images.length - 1) * 2 + 100;
    const handleMouseDown = (e) => {
        setMouseClickLocation(e.clientX);
        setPrevPercentage((ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100);
    };
    const handleMouseMove = (e) => {
        if (mouseClickLocation === 0) return;
        const mouseDelta = mouseClickLocation - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const perc = (mouseDelta / maxDelta) * (-100);
        let nextpercentage = perc + prevPercentage;
        nextpercentage = Math.min(nextpercentage, 0);
        nextpercentage = Math.max(nextpercentage, -100);
        ref.current.scrollLeft = (-nextpercentage / 100) * (ref.current.scrollWidth - ref.current.clientWidth);
    };
    const handleMouseUp = (e) => {
        setMouseClickLocation(0);
        setPrevPercentage((ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100);
    };
    const handleScroll = (e) => {
        console.log(e);
        const perce = (ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100
        setPercentage(perce);
    };

    function horizontalScroll(event) {
        event.preventDefault();
        // const perce = (ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100
        // const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)))
        event.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    }

    return (
        <div className='home-component' style={{ backgroundColor: 'black', color: 'white' }}>
            <hr />
            <div ref={ref} className='learn-body' onScroll={handleScroll} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onWheel={horizontalScroll}>
                <div className='image-track'>

                    <div style={{ width: '50vw', marginRight: '-2vw' }}></div>

                    {images.map((image) => (
                        <img
                            // onMouseEnter={() => props.setH(true)}
                            // onMouseLeave={() => props.setH(false)}
                            key={image.index} unselectable='on' draggable='false' alt='' src={image.src} style={{ objectPosition: `${Math.min(Math.max((percentage) * (width - 100) / 100 + 50 + image.index * 22 + (image.index - 1) * 2, 0), 100)}% 50%` }} />
                    ))}
                    <div style={{ width: '50vw', marginLeft: '-2vw' }}></div>

                </div>
            </div>

            {/* <Miscellaneous /> */}
        </div >
    )
}

export default Home
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "../../Icon/ChevronLeftIcon";
import ChevronRightIcon from "../../Icon/ChevronRightIcon";

import './menu.css';

const Menu = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const [infoContent, setInfoContent] = useState({
        heading: "Book a table for yourself at a time convenient for you",
        spanText: ""
    });


    const handleMenuClick = (text, spanText) => {
        setInfoContent({ heading: text, spanText: spanText });
    };

    const imagesArr = [
        { index: 0, url: "https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp" },
        { index: 1, url: "https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" },
        { index: 2, url: "https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" }
    ]
    const slideToRight = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
    }

    const slideToLeft = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? imagesArr.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            slideToRight();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="menuContainer" style={{ backgroundImage: `url(${imagesArr[imageIndex].url})` }}>
            <div className="background">
                <div className="menu">
                    <NavLink className="tasty" to="/">Tasty</NavLink>
                    <ul className="list">
                        <NavLink onClick={() => handleMenuClick("Book a table for yourself at a time convenient for you", "")} to="/">Home</NavLink>
                        <NavLink onClick={() => handleMenuClick("Discover our Exlusive Menu", "Home Menu")} to="/menu">Menu</NavLink>
                        <NavLink onClick={() => handleMenuClick("Our Specialties", "Home Specialties")} to="/specialties">Specialties</NavLink>
                        <NavLink onClick={() => handleMenuClick("Make a Reservation", "Home Reservation")} to="/reservation">Reservation</NavLink>
                        <NavLink onClick={() => handleMenuClick("Blog", "Home Blog")} to="/blog">Blog</NavLink>
                        <NavLink onClick={() => handleMenuClick("About us", "Home About")}  to="/about">About</NavLink>
                        <NavLink onClick={() => handleMenuClick("Contact us", "Home Contact")}  to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <div className="bookSlide">
                    <button onClick={slideToRight}><ChevronLeftIcon /></button>
                    <div className="inf">
                        {infoContent.spanText && <span style={{textTransform: "uppercase"}} className="infoSpan">{infoContent.spanText}</span>}
                        <h1>{infoContent.heading}</h1>
                        <NavLink to="/reservation">Book a table</NavLink>
                    </div>
                    <button onClick={slideToLeft}><ChevronRightIcon /></button>

                </div>

            </div>
        </div>
    )
}

export default Menu
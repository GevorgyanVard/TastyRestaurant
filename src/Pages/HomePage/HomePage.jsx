import { useEffect, useState } from 'react';
import './homePage.css';
import { NavLink } from 'react-router-dom';
import MessageIcon from '../../Icon/MessageIcon';

const HomePage = () => {

    const [menuData, setMenuData] = useState([]);
    const [desertData, setDesertData] = useState([]);
    const [drinksData, setDrinksData] = useState([]);
    const [guestsData, setGuestsData] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
    const [activeButton, setActiveButton] = useState("Main");
    const [activeItem, setActiveItem] = useState(null);


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [person, setPerson] = useState("");
    const [table, setTable] = useState("");

    const generateId = () => {
        return `N-${Date.now()}`;
    };

    const handleReservation = () => {
        const reservationId = generateId();
        const reservationDetails = {
            id: reservationId,
            name,
            phone,
            date,
            time,
            person,
            table
        };

        localStorage.setItem(reservationId, JSON.stringify(reservationDetails));

        setName("")
        setPhone("")
        setDate("")
        setTime("")
        setPerson("")
        setTable("")

        alert("Reservation made successfully!");
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5003/mainMenu");
            const data = await response.json();
            setMenuData(data.menuData || []);
            setDesertData(data.desertData || []);
            setDrinksData(data.drinksData || []);
            setGuestsData(data.guestsData || []);
            setMenuList(data.menuData || []);
        };
        fetchData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const specBack = document.querySelector('.specBack');
        if (specBack) {
            specBack.style.backgroundPositionY = `${-scrollPosition * 0.1}px`;
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % guestsData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + guestsData.length) % guestsData.length);
    };

    const nextBlogSlide = () => {
        setCurrentBlogSlide((prevSlide) => (prevSlide + 1) % desertData.length);
    };

    const prevBlogSlide = () => {
        setCurrentBlogSlide((prevSlide) => (prevSlide - 1 + desertData.length) % desertData.length);
    };

    const getVisibleGuests = () => {
        const visibleGuests = [];
        for (let i = 0; i < 3; i++) {
            visibleGuests.push(guestsData[(currentSlide + i) % guestsData.length]);
        }
        return visibleGuests;
    };

    const getVisibleBlog = () => {
        const visibleBlog = [];
        for (let i = 0; i < 3; i++) {
            visibleBlog.push(desertData[(currentBlogSlide + i) % desertData.length]);
        }
        return visibleBlog;
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToBlogSlide = (index) => {
        setCurrentBlogSlide(index);
    };

    const renderDotes = () => {
        return guestsData.map((_, index) => (
            <li
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
            />
        ));
    };

    const renderBlogDotes = () => {
        return desertData.map((_, index) => (
            <li
                key={index}
                className={`dot ${index === currentBlogSlide ? "active" : ""}`}
                onClick={() => goToBlogSlide(index)}
            />
        ));
    };

    const renderMenuList = (e) => {
        const selectedMenu = e.target.value;
        setActiveButton(selectedMenu);

        if (selectedMenu === "Main") {
            setMenuList(menuData)
        } else if (selectedMenu === "Desert") {
            setMenuList(desertData)
        } else if (selectedMenu === "Drinks") {
            setMenuList(drinksData)
        } else {
            setMenuList(menuData)
        }
    }

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <div className="home">
            <div className="container">
                <form className="form">
                    <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="tel" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    <select name="person" value={person} id="" onChange={(e) => setPerson(e.target.value)}>
                        <option selected value="0">Person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>
                    <select name="table" value={table} onChange={(e) => setTable(e.target.value)} >
                        <option value="">Table</option>
                        {[...Array(9)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <button onClick={handleReservation}>Book a table</button>
                </form>
                <div className="chef">
                    <div className="chefImg">
                        <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
                    </div>
                    <div className="chefInfo">
                        <div className="abT">
                            <span className='span'>About Tasty</span>
                            <h1>Our chef cooks the most delicious food for you</h1>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            <br /> <br />
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
            <section className='ourMenu'>
                <div className="container">
                    <div className="menuInf">
                        <span className='span'>Our Menu</span>
                        <h1>Discover Our Exclusive Menu</h1>
                    </div>
                    <div className="menuTypes">
                        <button value="Main" className={activeButton === "Main" ? "active" : ""} onClick={renderMenuList}><i class="fa-solid fa-drumstick-bite"></i>Main</button>
                        <button value="Desert" className={activeButton === "Desert" ? "active" : ""} onClick={renderMenuList}><i class="fa-solid fa-utensils"></i>Deserts</button>
                        <button value="Drinks" className={activeButton === "Drinks" ? "active" : ""} onClick={renderMenuList}><i class="fa-solid fa-champagne-glasses"></i>Drinks</button>
                    </div>
                    <div className="menuList">
                        {menuList.map((item) => (
                            <div className={`menuItem ${item.id === activeItem ? 'active' : ''}`}  key={item.id} onClick={() => handleItemClick(item.id)}>
                                <div className="menuImg" style={{ backgroundImage: `url(${item.images})` }}></div>
                                <div className="infMenu">
                                    <h3>{item.title}</h3>
                                    <p>{item.receipt}</p>
                                </div>
                                <div className="price">
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="reservation">
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                        <NavLink>Make a Reservation</NavLink>
                    </div>
                </div>
            </section>
            <section className='specialties'>
                <div className="specBack" style={{ backgroundImage: "url(" + "https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" + ")" }}>
                    <div className="background">
                        <h1>Our Specialties</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="special">
                        {menuData.map((item) => (
                            item.id >= 7 && item.id < 9 ? (
                                <div className='specialItem' key={item.id}>
                                    <div className="infSpec">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <span>FROM ${item.price}</span>
                                    </div>
                                    <div className="specialImg" style={{ backgroundImage: `url(${item.images})` }}></div>
                                </div>
                            ) : null
                        ))}
                        {menuData.map((item) => (
                            item.id >= 9 && item.id <= 10 ? (
                                <div className='specialItem' key={item.id}>
                                    <div className="specialImg" style={{ backgroundImage: `url(${item.images})` }}></div>
                                    <div className="infSpec">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <span>FROM ${item.price}</span>
                                    </div>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </section>
            <section className="guests">
                <div className="container">
                    <div className="ourGuests">
                        <span className='span'>Guests Says</span>
                        <h1>Our Satisfied Guests says</h1>
                    </div>
                    <div className="guestSlide">
                        <button onClick={prevSlide} className="prev">❮</button>
                        <div className="guestContainer" >
                            <div className="guestsSlider">
                                {getVisibleGuests().map((guest) => (
                                    <div className="guest" key={guest?.id}>
                                        <div className="guestImg">
                                            <img src={guest?.image} alt={guest?.name} />
                                        </div>
                                        <div className="rating">
                                            <p style={{ backgroundSize: ` ${guest?.rating * 100 / 5}%, 100%` }} id='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                                        </div>
                                        <p>{guest?.about}</p>
                                        <div className="guestName">
                                            <h3>{guest?.name}</h3>
                                            <span>{guest?.city}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="dotes">{renderDotes()}</div>
                        </div>
                        <button onClick={nextSlide} className="next">❯</button>
                    </div>
                </div>
            </section>
            <section className="ourBlog">
                <div className="container">
                    <div className="recentBlog">
                        <span className='span'>Blog</span>
                        <h1>Recent Blog</h1>
                    </div>
                    <div className="blogSlide">
                        <button onClick={prevBlogSlide} className="prev">❮</button>
                        <div className="blogContainer" >
                            <div className="blogSlider">
                                {getVisibleBlog().map((blog) => (
                                    blog?.id >= 6 ? (
                                        <div className="blog" key={blog?.id}>
                                            <div className="blogImg">
                                                <img src={blog?.images} />
                                            </div>
                                            <div className="blogInfo">
                                                <p className="date">July 7, 2018 &nbsp; <span>Admin</span></p>
                                                <h3>{blog?.description}</h3>
                                                <div className="bottomInfo">
                                                    <span>Read more</span>
                                                    <p><MessageIcon /> 3</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                            <div className="dotes">{renderBlogDotes()}</div>
                        </div>
                        <button onClick={nextBlogSlide} className="next">❯</button>
                    </div>
                </div>
            </section>
        </div >
    )
}


export default HomePage
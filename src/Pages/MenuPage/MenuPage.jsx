import './menuPage.css'
import { useEffect, useState } from 'react';

const MenuPage = () => {


    const [menuData, setMenuData] = useState([]);
    const [desertData, setDesertData] = useState([]);
    const [drinksData, setDrinksData] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [activeButton, setActiveButton] = useState("Main");

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
            setMenuList(data.menuData || []);
        };
        fetchData();

    }, []);

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

    return (
        <div className="menuPage">
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
                            <div className='menuItem' key={item.id}>
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
                </div>
            </section>
        </div>
    )
}

export default MenuPage
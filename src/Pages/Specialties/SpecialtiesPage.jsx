import { useEffect, useState } from "react";

import './specialtiesPage.css'

const SpecialtiesPage = () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5003/mainMenu");
            const data = await response.json();
            setMenuData(data.menuData || []);
        };
        fetchData();

    }, []);
    return (
        <div className="ourSpecials">
            <section className='specialties'>
                <h1>Our Specialties</h1>
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
                        {menuData.map((item) => (
                            item.id >= 1 && item.id <= 2 ? (
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
                            item.id >= 3 && item.id <= 4 ? (
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
                        {menuData.map((item) => (
                            item.id >= 5 && item.id <= 6 ? (
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SpecialtiesPage
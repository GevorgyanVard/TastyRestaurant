import { useState } from 'react';
import './reservationPage.css';

const ReservationPage = () => {

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
    return (
        <div className="reservation">
            <h1>Make a Reservation</h1>
            <div className="container">
                <div className="restMap" style={{ backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/previews/026/727/522/non_2x/plain-pitch-brown-background-free-photo.jpg" + ")" }}>
                    <div className="background">
                        {[...Array(9)].map((_, index) => {
                            const tableNumber = index + 1;
                            return (
                                <div
                                    key={tableNumber}
                                    className={`table${tableNumber}`}
                                    style={{ backgroundColor: table === `${tableNumber}` ? 'rgb(165, 105, 62)' : 'transparent' }}
                                    onClick={() => setTable(`${tableNumber}`)}
                                >
                                    <p>{tableNumber}</p>
                                </div>
                            );
                        })}
                        <div className="bar">
                            <p>Bar</p>
                        </div>
                        <div className="door">
                            <p>Door</p>
                        </div>
                    </div>
                </div>
                <div className="rForm">
                    <form action="" className="resForm">
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
                    </form>
                    <button onClick={handleReservation}>Make a Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default ReservationPage
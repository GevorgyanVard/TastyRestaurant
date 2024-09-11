import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import './eachBlog.css'
const EachBlog = () => {

    let location = useLocation()
    const index = location.state?.index;

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:5003/mainMenu`);
            const data = await response.json();
            setBlog(data.desertData[index] || []);
        };
        fetchBlog();
    }, [id]);


    const recepsArr = blog?.receipt ? blog.receipt.split(",") : [];

    return (
        <div className="eachBlog">
            <div className="container">
                <div className="posts">
                    <h1 className="titleH1">#{index + 1}. {blog?.title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                    <div className="blogImg">
                        <img src={blog?.images} alt="" />
                    </div>
                    <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                    <div className="lstt">
                        <span>Life</span>
                        <span>Sport</span>
                        <span>Tech</span>
                        <span>Travel</span>
                    </div>
                    <div className="aboutAuthor">
                        <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                        <div className="infoA">
                            <h1>Lance Smith</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                        </div>
                    </div>
                    <h1 className="comment">6 Comments</h1>
                    <div className="comms">
                        <div className="coms">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                        <div className="coms">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                        <div className="coms c1">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                        <div className="coms c2">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                        <div className="coms c3">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                        <div className="coms">
                            <img src="https://preview.colorlib.com/theme/libro/images/person_1.jpg.webp" alt="" />
                            <div className="infoA">
                                <p>Jean Doe</p>
                                <span>June 27, 2018 at 2:21pm</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                <button>Replay</button>
                            </div>
                        </div>
                    </div>
                    <h1 className="comment">Leave a comment</h1>
                    <form action="" className="form">
                        <div className="name">
                            <label htmlFor="name">Name *</label>
                            <input type="text" name="" id="name" />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="" id="email" />
                        </div>
                        <div className="website">
                            <label htmlFor="website">Website</label>
                            <input type="text" name="" id="website" />
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message"></textarea>
                        </div>
                        <button>Post comment</button>
                    </form>
                </div>
                <div className="infos">
                    <input type="text" placeholder="Type a Keyword" />
                    <div className="categories">
                        <h3>Categories</h3>
                        <div className="categlist">
                            <div className="cList">
                                <p>Food</p>
                                <span>(12)</span>
                            </div>
                            <div className="cList">
                                <p>Dish</p>
                                <span>(22)</span>
                            </div>
                            <div className="cList">
                                <p>Desserts</p>
                                <span>(37)</span>
                            </div>
                            <div className="cList">
                                <p>Drinks</p>
                                <span>(42)</span>
                            </div>
                            <div className="cList">
                                <p>Ocassion</p>
                                <span>(14)</span>
                            </div>
                        </div>
                    </div>
                    <div className="recpies">
                        <h3>Receipt</h3>
                        <div className="lstt">
                            {recepsArr.length > 0 ? (
                                recepsArr.map((rec, index) => (
                                    <span key={index}>{rec}</span>
                                ))
                            ) : (
                                <span>No receipts available</span>
                            )}
                        </div>
                    </div>
                    <div className="paragraph">
                        <h3>Paragraph</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EachBlog
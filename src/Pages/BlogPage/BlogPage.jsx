import { useEffect, useState } from "react";
import MessageIcon from "../../Icon/MessageIcon";

import './blogPage.css';
import ChevronRightIcon from "../../Icon/ChevronRightIcon";
import ChevronLeftIcon from "../../Icon/ChevronLeftIcon";
import { NavLink } from "react-router-dom";
import BlogComponent from "../../Components/BlogComponent/BlogComponent";

const BlogPage = () => {

    const [desertData, setDesertData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5003/mainMenu");
            const data = await response.json();
            setDesertData(data.desertData || []);
        };
        fetchData();

    }, []);
    return (
        <div className="blogPage">
            <section className="ourBlog">
                <div className="container">
                    <div className="blogsContainer" >
                        {desertData.map((blog, index) => (
                            blog.id >= 11 && blog.id <= 18 ? (
                                <BlogComponent key={blog.id} id={blog.id} images={blog.images} description={blog.description} index={index++} />
                            ) : null
                        ))}
                    </div>
                    <div className="pagination">
                        <p><ChevronLeftIcon /></p>
                        <p className='active'>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p><ChevronRightIcon /></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage
import { NavLink } from "react-router-dom";
import MessageIcon from "../../Icon/MessageIcon";

const BlogComponent = ({ id, images, description, index }) => {
    return (
        <NavLink className="blog" to={`/blog/${id}`} state={{ index }}>
            <div className="blogImg">
                <img src={images} alt={description.slice(0, 70)} />
            </div>
            <div className="blogInfo">
                <p className="date">July 7, 2018 &nbsp; <span>Admin</span></p>
                <h3>{description.slice(0, 70)}</h3>
                <div className="bottomInfo">
                    <span>Read more</span>
                    <p><MessageIcon /> 3</p>
                </div>
            </div>
        </NavLink>
    );
};

export default BlogComponent;

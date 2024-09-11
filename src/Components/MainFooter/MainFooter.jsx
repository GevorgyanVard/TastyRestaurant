import FaceBookIcon from "../../Icon/FaceBookIcon"
import InstagramIcon from "../../Icon/InstagramIcon"
import TwitterIcon from "../../Icon/TwitterIcon"

const MainFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="mainFooter">
                    <div className="tasty">
                        <h1>Tasty</h1>
                        <div className="tastyInfo">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="icons">
                                <TwitterIcon />
                                <FaceBookIcon />
                                <InstagramIcon />
                            </div>
                        </div>
                    </div>
                    <div className="opening">
                        <h1>Opening Hours</h1>
                        <div className="hours">
                            <p>Monday: <span>08: - 22:00</span></p>
                            <p>Tuesday: <span>08: - 22:00</span></p>
                            <p>Wednesday: <span>08: - 22:00</span></p>
                            <p>Thursday: <span>08: - 22:00</span></p>
                            <p>Friday: <span>08: - 22:00</span></p>
                            <p>Saturday: <span>08: - 22:00</span></p>
                            <p>Sunday: <span>08: - 22:00</span></p>
                        </div>
                    </div>
                    <div className="contact">
                        <h1>Contact Information</h1>
                        <div className="infoC">
                            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            <p>+ 1235 2355 98</p>
                            <p>info@yoursite.com</p>
                            <p>email@email.com</p>
                        </div>
                    </div>
                    <div className="newsletter">
                        <h1>Newsletter</h1>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <div className="subscribe">
                            <input type="text" placeholder="Subscribe" />
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright ©2024 All rights reserved </p>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
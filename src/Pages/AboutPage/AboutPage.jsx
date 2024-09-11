import "./aboutPage.css"

const AboutPage = () => {
    return (
        <div className="aboutUs">
            <div className="container">
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

                <div className="ourChef">
                    <span className='span'>Our Chef</span>
                    <h1>Our Master Chef</h1>
                </div>

                <div className="chefs">
                    <div className="chef">
                        <h1>Thomas Smith</h1>
                        <p>Head Chef</p>
                        <div className="chefsImg">
                            <img src="https://preview.colorlib.com/theme/tasty/images/chef-1.jpg.webp" alt="" />
                        </div>
                    </div>
                    <div className="chef">
                        <h1>Francis Gibson</h1>
                        <p>Assistant Chef</p>
                        <div className="chefsImg">
                            <img src="https://preview.colorlib.com/theme/tasty/images/chef-2.jpg.webp" alt="" />
                        </div>
                    </div>
                    <div className="chef">
                        <h1>Angelo Maestro</h1>
                        <p>Assistant Chef</p>
                        <div className="chefsImg">
                            <img src="https://preview.colorlib.com/theme/tasty/images/chef-3.jpg.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
import './contactPage.css'

const ContactPage = () => {
    return (
        <div className='contactPage'>
            <div className="container">
                <div className="contact">
                    <h1>Contact Information</h1>
                    <div className="information">
                        <div className="address">
                            Address: 198 West 21th Street, Suite 721 New York NY 10016
                        </div>
                        <div className="phone">
                            Phone: <span>+ 1235 2355 98</span>
                        </div>
                        <div className="email">
                            Email: <span>info@yoursite.com</span>
                        </div>
                        <div className="website">
                            Website: <span>yoursite.com</span>
                        </div>
                    </div>
                </div>
                <form action="" className="form">
                    <div className="name">
                        <input type="text" name="" id="name" placeholder="Your Name" />
                    </div>
                    <div className="email">
                        <input type="email" name="" id="email" placeholder="Your Email" />
                    </div>
                    <div className="website">
                        <input type="text" name="" id="website" placeholder="Subjact" />
                    </div>
                    <div className="message">
                        <textarea name="" id="message" placeholder="Message"></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
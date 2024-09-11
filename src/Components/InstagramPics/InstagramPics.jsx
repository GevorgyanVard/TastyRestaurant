import InstagramIcon from "../../Icon/InstagramIcon"
import { useState } from "react"
import Modal from "../Modal"

const InstagramPics = () => {
    const [activeIndex, setActiveindex] = useState(-1)
    const imageArr = [
        "https://preview.colorlib.com/theme/tasty/images/insta-1.jpg.webp",
        "https://preview.colorlib.com/theme/tasty/images/insta-2.jpg.webp",
        "https://preview.colorlib.com/theme/tasty/images/insta-3.jpg.webp",
        "https://preview.colorlib.com/theme/tasty/images/insta-4.jpg.webp",
        "https://preview.colorlib.com/theme/tasty/images/insta-5.jpg.webp"
    ]
    const OpenModal = (index) => {
        setActiveindex(index)
    }
    return (
        <section className="footerInsta">
            <h1>Instagram</h1>
            <div className="images">
                {imageArr.map((image, index) => (
                    <div onClick={() => OpenModal(index)} className="instPic" style={{ backgroundImage: `url(${image})` }}>
                        <div className="backgroound">
                            <InstagramIcon />
                        </div>
                    </div>
                ))}

            </div>
            {activeIndex !== -1 ? <Modal imageArr={imageArr} activeIndex={activeIndex} close={() => setActiveindex(-1)}/> : null}
        </section>
    )
}

export default InstagramPics
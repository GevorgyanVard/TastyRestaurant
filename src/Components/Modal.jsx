const Modal = ({ close, imageArr, activeIndex }) => {
    const HideModal = (event) => {
        if (event.target.className === 'modal-conteiner') {
            close()
        }
    }
    return (
        <div onClick={HideModal} className="modal-conteiner">
            <i class="fa-solid fa-xmark"></i>
            <div className="modalImg">
                <img src={imageArr[activeIndex]} />
            </div>
        </div>
    )
}

export default Modal

import './products.scss'
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"
import { useState } from 'react'
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const Products = () => {

    const [currentUpImg, setCurrentUpImg] = useState(img1)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [img1, img2, img3, img4];

    const handleClickPreviewImg = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index)
        setIsOpen(true)
    }
    return (

        <div>

            <div className="product-container">

                <div className="content-left">
                    <div className='img-up'>
                        <img src={currentUpImg} onClick={() => handleClickPreviewImg()} />
                    </div>
                    <div className='img-down'>
                        <div className='img-small'>
                            <img src={img1} onClick={() => setCurrentUpImg(img1)} className={currentUpImg === img1 ? "active" : ""} />
                        </div>
                        <div className='img-small'>
                            <img src={img2} onClick={() => setCurrentUpImg(img2)} className={currentUpImg === img2 ? "active" : ""} />
                        </div>
                        <div className='img-small'>
                            <img src={img3} onClick={() => setCurrentUpImg(img3)} className={currentUpImg === img3 ? "active" : ""} />
                        </div>
                        <div className='img-small'>
                            <img src={img4} onClick={() => setCurrentUpImg(img4)} className={currentUpImg === img4 ? "active" : ""} />
                        </div>
                    </div>
                </div>

                <div className="content-right">

                    <div className='title'>Giafy chayj boo adias</div>
                    <div className='price'>3.569.000 vnd</div>
                    <div className='size'>Size :30</div>

                    <div className='action'>
                        <label>so luong</label>
                        <input type="number" className='quantity' min={1} value={1} />
                        <button className='buy'>Chon mua</button>
                    </div>
                </div>

            </div>

            {/* {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    animationDuration={500}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )} */}

        </div>
    )
}

export default Products
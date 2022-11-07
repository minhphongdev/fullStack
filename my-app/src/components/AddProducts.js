import { useState } from "react"

const AddProducts = () => {


    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const [isShowDetail, setIsShowDetail] = useState(true)

    const handleClickButton = () => {

        let object = {
            name: name,
            price: price,
            color: color,
            size: size
        }

        let productList = localStorage.getItem("productsList")
        if (productList) {
            let arr = JSON.parse(productList)
            arr.push((object))
            localStorage.setItem("productsList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productsList", JSON.stringify([object]))
        }

        setName("")
        setColor("")
        setPrice(0)
        setSize("")
    }

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail)
    }




    return (
        <>

            <div className="content-left">

            </div>

            <div className="content-right">

                {
                    isShowDetail === true &&

                    < fieldset >
                        <legend>Add New Products</legend>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="text" className="form-control" value={price} onChange={(event) => setPrice(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Size</label>
                            <input type="text" className="form-control" value={size} onChange={(event) => setSize(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <input type="text" className="form-control" value={color} onChange={(event) => setColor(event.target.value)} />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={() => handleClickButton()}>Submit</button>
                    </fieldset>
                }
                {
                    isShowDetail === true ?
                        <div onClick={() => handleHideShow()}>Hide This Form</div>
                        :
                        <div onClick={() => handleHideShow()}>show This Form</div>
                }

                <div>
                    List Products
                    {localStorage.getItem("productsList")}

                </div>

            </div>


        </>

    )


}

export default AddProducts

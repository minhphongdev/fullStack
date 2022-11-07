import React from "react"
import axios from "axios"


// const Weather = () => {
//     return (
//         <div>weather</div>
//     )
// }

// export default Weather



class Wearther extends React.Component {

    async componentDidMount() {
        let data = await axios.get("https://reqres.in/api/users?page=2")
        console.log("check data", data)
    }


    render() {
        return (
            <div>
                inside weather app
            </div>
        )
    }
}

export default Wearther
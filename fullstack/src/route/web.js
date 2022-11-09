import express from "express"
import homeController from "../controllers/homeController"
let router = express.Router()

let initWebRoutes = (app) => {

    // get infor use get
    router.get('/', homeController.getHomePage)


    // rest API
    return app.use("/", router)
}

module.exports = initWebRoutes
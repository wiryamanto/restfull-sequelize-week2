const mainRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers")

mainRoutes.get("/",foodsControllers.getAllfoods)
mainRoutes.post("/",foodsControllers.postFoods)
mainRoutes.get("/:id", foodsControllers.getDataById)
mainRoutes.delete("/:id", foodsControllers.deleteDataById)
mainRoutes.put("/:id", foodsControllers.updateDataById)
module.exports=  mainRoutes;
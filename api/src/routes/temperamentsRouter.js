const {Router} = require("express");
const { getTemperamentsHandler } = require("../handlers/temperamentsHandlers");


const dogsRouter = Router();

dogsRouter.get("/",getTemperamentsHandler)


module.exports =  dogsRouter


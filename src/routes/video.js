const express = require("express");
const router = express.Router();
const {
    getList, 
    getDetail, 
    updateItem, 
    createItem, 
    deleteItem
} = require("../controllers/videoController")

const { checkSesion } = require("../middlewares/origin");

/**
 * Lista de videos
 */
router.get("/", getList);
router.get("/:id", getDetail);
router.post("/", createItem);
router.delete("/:id",checkSesion, deleteItem);
router.put("/:id", updateItem);


module.exports = router;
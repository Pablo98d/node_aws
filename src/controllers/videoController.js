const { getAllVideos } = require("../services/video")

const getList = (req, res) => {
    res.send({data:getAllVideos()})
}

const getDetail = (req, res)=> {
    res.send({data:'Detalle'})
}

const updateItem = (req, res) => {
    res.send({data:'Actualizando'})
}

const createItem = (req, res) => {
    res.send({data:'Creando'})    
}

const deleteItem = (req, res) => {
    res.send({data:'Eliminando'})
}

module.exports = { getList, getDetail, updateItem, createItem, deleteItem }
const
{
    createPagto,
    getPagtoByPagtoId,
    getPagtos,
    updatePagto,
    deletePagto
    

}= require("./pagto.controller");

const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation");

// router.post("/", checkToken, createPagto);
// router.get("/", checkToken, getPagtos);
// router.get("/:id", checkToken, getPagtoByPagtoId);
// router.put("/", checkToken, updatePagto);
// router.delete("/", checkToken, deletePagto);

router.post("/", createPagto);
 router.get("/",  getPagtos);
 router.get("/:id", getPagtoByPagtoId);
 router.put("/",  updatePagto);
 router.delete("/",  deletePagto);

module.exports = router;

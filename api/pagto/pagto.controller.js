const
{
    createPagto,
    getPagtoByPagtoId,
    getPagtos,
    updatePagto,
    deletePagto
} = require ("./pagto.service");

    module.exports={

    createPagto: (req, res) =>{
        const body = req.body;
        createPagto(body, (err, results) =>{
            if(err){
                Console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message: "Pagamento não criado com sucesso"
                });
            }
            return res.status(200).json({
                sucess: 1,
                message:"Pagamento cadastrado com sucesso",
                data: results
            });
        });
    },
    getPagtoByPagtoId: (req, res)=>{
        const id = req.params.id;
        getPagtoByPagtoId(id, (err, results) =>{
            if(err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Erro: Pagamento não encontrado"
                });
            }            
            return res.json({
                sucess: 1,
                message: "Pagamento encontrado",
                data: results
            });
        });
    },
    getPagtos:(req, res) => {
        getPagtos((err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Nenhum pagamento encontrado"
                });
            }
           
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updatePagto:(req, res) => {
        const body = req.body;
        updatePagto(body, (err, results) => {
            if(err){
                console.log(err);
                return res.json({
                    sucess: 0,
                    message: "Erro ao atualizar pagamento"
                });
            }
            console.log(results);
           
            return res.json({
                success: 1,
                message: "Pagamento atualizado com sucesso"
            });
        });
    },
    deletePagto:(req, res) => {
        const data = req.body;
        deletePagto(data, (err, results) => {
            if (err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Pagamento não apagado"
                }); 
            }
           
            return res.json({
                success: 1,
                message: "Pagamento apagado com sucesso"
            });
        });
    }
}

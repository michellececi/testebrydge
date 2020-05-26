const { 
    create, 
    getUserByUserId, 
    getUsers, 
    updateUser, 
    deleteUser,
    getUserByUserEmail
 } = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require ("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports={
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Erro com conexão com Banco deDados"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Usuário cadastrado com sucesso",
                data: results
            });
        });
    },
    getUserByUserId: (req, res) =>{
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err){
                console.log(err);
                return res.json({
                    success:0,
                    message: "Erro: Usuário não encontrado"
                });
            }
           
            return res.json({
                success: 1,
                message: "Usuário encontrado",
                data: results
            });
        });
    },
    getUsers:(req, res) => {
        getUsers((err, results) => {
            if(err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Nenhum usuário encontrado"
                });
            }
            
          
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if(err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Erro ao atualizar usuário"
                });
            }
           
            return res.json({
                success: 1,
                message: "Usuário atualizado com sucesso"
            });
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err){
                console.log(err);
                return res.json({
                    success: 0,
                    message: "Usuário não apagado"
                });
            }
            
            return res.json({
                success: 1,
                message: "Usuário apagado com sucesso"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) =>{
            console.log(body.email);
            if (err){
                console.log(err);
                return res.json({
                    success: 0,
                    data: "Email ou senha inválido"
                });
            }
           
            const result = compareSync(body.password, results.password)
            if (result){
                results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "Login realizado com sucesso",
                    token: jsontoken
                });
            }else{
                return res.json({
                    sucess: 0,
                    data: "Email ou senha inválido"
                });
            }

        });
    } 
};

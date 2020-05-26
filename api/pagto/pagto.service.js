const pool = require("../../config/database");
const request = require('request');
const hostname = 'https://api.hgbrasil.com/finance';

module.exports = {
    createPagto: (data, callBack) => {
        request.get(hostname, (err, res, body) => { 
            const USD = JSON.parse(body);
            const cotacaoDolar = USD.results.currencies.USD.buy;  
            data.valor_dolar = data.valor_real * cotacaoDolar;    
            
            pool.query(
                'INSERT INTO pagamentos (id_usu, nome, valor_real, valor_dolar) VALUES (?,?,?,?)',
                [
                    data.id_usu,
                    data.nome,
                    data.valor_real,
                    data.valor_dolar               
                ],
                (error, results, fields) =>{
                    if(error){
                        return callBack(error);
                    }
                    return callBack(null, results);
                }
            );
        });
    },
    getPagtos:callBack => {
        pool.query(
            'SELECT id, id_usu, nome, valor_real, valor_dolar FROM pagamentos',
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getPagtoByPagtoId: (id, callBack) => {
        pool.query(
            'SELECT id, id_usu, nome, valor_real, valor_dolar FROM pagamentos WHERE id=?',
            [id],
            (error, results, fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatePagto: (data, callBack) => {
        pool.query(
            'UPDATE pagamentos SET nome=?, valor_real=?, valor_dolar=? WHERE id=? ',
            [
                data.nome,
                data.valor_real,
                data.valor_dolar,
                data.id                
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletePagto:(data, callBack) => {
        pool.query(
            'DELETE FROM pagamentos WHERE id=?',
            [data.id],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

}

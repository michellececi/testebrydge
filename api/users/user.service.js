const pool = require("../../config/database");
module.exports ={
    create: (data, callBack) => {

        pool.query(
            'INSERT INTO users (name, email, password) VALUES(?,?,?)',
            [
                data.name,
                data.email,
                data.password  
            ],
            (error, results, fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            'SELECT id, name, email, password FROM users ',
            [],
            (error, results, fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            'SELECT id, name, email, password FROM users where id = ?',
            [id],
            (error, results, fields) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            'UPDATE users SET name=?, email=?, password=? WHERE id=?',
            [
                data.name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                 return   callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            'DELETE FROM users WHERE id=?',
            [data.id],
            (error, results, fields) => {
                if (error){
                  return  callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            'SELECT * FROM users WHERE email=?',
            [email],
            (error, results, fields) => {
                if (error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}
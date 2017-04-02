var users = {
    login : function(req, res, next){
        req.db.collection('user').findOne(req.body, function(err, response){
            console.log('response', response)
            if(!response){
                response = {
                    msg : "Invalid credential",
                    err : 'loginFailed'
                }
            }
            req.response = err || response;
            next();
        })
    }
}
module.exports = users;
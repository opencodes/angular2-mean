var post = {
    InsertPost : function(req, res, next){
        req.db.collection('post').insert(req.body, function(err, response){
            req.response = err || response;
            next();
        })
    },
    ListPost: function(){
        req.db.collection('post').find(req.query).limit(20).toArray(function(err, response){
            req.response = err || response;
            next();
        })
    }
}

module.exports = post;
module.exports = {
    isUser : function(req,res,next){
        if (req.authenticatedUser.id == req.params.id) {
            next()
        } else {
            res.status(401).json(`forbidden access!`)
        }
    }
}
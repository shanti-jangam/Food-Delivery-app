function cartController(){
    //factory functions-returns object
    return {
        index(req,res){
            res.render('customers/cart');
        }
    }
}

module.exports=cartController
const Menu=require('../../models/menu')
function homeController(){
    //factory functions-returns object
    return {
        async index(req,res){
            //async await
            const pizzas= await Menu.find()
            return res.render('home',{pizzas:pizzas})
        //     Menu.find().then(function(pizzas){
        //         console.log(pizzas);
        //         res.render('home',{pizzas:pizzas});
        //     })
        }
    }
}

module.exports=homeController
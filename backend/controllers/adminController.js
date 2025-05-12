const asyncHandler = require("express-async-handler");

const loginAdmin = asyncHandler(async(req, res)=>{
    const {usuario, senha} = req.body;
    if(!usuario || !senha){
        res.status(400);
        throw new Error("Todos os campos são obrigatórios");
    }
    if(usuario === "admin" && senha === "senhadacantina321"){
        res.status(200).json("ok");

    }else{
        res.status(401);
        throw new Error("usuario ou senha estão incorretos");
    }
})

module.exports = loginAdmin;
const User = require('../models/user')
const registerNewUser = (req,res)=>{
    res.json({
        msg: "registered successfully"
    })
}

module.exports= {registerNewUser}
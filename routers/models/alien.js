const mongoose=require('mongoose')
const router = require('../aliens')

const alienSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        require:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }

})

router.post('/',async(req,res) => {
    const alien = new alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
})

module.exports=mongoose.model('Alien',alienSchema)
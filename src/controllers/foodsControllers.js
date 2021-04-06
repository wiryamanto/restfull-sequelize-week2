const {foods} = require("../models");

module.exports={
    getAllfoods: (req, res)=>{
        foods.findAll()
        .then((data)=>{
            res.send({
                msg:"success",
                status:200,
                data
            })
        })
            .catch((err)=>{
                res.send({
                    msg: "error",
                    status:500,
                    err,
                });
            });
        
    },
    postFoods : (req,res)=>{
        
        const {body}= req;
        console.log(body);
        foods.create(body)

        .then((data)=>{
            res.status(200).send({
                msg: "success post data",
                status:200,
                data
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"failed while post data",
                status:500,
                err,
            });
        })
    },
    getDataById: (req,res)=>{
        let{id}= req.params;
        foods.findOne({
            where: {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg:"success get data By Id",
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"failed while get data By Id",
                status: 500,
                err,
            });
        });
    },
    deleteDataById: async(req,res)=>{
        const{id}=req.params;

        let findfoods= await foods.findOne({
            where:{
                id
            }
        });
        if(findfoods === null){
            res.status(404).send({
                msg:"delete is error",
                status: 404,
                err,
            })

        }
        foods.destroy({
            where:({
                id
            })
        })
        .then((data)=>{
            const resObject= {...findfoods.dataValues}
            res.status(200).send({
                msg:"delete data success",
                status:200,
                data:resObject
            })
        }) 
        .catch((error)=>{
            res.status(500).send({
                msg:"delete is error",
                status: 500,
                err
            })
        })
    },
    updateDataById:async(req, res)=>{
        const {id}= req.params;
        const {body}= req
        let findfoods = await foods.findOne({
            where:{
                id
            }
        })
        if(findfoods === null){
            res.status(404).send({
                msg:"Uodate is error",
                status: 404,
                err,
            })

        }
        foods.update(body,{
            where:({
                id
            })
        })
        .then((data)=>{
            const resObject= {...findfoods.dataValues}
            res.status(200).send({
                msg:"Update data success",
                status:200,
                data:resObject
            })
        }) 
        .catch((error)=>{
            res.status(500).send({
                msg:"Update is error",
                status: 500,
                err
            })
        })
    }
};


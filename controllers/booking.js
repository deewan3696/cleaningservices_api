require('dotenv').config()
const {bookingvalidation} = require('../validation/bookingvalidate')
const { v4: uuidv4 } = require('uuid');
const {User}= require('../models/User')
const { Op } = require("sequelize")




const booking = ((req,res)=>{

    const customer_id = uuidv4()

    const{value,err} = bookingvalidation(req.body)
    if (err) {
        res.status(400).json({
            status:false,
            message:err.details[0].message
        })
    }

    const {firstname,othernames,email,phone,deladdress,timeofdel} = req.body

    try {

        User.findAll({
            where: {
                [Op.and]: [
                    {firstname: firstname},
                    {email:email}
                ]
            }
        })
        console.log('here for user result', user)
        .then((data)=>{
            if (data.length == 0) {
                User.create({
                    customer_id: customer_id, 
                    firstname: firstname,
                    othernames: othernames,
                    email:email,
                    phone:phone,
                    deladdress: deladdress,
                    timeofdel: timeofdel
                })
            }else{
                User.update({
                    firstname: firstname,
                    othernames:othernames,
                    email:email,
                    phone:phone,
                    deladdress: deladdress,
                    timeofdel:timeofdel
                }, { where: { customer_id: customer_id } })
            }
            res.status(200).json({
                status:true,
                message:'Appointment Successfully Booked'
            })
        })
        .catch((err)=>{
            throw new Error(err)
        }) 
    } catch (error) {
        res.status(400).json({
            status:false,
            message:error.message
        })
    }
})


module.exports = {booking}
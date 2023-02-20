const Joi = require('joi');



const bookingvalidation = ((data)=>{
    const schema = Joi.object({
        firstname: Joi.string().min(3).max(30).required(),
        othernames: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(2).required(),
        deladdress: Joi.string().min(2).required(),
        timeofdel: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    })

    return schema.validate(data)
})

module.exports = {bookingvalidation}


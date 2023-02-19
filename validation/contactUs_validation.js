const Joi = require('joi')


const contactUsValidation = (data) => {

    const schema = Joi.object({

        surname: Joi.string().min(2).required(),
        othernames: Joi.string().min(2).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: Joi.string().min(2).required(),
        address: Joi.string().min(20).required(),
        

  
    })
  
  return  schema.validate(data);


}






module.exports = { contactUsValidation }
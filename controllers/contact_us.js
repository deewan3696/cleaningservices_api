require (`dotenv`).config()
const {contactUsValidation} = require (`../validation/contactUs_validation`)




const contactUs = (req, res) => {
    const {error ,value} = contactUsValidation (req.body)

    if (error !== undefined) {
        res.status(400).json({ 
            status: false,
            message: error.details[0].message


        })
}  else {
    const{firstname, othernames, email,phone,address} = reg.body
  try{
    contactUs.findAll({
        where: {
            [Op.or]: [
                { firstname: firstname },
                 {othernames: othernames},
                  {email: email },
                { phone: phone },
                 {address: address}

            ]
        }
        })
  }catch(e){
}
}
}

module.exports = {contactUs }
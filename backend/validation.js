const Joi = require('@hapi/joi');


const registerValidation = (data) => {
    const schema = Joi.object ({
        firstName:  Joi.string().max(255).required(),
        lastName:   Joi.string().max(255).required(),
        userName:   Joi.string().min(6).max(255).required(),
        password:   Joi.string().min(8).required(),
        userEmail:  Joi.string().required().email()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    console.log (data);
    const schema = Joi.object ({
        userName:   Joi.string().min(6).max(255).required(),
        password:   Joi.string().min(8).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation; 
module.exports.loginValidation = loginValidation; 

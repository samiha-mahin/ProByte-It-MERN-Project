const {z} = require ("zod");

const loginSchema = z.object ({
    email : z
    .string({ required_error: "Invalid email address" })
    .trim ()
    .min(3,{message:"Email must be at least 3 chars"})
    .max(255,{message:"Email can't be more than 255 chars"}) ,
    password : z
    .string({ required_error: "Password is Required" })
    .trim ()
    .min(8,{message:"Password must be at least 8 chars"})
    .max(1024,{message:"Password must not be more than 1024 chars"})
})
module.exports = loginSchema;
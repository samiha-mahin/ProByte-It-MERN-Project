const {z} = require ("zod");

const signupSchema = z.object ({
    username : z
    .string({ required_error: "Name is Required" })
    .trim ()
    .min(3,{message:"Name must be at least 3 chars"})
    .max(255,{message:"Name can't be more than 255 chars"}) ,
    email : z
    .string({ required_error: "Invalid email address" })
    .trim ()
    .min(3,{message:"Email must be at least 3 chars"})
    .max(255,{message:"Email can't be more than 255 chars"}) ,
    phone : z
    .string({ required_error: "Phone is Required" })
    .trim ()
    .min(10,{message:"Phone must be at least 10 chars"})
    .max(20,{message:"Phone must not be more than 20 chars"}),
    password : z
    .string({ required_error: "Password is Required" })
    .trim ()
    .min(8,{message:"Password must be at least 8 chars"})
    .max(1024,{message:"Password must not be more than 1024 chars"})
});

module.exports = signupSchema;
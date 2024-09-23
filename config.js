const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FHknADCC#TyBtX9oaXxCeI_K20F9r-VBEfv_buWQu4mR1JtghLbA",
MONGODB: process.env.MONGODB || "mongodb+srv://hasamg:xlwPPyGX6GedR9xD@cluster0.9qiarq4.mongodb.net/",//enter mongo db url
};

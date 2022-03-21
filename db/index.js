 const mongoose = require('mongoose')
 const { urlDb } = require('../config')

 mongoose.connect(urlDb, {
     useUnifiedTopology: true
         //  useFineAndModify: true,
         //  useCreateIndex: true
 })

 const db = mongoose.connection

 module.exports = db
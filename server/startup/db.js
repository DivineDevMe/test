const winston = require('winston');
const mongoose = require('mongoose');
const {createLogger,format,transports, transport} = require('winston');
const {combine,timestamp,label,prettyPrint} = format;


//logger 
const logger = createLogger({
    format: combine(
        label({ label: 'APP INFO'}),
        timestamp(),
        prettyPrint(),
        format.colorize({all:true}),
        format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
        format.printf(error => `[${error.timestamp}] ${error.level}: ${error.message}`)
        
    ),
    transports:[new transports.Console()]
});

module.exports = function(){
        mongoose.connect('mongodb://localhost/testdb',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: false,
            useFindAndModify:false,
        })
        .then( ()=>{  logger.info('Connection to established successfully..!')  })  
        .catch( error => logger.error(`${error.message}`))
}
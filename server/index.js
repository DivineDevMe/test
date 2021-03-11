const express = require('express');
const {createLogger,format,transports, transport} = require('winston');
const {combine,timestamp,label,prettyPrint} = format;
const app = express();


//logger 
const logger = createLogger({
    format: combine(
        label({ label: 'APP INFO'}),
        timestamp(),
        prettyPrint(),
        format.colorize({all:true}),
        format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
        
    ),
    transports:[new transports.Console()]
});


//routes of api
require('./startup/db')();
require('./startup/routes')(app,express);


const port = process.env.PORT || 3000;
app.listen(port,()=>{
 logger.info(`Listening on port ${port}`)
});
import express from 'express'

const app = express();
const port = 8000; //for get port number

app.listen(port, () => {  console.log('We are live on ' + port);});

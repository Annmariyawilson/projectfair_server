// require('dotenv').config()
// const express=require('express')
// const cors=require('cors')
// const routes=require('./Routes/routes')
// require('./Connection/db')

// const pfServer=express()

// pfServer.use(cors())

// pfServer.use(express.json())
// pfServer.use(routes)

// const PORT=3000 || process.env.PORT

// pfServer.listen(PORT,()=>{
//     console.log(`Server running at ${PORT}`);
// })
// pfServer.get('/',(req,res)=>{
//     res.send("<h1>Welcom to Express Server!!</h1>")
// })

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./Routes/routes');
require('./Connection/db');

const pfServer = express();

pfServer.use(cors());
pfServer.use(express.json());
pfServer.use(routes);

const PORT = process.env.PORT || 3000;

pfServer.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

pfServer.get('/', (req, res) => {
    res.send("<h1>Welcome to Express Server!!</h1>");
});

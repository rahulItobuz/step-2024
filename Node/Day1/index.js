import express from "express";
import manageRoute from './routes/index.js';
const port = 8181;

// created server
const app = express();

// route
app.use('/test', (req, res) => {
    res.status(200).json({
        data: null,
        message: 'I am in test route',
        status: 200
    });
})
app.use('/api', manageRoute())


// middleware
app.use((req, res, next) => {
    next(new Error('not found'));
})
app.use((error, req, res, next) => {
    res.status(500).json({
        data: null,
        message: error.message,
        status: 500
    });
})


// listen
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})
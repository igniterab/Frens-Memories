const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');




const CONNECTION_URL = 'mongodb+srv://Admin:qwerty12345@cluster0.loiid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;




mongoose.connect(
    CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Database connected');
    }).catch((error) => console.log(error));

//to get rid of warnings in mongoose we used this
mongoose.set('useFindAndModify', false);

app.use(cors());
//app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running live on port ${PORT}`);
});
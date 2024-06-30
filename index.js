require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();


mongoose.connect('mongodb+srv://Aniket:Aniket233@erp.3c3pnoq.mongodb.net/ERP?retryWrites=true&w=majority&appName=ERP', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
app.use(express.json());
app.use(express.static('public'));



// app.use('/api/user', authRoute);
// const authRoute = require('./routes/authRoute');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
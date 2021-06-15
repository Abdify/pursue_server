import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import chapterRoutes from './routes/chapters.js';
import courseRoutes from './routes/courses.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/courses', courseRoutes);
app.use('/chapters', chapterRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Projects API");
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
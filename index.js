import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();


app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://boipoka:ZneV3qMTVin6RXF@cluster0.ykse1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
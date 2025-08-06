import express from 'express';
import cors from 'cors';
import { PORT } from './utils/constant.js';
import schoolRoutes from './routes/schoolRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/', schoolRoutes);

app.listen(PORT, async () => {
    try {
        console.log(`Server is running on port ${PORT} and connected to MySQL database`);
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
});
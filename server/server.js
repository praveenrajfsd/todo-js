const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./models/index');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`);
});

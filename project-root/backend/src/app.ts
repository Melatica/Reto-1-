import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import tasksRouter from './routes/tasks';
import usersRouter from './routes/users';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/projects', projectsRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

export default app;

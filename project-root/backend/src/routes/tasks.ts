import { Router } from 'express';
import prisma from '../prismaClient';

const router = Router();

// GET tareas por proyecto
router.get('/project/:id', async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { projectId: req.params.id },
  });
  res.json(tasks);
});

// POST nueva tarea
router.post('/', async (req, res) => {
  const { title, description, projectId, assigneeId } = req.body;
  const task = await prisma.task.create({
    data: { title, description, projectId, assigneeId },
  });
  res.status(201).json(task);
});

export default router;

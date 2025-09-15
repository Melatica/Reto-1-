import { Router } from 'express';
import prisma from '../prismaClient';

const router = Router();

// GET /api/projects
router.get('/', async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

// POST /api/projects
router.post('/', async (req, res) => {
  const { name, description, ownerId } = req.body;
  const project = await prisma.project.create({
    data: { name, description, ownerId },
  });
  res.status(201).json(project);
});

export default router;

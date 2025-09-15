import { Router } from 'express';
import prisma from '../prismaClient';

const router = Router();

// GET /api/users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST /api/users (registro rápido)
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: { name, email, password },
  });
  res.status(201).json(user);
});

export default router;

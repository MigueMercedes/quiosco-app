// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ICategory } from '../../interfaces/category.interface';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ICategory[]>) {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();
  res.status(200).json(categories as ICategory[]);
}

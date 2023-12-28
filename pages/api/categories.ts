import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ICategoriesResponse } from '../../interfaces/category.interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategoriesResponse[]>,
) {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  res.status(200).json(categories as ICategoriesResponse[]);
}

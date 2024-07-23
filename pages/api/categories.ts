
import type { NextApiRequest, NextApiResponse } from 'next';
import { ICategoriesResponse } from '../../interfaces/category.interface';
import prisma from '../../prisma/prismaClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategoriesResponse[]>,
) {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  res.status(200).json(categories as ICategoriesResponse[]);
}

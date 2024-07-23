import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prismaClient';
import { IProduct } from '../../interfaces/product.interface';

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[] | { error: string }>) {
  try {
    const { categoryId } = req.query;
    if (!categoryId || isNaN(Number(categoryId))) {
      return res.status(400).json({ error: 'Invalid or missing categoryId' });
    }

    const products = await prisma.product.findMany({
      where: {
        categoryId: Number(categoryId),
      },
    });

    if (products.length === 0) {
      return res.status(404).json({ error: 'No products found for the given categoryId' });
    }

    res.status(200).json(products as IProduct[]);
  } catch (error: any) {
    console.error('An error occurred while fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
}
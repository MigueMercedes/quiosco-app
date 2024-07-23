import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../interfaces/product.interface'
import prisma from '../../prisma/prismaClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: 1
      }
    })
    res.status(200).json(products as IProduct[])
  } catch (error: any) {
    res.status(500).json({ error: 'An error occurred while fetching products' })
  }
}

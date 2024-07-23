import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../interfaces/product.interface'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const prisma = new PrismaClient()

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

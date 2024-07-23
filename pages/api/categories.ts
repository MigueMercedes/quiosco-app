import type { NextApiRequest, NextApiResponse } from 'next'
import { ICategoriesResponse } from '../../interfaces/category.interface'
import prisma from '../../prisma/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategoriesResponse[] | { error: string }>
) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    const categories = await prisma.category.findMany({
      include: {
        products: true
      }
    })

    res.status(200).json(categories as ICategoriesResponse[])
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    res.status(500).json({ error: 'An error occurred while fetching categories' })
  }
}

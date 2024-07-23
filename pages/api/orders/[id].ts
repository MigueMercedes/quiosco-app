import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prismaClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'ID is required', success: false })
    }

    const updatedOrder = await prisma.order.update({
      where: {
        id: parseInt(id as string)
      },
      data: {
        status: true
      }
    })

    return res.status(200).json({
      message: 'Order updated',
      success: true,
      order: updatedOrder
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Order not found', success: false })
      }
    }

    console.error('Failed to update order:', error)
    return res.status(500).json({ message: 'Failed to update order', success: false })
  }
}

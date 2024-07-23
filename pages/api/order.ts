import type { NextApiRequest, NextApiResponse } from 'next/types'
import prisma from '../../prisma/prismaClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const status = req.query.status === 'complete'
      const orders = await prisma.order.findMany({
        where: {
          status
        }
      })
      return res.status(200).json(orders)
    }

    if (req.method === 'POST') {
      const { name, amount, orderData, date } = req.body

      if (!name || !amount || !orderData || !date) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const order = await prisma.order.create({
        data: {
          name,
          amount,
          orderData,
          date
        }
      })

      return res.status(201).json(order)
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (error) {
    console.error('Error handling request:', error)
    return res.status(500).json({ error: 'An error occurred while processing your request' })
  }
}

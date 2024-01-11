import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next/types";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const status = req.query.status === "complete" ? true : false;

  const prisma = new PrismaClient();

  // Get all orders
  const orders = await prisma.order.findMany({
    where: {
      status,
    },
  });

  res.status(200).json(orders);

  // Create an order
  const { name, amount, orderData, date } = req.body;
  if (req.method === "POST") {
    const order = await prisma.order.create({
      data: {
        name,
        amount,
        orderData,
        date,
      },
    });

    res.status(200).json(order);
  }
}

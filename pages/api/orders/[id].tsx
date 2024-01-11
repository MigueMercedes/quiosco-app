import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const { id } = req.query;

    await prisma.order.update({
      where: {
        id: parseInt(id as string),
      },
      data: {
        status: true,
      },
    });
    res.status(200).json({
      message: "Order updated",
      success: true,
    });
  }
}

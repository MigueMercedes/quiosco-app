import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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

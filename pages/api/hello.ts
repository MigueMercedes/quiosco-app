import type { NextApiRequest, NextApiResponse } from 'next/types'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json('Hello Miguel')
}

import { PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Layout from '../layout/layout'

const Home: NextPage = () => {
  return (
    <Layout page={'Home'}>
      <h1>Home</h1>
    </Layout>
  )
}

export default Home

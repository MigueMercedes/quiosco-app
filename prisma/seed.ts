import prisma from '../prisma/prismaClient'
import { categories } from './data/categories'
import { products } from './data/products'

const main = async () => {
  try {
    await prisma.category.createMany({
      data: categories
    })

    await prisma.product.createMany({
      data: products
    })
  } catch (error) {
    console.log(error)
  }
}

main()

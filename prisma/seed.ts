import { categories } from './data/categories'
import { products } from './data/products'
import prisma from './prismaClient'

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

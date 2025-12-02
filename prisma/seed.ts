import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@/src/generated/prisma/client";

//Instancia
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: categories,
    }); ///CreateMany va a crear multiples categorias
    await prisma.product.createMany({
      data: products,
    });
    console.log("TERMINO LA EJECUCUION CORRECTAMENTE");
  } catch (error) {
    console.log(error);
  }
}
//LLamarlo
main()
  .then(async () => {
    await prisma.$disconnect(); //Desconectamos
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect(); //Desconectamos
    process.exit(1); //Sacamos el Prisma
  });

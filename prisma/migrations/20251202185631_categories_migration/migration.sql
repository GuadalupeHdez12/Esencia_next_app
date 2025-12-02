/*
  Warnings:

  - You are about to drop the column `sluge` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "sluge",
ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "Product";

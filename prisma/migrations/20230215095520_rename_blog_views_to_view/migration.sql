/*
  Warnings:

  - You are about to drop the `BlogView` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BlogView";

-- CreateTable
CREATE TABLE "View" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "View_slug_key" ON "View"("slug");

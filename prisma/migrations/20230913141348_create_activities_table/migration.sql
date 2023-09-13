-- CreateTable
CREATE TABLE "Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTIme" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);

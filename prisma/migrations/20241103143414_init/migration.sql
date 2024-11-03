-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "contabilidad" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "estadoInformacion" BOOLEAN NOT NULL,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "infoFinanciera" TEXT NOT NULL,
    "usuarioCreador" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "proveedor_email_key" ON "proveedor"("email");

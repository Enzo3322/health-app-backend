import { Prisma, PrismaClient } from "@prisma/client";

export const HealthModels = () => {
  const healthDbHandler = new PrismaClient().healthAppointment;
  const createHealth = async (data: Prisma.HealthAppointmentCreateInput) => {
    const health = await healthDbHandler.create({
      data,
    });
    return health;
  };

  const updateHealth = async (
    id: string,
    data: Prisma.HealthAppointmentUpdateInput
  ) => {
    const health = await healthDbHandler.update({
      where: {
        id,
      },
      data,
    });
    return health;
  };

  const deleteHealth = async (id: string) => {
    const health = await healthDbHandler.delete({
      where: {
        id,
      },
    });
    return health;
  };

  const getHealthByUserId = async (id: string, count: number) => {
    const health = await healthDbHandler.findMany({
      take: count,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId: id,
      },
    });
    return health;
  };
  return { createHealth, updateHealth, deleteHealth, getHealthByUserId };
};

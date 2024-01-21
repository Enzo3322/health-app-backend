import { Prisma, PrismaClient } from "@prisma/client";

export const SessionModels = () => {
  const sessionDbHandler = new PrismaClient().session;

  const createSession = async (data: Prisma.SessionCreateInput) => {
    const session = await sessionDbHandler.create({
      data,
    });
    return session;
  };

  const deleteSession = async (id: string) => {
    const session = await sessionDbHandler.delete({
      where: {
        id,
      },
    });
    return session;
  };

  const getSessionById = async (id: string) => {
    const session = await sessionDbHandler.findUnique({
      where: {
        id,
      },
    });
    return session;
  };

  return { createSession, deleteSession, getSessionById };
};

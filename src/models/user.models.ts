import { Prisma, PrismaClient } from "@prisma/client";

export const UserModels = () => {
  const userDbHandler = new PrismaClient().user;

  const createUser = async (data: Prisma.UserCreateInput) => {
    const user = await userDbHandler.create({
      data,
    });
    return user;
  };

  const updateUser = async (id: string, data: Prisma.UserUpdateInput) => {
    const user = await userDbHandler.update({
      where: {
        id,
      },
      data,
    });
    return user;
  };

  const deleteUser = async (id: string) => {
    const user = await userDbHandler.delete({
      where: {
        id,
      },
    });
    return user;
  };

  const getUserById = async (id: string) => {
    const user = await userDbHandler.findUnique({
      where: {
        id,
      },
    });
    return user;
  };

  return { createUser, updateUser, deleteUser, getUserById };
};

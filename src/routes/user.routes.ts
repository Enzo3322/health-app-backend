import { FastifyInstance } from "fastify";

export const userRouter = async (fastify: FastifyInstance) => {
  fastify.post("/create", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.post("/login", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.put("/update", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.get("/logout", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.get("/profile", async (request, reply) => {
    return { hello: "user" };
  });
};

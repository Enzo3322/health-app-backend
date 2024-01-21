import { FastifyInstance } from "fastify";

export const healthRouter = async (fastify: FastifyInstance) => {
  fastify.get("/:period", async (request, reply) => {
    return { hello: "world" };
  });
  fastify.post("/create", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.post("/update", async (request, reply) => {
    return { hello: "user" };
  });
  fastify.delete("/delete", async (request, reply) => {
    return { hello: "user" };
  });
};

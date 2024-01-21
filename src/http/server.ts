import fastify from "fastify";
import { userRouter } from "../routes/user.routes";
import { healthRouter } from "../routes/health.routes";

const app = fastify();

app.register(userRouter, { prefix: "/api/v1/user" });
app.register(healthRouter, { prefix: "/api/v1/health" });

app.listen(
  {
    port: 3000,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);

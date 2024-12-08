import app from "./app";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;
const port = process.env.PORT;

try {
  const client = postgres(connectionString, { prepare: false });
  const db = drizzle(client);
  console.log("Connected to database");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log("Failed to connect to the database: ", error);
}

export default app;

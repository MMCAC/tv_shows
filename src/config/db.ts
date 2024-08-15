import { connect, connection } from "mongoose";

export const connectToDB = async () => {
  await connect("mongodb://localhost:27017/tv_shows");
};

connection.on("connect", () => {
  console.log(`App connected to database ${connection.db.databaseName}`);
});

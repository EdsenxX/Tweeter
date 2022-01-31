import { connect, connection } from "mongoose";

let isConnected = false;

// Connect to MongoDB
export default async function dbConnect() {
  if (isConnected) return;
  const db = await connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.error(err);
});

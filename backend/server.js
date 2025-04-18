import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import postsRoutes from "./routes/postsRoutes.js";

import { sql } from "./config/db.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); //middleware that protects by setting various http headers
app.use(morgan("dev")); // log the requests


app.use("/api/posts", postsRoutes)

async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log("Database is running successfully");
    } catch (error) {
        console.log("Error initDB", error);
    }
}


initDB().then(() => {
    app.listen(PORT, () => {
     console.log("Server is running on port " + PORT)
    });
});

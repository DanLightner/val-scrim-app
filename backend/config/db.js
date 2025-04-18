import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";


dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
    //creates sql connection using our env variables
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`

    //this function used as a tagged templateliteral, which allows us to writre sql queries

)

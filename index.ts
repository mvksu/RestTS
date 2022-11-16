import express, { Express, Request, Response } from 'express';
const mongoose = require("mongoose");

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const Router = require("./routes/productsRoutes");

app.use("/api/products", Router);


const dbConnData = {
    host: process.env.MONGO_HOST || "127.0.0.1",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || "localo",
};


mongoose
    .connect(
        `mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((response: any) => {
        console.log(
            `Connected to MongoDB. Database name: "${response.connections[0].name}"`
        );
        app.listen(port, () => {
            console.log(`API server listening at http://localhost:${port}`);
        });
    })
    .catch((error: any) => console.error("Error connecting to MongoDB", error));


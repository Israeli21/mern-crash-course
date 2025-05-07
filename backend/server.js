import express from "express";
import dotenv from "dotenv";
import{ connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();


app.use(express.json());    // allows us to accept JSON data in the req.body

// Every time we use /api/products, whe call the get function in product.route.js
// In server.js, we create one route for products
// Once we hit productRoutes, we call the product.route.js to check if its a get, create, update or delete method
app.use("/api/products", productRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});

// Application Programming Interface (API)
// User -> API -> Server (Back-end)
import express from "express";
import cors from "cors";

import contactsRouter from "./routers/api/contacts-router.js";

const app = express();
app.use(cors());

// app.use((req, res, next) => {
//   console.log("First midlleware");
//   next();
// });

app.use("/api/contacts", contactsRouter);

app.listen(3000, () => console.log("Server running on 3000 Port"));

import express from "express";

import contacts from "../../contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", (req, res) => {
  res.json(contacts);
});

contactsRouter.get("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.post("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.put("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.delete("/:id", (req, res) => {
  res.json(contacts[0]);
});

contactsRouter.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

export default contactsRouter;

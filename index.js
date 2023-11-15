import * as contactService from "./contacts.js";

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --contactId <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, contactId, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactService.listContacts();
      console.log(contacts);
      break;
    case "get":
      const oneContact = await contactService.getContactById(contactId);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contactService.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const deleteContact = await contactService.removeContact(contactId);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

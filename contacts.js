import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

function listContacts() {
  // Повертає масив контактів.
  const result = fs.readFile(contactsPath);
  return JSON.parse(result);
}

function getContactById(contactId) {
  // Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
}

function removeContact(contactId) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  const updateContacts = fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );
  return result;
}

function addContact(name, email, phone) {
  // Повертає об'єкт доданого контакту.
  const contacts = listContacts();
  const newContact = {
    id: nanoid,
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  const result = fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

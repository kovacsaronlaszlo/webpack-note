import {styleBody, addTitle, contact} from "./dom"
import users, {getPremUsers} from "./data"

console.log("index file");

const premUsers = getPremUsers(users);

styleBody();
addTitle("test 3");
console.log(contact)
console.log(users)
console.log(premUsers)
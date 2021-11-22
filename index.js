const uuid = require("uuid");
const localforage = require("localforage");
let local = document.getElementById("local");
let btn = document.getElementById("btn");
let user = {
  firstName: "",
  lastName: "",
  email: ""
};
var user_store = localforage.createInstance({
  name: "users",
});

btn.onclick = () => {
  local.onsubmit = (event) => {
    var data = new FormData(local).values();
    user.firstName = data.next().value;
    user.lastName = data.next().value;
    user_store.setItem(uuid.v4(), user);
    event.preventDefault();
  };
};

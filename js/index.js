let local = document.getElementById("local");
let btn = document.getElementById("btn");
let user = {
  firstName: "",
  lastName: "",
};

btn.onclick = () => {
  local.onsubmit = (event) => {
    var data = new FormData(local).values();
    user.firstName = data.next().value
    user.lastName = data.next().value
    localforage
      .setItem("user", user)
      .then(function (value) {
        console.log(value);
      })
      .catch(function (err) {
        console.log(err);
      });
    event.preventDefault();
  };
};

const dob = document.getElementById("dob");
const current_day_date = new Date().toISOString().slice(4, 10);

const year = new Date().getFullYear();

dob.min = `${year - 55}${current_day_date}`;
dob.max = `${year - 18}${current_day_date}`;

let user_entries = [];
let condition = true;

function submitListener(event) {
  event.preventDefault();
  document.getElementById("show_the_data").innerHTML = "";
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let acceptTerms = document.getElementById("tick_mark").checked;

  let entries = {
    name,
    email,
    password,
    dob,
    acceptTerms,
  };
  if (condition) {
    let RegisteredUsers = [];
    RegisteredUsers = JSON.parse(localStorage.getItem("user-entries")) || [];
    for (let i = 0; i < RegisteredUsers.length; i++) {
      user_entries.push(RegisteredUsers[i]);
    }
    condition = false;
  }
  user_entries.push(entries);
  localStorage.setItem("user-entries", JSON.stringify(user_entries));
  show_the_data();
}
function show_the_data() {
  let RegisteredUsers = JSON.parse(localStorage.getItem("user-entries")) || [];
  for (let i = 0; i < RegisteredUsers.length; i++) {
    let res = `<tr>
    <td class="py-3 px-2">${RegisteredUsers[i].name}</td>
    <td class="py-3 px-2">${RegisteredUsers[i].email}</td>
    <td class="py-3 px-2">${RegisteredUsers[i].password}</td>
    <td class="py-3 px-2">${RegisteredUsers[i].dob}</td>
    <td class="py-3 px-2">${RegisteredUsers[i].acceptTerms}</td>
  </tr>`;
    document.getElementById("show_the_data").innerHTML += res;
  }
}
show_the_data();
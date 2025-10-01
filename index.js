let addUser = document.getElementById("addUser");
let cancel = document.getElementById("cancel");
let users = document.getElementById("users");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userRole = document.getElementById("userRole");
let save = document.getElementById("save");

addUser.addEventListener("click",()=>{
  document.getElementById("modul").classList.remove("hidden")
  document.getElementById("modul").classList.add("block")



  
})

cancel.addEventListener("click",()=>{
  document.getElementById("modul").classList.remove("block")
  document.getElementById("modul").classList.add("hidden")
})


save.addEventListener("click",(e)=>{
        //     <tbody id="userTable" class="divide-y divide-gray-200">
        
        //   <tr>
        //     <td class="p-3">1</td>
        //     <td class="p-3">John Doe</td>
        //     <td class="p-3">john@example.com</td>
        //     <td class="p-3">Admin</td>
        //     <td class="p-3 text-center flex justify-center gap-3">
        //       <button class="text-red-600 ">🗑️</button>
        //     </td>
        //   </tr>
        // </tbody>
e.preventDefault();
console.log(userName.value);

let tbody = document.createElement("tbody")
let tr = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
let td4 = document.createElement("td")
let td5 = document.createElement("td")
let btn1 = document.createElement("button")
let btn2 = document.createElement("button")


tbody.classList.add("divide-y","divide-gray-200")
td1.classList.add("p-3")
td2.classList.add("p-3")
td3.classList.add("p-3")
td4.classList.add("p-3")
td5.classList.add("p-3","text-center","flex","justify-center","gap-3")
btn1.classList.add("text-blue-600")
btn2.classList.add("text-red-600")


td1.innerHTML = users.rows.length
td2.innerHTML = userName.value
td3.innerHTML = userEmail.value
td4.innerHTML = userRole.value

users.appendChild(tbody);
tbody.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
td5.appendChild(btn1);
td5.appendChild(btn2);
btn2.innerText = "🗑️"

btn2.addEventListener("click",()=>{
  users.deleteRow(tr.rowIndex)
})
})



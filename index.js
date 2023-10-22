const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];  // reload krne pr aa jaae
// agar local storage me items hai toh string ni kr skte q ki array hai toh objects honge isliye convert krke likha 
// aur agar nhi hai kuch stored local storage me then empty array paas krdo
showAllTasks();

function showAllTasks() { // loop krega aur value show krega
  tasks.forEach((value, index) => { // isse iterate hokr index milra hai
    const div = document.createElement("div"); // bna liya div
    div.setAttribute("class", "task");// css me property de diya class diya div ko named task

    const innerDiv = document.createElement("div"); // div k andrr ek aurrr div bnaya
    div.append(innerDiv);// ineer div bhej diya div me

    const p = document.createElement("p");// para bnaya
    p.innerText = value.title;// value isliye kiya q ki forEach me value h first parameter
    innerDiv.append(p);// inner div me para daala

    const span = document.createElement("span"); // span bnaya
    span.innerText = value.description; // value isliye kiya q ki forEach me value h first parameter
    innerDiv.append(span);// inner div me daala

    const btn = document.createElement("button");// button bnaya
    btn.setAttribute("class", "deleteBtn");// btn ko ek class dekr css property diya

    btn.innerText = "-";//iska inner text define kiya

    btn.addEventListener("click", () => { // btn pr event listener lgaya ki click krne pr kya hoga
      removeTasks();// remove kro
      tasks.splice(index, 1);// array mese ek hta kr phir show task lga do
      localStorage.setItem("tasks", JSON.stringify(tasks)); // 1 task htane ke baad wo local storagge me bhi update ho jaae
      showAllTasks();
    });

    div.append(btn); // div me btn ko add kiya
    container.append(div); // container me div ko daala
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task"); // saare div  milgye task me
    div.remove();// div ko remove kr diya
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();// form submit ho skta hai bss reload ni hoga 
  removeTasks(); // remove task phle then push krenge 

  tasks.push({
    title: title.value,//push krunga array me value jo user daalega
    description: description.value,//push krunga array me value jo user daalega
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); //local storage me taska naam se set krunga tasks ko aur objects show na ho isliye strings me convert kr lunga 
  showAllTasks(); // is function ko call kiya
});

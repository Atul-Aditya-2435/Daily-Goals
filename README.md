const title = document.getElementById("title");<br>
const description = document.getElementById("description");<br>
const form = document.querySelector("form");<br>
const container = document.querySelector(".container");<br>

const tasks = localStorage.getItem("tasks")<br>
  ? JSON.parse(localStorage.getItem("tasks"))<br>
  : [];  // reload krne pr aa jaae<br>
// agar local storage me items hai toh string ni kr skte q ki array hai toh objects honge isliye convert krke likha <br>
// aur agar nhi hai kuch stored local storage me then empty array paas krdo<br>
showAllTasks();<br>

function showAllTasks() { // loop krega aur value show krega<br>
  tasks.forEach((value, index) => { // isse iterate hokr index milra hai<br>
    const div = document.createElement("div"); // bna liya div<br>
    div.setAttribute("class", "task");// css me property de diya class diya div ko named task<br>

    const innerDiv = document.createElement("div"); // div k andrr ek aurrr div bnaya<br>
    div.append(innerDiv);// ineer div bhej diya div me<br>

    const p = document.createElement("p");// para bnaya<br>
    p.innerText = value.title;// value isliye kiya q ki forEach me value h first parameter<br>
    innerDiv.append(p);// inner div me para daala<br>

    const span = document.createElement("span"); // span bnaya<br>
    span.innerText = value.description; // value isliye kiya q ki forEach me value h first parameter<br>
    innerDiv.append(span);// inner div me daala<br>

    const btn = document.createElement("button");// button bnaya<br>
    btn.setAttribute("class", "deleteBtn");// btn ko ek class dekr css property diya<br>

    btn.innerText = "-";//iska inner text define kiya<br>

    btn.addEventListener("click", () => { // btn pr event listener lgaya ki click krne pr kya hoga<br>
      removeTasks();// remove kro<br>
      tasks.splice(index, 1);// array mese ek hta kr phir show task lga do<br>
      localStorage.setItem("tasks", JSON.stringify(tasks)); // 1 task htane ke baad wo local storagge me bhi update ho jaae<br>
      showAllTasks();<br>
    });<br>

    div.append(btn); // div me btn ko add kiya<br>
    container.append(div); // container me div ko daala<br>
  });<br>
}<br>

function removeTasks() {<br>
  tasks.forEach(() => {<br>
    const div = document.querySelector(".task"); // saare div  milgye task me<br>
    div.remove();// div ko remove kr diya<br>
  });<br>
}<br>

form.addEventListener("submit", (e) => {<br>
  e.preventDefault();// form submit ho skta hai bss reload ni hoga <br>
  removeTasks(); // remove task phle then push krenge <br>

  tasks.push({<br>
    title: title.value,//push krunga array me value jo user daalega<br>
    description: description.value,//push krunga array me value jo user daalega<br>
  });<br>

  localStorage.setItem("tasks", JSON.stringify(tasks)); //local storage me taska naam se set krunga tasks ko aur objects show na ho isliye strings me convert kr lunga <br>
  showAllTasks(); // is function ko call kiya<br>
});<br>
# Daily-Goals

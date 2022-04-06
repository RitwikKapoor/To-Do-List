const inputBox = document.querySelector(".inputBox input")
const addBtn = document.querySelector(".inputBox button")
const todolist = document.querySelector(".todo-list")
const clearAll = document.querySelector(".footer button")

inputBox.onkeyup = () => {
    let userData = inputBox.value
    if(userData.trim() != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
}
showTasks()

addBtn.onclick = () => {
    let userData = inputBox.value
    let getLocalSotorage = localStorage.getItem("New Todo")
    if(getLocalSotorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalSotorage)
    }
    listArr.push(userData)  
    localStorage.setItem("New Todo" , JSON.stringify(listArr))
    showTasks()
}

function showTasks(){
    let getLocalSotorage = localStorage.getItem("New Todo")
    if(getLocalSotorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalSotorage)
    }
    const pendingNumber = document.querySelector(".pending")
    pendingNumber.textContent = listArr.length
    if(listArr.length > 0){
        clearAll.classList.add("active")
    }else{
        clearAll.classList.remove("active")
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
       newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`   
    });

    todolist.innerHTML = newLiTag;
    inputBox.value = "";
    addBtn.classList.remove("active")    
}

function deleteTask(index){
    let getLocalSotorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalSotorage)
    listArr.splice(index,1)
    localStorage.setItem("New Todo" , JSON.stringify(listArr))
    showTasks()
}

clearAll.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo" , JSON.stringify(listArr))
    showTasks()
}
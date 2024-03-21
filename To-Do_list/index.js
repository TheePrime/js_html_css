const myTasks =[]

const inputEl =document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
let ulEl = document.getElementById("ul-el")

const tasksFromLocalStorage =JSON.parse(localStorage.getItem("myTasks"))



if(tasksFromLocalStorage){
   myTasks = tasksFromLocalStorage
   renderTasks(myTasks)
}


 function renderTasks(){
    
    for(let i = 0; i < myTasks.length ; i++){
       taskList  = ` <li><input type='checkbox'>  ${myTasks[i]}</li> `
    }

    ulEl.innerHTML +=taskList
}


addBtn.addEventListener("click", function(){
    localStorage.setItem("myTasks", JSON.stringify(myTasks))
        myTasks.push(inputEl.value)
        inputEl.value =""
        console.log("am good")
        renderTasks()
})
document.addEventListener('DOMContentLoaded', () => {
let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_todo.value)
    form.reset()
})
})

function buildToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo} `
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}

function changeDay(day){
let h4 = document.querySelector('h4')
h4.innerText = day
h4.id = day
h4.className = 'title'
h4.style.color = 'green'
h4.style.fontFamily = 'Apple Chancery'
}

changeDay('Tuesday')

function mainHeader(title){
    let h3 = document.querySelector('h3')
    h3.innerText = title
    h3.id = title
    h3.style.color = 'black'
    h3.style.fontFamily = 'Papyrus'
}

mainHeader('To Do List')

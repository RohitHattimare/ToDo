const addForm = document.querySelector('.add');
const todoul = document.querySelector('.todos');
const searchIp = document.querySelector('.search input');

//method to create and add new todo template to html
const newTodoTemplate = todo => {
    const template = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}  </span> 
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todoul.innerHTML += template;
};


//submit event for new todos
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length)
        newTodoTemplate(todo);
    addForm.reset();v
    console.log(delbtn);
})

//delete existing todos (use Event delegation)
todoul.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
        };
    });


//search filter module
const searchFilter = (val) =>{

    //filtered list containing value
    Array.from(todoul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(val))
    .forEach((todo) => todo.classList.add('filtered'));

    //Filtered list without value
    Array.from(todoul.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(val))
    .forEach((todo) => todo.classList.remove('filtered'));
};    


//Event listner for search on keyup
searchIp.addEventListener('keyup', ()=> {
    const val = searchIp.value.trim().toLowerCase().split(' ');
    console.log(val);
    val.forEach((key) => searchFilter(key)); 
});

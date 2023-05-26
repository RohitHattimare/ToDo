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


//Feature to searchentries
// when search event sumbits then get list of ul
// then filter ul.span contents with e.target .value
// replace ul.innerhtml with new tag using filt
const filterSearch = (val) => { 
   

};

searchIp.addEventListener('keyup', (e)=> {
    const val = e.target.value.trim();
    filterSearch(val);
});

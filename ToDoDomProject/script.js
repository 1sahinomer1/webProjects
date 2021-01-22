// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

//load Items
loadItems();


// call event listeners
eventListeners();

function eventListeners(){
    // submit event
    form.addEventListener('submit',addNewItem);

    //delete an item
    taskList.addEventListener('click',deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

function loadItems(){
    items = getItemFromLS();

    items.forEach(function(item){
        createItem(item);
    })
}

//get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items=[];
    }
    else{
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function createItem(text){
    // create li
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);
}

//delete all items
function deleteAllItems(){
    if(confirm('are you sure?')){

        //taskList.innerHTML='';

    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
}

    e.preventDefault();
}

//delete an item
function deleteItem(e){
    
        if(e.target.className=='fas fa-times'){
            if(confirm('are you sure ?')){
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}

// add new item
function addNewItem(e){
    if(input.value ===''){
        alert('add new item');
    }

    //create item
    createItem(input.value);
    // clear input
    input.value='';

    e.preventDefault();
}

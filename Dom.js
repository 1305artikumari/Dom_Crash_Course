var form =document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter =document.getElementById('filter');
// Form submit event 
form.addEventListener('submit', addItem)

// Delete event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){

    e.preventDefault();
    
    // Get input value
    var newItem=document.getElementById('item').value;

    // create new li element
    var li=document.createElement('li')

    // Add class
    li.className='list-group-item';
   
    // Add text node with input value
     li.appendChild(document.createTextNode(newItem));

    //  Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    var editBtn = document.createElement('button');

    editBtn.className="btn btn-danger btn-sm float-right edit";

    editBtn.appendChild(document.createTextNode('edit'));


    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Append li to list
     itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){ 
            var li = e.target;
            var c = li.parentElement;
            itemList.removeChild(c);
        }
    }
}

//  Filter Items
function filterItems(e)
{
    // convert text to lowercase
    var tx = e.target;
    var text = tx.value.toLowerCase();
    // Go lis
    var items = itemList.getElementsByTagName('li');
    
    console.log(items);

    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        // console.log(itemName);

        if(itemName.toLowerCase().indexOf(text)!=-1){
             item.style.display='block';
        }else{
            item.style.display='none';
        }

    });


}



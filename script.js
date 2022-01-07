// ***** Add an Item to the shopping list
let addItem = document.getElementById('add-item');
addItem.addEventListener('submit', (e) => {
  let ul = document.getElementsByTagName('ul')[0];
  // Prevent the form from refreshing
  e.preventDefault();

  let newItem = addItem.querySelector('input').value;

  // Create list items dynamically
  let li = document.createElement('li');
  let groceryItem = document.createElement('span');
  let removeItem = document.createElement('span');

  li.appendChild(groceryItem);
  li.appendChild(removeItem);

  // Add the new Item to the list
  ul.appendChild(li);

  // Add the item value to the span
  groceryItem.textContent = newItem;
  groceryItem.classList.add('item');

  // Add inner html and class to Delete button
  removeItem.textContent = 'Delete';
  removeItem.classList.add('delete');
});

// ***** Delete Items from the shopping list
let list = document.getElementById('list');
list.addEventListener('click', deleteItem);

function deleteItem(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let item = target.parentElement;
    item.remove();
  }
}

// ***** Hide the shopping list
let checkbox = document.getElementById('hide');
checkbox.addEventListener('change', (e) => {
  let shoppingList = document.getElementById('list');
  if (checkbox.checked) {
    shoppingList.style.display = 'none';
  } else {
    shoppingList.style.display = 'block';
  }
});

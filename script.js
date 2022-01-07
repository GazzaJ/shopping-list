// ***** Add an Item to the shopping list *****
let addItem = document.getElementById('add-item');
addItem.addEventListener('submit', (e) => {
  let ul = document.getElementsByTagName('ul')[0];
  // Prevent the form from refreshing
  e.preventDefault();

  let newItem = addItem.querySelector('input').value;

  // Clear the input box on Add
  addItem.querySelector('input').value = null;

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

// ***** Search Items in the shopping list *****
const SEARCH = document.forms['item-search'].querySelector('input');
// Access input value and convert to lowercase
SEARCH.addEventListener('keyup', (e) => {
  let input = e.target.value.toLowerCase();
  // get the list values
  let shoppingList = document.querySelector('#list ul');
  let listItems = shoppingList.getElementsByTagName('li');
  // Convert HTML Collection to an array
  let itemArray = Array.from(listItems);
  // loop through values
  itemArray.forEach((item) => {
    let itemName = item.firstElementChild.textContent;
    itemNameLower = itemName.toLowerCase();
    if (itemNameLower.indexOf(input) == -1) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });

  // match results
});

// ***** Delete Items from the shopping list *****
let list = document.getElementById('list');
list.addEventListener('click', deleteItem);

function deleteItem(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let item = target.parentElement;
    item.remove();
  }
}

// ***** Hide the shopping list *****
let checkbox = document.getElementById('hide');
checkbox.addEventListener('change', (e) => {
  let shoppingList = document.getElementById('list');
  if (checkbox.checked) {
    shoppingList.style.display = 'none';
  } else {
    shoppingList.style.display = 'block';
  }
});

// ***** Page Bottom Joke Tab *****
let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');
let selectedPanel = null;

headings.addEventListener('click', (e) => {
  let target = e.target;
  let dataAttribute = e.target.dataset.clicked;
  if (target.tagName == 'LI') {
    if (selectedPanel != null) {
      selectedPanel.classList.toggle('selected');
    }
    selectedPanel = target;
    selectedPanel.classList.toggle('selected');
  }
  let targetPanel = document.querySelector(dataAttribute);
  panels.forEach((panel) => {
    if (panel == targetPanel) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
});

// ***** Page Bottom Info Tab *****

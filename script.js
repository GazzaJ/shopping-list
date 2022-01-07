// Delete Items from the shopping list
let list = document.getElementById('list');
list.addEventListener('click', deleteItem);

function deleteItem(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let item = target.parentElement;
    item.remove();
  }
}

// Add an Item to the shopping list

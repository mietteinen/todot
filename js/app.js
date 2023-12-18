function toggleDarkMode() {
    console.log("Toggling dark mode");
    document.body.classList.toggle('dark-mode');
}

const toggleButton = document.getElementById('toggle-dark-mode');

if (toggleButton) {
    toggleButton.addEventListener('click', toggleDarkMode);
}

// Event listener for the add item button.
document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.getElementById('add-item');
    const todoList = document.getElementById('todo-list');

    addItemButton.addEventListener('click', function () {
        // Create a new list item.
        const newItem = document.createElement('li');
        newItem.classList.add('todo-list-item');

        // Create a button for dragging the item.
        const dragButton = document.createElement('button');
        dragButton.classList.add('drag-button');

        // Create a new image.
        const newImage = document.createElement('img');
        newImage.src = 'assets/icons/drag.png';
        newImage.classList.add('drag-icon');

        // Create a new span for the item text.
        const newItemText = document.createElement('span');
        newItemText.classList.add('item-text');
        newItemText.textContent = 'New Item';

        // Create a button that deletes the item.
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');

        // Create a new image.
        const deleteImage = document.createElement('img');
        deleteImage.src = 'assets/icons/delete.png';
        deleteImage.classList.add('delete-icon');

        // Append the elements to the new list item.
        dragButton.appendChild(newImage);
        deleteButton.appendChild(deleteImage);
        newItem.appendChild(dragButton);
        newItem.appendChild(newItemText);
        newItem.appendChild(deleteButton);

        // Append the new list item to the todo list.
        todoList.appendChild(newItem);
    });
});
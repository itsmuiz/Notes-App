const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
const clearBtn = document.querySelector('.clear-btn');

// Function to save notes
function saveNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// Load saved notes
function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes') || '';
}
loadNotes();

// Clear all notes
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('notes');
    notesContainer.innerHTML = '';
});

// Function to add a note
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = './images/delete.png';
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    saveNotes(); // Save notes after creating a new note
});

// Save notes when content changes
notesContainer.addEventListener('input', () => {
    saveNotes();
});

// Delete note when delete button is clicked
notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
        saveNotes();
    }
});

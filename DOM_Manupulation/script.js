function showAlert() {
    const h1Content = document.querySelector('h1').innerText;
    alert(h1Content);
}


function addDiv() {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.className = 'dynamic-div';
    newDiv.innerText = 'NEW BOX';
    container.appendChild(newDiv);
}

function removeDiv() {
    const container = document.getElementById('container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function showDivCount() {
    const container = document.getElementById('container');
    const divCount = container.getElementsByClassName('dynamic-div').length;
    alert('NUMBER OF BOX: ' + divCount);
}

function createYouTubeLink() {
    const container = document.getElementById('linkContainer');
    
    // Create a new anchor element for YouTube
    const newLink = document.createElement('a');
    newLink.href = 'https://www.youtube.com';  // Set link destination to YouTube
    newLink.innerText = 'YOUTUBE';       // Set link text
    newLink.className = 'created-link';       // Add some styling
    newLink.target = '_blank';                // Open link in a new tab

    // Append the new link to the container
    container.appendChild(newLink);
}

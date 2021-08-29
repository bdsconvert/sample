// Get the GitHub json file name
const gitHubForm = document.getElementById('gitHubForm');

gitHubForm.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    let jsonfile = document.getElementById('jsonfilename');
    let jsonfilename = jsonfile.value;          

    loadbooks(jsonfilename);

})


function loadbooks(jsonfilename){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://bdsconvert.github.io/bds/data/${jsonfilename}`;
   
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Loop over each object in data array
        for (let i in data) {

            // Get the ul with id of of userRepos
            let ul = document.getElementById('books');
    
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
            // Create the html markup for each li
            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].Title}</p>
                <p><strong>Description:</strong> ${data[i].Author}</p>
                <p><strong>URL:</strong> <a href="${data[i].ISBN}">${data[i].ISBN}</a></p>
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
        
        }

    }
    
    // Send the request to the server
    xhr.send();
    
}

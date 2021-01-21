const form = document.getElementById('form');
let memeCounter = 0;

form.addEventListener('submit',function(e){
    e.preventDefault();
    const memeContainer = document.getElementById('memecontainer');

    //creating a div for each meme generated
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme-image');
    memeDiv.id = `meme-${memeCounter}`;
    memeCounter++;
    console.log(memeDiv.id);

    //image for meme
    const imgUrl = document.getElementById('img-link').value;
    const img = document.createElement('img');
    img.src = imgUrl;
    
    //top text
    const topText = document.createElement('div');
    topText.classList.add('text', 'top-text');
    topText.innerText = document.getElementById('top-txt').value;
    
    //bottom text
    const bottomText = document.createElement('div');
    bottomText.classList.add('text', 'bottom-text');
    bottomText.innerText = document.getElementById('bottom-txt').value;
    
    //delete button on meme 
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-x');
    deleteButton.innerText = 'X';
    
    //add each element to memeDiv and add each memeDiv to memeContainer
    memeContainer.appendChild(memeDiv);
    memeDiv.appendChild(img);
    memeDiv.appendChild(topText);
    memeDiv.appendChild(bottomText);
    memeDiv.appendChild(deleteButton);

    console.log(memeDiv.parentElement);

    //event listeners for delete button
    memeDiv.addEventListener('mouseover', function() {
        deleteButton.classList.add('delete-x--open');
       
    })

    memeDiv.addEventListener('mouseout', function() {
        deleteButton.classList.remove('delete-x--open');
    })

    
    memeDiv.addEventListener('click', removeMeme);
    function removeMeme(event) {
        if (event.target.classList.contains('delete-x--open')) {
            console.log('clicked');
            const memeDivEl = event.target.parentElement;
            memeContainer.removeChild(memeDivEl);
        }   
    }

       /*  console.log('clicked');
        const buttonEl = event.target;
        const memeDivEl = buttonEl.parent;
        memeContainer.removeChild(); */
 


  


    form.reset();

})



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

    //image for meme
    const imgUrl = document.getElementById('img-link').value;
    const img = document.createElement('img');
    img.src = imgUrl;
    memeDiv.appendChild(img);

    const topText = document.createElement('div');
    topText.classList.add('text', 'top-text');
    topText.innerText = document.getElementById('top-txt').value;
    memeDiv.appendChild(topText);
    
    const bottomText = document.createElement('div');
    bottomText.classList.add('text', 'bottom-text');
    bottomText.innerText = document.getElementById('bottom-txt').value;
    memeDiv.appendChild(bottomText);

    const deleteMeme = document.createElement('div');
    deleteMeme.classList.add('delete-x');
    deleteMeme.innerText = 'X';
    memeDiv.appendChild(deleteMeme);

    memeDiv.addEventListener('mouseover', function() {
        deleteMeme.classList.add('delete-x--open');
       
    })

    memeDiv.addEventListener('mouseout', function() {
        deleteMeme.classList.remove('delete-x--open');
    })

    deleteMeme.addEventListener('click', function(event) {
        const buttonEl = event.target;
        const memeDivEl = buttonEl.parent;
        memeContainer.removeChild(memeDiv);
    })


    memeContainer.appendChild(memeDiv);


    form.reset();

})



const form = document.getElementById('form');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const memeContainer = document.getElementById('memecontainer');

    //create a div for each meme generated
    const memeDiv = document.createElement('div');

    //create a div to make the meme image the background and size/style in css
    const imgUrl = document.getElementById('img-link').value;

    if (imgUrl === '') {
        return false;
    }

    const divImg = document.createElement('div');
    divImg.classList.add('meme-img')
    divImg.style.backgroundImage = `url(${imgUrl})`;
    
    //top text
    const topText = document.createElement('div');
    topText.classList.add('text', 'top-text');
    topText.innerText = document.getElementById('top-txt').value;
        if (topText.innerText.length > 16) {
            topText.style.fontSize = 40;
        }
        if (topText.innerText.length > 32) {
            topText.style.fontSize = 32;
        }

    //bottom text
    const bottomText = document.createElement('div');
    bottomText.classList.add('text', 'bottom-text');
    bottomText.innerText = document.getElementById('bottom-txt').value;
        if (bottomText.innerText.length > 16) {
            bottomText.style.fontSize = 40;
        }
       if (bottomText.innerText.length > 20) {
            bottomText.style.fontSize = 32;
        }
    
    
    //delete button on meme 
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-x');
    deleteButton.innerText = 'X';

    divImg.appendChild(topText);
    divImg.appendChild(bottomText);
    divImg.appendChild(deleteButton);


    memeDiv.appendChild(divImg);
    
    //add each element to memeDiv and add each memeDiv to memeContainer
    memeContainer.appendChild(memeDiv);
  
    //scrolls to bottom of each meme generated 
    memeContainer.scrollIntoView({
        inline: 'end',
        block: 'end',
        behavior: 'smooth'
    });
   

    //event listeners for delete button
    divImg.addEventListener('mouseover', function() {
        deleteButton.classList.add('delete-x--open');
        deleteButton.style.zIndex = 10;
       
    })

    divImg.addEventListener('mouseout', function() {
        deleteButton.classList.remove('delete-x--open');
    })

    
   divImg.addEventListener('click', removeMeme);
    function removeMeme(event) {
        if (event.target.classList.contains('delete-x--open')) {
            const memeDivEl = event.target.parentElement;
            memeDiv.removeChild(memeDivEl);
        }   
    }

    form.reset();

})

//Scroll button and scroll to top function

const scrollButton = document.getElementById('scrollBtn');

window.addEventListener('scroll', activateScroll);

function activateScroll() {
    if(window.pageYOffset > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

scrollButton.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}
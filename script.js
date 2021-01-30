const form = document.getElementById('form');
let memeCounter = 0;

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const memeContainer = document.getElementById('memecontainer');

    //creating a div for each meme generated
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme-image');
    memeDiv.id = `meme-${memeCounter}`;
    memeCounter++;

    //create a div to make the meme image the background and size accordingly
    const imgUrl = document.getElementById('img-link').value;
    const divImg = document.createElement('div');
    divImg.classList.add('meme-img')
    divImg.style.backgroundImage = `url(${imgUrl})`;
    
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


//change title colors effect (for fun)

/* function changeTitleColors() {
    const title = document.getElementById('title')
    const chars = title.innerText.split('')
    title.innerText = ''
    chars.forEach((char) => {
        const element = document.createElement('span')
        element.style.color = Math.floor(Math.random()*16777215).toString(16);
        element.innerText = char;
        title.appendChild(element)
    });
}

setInterval(changeTitleColors, 1000)
 */
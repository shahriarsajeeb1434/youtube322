  
  // welcome page gone

  const welcome = document.querySelector('#welcome');
  const animation = document.querySelector("#animation");

  welcome.addEventListener('click', () =>{
  	welcome.classList.add("remove");
  	animation.style.display = 'inline-block';
  });
  
  // animation
    
    let stars = document.querySelector("#stars");
    let moon = document.querySelector("#moon");
    let wish = document.querySelector("#wish");

    window.addEventListener("scroll", function(){
    	let value = window.scrollY;
    	stars.style.left = value * 0.25 + 'px';
    	moon.style.left = value * .4 + 'px';
    	wish.style.marginRight = value * 4 + 'px';
    });

    // scroll reveal 

    const sr = ScrollReveal({
    	origin: 'top',
    	distance: '30px',
    	duration: 2000,
    	reset: true
    });

    sr.reveal(`#welcome`,{
        interval: 200
    });




   


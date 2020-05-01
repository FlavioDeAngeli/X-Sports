/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// - TEXT SECTION ANIMATION - ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//article 1
const readMore1 = document.querySelector('#read_more_1');
const readLess1 = document.querySelector('#read_less_1');
const moreText1 = document.querySelector('#more_text_1');

readMore1.addEventListener('click', ()=>{
	moreText1.style.display = "inline";
	readMore1.style.display = "none";
	readLess1.style.display = "inline";
	});

readLess1.addEventListener('click', ()=>{
	moreText1.style.display = "none";
	readMore1.style.display = "inline";
	readLess1.style.display = "none";
	});

//article 2
const readMore2 = document.querySelector('#read_more_2');
const readLess2 = document.querySelector('#read_less_2');
const moreText2 = document.querySelector('#more_text_2');

readMore2.addEventListener('click', ()=>{
	moreText2.style.display = "inline";
	readMore2.style.display = "none";
	readLess2.style.display = "inline";
	});

readLess2.addEventListener('click', ()=>{
	moreText2.style.display = "none";
	readMore2.style.display = "inline";
	readLess2.style.display = "none";
	});

//sub article 1
const readMore3 = document.querySelector('#read_more_3');
const readLess3 = document.querySelector('#read_less_3');
const moreText3 = document.querySelector('#more_text_3');

readMore3.addEventListener('click', ()=>{
	moreText3.style.display = "inline";
	readMore3.style.display = "none";
	readLess3.style.display = "inline";
	});

readLess3.addEventListener('click', ()=>{
	moreText3.style.display = "none";
	readMore3.style.display = "inline";
	readLess3.style.display = "none";
	});

//sub article 2
const readMore4 = document.querySelector('#read_more_4');
const readLess4 = document.querySelector('#read_less_4');
const moreText4 = document.querySelector('#more_text_4');

readMore4.addEventListener('click', ()=>{
	moreText4.style.display = "inline";
	readMore4.style.display = "none";
	readLess4.style.display = "inline";
	});

readLess4.addEventListener('click', ()=>{
	moreText4.style.display = "none";
	readMore4.style.display = "inline";
	readLess4.style.display = "none";
	});

//sub article 3
const readMore5 = document.querySelector('#read_more_5');
const readLess5 = document.querySelector('#read_less_5');
const moreText5 = document.querySelector('#more_text_5');

readMore5.addEventListener('click', ()=>{
	moreText5.style.display = "inline";
	readMore5.style.display = "none";
	readLess5.style.display = "inline";
	});

readLess5.addEventListener('click', ()=>{
	moreText5.style.display = "none";
	readMore5.style.display = "inline";
	readLess5.style.display = "none";
	});

//article 4
const readMore6 = document.querySelector('#read_more_6');
const readLess6 = document.querySelector('#read_less_6');
const moreText6 = document.querySelector('#more_text_6');

readMore6.addEventListener('click', ()=>{
	moreText6.style.display = "inline";
	readMore6.style.display = "none";
	readLess6.style.display = "inline";
	});

readLess6.addEventListener('click', ()=>{
	moreText6.style.display = "none";
	readMore6.style.display = "inline";
	readLess6.style.display = "none";
	});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// - GALLERY SECTION ANIMATION - ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//select and declare elements

const galleryContainer = document.querySelector('.gallery_container'); //select gallery container
const gallerySlide = document.querySelector('.gallery_slide'); //select images container
const galleryImages = document.querySelectorAll('.gallery_slide img'); //select all images in the container
const prevBtn = document.querySelector('#prevBtn'); //select previous button
const nextBtn = document.querySelector('#nextBtn'); //select next button

//define functions

let counter = 0; //set up a counter
 
let slide_on = false; //checks if automatic slide is already running

let size = galleryImages[0].clientWidth; //picks the size of the image (to measure the movement of transition)

let gallery_resize = () => {
	size = galleryImages[0].clientWidth; //re-picks the size of the image (to measure the movement of transition)
	clearInterval(slideId); //stops auto slide
	slide_on = !slide_on;
	translation(); //slide transition
	autoSlide();   //start automatic slide function
}

let translation = () => gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)' //puts the first image into the div

let slide = () => {                                                           //defines slide function
				gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
				counter++;                                                    //increase counter
				translation()                                                 //slide transition
				}

let slideId; //declare set interval ID (IMPORTANT!)
 
autoSlide = () =>  { if (slide_on === false ) slideId = setInterval(slide, 3000);//defines and execute automatic slide function (slide)
					 slide_on = true;
				}

autoSlide();  //start automatic slide function

//event listeners

nextBtn.addEventListener('click', ()=>{                           //event listener: when "next" button is clicked
	if (counter >= galleryImages.length -1) return;               //stops function when reach the last image (fast clicks bug fix)
	gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
	counter++; //increase counter
	translation(); //slide transition
	clearInterval(slideId);
	slide_on = false; 
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
			
});

prevBtn.addEventListener('click', ()=>{ //event listener: when "previous" button is clicked
	if (counter <= 0) return; //stops function when reach the first image (fast clicks bug fix)
	gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
	counter--; //decrease counter
	translation(); //slide transition
	clearInterval(slideId); //stops auto slide
	slide_on = false;
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
});

gallerySlide.addEventListener('transitionend', () => {  //function will be executed any time the transition ends
	if (galleryImages[counter].id === 'lastClone') {    //when the first image is reached
		gallerySlide.style.transition = "none";         //stops current transition (slide)
		counter = galleryImages.length -2;              //jumps to the start (1 img + 1 clone)
		translation(); //slide transition
	}
});

gallerySlide.addEventListener('transitionend', () => {  //function will be executed any time the transition ends
	if (galleryImages[counter].id === 'firstClone') {   //when the last image is reached
		gallerySlide.style.transition = "none";         //stops current transition (slide)
		counter = galleryImages.length - counter;       //jumps to the start (1 img + 1 clone)
		translation(); //slide transition
	}
});

galleryContainer.addEventListener('click', ()=>{ 
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
	if (slide_on === true) {clearInterval(slideId); //stops auto slide
							slide_on = false;}
	else {slide();     //slide transition
		  autoSlide();     //start automatic slide function
	} 
});
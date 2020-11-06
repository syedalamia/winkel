// scroll animation 

window.addEventListener('scroll', function(){
    let header = document.querySelector('header');

        header.classList.toggle('scroll-active', window.scrollY > 0)
    
})

// aos 
AOS.init();


// AOS.init({
//   disable: function() {
//     var maxWidth = 800;
//     return window.innerWidth < maxWidth;
//   }
// });
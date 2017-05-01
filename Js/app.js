

//scroll reveal js
window.sr = ScrollReveal();


sr.reveal('.main-quote ' , {
    duration: 2000,
    origin: 'left',
   // distance:'200px'
    
}); 

sr.reveal('#steveJobs ' , {
    duration: 2200,
    origin: 'right',
   // distance:'400px'
    
}); 

sr.reveal('.abt-me ' , {
    duration: 2000,
    origin: 'bottom',
   // distance:'200px'
    
}); 

sr.reveal('#richard-pic ' , {
    duration: 2000,
    delay: 1000 ,
    origin: 'left',
}); 

sr.reveal('.scroll-right', {
          duration: 2000,
          origin:'right',
         // distance:'300px',
          viewFactor: 0.2
        });

sr.reveal('.folio', {
          duration: 2000,
          origin:'bottom',
         // distance:'300px',
          scale: 0.2,
          viewFactor: 0.2
        });

sr.reveal('.box', { duration: 3000, viewFactor: 0.2 }, 50);

sr.reveal('.social1', {
          duration: 1000,
          origin:'left',
          rotate: {z:360},   
         // distance:'200px',
          scale: 0.2,
          delay: 1000,    
          viewFactor: 0.2
        });

sr.reveal('.social2', {
          duration: 1000,
          origin:'left',
          rotate: {z:360},   
          //distance:'200px',
          scale: 0.2,
          delay: 1300,    
          viewFactor: 0.2
        });

sr.reveal('.social3', {
          duration: 1000,
          origin:'right',
          rotate: {z:360},   
         // distance:'200px',
          scale: 0.2,
          delay: 1500,    
          viewFactor: 0.2
        });

sr.reveal('.social4', {
          duration: 1000,
          origin:'right',
          rotate: {z:360},   
          //distance:'300px',
          scale: 0.2,
          delay: 1600,    
          viewFactor: 0.2
        });

sr.reveal('#downArrow', {
          duration: 1000,
          origin:'top',
          delay: 1600,    
         distance: '90px'
        });




//smooth scrolling coming soon


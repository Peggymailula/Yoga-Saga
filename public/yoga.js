
var card = document.querySelector(".card");
var theButton = document.querySelector('.btn');
var myButton = document.querySelector('.myButton');

// theButton.addEventListener('click', function() {
  
// })


// Compile Templates
var yogaTempSource = document.querySelector('.yogaTemplate').innerHTML;
var useYogaTemplate = Handlebars.compile(yogaTempSource);

var yogaList = [{src: './images/tree-pose.jpg', name: 'Bending Tree Pose'}, 
              {src: './images/michael-jackson-pose.jpg', name: 'Michael Jackson Pose'},
              {src: './images/disco-pose.jpg', name: 'Disco Pose'}]



var poseDetector = [{class: 'detect', id: 'canvas'}];

var btnFunctions = [{button: 'btn-start', event: 'poseSlideshow()', name: 'Start'}];

myButton.innerHTML = useYogaTemplate({btnTemp: btnFunctions});

function poseSlideshow() {
  btnFunctions = [{button: 'btn-start', event: 'init()', name: 'Play'}]
  
  myButton.innerHTML = useYogaTemplate({btnTemp: btnFunctions});

  setTimeout(function() {
    card.innerHTML = `<h4><strong>GET READY TO MEMORIZE THE POSES!</strong></h4>`

  }, 0)

  setTimeout(function() {
    card.innerHTML = `<h4><strong>HERE WE GO!!</strong></h4>`

  }, 2500)

  setTimeout(function() {
    card.innerHTML  = useYogaTemplate({poseTemp: yogaList})

    var slideIndex = 0;
    showSlides();
    


    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        // slides.style.display = "none";
        card.innerHTML = useYogaTemplate({camTemp: poseDetector})
      } else {
        if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 6000); // Change image every 2 seconds
      }
      
    }

  }, 5000)

}

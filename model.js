
//Function which show the car pictures ased on their Id
function showImage (imageId) {
    var images = document.querySelectorAll('.hidden-image');
    images.forEach(function(image){
        image.style.opacity = '0';
        image.style.display = 'none';
    });

    // Variable which show the image selected

    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
      selectedImage.style.display = 'block';
      setTimeout(function(){
        selectedImage.style.opacity = '1';
      },10);
    }
}

//Functions to display text bellow images

function showText(textId) {
    
    var textElements = document.querySelectorAll('.hidden-text');
    textElements.forEach(function (textElement) {
        textElement.style.display = 'none';
    });

    // Show the selected text element
    var selectedText = document.getElementById(textId);
    if (selectedText) {
        selectedText.style.display = 'block';
        setTimeout(function(){
            selectedText.style.opacity = '1';
          },10);
        }
    }




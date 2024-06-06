/*Name this external file gallery.js*/

function setImages() {
    img = document.getElementsByClassName("preview");
    for (var i = 0; i < 6; i++) {
        img[i].setAttribute("tabindex", "0");
    }
}
    

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    var image = document.getElementById('image');
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt;

    image.style.color = "white";
    image.style.fontWeight = "bold";
    image.style.textShadow = "1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000"; 
}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	var image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = 'Hover over an image below to display here.';

    image.style.color = "white";
    image.style.fontWeight = "normal";
    image.style.textShadow = "none";
}
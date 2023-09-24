let smallImages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    smallImages[i].src="Assets/Spider-Man.png";
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
    console.log(`value of image no. ${i} is changed`)
}
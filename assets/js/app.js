function creandoDiv(getURL){
  var contenedor = document.getElementById("contenedor");
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src",getURL);
  div.classList.add("contenedor-imagen");
  div.appendChild(img);
  contenedor.appendChild(div);

}
var inputURL = document.getElementById("url");
function getURL(e){
  if(e.keyCode == 13){
    creandoDiv(this.value);
    this.value = "";
  }
}
inputURL.onkeydown = getURL;
window.addEventListener("load", function(){
  var arrayUrl = ["https://i.stack.imgur.com/lj5Pk.jpg","https://imgix.ranker.com/user_node_img/68/1343066/original/kakashi-hatake-comic-book-characters-photo-u6?w=650&q=50&fm=jpg","http://www.10wallpaper.com/wallpaper/medium/1206/shugo_chara-Anime_characters_wallpaper_medium.jpg"];
  arrayUrl.forEach(function(item){
    creandoDiv(item);
  });
});

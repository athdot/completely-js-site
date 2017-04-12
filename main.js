var title = document.createElement("title");
title.innerHTML = "Athdot";
document.getElementById("head").appendChild(title);
var ifrm = document.createElement("iframe");
ifrm.style = "width:100%; height: 100vh; position:absolute; top:0; left: 0;";
ifrm.src = "https://athdot.github.io/home/";
document.getElementById("body").appendChild(ifrm);

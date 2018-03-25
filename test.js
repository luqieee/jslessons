function setUpEvents(){

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function(){

        if(content.className == "open"){
            //shrink the box
            content.className = "";
            button.innerHTML = "Show More";

        }  else{
            //expand he box
            content.className = "open";
            button.innerHTML = "Show Less";
        }

    };

}


window.onLoad = function(){

    setUpEvents();

};
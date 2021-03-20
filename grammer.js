function loadContent(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("textWindow").value = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
  }
window.onload=function(){
    fetchApi("Get")
};
function fetchApi(text){
    var requestOptions = {
        method: 'GET' ,
        redirect: 'follow'
    };
    fetch(`https://api.textgears.com/spelling?language=en-US&key=R69nPhkNE4AqTbN4&text=${text}`)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error',error));
}

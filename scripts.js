document.getElementById("submitButton").addEventListener("click", function() {
    let submitButton = document.querySelector("#submitButton");
    let input = CKEDITOR.instances.editor.getData();
    let output = document.querySelector("#output");
    output.innerText = input;

});
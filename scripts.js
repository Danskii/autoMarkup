document.getElementById("submitButton").addEventListener("click", function() {
    let submitButton = document.querySelector("#submitButton");
    let clearStyle = document.querySelector("#clearStyles");
    let removeBlanks = document.querySelector("#removeBlanks");
    let copyToClipboad = document.querySelector("#copyHTML");
    let input = CKEDITOR.instances.editor.getData();
    let output = document.querySelector("#output");
    output.innerText = input;

    //events for buttons

    //clear styles
    clearStyle.addEventListener("click", function() {
        let clearStylesAction = output.innerText
            .replaceAll("<strong>", "")
            .replaceAll("</strong>", "")
            .replaceAll("<em>", "")
            .replaceAll("</em>", "");
        output.innerText = "";
        output.innerText = clearStylesAction;
    });

    //remove blanks
    removeBlanks.addEventListener("click", function() {
        let clearBlanksAction = output.innerText
            .replaceAll("<p>&nbsp;</p>", "")
            .replaceAll(
                "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>",
                ""
            )
            .replaceAll("<br>", "");
        output.innerText = "";
        output.innerText = clearBlanksAction;
    });


    //copy to clipboard
    copyToClipboad.addEventListener("click", function() {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(output.innerText);

        /* Alert the copied text */
        alert("Copied the text: " + output.innerText);
    });
});
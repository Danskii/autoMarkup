const submitButton = document.querySelector("#submitButton");
const textToConvert = document.querySelector("#textToConvert");
let formattedWithHtml = "";
let outputHTML = document.querySelector("#output");

const formatWithHTMLfunction = () => {
  formattedWithHtml = textToConvert.value
    //wrap paragraphs in p tags
    .replace(/(^[A-Z].*\.$)/gm, "<p>$1</p>")
    //encode urls
    .replace(
      /([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gm,
      "<a href='http://$1'>$1</a>"
    )
    //custom list of words to format
    .replace(
      "Professionally Speaking",
      "<a href='http://professionallyspeaking.oct.ca'><cite>Professionally Speaking</cite></a>"
    )
    .replace(
      "Pour parler profession",
      "<a href='http://pourparlerprofession.oeeo.ca'><cite>Pour parler profession</cite></a>"
    )

  return formattedWithHtml;
};

submitButton.addEventListener("click", () => {
  formatWithHTMLfunction();
  outputHTML.innerHTML = formattedWithHtml;
});

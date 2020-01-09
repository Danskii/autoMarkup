const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
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
    //words to cite
    .replace(/Globe and Mail/g, "<cite>Globe and Mail</cite>")
    .replace(/The Financial Post/g, "<cite>The Financial Post</cite>")
    //custom list of words to format
    .replace(
      /Professionally Speaking/g,
      "<a href='http://professionallyspeaking.oct.ca'><cite>Professionally Speaking</cite></a>"
    )
    .replace(
      /Pour parler profession/g,
      "<a href='http://pourparlerprofession.oeeo.ca'><cite>Pour parler profession</cite></a>"
    )
    //french replacements
    //mme
    .replace(/ Mme /gi, " M<sup>me</sup>&nbsp")
    //dre
    .replace(/Dre /g, "D<sup>re</sup>&nbsp")
    //superscript numbers
    .replace(/(\d)(e)/g, "$1&nbsp<sup>e</sup>")
    //oeuvres
    .replace(/oeuvre/g, "œuvre")
    //soeur
    .replace(/soeur/g, "sœur")
  return formattedWithHtml;
};

submitButton.addEventListener("click", () => {
  formatWithHTMLfunction();
  outputHTML.innerHTML = formattedWithHtml;
  console.log(formattedWithHtml);
});

resetButton.addEventListener("click", () => {
  formatWithHTMLfunction();
  outputHTML.innerHTML = "";
  textToConvert.value = "";
  console.clear();
});

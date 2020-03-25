const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const textToConvert = document.querySelector("#editor > div.ql-editor");
let formattedWithHtml = "";
let outputHTML = document.querySelector("#output");
var language;

const formatWithHTMLfunctionEN = () => {
  formattedWithHtml = textToConvert.innerHTML

    //replace MS word paragraphs with lists
    .replace(
      /<p>\u00B7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "<li>"
    )
    //replace double space
    .replace(/  /g, " ")

    //replace double space after period
    .replace(/\.  /g, ".")

    //remove <p>&nbsp;</p>
    .replace(/<p>&nbsp;<\/p>/g, "")

    //remove <p><br></p>
    .replace(/<p><br><\/p>/g, "")

    //remove <strong>&nbsp;</strong>
    .replace(/<strong>&nbsp;<\/strong>/g, "")

    //words to cite
    .replace(/Globe and Mail/g, "<cite>Globe and Mail</cite>")
    .replace(/The Financial Post/g, "<cite>The Financial Post</cite>")
    .replace(
      /Ontario College of Teachers Act/g,
      "<cite>Ontario College of Teachers Act</cite>"
    )

    //custom list of words to format
    .replace(
      /Professionally Speaking/g,
      '<a href="http:professionallyspeaking.oct.ca"><cite>Professionally Speaking</cite></a>'
    )
    .replace(
      /Pour parler profession/g,
      '<a href="http:pourparlerprofession.oeeo.ca"><cite>Pour parler profession</cite></a>'
    );

  return formattedWithHtml;
};

const formatWithHTMLfunctionFR = () => {
  formattedWithHtml = textToConvert.innerHTML

    //replace MS word paragraphs with lists
    .replace(
      /<p>\u00B7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "<li>"
    )
    //replace double space
    .replace(/  /g, " ")

    //replace double space after period
    .replace(/\.  /g, ".")

    //remove <p>&nbsp;</p>
    .replace(/<p>&nbsp;<\/p>/g, "")

    //remove <p><br></p>
    .replace(/<p><br><\/p>/g, "")

    //remove <strong>&nbsp;</strong>
    .replace(/<strong>&nbsp;<\/strong>/g, "")

    //words to cite
    .replace(
      /Loi sur l’Ordre des enseignantes et des enseignants de l’Ontario/g,
      "<cite>Loi sur l’Ordre des enseignantes et des enseignants de l’Ontario</cite>"
    )

    //custom list of words to format
    .replace(
      /Professionally Speaking/g,
      '<a href="http:professionallyspeaking.oct.ca"><cite>Professionally Speaking</cite></a>'
    )
    .replace(
      /Pour parler profession/g,
      '<a href="http:pourparlerprofession.oeeo.ca"><cite>Pour parler profession</cite></a>'
    )

    //french replacements
    //mme
    .replace(/Mme /g, "M<sup>me</sup>&nbsp;")
    //mme w/sup
    .replace(/M\<sup\>me\<\/sup> /g, "M<sup>me</sup>&nbsp;")
    //m.
    .replace(/M\. /g, "M.&nbsp;")
    //numbers
    .replace(
      /([0-9]|[0-9][0-9]|[0-9][0-9][0-9]) ([0-9][0-9][0-9])/g,
      "$1&nbsp;$2"
    )
    //after colon
    .replace(/( \: )/g, "&nbsp;:&nbsp;")
    //dre
    .replace(/Dre /g, "D<sup>re</sup>&nbsp;")
    //superscript numbers
    .replace(/(\d)(e)/g, "$1&nbsp<sup>e</sup>")
    //oeuvres
    .replace(/oeuvre/g, "&‌OElig;uvre")
    //soeur
    .replace(/soeur/g, "s&‌OElig;ur")
    //apostrophe with curly
    .replace(/[a-z]'[a-z]/g, "&rsquo;");

  return formattedWithHtml;
};

submitButton.addEventListener("click", () => {
  language = document.querySelector("#documentLanguage").value;
  if (language === "en") {
    formatWithHTMLfunctionEN();
  } else formatWithHTMLfunctionFR();
  outputHTML.innerHTML = formattedWithHtml;
  console.log(formattedWithHtml);
});

resetButton.addEventListener("click", () => {
  language = document.querySelector("#documentLanguage").value;
  if (language === "en") {
    formatWithHTMLfunctionEN();
  } else formatWithHTMLfunctionFR();
  outputHTML.innerHTML = "";
  textToConvert.innerHTML = "";
  console.clear();
});

copyHTML.addEventListener("click", () => {
  document.querySelector("textarea").select();
  document.execCommand("copy");
});

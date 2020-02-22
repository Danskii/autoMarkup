const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const textToConvert = document.querySelector("#editor > div.ql-editor");
let formattedWithHtml = "";
let outputHTML = document.querySelector("#output");

const formatWithHTMLfunction = () => {
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


    //wrap paragraphs in p tags
    // .replace(/(^[A-Z].*\.$)/gm, "<p>$1</p>")

    //encode urls
    //  .replace(
    //    /([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*))/gm,
    //    "<a href='http:$1'>$1</a>"
    //  )

    //words to cite
    .replace(/Globe and Mail/g, "<cite>Globe and Mail</cite>")
    .replace(/The Financial Post/g, "<cite>The Financial Post</cite>")

    //custom list of words to format
    .replace(
      /Professionally Speaking/g,
      "<a href='http:professionallyspeaking.oct.ca'><cite>Professionally Speaking</cite></a>"
    )
    .replace(
      /Pour parler profession/g,
      "<a href='http:pourparlerprofession.oeeo.ca'><cite>Pour parler profession</cite></a>"
    )

    //french replacements
    //mme
    .replace(/Mme /g, "M<sup>me</sup>&nbsp;")
    //dre
    .replace(/Dre /g, "D<sup>re</sup>&nbsp;")
    //superscript numbers
    .replace(/(\d)(e)/g, "$1&nbsp<sup>e</sup>")
    //oeuvres
    .replace(/oeuvre/g, "œuvre")
    //soeur
    .replace(/soeur/g, "sœur");

  return formattedWithHtml;
};

submitButton.addEventListener("click", () => {
  formatWithHTMLfunction();
  outputHTML.innerHTML = formattedWithHtml;
  var lis = document.querySelectorAll('li')
  var groups = Array.from(lis).reduce((groups, li, index, arr) => {
    if (index === 0 || li.previousElementSibling !== arr[index-1]) {
      groups.push([])
    }
    groups[groups.length-1].push(li)
    return groups
  }, [])
  groups.forEach(lis => {
    var ul = document.createElement('ul')
    output.insertBefore(ul, lis[0])
    lis.forEach(li => ul.appendChild(li))
  })
  console.log(formattedWithHtml);
});

resetButton.addEventListener("click", () => {
  formatWithHTMLfunction();
  outputHTML.innerHTML = "";
  textToConvert.innerHTML = "";
  console.clear();
});

//www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =      
  '<header><nav><a href="index.html">Main Page</a> | <a href="portfolio.html">Portfolio</a> | <a href="resume.html">Resume</a></nav></header>'
let bodyTag = document.getElementsByTagName("body")[0];
let mainTag = document.getElementsByTagName("main")[0];
bodyTag.insertBefore(headerTemplate.content, mainTag);

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML =      
  '<footer><a href="https://www.linkedin.com/in/carter-latham-862112329/">LinkedIn</a> | <a href="https://app.joinhandshake.com/profiles/fx7nxk">Handshake</a> | <a href="https://github.com/rhit-lathamcb">GitHub</a></footer>'
bodyTag.appendChild(footerTemplate.content);

/* https://www.w3schools.com/jsref/met_win_settimeout.asp - need timer for popup */
const myTimeout = setTimeout(popupActivate, 6000);

function popupActivate() {
  let popupElement = document.getElementById("my-popup");
  popupElement.classList.remove("invisible");
  popupElement.addEventListener("onclick", (e) => {
    popupElement.classList.add("invisible")
  })
}



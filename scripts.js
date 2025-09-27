//www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =      
  '<header><nav><a href="index.html" id="main-page-link">Main Page</a> | <a href="portfolio.html" id="portfolio-link">Portfolio</a> | <a href="resume.html" id="resume-link">Resume</a></nav></header>'
let bodyTag = document.getElementsByTagName("body")[0];
let mainTag = document.getElementsByTagName("main")[0];
bodyTag.insertBefore(headerTemplate.content, mainTag);

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML =      
  '<footer><a href="https://www.linkedin.com/in/carter-latham-862112329/" id="linkedin-link">LinkedIn</a> | <a href="https://app.joinhandshake.com/profiles/fx7nxk" id="handshake-link">Handshake</a> | <a href="https://github.com/rhit-lathamcb" id="github-link">GitHub</a></footer>'
bodyTag.appendChild(footerTemplate.content);

/* https://www.w3schools.com/js/js_timing.asp - I decided it would be a good idea to make sure the user has seen everything they want to see if they linger for more than a minute on a specific webpage. I suppose some users could miss the links, especially the ones in the footer */
setTimeout(popup, 60000);
function popup() {
  window.alert("I see you've been here a while. Be sure to check out all of the links in the header and footer!")
}



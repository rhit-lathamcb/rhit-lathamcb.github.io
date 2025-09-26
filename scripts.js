const headerTemplate = document.createElement('template');

console.log("do it run")

headerTemplate.innerHTML =      
  '<header><nav><a href="index.html">Main Page</a><p> | </p><a href="portfolio.html">Portfolio</a><p> | </p><a href="resume.html">Resume</a></nav></header>'

bodyTag = document.querySelectorAll("body")[0];
mainTag = document.querySelectorAll("main")[0];
// maybe these need to be node objects but aren't idk
headerTemplate.insertBefore(bodyTag, mainTag);
// document.body.appendChild(headerTemplate.content);
const headerTemplate = document.createElement('template');

console.log("do it run")

headerTemplate.innerHTML =      
  '<header><nav><a href="index.html">Main Page</a><p> | </p><a href="portfolio.html">Portfolio</a><p> | </p><a href="resume.html">Resume</a></nav></header>'

bodyTag = document.getElementsByTagName("body")[0];
mainTag = document.getElementsByTagName("main")[0];
headerTemplate.insertBefore(bodyTag, mainTag);
// document.body.appendChild(headerTemplate.content);
const headerTemplate = document.createElement('template');

console.log("do it run")

headerTemplate.innerHTML =      
  <header>
    <nav>
      <a href="index.html">index.html</a>
      <a href="portfolio.html">portfolio.html</a>
      <a href="resume.html">resume.html</a>
    </nav>
  </header>

document.body.appendChild(headerTemplate.content);
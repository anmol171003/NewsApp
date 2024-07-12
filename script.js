

const main = document.getElementById('articles-container');
let data;
let dataLength;

async function getData() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b7ffdaf797634749b738eeea32fa6505")
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log("\n : data:", data)

    renderUI();
}

getData(); 

function renderUI() {
    for(let i=0; i<dataLength; i++) {
        const article = document.createElement('article');
        article.innerHTML = `
            <img class="article-image" src="${data[i].urlToImage}" alt="news"/>
            <div class="article-content">
                <h1>${data[i].title}</h1>
                <p>${data[i].description}</p>
               <b> <p> Author: ${data[i].author}  </p> </b>
                <a href="${data[i].url} sty" target="_blank"> Read More...  </a>
            </div>
        `;
        main.appendChild(article);
    }
}


// alert('carregando...')
const url_1 = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#container");

// Get all posts
async function getAllPost() {
    const response = await fetch(url_1);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((item) => {
        // criando elementos
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        // adicionando com append;
        title.innerText = item.title;
        body.innerText = item.body;
        link.innerText = "Ler";
        link.setAttribute("href", `/post.html?id=${item.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);
        div.classList.add("item");

        postsContainer.appendChild(div);
    });
}
getAllPost();
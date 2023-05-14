// Carregando dados da API
const url = "https://jsonplaceholder.typicode.com/posts";

// guardando ids do html para usar

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#container");

// Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id");

// Get all posts da api
async function getAllPost() {
    const response = await fetch(url);
    const data = await response.json();

    loadingElement.classList.add("hide");

    data.map((item) => {
        // criando elementos
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        // carregando da api com append;
        title.innerText = item.title;
        body.innerText = item.body;
        link.innerText = "Ler"; // Criei um elemento com Titulo
        link.setAttribute("href", `/post.html?id=${item.id}`);

        // Adicionando a DIV
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);
        div.classList.add("item");

        // Colocando a divi no html
        postsContainer.appendChild(div);
    });
}
if (!postId) {
    getAllPost();
} else {
    console.log(postId);
}
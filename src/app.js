function addP() {
  let div = document.createElement("div");
  let title = document.createElement("h4");
  let textArea = document.createElement("textarea");
  let button = document.createElement("button");
  let pArticle = document.getElementById("pArticle");

  title.setAttribute("class", "display-5");
  title.textContent = "Parrafo";
  textArea.setAttribute("class", "form-control");
  textArea.setAttribute("rows", "12");
  textArea.setAttribute("cols", "12");
  button.innerHTML = "Eliminar";
  button.setAttribute("class", "btn btn-danger");
  button.setAttribute("type", "button");
  button.setAttribute("onclick", "deleteP();");

  pArticle.appendChild(title);
  pArticle.appendChild(textArea);
  pArticle.appendChild(button);

  let ps = document.getElementById("ps");

  ps.appendChild(div);

  deleteP(div);
}

function submit() {
  let Articulo = {
  title:document.getElementById("titleArticle").value,
  subtitle:document.getElementById("subtitleArticle").value,
  content: document.getElementById("content").value
  }
  console.log(Article);
}

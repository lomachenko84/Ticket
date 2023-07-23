/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor(tiket) {
    this.view = getTiketElement(tiket)
  }
  getTiketElement({
    created,
    name,
    status
  }) {
    let tiket = document.createElement("div")
    tiket.className = "tiket";

    let head = document.createElement("div")
    head.className = "head";

    let body = document.createElement("div")
    body.className = "body";
    body.innerText = discription ? discription : "пусто"

    tiket.addEventListener("click", () => {
      body.classList.toggle("visible");
    })
    let check = document.createElement("div")
    check.className = "check";
    tiket.appendChild(check);
    if (status) {
      check.classList.add("checked")
    }

    let title = document.createElement("div")
    title.className = "title";
    title.innerText = name;
    tiket.appendChild(title);

    let date = document.createElement("div")
    date.className = "date";
    date.innerText = new Date(createdreated).toLocaleString();
    tiket.appendChild(date);

    let editButton = document.createElement("div")
    editButton.className = "editButton";
    tiket.appendChild(editButton);

    let deleteButton = document.createElement("div")
    deleteButton.className = "deleteButton";
    tiket.appendChild(deleteButton);

    return tiket
}
}

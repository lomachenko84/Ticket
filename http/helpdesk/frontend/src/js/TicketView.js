/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor(tiket) {
    this.view = this.getTiketElement(tiket);
    this.discriptionIsOpen = false;

    this.addListeners();
  }

  addListeners() {
    this.view.addEventListener("click", this.toogleDescription.bind(this));  
  }

toogleDescription() {
  if (!this.discriptionIsOpen) {
    this.body.classList.remove("visible")
    } else {
    this.body.classList.add("visible")
    }
  this.discriptionIsOpen = !this.discriptionIsOpen;
  }
  getTiketElement({
    created,
    name,
    status,
    description
  }) {
    let tiket = document.createElement("div")
    tiket.className = "tiket";

    this.head = document.createElement("div")
    this.head.className = "head";

    this.body = document.createElement("div")
    this.body.className = "body";
    this.body.innerText = description ? description : "пусто"

    tiket.appendChild(this.head);
    tiket.appendChild(this.body);

    this.check = document.createElement("div")
    this.check.className = "check";
    this.head.appendChild(this.check);
    if (status) {
      check.classList.add("checked")
    }

    let title = document.createElement("div")
    title.className = "title";
    title.innerText = name;
    this.head.appendChild(title);

    let date = document.createElement("div")
    date.className = "date";
    date.innerText = new Date(created).toLocaleString();
    this.head.appendChild(date);

    this.editButton = document.createElement("button")
    this.editButton.className = "editButton";
    this.head.appendChild(this.editButton);

    this.deleteButton = document.createElement("button")
    this.deleteButton.className = "deleteButton";
    this.head.appendChild(this.deleteButton);

    return tiket
  }
}

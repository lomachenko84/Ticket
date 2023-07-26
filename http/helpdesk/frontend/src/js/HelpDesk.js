import { create } from "core-js/core/object";
import TicketService from "./TicketService";
import TicketView from "./TicketView";
import TicketForm from "./TicketForm";

/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.container = container;
    this.ticketService = new TicketService();

  }
}

init() {
  console.log("init")
  this.ticketService.list((responce) => {
    this.tickets = responce.map(tiket => new Ticket(tiket));
    this.renderAddTicketButton();
    this.renderTiketList();
    this.renderAddTicketForm();
  })
}

renderTiketList() {
  let list = document.createElement("div")
  list.className = "list";
  this.container.appendChild(list);
  this.list = list;
  this.tickets.forEach((el) => {
    let ticketView = new TicketView(el);
    list.appendChild(ticketView.view);
  })
}

renderAddTicketButton() {
  let addButton = new Button({
    className: "addTickenButton",
    content: "Добавить тикет",
    parent: this.container
  })

  addButton.addEventListener("click",)
}
renderAddTicketForm() {
  let addTicketForm = new TicketForm(this.container);
  this.addTicketForm = addTicketForm;
}

toggleTicketForm() {
  addTicketForm.

}



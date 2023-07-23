import { create } from "core-js/core/object";
import TicketService from "./TicketService";

/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.container = container;
    console.log(this.container)
    this.ticketService = new TicketService();

  }
}

init() {
  this.ticketService.list((responce) => {
    this.tickets = responce.map(tiket => new Ticket(tiket));
    this.renderTiketList();
  })
}

renderTiketList() {
  let list = document.createElement("div")
  list.className = "list";
  this.container.appendChild(list);
  this.list = list;
  this.tickets.forEach((el) => {
    list.appendChild(this.getTiketElement(el))
  })
}




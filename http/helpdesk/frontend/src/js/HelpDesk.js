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

  init() {
    console.log("init")
    this.ticketService.list((responce) => {
      console.log(responce)
      this.tickets = responce;
    })
    this.renderTiketList();
  }

renderTiketList() {
  let list = document.createElement("div")
  list.className = "list"
  th

}
}

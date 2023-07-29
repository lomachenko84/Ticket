import { sharing } from "webpack";
import Button from "./Button";

/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor(parent) {
    this.content = this.renderForm(parent);
  }

  renderForm(parent) {
    let formContainer = document.createElement("div");
    formContainer.className = "formContainer";

    let title = document.createElement("div");
    title.className = "formTitle";
    title.innerText = "Добавить тикет";

    formContainer.appendChild(title);

    let form = document.createElement("form");
    form.className = "addTicketForm";

    let shortDescriptionlable = document.createElement("label");
    shortDescriptionlable.className = "shortDescriptionlable";
    shortDescriptionlable.innerText = "Краткое описание";

    form.appendChild(shortDescriptionlable);

    let shortDescriptionInput = document.createElement("Input");
    shortDescriptionInput.className = "shortDescriptionInput";

    form.appendChild(shortDescriptionInput);

    let longDescriptionlable = document.createElement("label");
    longDescriptionlable.className = "longDescriptionlable";

    form.appendChild(longDescriptionlable);

    let longDescriptionInput = document.createElement("Input");
    longDescriptionInput.className = "longDescriptionInput";

    form.appendChild(longDescriptionInput);

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer";

    new Button({
      className: "okButton",
      content: "OK",
      parent: buttonContainer
    })

    this.cancelButton = new Button({
      className: "cancelButton",
      content: "Отмена",
      parent: buttonContainer
    })

    let bindToggle = this.toggleForm.bind(this)
    this.cancelButton.addEventListeren("click", bindToggle);
    this.cancelButton.formaction();

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);

    parent.appendChild(formContainer);
    return formContainer;
  }

  toggleForm() {
    if (this.isVisible) {
      this.container.classList.remove("visible")
    } else {
      this.container.classList.add("visible")
    }
  }
}

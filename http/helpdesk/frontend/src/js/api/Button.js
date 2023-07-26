export default class Button {
    constructor({
        className,
        content,
        parent
    }){
        return this.createElement(className, content, parent);
    }

    createElement(className, content, parent) {
        let button = document.createElement("button");
        button.className = "button";
        button.classList
        button.innerText = content;
        parent.appendChild(button);
        return button
    }
}
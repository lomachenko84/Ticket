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
        if(className) {
            button.classList.add(className)
        }
        button.innerText = content;
        parent.appendChild(button);
        return button
    }
}
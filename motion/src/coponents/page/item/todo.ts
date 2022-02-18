import { BaseComponent } from "../../component.js";
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    const html = `
        <section class="todo">
            <h2 class="todo__title"></h2>
            <input class="todo__item" type="checkbox" class="todo-checkbox">
        </section>
    `;
    super(html);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;

    const todoElement = this.element.querySelector(
      ".todo__item"
    )! as HTMLInputElement;

    titleElement.textContent = title;
    todoElement.insertAdjacentText("afterend", todo);
  }
}

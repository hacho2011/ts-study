import { BaseComponent } from "../../component.js";
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    const html = `
        <section class="note">
            <h2 class="note__title"></h2>
            <p class="note__body"></p>
        </section>
    `;
    super(html);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadElement;
    const bodyElement = this.element.querySelector(
      ".note__body"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
    bodyElement.textContent = body;
  }
}

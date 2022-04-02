import { InputDialog } from "./coponents/dialog/dialog.js";
import { Component } from "./coponents/component.js";
import { TodoComponent } from "./coponents/page/item/todo.js";
import { NoteComponent } from "./coponents/page/item/note.js";
import { VideoComponent } from "./coponents/page/item/video.js";
import { ImageComponent } from "./coponents/page/item/image.js";
import {
  PageComponent,
  Composable,
  PageItemComponent,
} from "./coponents/page/page.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);
    const image = new ImageComponent("title", "https://picsum.photos/200/300");
    this.page.addChild(image);

    const video = new VideoComponent(
      "title",
      "https://www.youtube.com/embed/QSgfs9rv5Xc"
    );
    this.page.addChild(video);

    const note = new NoteComponent("title", "note");
    this.page.addChild(note);

    const todo = new TodoComponent("title", "item");
    this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      console.log("?");
      const dialog = new InputDialog();

      dialog.setOnCloseListner(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListner(() => {
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement);

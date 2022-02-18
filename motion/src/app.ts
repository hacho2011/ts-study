import { Component } from "./coponents/component";
import { TodoComponent } from "./coponents/page/item/todo.js";
import { NoteComponent } from "./coponents/page/item/note.js";
import { VideoComponent } from "./coponents/page/item/video.js";
import { ImageComponent } from "./coponents/page/item/image.js";
import { PageComponent, Composable } from "./coponents/page/page.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
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
  }
}

new App(document.querySelector(".document")! as HTMLElement);

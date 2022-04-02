{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackMade implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
      return this.size;
    }

    push(value: string) {
      this._size++;
      const node: StackNode = {
        value: value,
        next: this.head,
      };

      this.head = node;
    }

    pop() {
      if (!this.head) {
        throw new Error("no data");
      }

      this._size--;
      const node = this.head;
      this.head = node.next;
      return node.value;
    }
  }

  const stack = new StackMade();
}

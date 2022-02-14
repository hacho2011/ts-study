{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackMade<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }

    push(value: T) {
      this._size++;
      const node: StackNode<T> = {
        value: value,
        next: this.head,
      };

      this.head = node;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("no data");
      }

      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackMade<number>();

  const stack2 = new StackMade<object>();

  stack.push(1);
  stack2.push({ name: "dh" });
  console.log(stack.pop());
  console.log(stack2.pop());
}

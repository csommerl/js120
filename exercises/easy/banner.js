// https://launchschool.com/exercises/398917ba

class Banner {
  constructor(message, width) {
    this.message = message;
    this.width = width ?? message.length + 4;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat(this.width - 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width - 2)}|`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner('');
banner2.displayBanner();
/*
+--+
|  |
|  |
|  |
+--+
*/

let banner3 = new Banner('To boldly go where no one has gone before.', 20);
banner3.displayBanner();

let banner4 = new Banner('To boldly go where no one has gone before.', 75);
banner4.displayBanner();

// https://launchschool.com/exercises/398917ba

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat(this.message.length + 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.message.length + 2)}|`;
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

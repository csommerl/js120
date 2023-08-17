// https://launchschool.com/exercises/398917ba

class Banner {
  constructor(message, width = message.length + 4) {
    this.message = message;
    this.width = width;
  }

  displayBanner() {
    let lines = [
      this.horizontalRule(),
      this.emptyLine(),
      this.messageLine(),
      this.emptyLine(),
      this.horizontalRule()
    ];
    console.log(lines.join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat(this.width - 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width - 2)}|`;
  }

  messageLine() {
    if (this.width > this.message.length + 4) {
      let paddingLength = (this.width - this.message.length - 2) / 2;
      let messageLine = ' '.repeat(paddingLength) + this.message + ' '.repeat(paddingLength);
      return `|${messageLine}|`;

    } else if (this.width < this.message.length + 4) {
      return '';
    } else {
      return `| ${this.message} |`;
    }
  }
}

/*
 * 80 - 42 = 38
 * 38 - 2 = 36
 * 36 / 2 = 18
 */

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

/*

let banner3 = new Banner('To boldly go where no one has gone before.', 20);
banner3.displayBanner();

let banner4 = new Banner('To boldly go where no one has gone before.', 80);
banner4.displayBanner();

let banner5 = new Banner('To boldly go where no one has gone before?!', 80);
banner5.displayBanner();
*/

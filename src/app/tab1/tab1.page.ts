import { Component } from '@angular/core';
var createHash = require('hash-generator');

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  hash = "none";
  constructor() { }
  generateHash() {
    this.hash = createHash(4)
  }
}

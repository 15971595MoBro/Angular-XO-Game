import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'game';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  count: number = 0;
  game(event: any) {
    document.getElementById(event)?.classList.add('open');
    this.count++;
    if (this.count % 2 !== 0) {
      document
        .getElementById(event)
        .setAttribute('src', '../assets/images/letter-x.webp');
    } else {
      document
        .getElementById(event)
        .setAttribute('src', '../assets/images/letter_o.jpg');
    }
    if (this.count === 9) {
      location.reload();
    }
    var a = document.getElementById('img1')?.getAttribute('src');
    var b = document.getElementById('img2')?.getAttribute('src');
    var c = document.getElementById('img3')?.getAttribute('src');
    var d = document.getElementById('img4')?.getAttribute('src');
    var e = document.getElementById('img5')?.getAttribute('src');
    var f = document.getElementById('img6')?.getAttribute('src');
    var g = document.getElementById('img7')?.getAttribute('src');
    var h = document.getElementById('img8')?.getAttribute('src');
    var i = document.getElementById('img9')?.getAttribute('src');

    if (this.count > 0) {
      if (
        (a === '../assets/images/letter-x.webp' &&
          e === '../assets/images/letter-x.webp' &&
          i === '../assets/images/letter-x.webp') ||
        (a === '../assets/images/letter_o.jpg' &&
          e === '../assets/images/letter_o.jpg' &&
          i === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square1').classList.add('blink');
        document.getElementById('square5').classList.add('blink');
        document.getElementById('square9').classList.add('blink');
      }
      if (
        (a === '../assets/images/letter-x.webp' &&
          b === '../assets/images/letter-x.webp' &&
          c === '../assets/images/letter-x.webp') ||
        (a === '../assets/images/letter_o.jpg' &&
          b === '../assets/images/letter_o.jpg' &&
          c === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square1').classList.add('blink');
        document.getElementById('square2').classList.add('blink');
        document.getElementById('square3').classList.add('blink');
      }
      if (
        (a === '../assets/images/letter-x.webp' &&
          d === '../assets/images/letter-x.webp' &&
          g === '../assets/images/letter-x.webp') ||
        (a === '../assets/images/letter_o.jpg' &&
          d === '../assets/images/letter_o.jpg' &&
          g === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square1').classList.add('blink');
        document.getElementById('square4').classList.add('blink');
        document.getElementById('square7').classList.add('blink');
      }
      if (
        (b === '../assets/images/letter-x.webp' &&
          e === '../assets/images/letter-x.webp' &&
          h === '../assets/images/letter-x.webp') ||
        (b === '../assets/images/letter_o.jpg' &&
          e === '../assets/images/letter_o.jpg' &&
          h === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square2').classList.add('blink');
        document.getElementById('square5').classList.add('blink');
        document.getElementById('square8').classList.add('blink');
      }
      if (
        (c === '../assets/images/letter-x.webp' &&
          e === '../assets/images/letter-x.webp' &&
          g === '../assets/images/letter-x.webp') ||
        (c === '../assets/images/letter_o.jpg' &&
          e === '../assets/images/letter_o.jpg' &&
          g === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square3').classList.add('blink');
        document.getElementById('square5').classList.add('blink');
        document.getElementById('square7').classList.add('blink');
      }
      if (
        (c === '../assets/images/letter-x.webp' &&
          f === '../assets/images/letter-x.webp' &&
          i === '../assets/images/letter-x.webp') ||
        (c === '../assets/images/letter_o.jpg' &&
          f === '../assets/images/letter_o.jpg' &&
          i === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square3').classList.add('blink');
        document.getElementById('square6').classList.add('blink');
        document.getElementById('square9').classList.add('blink');
      }
      if (
        (g === '../assets/images/letter-x.webp' &&
          h === '../assets/images/letter-x.webp' &&
          i === '../assets/images/letter-x.webp') ||
        (g === '../assets/images/letter_o.jpg' &&
          h === '../assets/images/letter_o.jpg' &&
          i === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square7').classList.add('blink');
        document.getElementById('square8').classList.add('blink');
        document.getElementById('square9').classList.add('blink');
      }
      if (
        (d === '../assets/images/letter-x.webp' &&
          e === '../assets/images/letter-x.webp' &&
          f === '../assets/images/letter-x.webp') ||
        (d === '../assets/images/letter_o.jpg' &&
          e === '../assets/images/letter_o.jpg' &&
          f === '../assets/images/letter_o.jpg')
      ) {
        document.getElementById('square4').classList.add('blink');
        document.getElementById('square5').classList.add('blink');
        document.getElementById('square6').classList.add('blink');
      }
    }
  }
}

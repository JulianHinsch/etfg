import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <div class='footer'>
        <a class='footer-link' href='http://etfg.com/about'>About Us</a>
        |
        <a class='footer-link' href='http://etfg.com'>Main Website</a>
        <hr>
        <span class='footer-link'> Designed By <a href='http://vedia.nyc'>Vedia NYC</a></span>
    <div>`,
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}

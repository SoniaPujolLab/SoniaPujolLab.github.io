import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
@Component({
    selector: 'app-contact-page',
    imports: [Navbar, SiteFooter],
    templateUrl: './contact.html',
    styles: ':host { display: contents }',
})
export class ContactPage {}

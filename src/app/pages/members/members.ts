import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { SiteFooter } from '../../shared/site-footer/site-footer';
import { MEMBER_SECTIONS } from './members-data';
@Component({
    selector: 'app-members-page',
    imports: [Navbar, SiteFooter],
    templateUrl: './members.html',
    styles: ':host { display: contents }',
})
export class MembersPage {
    protected readonly sections = MEMBER_SECTIONS;
}

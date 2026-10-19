import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { PROJECTS } from '../../shared/projects';
import { SiteFooter } from '../../shared/site-footer/site-footer';
@Component({
    selector: 'app-projects-page',
    imports: [Navbar, SiteFooter],
    templateUrl: './projects.html',
    styles: ':host { display: contents }',
})
export class ProjectsPage {
    protected readonly projects = PROJECTS;
}

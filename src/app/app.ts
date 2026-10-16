import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { SiteFooter } from './shared/site-footer/site-footer';
@Component({
    selector: 'app-root',
    imports: [Navbar, SiteFooter],
    templateUrl: './app.html',
})
export class App {
    protected readonly projects = [
        {
            title: 'Slicer in My Language',
            text: 'Internationalizing 3D Slicer for accessibility',
            href: 'https://sliceriml.github.io/',
            color: '#17a2b8',
            icon: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3.6 9h16.8M3.6 15h16.8M12 3c-2.4 2.8-3.8 5.7-3.8 9s1.4 6.2 3.8 9M12 3c2.4 2.8 3.8 5.7 3.8 9s-1.4 6.2-3.8 9',
        },
        {
            title: 'Slicer for Latin America',
            text: 'Regional training & clinical adoption',
            href: 'https://slicerlatinamerica.github.io',
            color: '#d9534f',
            icon: 'M12 4 2 9l10 5 10-5-10-5ZM6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5',
        },
        {
            title: 'Slicer for African Scientists',
            text: 'Empowering African scientists through open source medical imaging',
            href: 'https://slicerafrica.github.io/',
            color: '#5cb85c',
            icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
        },
    ];
}

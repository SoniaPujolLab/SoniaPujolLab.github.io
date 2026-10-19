import { Component, afterNextRender, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { NAV_LINKS, NavKey } from '../nav-links';
@Component({
    selector: 'app-navbar',
    imports: [RouterLink],
    templateUrl: './navbar.html',
    styles: ':host { display: contents }',
    host: { '(document:keydown.escape)': 'navOpen.set(false)' },
})
export class Navbar {
    readonly active = input<NavKey | null>(null);
    protected readonly links = NAV_LINKS;
    protected readonly themes = inject(ThemeService);
    protected readonly navOpen = signal(false);
    constructor() {
        afterNextRender(() => this.themes.init());
    }
    protected toggleNav(): void {
        this.navOpen.update((open) => !open);
    }
}

import { Component, signal } from '@angular/core';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styles: ':host { display: contents }',
})
export class Navbar {
    protected readonly dark = signal(document.documentElement.dataset['theme'] === 'dark');
    protected toggleTheme(): void {
        this.dark.update((dark) => !dark);
        const theme = this.dark() ? 'dark' : 'light';
        document.documentElement.dataset['theme'] = theme;
        localStorage.setItem('soniapujollab_theme', theme);
    }
}

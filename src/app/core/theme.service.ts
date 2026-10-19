import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'soniapujollab_theme';
@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly document = inject(DOCUMENT);
    readonly theme = signal<Theme>('light');
    init(): void {
        const current = this.document.documentElement.dataset['theme'];
        this.theme.set(current === 'dark' ? 'dark' : 'light');
    }
    toggle(): void {
        const theme = this.theme() === 'dark' ? 'light' : 'dark';
        this.theme.set(theme);
        this.document.documentElement.dataset['theme'] = theme;
        localStorage.setItem(STORAGE_KEY, theme);
    }
}

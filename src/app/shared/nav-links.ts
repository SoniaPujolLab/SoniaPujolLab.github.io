export const NAV_LINKS = [
    { key: 'projects', href: '/', label: 'Projects' },
    { key: 'members', href: '/members', label: 'Members' },
    { key: 'contact', href: '/contact', label: 'Contact' },
] as const;
export type NavKey = (typeof NAV_LINKS)[number]['key'];

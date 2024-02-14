export interface Todo {
    id: string;
    value: string;
}

/**
 * Return the path of the icon with the color mode
 * taken into account.
 * @param iconName The main name of the icon
 * @returns Path to the icon
 */
export function getIconPath(iconName: string) {
    return '/assets/icons/' + iconName + '-' + localStorage.getItem('color-mode') + '.svg';
}
// Used to the nav link buttons
export interface NavItemType {
    position: 'left' | 'right' | 'bottom' | 'top';
    pageName: string;
    link: string;
}


export type NavigationItemsObject = {
    [key: string]: NavItemType[];
  };
import NavButton from '@/components/NavButton';
import { NavigationItemsObject } from '@/types';

const navigationItems: NavigationItemsObject = {
  '/': [
     {
        position: 'left',
        pageName: 'Songs',
        link: '/playlist'
     },
     {
        position: 'right',
        pageName: 'Info',
        link: '/info'
     },
     {
        position: 'bottom',
        pageName: 'Projects',
        link: '/projects'
     }
  ],
  '/playlist': [
     {
        position: 'right',
        pageName: 'Main',
        link: '/'
     }
  ],
  '/info': [
     {
        position: 'left',
        pageName: 'Main',
        link: '/'
     }
  ],
  '/projects': [
   {
      position: 'top',
      pageName: 'Main',
      link: '/'
   }
]
};

export const renderNavButtons = (path: string): JSX.Element[] => {
  const pageNavItems = navigationItems[path];

  return pageNavItems.map((item) => (
    <NavButton
      key={item.pageName}
      position={item.position}
      pageName={item.pageName}
      link={item.link}
    />
  ));
};
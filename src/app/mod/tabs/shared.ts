export interface TabsClasses {
  containerClass: string;
  navContainerClass: string;
  contentContainerClass: string;
  navClass: string;
  navLinkClass: string;
}

export class TabsFlavor implements TabsClasses {
  containerClass = '';
  navContainerClass = '';
  contentContainerClass = '';
  navClass = 'nav nav-tabs';
  navLinkClass = 'nav-item nav-link';
}

export class PlainFlavor implements TabsClasses {
  containerClass = '';
  navContainerClass = '';
  contentContainerClass = '';
  navClass = 'nav';
  navLinkClass = 'nav-item nav-link';
}

export class PlainVerticalFlavor implements TabsClasses {
  containerClass = 'row';
  navContainerClass = 'col-auto';
  contentContainerClass = 'col';
  navClass = 'nav flex-column';
  navLinkClass = 'nav-item nav-link';
}

export class PlainVerticalReversedFlavor implements TabsClasses {
  containerClass = 'row';
  navContainerClass = 'col-auto order-2';
  contentContainerClass = 'col order-1';
  navClass = 'nav flex-column';
  navLinkClass = 'nav-item nav-link';
}

export class PillsFlavor implements TabsClasses {
  containerClass = '';
  navContainerClass = '';
  contentContainerClass = '';
  navClass = 'nav nav-pills';
  navLinkClass = 'nav-item nav-link';
}

export class PillsVerticalFlavor implements TabsClasses {
  containerClass = '';
  navContainerClass = '';
  contentContainerClass = '';
  navClass = 'nav nav-pills';
  navLinkClass = 'nav-item nav-link';
}

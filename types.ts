
export enum AppPages {
  HOME = 'home',
  IMPACT = 'impact',
  ABOUT = 'about'
}

export interface OutreachEvent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  page: AppPages;
}


import { AppPages, OutreachEvent, NavItem } from './types';

export const COLORS = {
  primary: '#2563eb', // Blue
  secondary: '#10b981', // Green
  white: '#ffffff',
  black: '#000000',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: AppPages.HOME },
  { label: 'Our Impact', page: AppPages.IMPACT },
  { label: 'About Us', page: AppPages.ABOUT },
];

export const OUTREACH_DATA: OutreachEvent[] = [
  {
    id: '1',
    title: 'Rural Female Health Camp',
    description: 'Providing essential prenatal and reproductive health screenings to over 500 women in remote communities.',
    imageUrl: 'https://picsum.photos/seed/health/1200/600',
  },
  {
    id: '2',
    title: 'Coastal Reforestation Initiative',
    description: 'Protecting our coastlines from erosion while promoting biodiversity through local mangrove planting.',
    imageUrl: 'https://picsum.photos/seed/climate/1200/600',
  },
  {
    id: '3',
    title: 'Youth Mental Wellness Summit',
    description: 'A dedicated space for young leaders to discuss mental resilience and access professional counseling resources.',
    imageUrl: 'https://picsum.photos/seed/mental/1200/600',
  }
];

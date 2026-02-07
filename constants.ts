import { ZoneData } from './types';

export const GANDHINAGAR_ZONES: ZoneData[] = [
  { id: 'sec-21', name: 'Sector 21 Market', lat: 23.2350, lng: 72.6450, description: 'Major shopping district, high traffic.' },
  { id: 'infocity', name: 'Infocity', lat: 23.1890, lng: 72.6370, description: 'IT hub and commercial complex.' },
  { id: 'akshardham', name: 'Akshardham Temple Area', lat: 23.2290, lng: 72.6740, description: 'Tourist attraction, variable demand.' },
  { id: 'gift-city', name: 'GIFT City', lat: 23.1610, lng: 72.6860, description: 'Business district, regulated parking.' },
  { id: 'sec-11', name: 'Sector 11 (Udyog Bhavan)', lat: 23.2156, lng: 72.6369, description: 'Government offices area.' },
  { id: 'sec-16', name: 'Sector 16 (Civil Hospital)', lat: 23.2200, lng: 72.6500, description: 'Hospital zone, emergency priority.' },
  { id: 'iit-gn', name: 'IIT Gandhinagar', lat: 23.2114, lng: 72.6842, description: 'Educational institute campus area.' },
  { id: 'sachivalaya', name: 'Secretariat (Sachivalaya)', lat: 23.2230, lng: 72.6480, description: 'State government administrative complex.' },
];

export const MOCK_CHART_DATA = [
  { time: '08:00', occupancy: 20 },
  { time: '10:00', occupancy: 65 },
  { time: '12:00', occupancy: 85 },
  { time: '14:00', occupancy: 70 },
  { time: '16:00', occupancy: 60 },
  { time: '18:00', occupancy: 90 },
  { time: '20:00', occupancy: 75 },
  { time: '22:00', occupancy: 40 },
];

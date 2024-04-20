export interface ListItem {
  id: number;
  text: string;
  href: string;
}

const LIST: ListItem[] = [
  {
    id: 1,
    text: 'Product',
    href: '#',
  },
  {
    id: 2,
    text: 'Customers',
    href: '#',
  },
  {
    id: 3,
    text: 'Pricing',
    href: '#',
  },
  {
    id: 4,
    text: 'Resources',
    href: '#',
  },
];

export default LIST;

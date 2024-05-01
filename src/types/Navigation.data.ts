export interface ListItem {
  id: number;
  to: string;
  href: string;
}

const LIST: ListItem[] = [
  {
    id: 1,
    to: 'Product',
    href: '#',
  },
  {
    id: 2,
    to: 'Customers',
    href: '#',
  },
  {
    id: 3,
    to: 'Pricing',
    href: '#',
  },
  {
    id: 4,
    to: 'Resources',
    href: '#',
  },
  {
    id: 5,
    to: 'Comments',
    href: '#',
  },
];

export default LIST;

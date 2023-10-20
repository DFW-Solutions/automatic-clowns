interface NavItems {
  path: string
  text: string
}

const NavLinks: NavItems[] = [
  {
    path: '/about',
    text: 'Why Us'
  },
  {
    path: '/contact',
    text: 'Contact Us'
  },
  {
    path: '/blog',
    text: 'Blog'
  },
  {
    path: '/services',
    text: 'Our Services'
  }
];

export default NavLinks;
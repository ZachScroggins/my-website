import {
  FiAward,
  FiFacebook,
  FiGithub,
  FiInfo,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

export const NAV_LINKS = [
  { href: '/#portfolio', label: 'Portfolio', Icon: FiAward },
  { href: '/#about', label: 'About', Icon: FiInfo },
  { href: '/#contact', label: 'Contact', Icon: FiMail },
];

export const SOCIAL_LINKS = {
  github: { href: 'https://github.com/ZachScroggins', label: 'GitHub', Icon: FiGithub },
  linkedin: {
    href: 'https://www.linkedin.com/in/zachscroggins',
    label: 'LinkedIn',
    Icon: FiLinkedin,
  },
  twitter: { href: 'https://twitter.com/scroggins_zach', label: 'Twitter', Icon: FiTwitter },
  facebook: {
    href: 'https://www.facebook.com/scroggins.zach',
    label: 'Facebook',
    Icon: FiFacebook,
  },
  instagram: {
    href: 'https://www.instagram.com/wolfcreekdev',
    label: 'Instagram',
    Icon: FiInstagram,
  },
};

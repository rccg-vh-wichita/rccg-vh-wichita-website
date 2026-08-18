import { withBase } from '../utils/paths';

export const church = {
  name: 'RCCG Victory House Wichita',
  fullName: 'The Redeemed Christian Church of God Victory House Wichita',
  mission: 'Equipping brethren to be the best.',
  vision:
    'To build, empower and disciple the saved through the powerful Word of God, and to reach the unsaved through evangelism and missions.',
  address: '1701 S Sedgwick St, Wichita, KS 67213',
  phone: '(316) 267-2673',
  visitPhone: '(316) 550-1378',
  email: 'rccgvictoryhousewichita1@gmail.com',
  pastorEmail: 'askay4jane@yahoo.com',
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1701+S+Sedgwick+St+Wichita+KS+67213',
  youtube: 'https://www.youtube.com/@rccgvhwichita',
  instagram: 'https://www.instagram.com/victoryhousewichita/',
  facebook: 'https://www.facebook.com/rccgvhwichita/'
};

export const mainNav = [
  { label: 'About', href: withBase('/about-us/') },
  { label: 'Ministries', href: withBase('/our-ministries/') },
  { label: 'Events', href: withBase('/events/') },
  { label: 'Watch', href: withBase('/sermons/') },
  { label: 'Give', href: withBase('/donate/') }
];

export const services = [
  {
    cadence: 'Every Sunday',
    name: 'Sunday Worship',
    time: '10:00–11:30 AM',
    note: 'Worship, prayer, and a practical message from God’s Word.'
  },
  {
    cadence: 'Every Wednesday',
    name: 'Prayer & Bible Study',
    time: '6:30–9:00 PM',
    note: 'A midweek gathering for prayer, teaching, and spiritual growth.'
  }
];

export const monthlyServices = [
  {
    name: 'Thanksgiving Sunday',
    cadence: 'First Sunday of each month',
    time: '10:00 AM–12:00 PM'
  },
  {
    name: 'Holy Communion Service',
    cadence: 'First Wednesday of each month',
    time: '6:30–8:00 PM'
  },
  {
    name: 'Begin the Month with Jesus',
    cadence: 'First day of each month',
    time: '6:00–7:00 AM'
  }
];

export const ministries = [
  {
    name: 'Children',
    line: 'Bible teaching and a caring church community for our children.',
    lead: 'Dialle Dempsey'
  },
  {
    name: 'Young Adults & Youth',
    line: 'Fellowship and discipleship for teenagers and young adults.',
    lead: 'Emmanuel Ifendu'
  },
  {
    name: 'Women',
    line: 'Prayer, fellowship, and support for women.',
    lead: 'Linda Okoli'
  },
  {
    name: 'Men',
    line: 'Fellowship and spiritual growth for men.',
    lead: 'Kingsley Adigwe'
  },
  {
    name: 'Worship & Choir',
    line: 'Leading the congregation in praise and worship.',
    lead: 'Rex Bello'
  },
  {
    name: 'Prayer',
    line: 'Praying for the church, our families, and our community.',
    lead: 'Victoria Opoku'
  },
  {
    name: 'Hospitality',
    line: 'Welcoming members and visitors and helping people feel at home.',
    lead: 'Jeanetta Oke'
  },
  {
    name: 'Community Outreach',
    line: 'Clothes giveaways, diaper drives, and practical help for local families.',
    lead: 'Church outreach team'
  }
];

export const leaders = [
  { name: 'Kennedy Opoku', role: 'Minister & Sunday School Director' },
  { name: 'Rex Bello', role: 'Minister, Protocol Director & Choir Director' },
  {
    name: 'Emmanuel Ifendu',
    role: 'Minister, Media Director & YAYA President'
  },
  { name: 'Victoria Opoku', role: 'Minister & Prayer Director' },
  { name: 'Itam Ekanem', role: 'Minister & Ushers Director' },
  {
    name: 'Dialle Dempsey',
    role: 'Minister, Children’s Director & Social Media Director'
  },
  { name: 'Jeanetta Oke', role: 'Hospitality Director' },
  { name: 'Daniel Chikwendu', role: 'Sanitation Director' },
  { name: 'Korede Oggunnaike', role: 'Security Director' },
  { name: 'Linda Okoli', role: 'Women’s President' },
  { name: 'Kingsley Adigwe', role: 'Men’s President' },
  {
    name: 'Chiamaka Uchechukwu',
    role: 'WSU Redeemed Campus Fellowship President'
  }
];

export const recurringEvents = [
  {
    name: 'African Praise Sunday',
    type: 'Worship',
    description:
      'A Sunday of praise and worship that celebrates our African heritage.'
  },
  {
    name: 'Community Clothes Giveaway',
    type: 'Outreach',
    description:
      'Free clothing and other useful items for people in our community.'
  },
  {
    name: 'Diaper Giveaway',
    type: 'Outreach',
    description:
      'Free diapers, wipes, and baby essentials for local families.'
  },
  {
    name: 'Couples Dinner & Marriage Seminar',
    type: 'Families',
    description:
      'An evening for couples with practical, biblical teaching on marriage.'
  },
  {
    name: 'Mental Health Sunday',
    type: 'Wellbeing',
    description:
      'An honest conversation about faith, mental health, and getting support.'
  },
  {
    name: 'Night Vigil',
    type: 'Prayer',
    description:
      'A late-night gathering for worship and prayer.'
  }
];

export const resources = [
  {
    name: 'Open Heavens Daily',
    description: 'Daily devotional readings for reflection and prayer.',
    href: 'https://www.openheavensdaily.com/'
  },
  {
    name: 'Verse of the Day',
    description: 'A daily Scripture to carry with you throughout the day.',
    href: 'https://www.verseoftheday.com/'
  },
  {
    name: 'RCCG Sunday School Manual',
    description: 'Weekly lessons and study resources for deeper discipleship.',
    href: 'https://flatimes.com/rccg-sunday-school-manual/'
  }
];

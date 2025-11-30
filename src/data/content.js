// Import images
import outkast01 from '../assets/img/outkast common ground-01.png'
import outkast02 from '../assets/img/outkast common ground-02.png'
import outkast03 from '../assets/img/outkast common ground-03.png'
import outkast04 from '../assets/img/outkast common ground-04.png'
import outkast05 from '../assets/img/outkast common ground-05.png'
import outkast06 from '../assets/img/outkast common ground-06.png'
import dmxTraceCover from '../assets/img/dmx trace cover.png'

// Dungeon Family images
import dungeonFamily01 from '../assets/img/dungeonfamilyyy-01.jpeg'
import dungeonFamily02 from '../assets/img/dungeonfamilyyy-02.jpeg'
import dungeonFamily03 from '../assets/img/dungeonfamilyyy-03.jpeg'
import dungeonFamily04 from '../assets/img/dungeonfamilyyy-04.jpeg'
import dungeonFamily05 from '../assets/img/dungeonfamilyyy-05.jpeg'
import dungeonFamily06 from '../assets/img/dungeonfamilyyy-06.jpeg'
import dungeonFamily07 from '../assets/img/dungeonfamilyyy-07.jpeg'

// Import videos
import crunkVideo from '../assets/crunk.mp4'

// Import blog images
import oneYearImg from '../assets/1year.jpg'

// Content data structure: menu → magazine (submenu) → issue (third menu) → content
export const contentData = {
  'home': {},
  'magazines': {
    'The Source Magazine': {
      thirdMenuItems: ['December 1993', 'September 1998', 'October 1999', 'November 1999', 'June 2000', 'January 2001', 'April 2001', 'April 2003', 'June 2003', 'April 2004'],
      default: {
        title: 'The Source Magazine',
        text: [
          'Select an issue to view content from The Source Magazine.'
        ],
        images: []
      },
      'December 1993': {
        title: 'The Source Magazine - December 1993',
        text: [
          'Content for The Source Magazine December 1993.'
        ],
        images: []
      },
      'September 1998': {
        title: 'The Source Magazine - September 1998',
        text: [
          'Content for The Source Magazine September 1998.'
        ],
        images: []
      },
      'October 1999': {
        title: 'The Source Magazine - October 1999',
        text: [
          'Content for The Source Magazine October 1999.'
        ],
        images: []
      },
      'November 1999': {
        title: 'The Source Magazine - November 1999',
        text: [
          'Content for The Source Magazine November 1999.'
        ],
        images: []
      },
      'June 2000': {
        title: 'The Source Magazine - June 2000',
        text: [
          'Content for The Source Magazine June 2000.'
        ],
        images: []
      },
      'January 2001': {
        title: 'The Source Magazine - January 2001',
        text: [
          'Content for The Source Magazine January 2001.'
        ],
        images: []
      },
      'April 2001': {
        title: 'The Source Magazine - April 2001',
        text: [
          'Content for The Source Magazine April 2001.'
        ],
        images: []
      },
      'April 2003': {
        title: 'The Source Magazine - April 2003',
        text: [
          'Content for The Source Magazine April 2003.'
        ],
        images: []
      },
      'June 2003': {
        title: 'The Source Magazine - June 2003',
        text: [
          'Content for The Source Magazine June 2003.'
        ],
        images: []
      },
      'April 2004': {
        title: 'The Source Magazine - April 2004',
        text: [
          'Content for The Source Magazine April 2004.'
        ],
        images: []
      }
    },
    'XXL Magazine': {
      thirdMenuItems: ['June 1999', 'February 2000', 'December 2000', 'January 2001', 'September 2001', 'October 2004', 'November 2005', 'October 2007'],
      default: {
        title: 'XXL Magazine',
        text: [
          'Select an issue to view content from XXL Magazine.'
        ],
        images: []
      },
      'June 1999': {
        title: 'XXL Magazine - June 1999',
        text: ['Content for XXL Magazine June 1999.'],
        images: []
      },
      'February 2000': {
        title: 'XXL Magazine - February 2000',
        text: ['Content for XXL Magazine February 2000.'],
        images: []
      },
      'December 2000': {
        title: 'XXL Magazine - December 2000',
        text: ['Content for XXL Magazine December 2000.'],
        images: []
      },
      'January 2001': {
        title: 'XXL Magazine - January 2001',
        text: ['Content for XXL Magazine January 2001.'],
        images: []
      },
      'September 2001': {
        title: 'XXL Magazine - September 2001',
        text: ['Content for XXL Magazine September 2001.'],
        images: []
      },
      'October 2004': {
        title: 'XXL Magazine - October 2004',
        text: ['Content for XXL Magazine October 2004.'],
        images: []
      },
      'November 2005': {
        title: 'XXL Magazine - November 2005',
        text: ['Content for XXL Magazine November 2005.'],
        images: []
      },
      'October 2007': {
        title: 'XXL Magazine - October 2007',
        text: ['Content for XXL Magazine October 2007.'],
        images: []
      }
    },
    'Vibe Magazine': {
      thirdMenuItems: ['March 1999', 'March 2000', 'May 2000', 'March 2001', 'April 2001', 'June 2001', 'September 2001', 'October 2003', 'March 2004', 'July 2005'],
      default: {
        title: 'Vibe Magazine',
        text: ['Select an issue to view content from Vibe Magazine.'],
        images: []
      },
      'March 1999': { title: 'Vibe Magazine - March 1999', text: ['Content for Vibe Magazine March 1999.'], images: [] },
      'March 2000': { title: 'Vibe Magazine - March 2000', text: ['Content for Vibe Magazine March 2000.'], images: [] },
      'May 2000': { title: 'Vibe Magazine - May 2000', text: ['Content for Vibe Magazine May 2000.'], images: [] },
      'March 2001': { title: 'Vibe Magazine - March 2001', text: ['Content for Vibe Magazine March 2001.'], images: [] },
      'April 2001': { title: 'Vibe Magazine - April 2001', text: ['Content for Vibe Magazine April 2001.'], images: [] },
      'June 2001': { title: 'Vibe Magazine - June 2001', text: ['Content for Vibe Magazine June 2001.'], images: [] },
      'September 2001': { title: 'Vibe Magazine - September 2001', text: ['Content for Vibe Magazine September 2001.'], images: [] },
      'October 2003': { title: 'Vibe Magazine - October 2003', text: ['Content for Vibe Magazine October 2003.'], images: [] },
      'March 2004': { title: 'Vibe Magazine - March 2004', text: ['Content for Vibe Magazine March 2004.'], images: [] },
      'July 2005': { title: 'Vibe Magazine - July 2005', text: ['Content for Vibe Magazine July 2005.'], images: [] }
    },
    'Murder Dog Magazine*': {
      thirdMenuItems: ['Volume 6 Issue #5', 'Volume 7 Issue #1', 'Volume 8 Issue #5', 'Volume 9 Issue #1*', 'Volume 9 Issue #2', 'Volume 10 Issue #3', 'Volume 11 Issue #1', 'Volume 12 Issue #2', 'Volume 20 Issue #2'],
      default: {
        title: 'Murder Dog Magazine*',
        text: ['Select an issue to view content from Murder Dog Magazine.'],
        images: []
      },
      'Volume 6 Issue #5': { title: 'Murder Dog Magazine* - Volume 6 Issue #5', text: ['Content for Murder Dog Magazine Volume 6 Issue #5.'], images: [] },
      'Volume 7 Issue #1': { title: 'Murder Dog Magazine* - Volume 7 Issue #1', text: ['Content for Murder Dog Magazine Volume 7 Issue #1.'], images: [] },
      'Volume 8 Issue #5': { title: 'Murder Dog Magazine* - Volume 8 Issue #5', text: ['Content for Murder Dog Magazine Volume 8 Issue #5.'], images: [] },
      'Volume 9 Issue #1*': {
        title: 'Murder Dog Magazine* - Volume 9 Issue #1*',
        text: ['Content for Murder Dog Magazine Volume 9 Issue #1.'],
        images: [
          { src: dungeonFamily01, alt: 'Dungeon Family Cover', layout: 'full-width' },
          { src: dungeonFamily02, alt: 'Dungeon Family Page 2', layout: 'two-column' },
          { src: dungeonFamily03, alt: 'Dungeon Family Page 3', layout: 'two-column' },
          { src: dungeonFamily04, alt: 'Dungeon Family Page 4', layout: 'two-column' },
          { src: dungeonFamily05, alt: 'Dungeon Family Page 5', layout: 'two-column' },
          { src: dungeonFamily06, alt: 'Dungeon Family Page 6', layout: 'two-column' },
          { src: dungeonFamily07, alt: 'Dungeon Family Page 7', layout: 'two-column' }
        ]
      },
      'Volume 9 Issue #2': { title: 'Murder Dog Magazine* - Volume 9 Issue #2', text: ['Content for Murder Dog Magazine Volume 9 Issue #2.'], images: [] },
      'Volume 10 Issue #3': { title: 'Murder Dog Magazine* - Volume 10 Issue #3', text: ['Content for Murder Dog Magazine Volume 10 Issue #3.'], images: [] },
      'Volume 11 Issue #1': { title: 'Murder Dog Magazine* - Volume 11 Issue #1', text: ['Content for Murder Dog Magazine Volume 11 Issue #1.'], images: [] },
      'Volume 12 Issue #2': { title: 'Murder Dog Magazine* - Volume 12 Issue #2', text: ['Content for Murder Dog Magazine Volume 12 Issue #2.'], images: [] },
      'Volume 20 Issue #2': { title: 'Murder Dog Magazine* - Volume 20 Issue #2', text: ['Content for Murder Dog Magazine Volume 20 Issue #2.'], images: [] }
    },
    'Blaze Magazine': {
      thirdMenuItems: ['Fall 1998', 'January 1999', 'April 1999', 'June 1999', 'September 1999', 'October 1999', 'November 1999', 'February 2000', 'April 2000', 'June 2000'],
      default: {
        title: 'Blaze Magazine',
        text: ['Select an issue to view content from Blaze Magazine.'],
        images: []
      },
      'Fall 1998': { title: 'Blaze Magazine - Fall 1998', text: ['Content for Blaze Magazine Fall 1998.'], images: [] },
      'January 1999': { title: 'Blaze Magazine - January 1999', text: ['Content for Blaze Magazine January 1999.'], images: [] },
      'April 1999': { title: 'Blaze Magazine - April 1999', text: ['Content for Blaze Magazine April 1999.'], images: [] },
      'June 1999': { title: 'Blaze Magazine - June 1999', text: ['Content for Blaze Magazine June 1999.'], images: [] },
      'September 1999': { title: 'Blaze Magazine - September 1999', text: ['Content for Blaze Magazine September 1999.'], images: [] },
      'October 1999': { title: 'Blaze Magazine - October 1999', text: ['Content for Blaze Magazine October 1999.'], images: [] },
      'November 1999': { title: 'Blaze Magazine - November 1999', text: ['Content for Blaze Magazine November 1999.'], images: [] },
      'February 2000': { title: 'Blaze Magazine - February 2000', text: ['Content for Blaze Magazine February 2000.'], images: [] },
      'April 2000': { title: 'Blaze Magazine - April 2000', text: ['Content for Blaze Magazine April 2000.'], images: [] },
      'June 2000': { title: 'Blaze Magazine - June 2000', text: ['Content for Blaze Magazine June 2000.'], images: [] }
    },
    'Rap Pages Magazine': {
      thirdMenuItems: ['October 1995', 'February 1998', 'August 1998', 'October 1998', 'February 1999', 'June 1999'],
      default: {
        title: 'Rap Pages Magazine',
        text: ['Select an issue to view content from Rap Pages Magazine.'],
        images: []
      },
      'October 1995': { title: 'Rap Pages Magazine - October 1995', text: ['Content for Rap Pages Magazine October 1995.'], images: [] },
      'February 1998': { title: 'Rap Pages Magazine - February 1998', text: ['Content for Rap Pages Magazine February 1998.'], images: [] },
      'August 1998': { title: 'Rap Pages Magazine - August 1998', text: ['Content for Rap Pages Magazine August 1998.'], images: [] },
      'October 1998': { title: 'Rap Pages Magazine - October 1998', text: ['Content for Rap Pages Magazine October 1998.'], images: [] },
      'February 1999': { title: 'Rap Pages Magazine - February 1999', text: ['Content for Rap Pages Magazine February 1999.'], images: [] },
      'June 1999': { title: 'Rap Pages Magazine - June 1999', text: ['Content for Rap Pages Magazine June 1999.'], images: [] }
    },
    'Scratch Magazine': {
      thirdMenuItems: ['Fall 2004', 'Winter 2005'],
      default: {
        title: 'Scratch Magazine',
        text: ['Select an issue to view content from Scratch Magazine.'],
        images: []
      },
      'Fall 2004': { title: 'Scratch Magazine - Fall 2004', text: ['Content for Scratch Magazine Fall 2004.'], images: [] },
      'Winter 2005': { title: 'Scratch Magazine - Winter 2005', text: ['Content for Scratch Magazine Winter 2005.'], images: [] }
    },
    'Honey Magazine': {
      thirdMenuItems: ['March 2000', 'June 2002'],
      default: {
        title: 'Honey Magazine',
        text: ['Select an issue to view content from Honey Magazine.'],
        images: []
      },
      'March 2000': { title: 'Honey Magazine - March 2000', text: ['Content for Honey Magazine March 2000.'], images: [] },
      'June 2002': { title: 'Honey Magazine - June 2002', text: ['Content for Honey Magazine June 2002.'], images: [] }
    },
    'Trace Magazine': {
      thirdMenuItems: ['Issue 19', 'Issue 22'],
      default: {
        title: 'Trace Magazine',
        text: [
          'Select an issue to view content from Trace Magazine.'
        ],
        images: []
      },
      'Issue 19': {
        title: 'Trace Magazine - Issue 19',
        text: ['Content for Trace Magazine Issue 19.'],
        images: []
      },
      'Issue 22': {
        title: 'Trace Magazine - Issue 22',
        text: [
          'Content for Trace Magazine Issue 22.'
        ],
        images: []
      }
    }
  },
  'about': {
    title: 'About',
    text: [
      'public---mags is my personal collection of magazines. Sourced and scanned for your viewing pleasure.',
      'Based in Toronto, Ontario / Est. 2024'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/public___mags/?hl=en' },
      { label: 'Tumblr', url: 'https://www.tumblr.com/public---mags' }
    ]
  },
  'blog': {
    title: 'Blog',
    text: [
      'Welcome to the blog. This is a simple blog page where you can read articles and updates.',
      'Here you can find thoughts, insights, and stories about various topics.',
      'Check back regularly for new posts and updates.'
    ],
    images: [],
    video: crunkVideo,
    blogItems: [
      {
        type: 'image',
        src: oneYearImg,
        alt: '1 year of public---mags',
        caption: '1 year of public---mags'
      }
    ]
  }
}

// Helper function to get content for a specific menu, magazine (submenu), and issue (third menu)
// Only returns content when an issue (thirdMenuItem) is selected
// For blog and about, returns content directly without submenu/third menu
export const getContent = (menuItem, submenuItem, thirdMenuItem = null) => {
  // Handle blog and about - return content directly
  if ((menuItem === 'blog' || menuItem === 'about') && contentData[menuItem]) {
    return contentData[menuItem]
  }
  
  // Handle magazines - only return content when an issue (thirdMenuItem) is selected
  if (contentData[menuItem] && contentData[menuItem][submenuItem] && thirdMenuItem) {
    const submenuData = contentData[menuItem][submenuItem]
    if (submenuData[thirdMenuItem]) {
      return submenuData[thirdMenuItem]
    }
  }
  return null
}

// Helper function to get submenu items (magazines) for a menu
export const getSubmenuItems = (menuItem) => {
  if (contentData[menuItem]) {
    return Object.keys(contentData[menuItem])
  }
  return []
}

// Helper function to get third menu items (issues) for a magazine (submenu)
export const getThirdMenuItems = (menuItem, submenuItem) => {
  if (contentData[menuItem] && contentData[menuItem][submenuItem]) {
    return contentData[menuItem][submenuItem].thirdMenuItems || []
  }
  return []
}

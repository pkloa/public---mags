// Import images
import outkast01 from '../assets/img/outkast common ground-01.png'
import outkast02 from '../assets/img/outkast common ground-02.png'
import outkast03 from '../assets/img/outkast common ground-03.png'
import outkast04 from '../assets/img/outkast common ground-04.png'
import outkast05 from '../assets/img/outkast common ground-05.png'
import outkast06 from '../assets/img/outkast common ground-06.png'
import dmxTraceCover from '../assets/img/dmx trace cover.png'

// Content data structure: menu → magazine (submenu) → issue (third menu) → content
export const contentData = {
  'home': {},
  'magazines': {
    'The Source Magazine': {
      thirdMenuItems: ['Volume 6 Issue #5', 'Volume 7 Issue #1', 'Volume 8 Issue #3', 'Volume 9 Issue #2'],
      default: {
        title: 'The Source Magazine',
        text: [
          'Select an issue to view content from The Source Magazine.'
        ],
        images: []
      },
      'Volume 6 Issue #5': {
        title: 'The Source Magazine - Volume 6 Issue #5',
        text: [
          'Content for The Source Magazine Volume 6 Issue #5.',
          'This issue features articles, interviews, and more.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'The Source Magazine Volume 6 Issue #5',
            layout: 'full-width'
          },
          {
            src: outkast02,
            alt: 'Image 1',
            layout: 'two-column'
          },
          {
            src: outkast03,
            alt: 'Image 2',
            layout: 'two-column'
          },
          {
            src: outkast04,
            alt: 'Image 3',
            layout: 'full-width'
          },
          {
            src: outkast05,
            alt: 'Image 4',
            layout: 'two-column'
          },
          {
            src: outkast06,
            alt: 'Image 5',
            layout: 'two-column'
          }
        ]
      },
      'Volume 7 Issue #1': {
        title: 'The Source Magazine - Volume 7 Issue #1',
        text: [
          'Content for The Source Magazine Volume 7 Issue #1.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'The Source Magazine Volume 7 Issue #1',
            layout: 'full-width'
          },
          {
            src: outkast03,
            alt: 'Image 1',
            layout: 'two-column'
          },
          {
            src: outkast04,
            alt: 'Image 2',
            layout: 'two-column'
          },
          {
            src: outkast05,
            alt: 'Image 3',
            layout: 'full-width'
          }
        ]
      },
      'Volume 8 Issue #3': {
        title: 'The Source Magazine - Volume 8 Issue #3',
        text: [
          'Content for The Source Magazine Volume 8 Issue #3.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'The Source Magazine Volume 8 Issue #3',
            layout: 'full-width'
          }
        ]
      },
      'Volume 9 Issue #2': {
        title: 'The Source Magazine - Volume 9 Issue #2',
        text: [
          'Content for The Source Magazine Volume 9 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'The Source Magazine Volume 9 Issue #2',
            layout: 'full-width'
          }
        ]
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
        text: [
          'Content for XXL Magazine June 1999.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'XXL Magazine June 1999',
            layout: 'full-width'
          }
        ]
      },
      'February 2000': {
        title: 'XXL Magazine - February 2000',
        text: [
          'Content for XXL Magazine February 2000.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'XXL Magazine February 2000',
            layout: 'full-width'
          }
        ]
      },
      'December 2000': {
        title: 'XXL Magazine - December 2000',
        text: [
          'Content for XXL Magazine December 2000.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'XXL Magazine December 2000',
            layout: 'full-width'
          }
        ]
      },
      'January 2001': {
        title: 'XXL Magazine - January 2001',
        text: [
          'Content for XXL Magazine January 2001.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'XXL Magazine January 2001',
            layout: 'full-width'
          }
        ]
      },
      'September 2001': {
        title: 'XXL Magazine - September 2001',
        text: [
          'Content for XXL Magazine September 2001.'
        ],
        images: [
          {
            src: outkast05,
            alt: 'XXL Magazine September 2001',
            layout: 'full-width'
          }
        ]
      },
      'October 2004': {
        title: 'XXL Magazine - October 2004',
        text: [
          'Content for XXL Magazine October 2004.'
        ],
        images: [
          {
            src: outkast06,
            alt: 'XXL Magazine October 2004',
            layout: 'full-width'
          }
        ]
      },
      'November 2005': {
        title: 'XXL Magazine - November 2005',
        text: [
          'Content for XXL Magazine November 2005.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'XXL Magazine November 2005',
            layout: 'full-width'
          }
        ]
      },
      'October 2007': {
        title: 'XXL Magazine - October 2007',
        text: [
          'Content for XXL Magazine October 2007.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'XXL Magazine October 2007',
            layout: 'full-width'
          }
        ]
      }
    },
    'Vibe Magazine': {
      thirdMenuItems: ['March 1999', 'March 2000', 'May 2000', 'March 2001', 'April 2001', 'June 2001', 'September 2001', 'October 2003', 'March 2004', 'July 2005'],
      default: {
        title: 'Vibe Magazine',
        text: [
          'Select an issue to view content from Vibe Magazine.'
        ],
        images: []
      },
      'March 1999': {
        title: 'Vibe Magazine - March 1999',
        text: [
          'Content for Vibe Magazine March 1999.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Vibe Magazine March 1999',
            layout: 'full-width'
          }
        ]
      },
      'March 2000': {
        title: 'Vibe Magazine - March 2000',
        text: [
          'Content for Vibe Magazine March 2000.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'Vibe Magazine March 2000',
            layout: 'full-width'
          }
        ]
      },
      'May 2000': {
        title: 'Vibe Magazine - May 2000',
        text: [
          'Content for Vibe Magazine May 2000.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'Vibe Magazine May 2000',
            layout: 'full-width'
          }
        ]
      },
      'March 2001': {
        title: 'Vibe Magazine - March 2001',
        text: [
          'Content for Vibe Magazine March 2001.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'Vibe Magazine March 2001',
            layout: 'full-width'
          }
        ]
      },
      'April 2001': {
        title: 'Vibe Magazine - April 2001',
        text: [
          'Content for Vibe Magazine April 2001.'
        ],
        images: [
          {
            src: outkast05,
            alt: 'Vibe Magazine April 2001',
            layout: 'full-width'
          }
        ]
      },
      'June 2001': {
        title: 'Vibe Magazine - June 2001',
        text: [
          'Content for Vibe Magazine June 2001.'
        ],
        images: [
          {
            src: outkast06,
            alt: 'Vibe Magazine June 2001',
            layout: 'full-width'
          }
        ]
      },
      'September 2001': {
        title: 'Vibe Magazine - September 2001',
        text: [
          'Content for Vibe Magazine September 2001.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Vibe Magazine September 2001',
            layout: 'full-width'
          }
        ]
      },
      'October 2003': {
        title: 'Vibe Magazine - October 2003',
        text: [
          'Content for Vibe Magazine October 2003.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'Vibe Magazine October 2003',
            layout: 'full-width'
          }
        ]
      },
      'March 2004': {
        title: 'Vibe Magazine - March 2004',
        text: [
          'Content for Vibe Magazine March 2004.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'Vibe Magazine March 2004',
            layout: 'full-width'
          }
        ]
      },
      'July 2005': {
        title: 'Vibe Magazine - July 2005',
        text: [
          'Content for Vibe Magazine July 2005.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'Vibe Magazine July 2005',
            layout: 'full-width'
          }
        ]
      }
    },
    'Murder Dog Magazine': {
      thirdMenuItems: ['Volume 6 Issue #5', 'Volume 7 Issue #1', 'Volume 8 Issue #5', 'Volume 9 Issue #1', 'Volume 9 Issue #2', 'Volume 10 Issue #3', 'Volume 11 Issue #1', 'Volume 12 Issue #2', 'Volume 20 Issue #2'],
      default: {
        title: 'Murder Dog Magazine',
        text: [
          'Select an issue to view content from Murder Dog Magazine.'
        ],
        images: []
      },
      'Volume 6 Issue #5': {
        title: 'Murder Dog Magazine - Volume 6 Issue #5',
        text: [
          'Content for Murder Dog Magazine Volume 6 Issue #5.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 6 Issue #5',
            layout: 'full-width'
          }
        ]
      },
      'Volume 7 Issue #1': {
        title: 'Murder Dog Magazine - Volume 7 Issue #1',
        text: [
          'Content for Murder Dog Magazine Volume 7 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 7 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 8 Issue #5': {
        title: 'Murder Dog Magazine - Volume 8 Issue #5',
        text: [
          'Content for Murder Dog Magazine Volume 8 Issue #5.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 8 Issue #5',
            layout: 'full-width'
          }
        ]
      },
      'Volume 9 Issue #1': {
        title: 'Murder Dog Magazine - Volume 9 Issue #1',
        text: [
          'Content for Murder Dog Magazine Volume 9 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 9 Issue #1',
            layout: 'full-width'
          },
          {
            src: outkast02,
            alt: 'Image 1',
            layout: 'two-column'
          },
          {
            src: outkast03,
            alt: 'Image 2',
            layout: 'two-column'
          },
          {
            src: outkast04,
            alt: 'Image 3',
            layout: 'full-width'
          },
          {
            src: outkast05,
            alt: 'Image 4',
            layout: 'two-column'
          },
          {
            src: outkast06,
            alt: 'Image 5',
            layout: 'two-column'
          }
        ]
      },
      'Volume 9 Issue #2': {
        title: 'Murder Dog Magazine - Volume 9 Issue #2',
        text: [
          'Content for Murder Dog Magazine Volume 9 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 9 Issue #2',
            layout: 'full-width'
          }
        ]
      },
      'Volume 10 Issue #3': {
        title: 'Murder Dog Magazine - Volume 10 Issue #3',
        text: [
          'Content for Murder Dog Magazine Volume 10 Issue #3.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 10 Issue #3',
            layout: 'full-width'
          }
        ]
      },
      'Volume 11 Issue #1': {
        title: 'Murder Dog Magazine - Volume 11 Issue #1',
        text: [
          'Content for Murder Dog Magazine Volume 11 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 11 Issue #1',
            layout: 'full-width'
          },
          {
            src: outkast02,
            alt: 'Image 1',
            layout: 'two-column'
          },
          {
            src: outkast02,
            alt: 'Image 2',
            layout: 'two-column'
          },
          {
            src: outkast01,
            alt: 'Image 3',
            layout: 'full-width'
          },
          {
            src: outkast02,
            alt: 'Image 4',
            layout: 'two-column'
          },
          {
            src: outkast02,
            alt: 'Image 5',
            layout: 'two-column'
          }
        ]
      },
      'Volume 12 Issue #2': {
        title: 'Murder Dog Magazine - Volume 12 Issue #2',
        text: [
          'Content for Murder Dog Magazine Volume 12 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 12 Issue #2',
            layout: 'full-width'
          }
        ]
      },
      'Volume 20 Issue #2': {
        title: 'Murder Dog Magazine - Volume 20 Issue #2',
        text: [
          'Content for Murder Dog Magazine Volume 20 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Murder Dog Magazine Volume 20 Issue #2',
            layout: 'full-width'
          }
        ]
      }
    },
    'Blaze Magazine': {
      thirdMenuItems: ['Fall 1998', 'January 1999', 'April 1999', 'June 1999', 'September 1999', 'October 1999', 'November 1999', 'February 2000', 'April 2000', 'June 2000'],
      default: {
        title: 'Blaze Magazine',
        text: [
          'Select an issue to view content from Blaze Magazine.'
        ],
        images: []
      },
      'Fall 1998': {
        title: 'Blaze Magazine - Fall 1998',
        text: [
          'Content for Blaze Magazine Fall 1998.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Blaze Magazine Fall 1998',
            layout: 'full-width'
          }
        ]
      },
      'January 1999': {
        title: 'Blaze Magazine - January 1999',
        text: [
          'Content for Blaze Magazine January 1999.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'Blaze Magazine January 1999',
            layout: 'full-width'
          }
        ]
      },
      'April 1999': {
        title: 'Blaze Magazine - April 1999',
        text: [
          'Content for Blaze Magazine April 1999.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'Blaze Magazine April 1999',
            layout: 'full-width'
          }
        ]
      },
      'June 1999': {
        title: 'Blaze Magazine - June 1999',
        text: [
          'Content for Blaze Magazine June 1999.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'Blaze Magazine June 1999',
            layout: 'full-width'
          }
        ]
      },
      'September 1999': {
        title: 'Blaze Magazine - September 1999',
        text: [
          'Content for Blaze Magazine September 1999.'
        ],
        images: [
          {
            src: outkast05,
            alt: 'Blaze Magazine September 1999',
            layout: 'full-width'
          }
        ]
      },
      'October 1999': {
        title: 'Blaze Magazine - October 1999',
        text: [
          'Content for Blaze Magazine October 1999.'
        ],
        images: [
          {
            src: outkast06,
            alt: 'Blaze Magazine October 1999',
            layout: 'full-width'
          }
        ]
      },
      'November 1999': {
        title: 'Blaze Magazine - November 1999',
        text: [
          'Content for Blaze Magazine November 1999.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Blaze Magazine November 1999',
            layout: 'full-width'
          }
        ]
      },
      'February 2000': {
        title: 'Blaze Magazine - February 2000',
        text: [
          'Content for Blaze Magazine February 2000.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'Blaze Magazine February 2000',
            layout: 'full-width'
          }
        ]
      },
      'April 2000': {
        title: 'Blaze Magazine - April 2000',
        text: [
          'Content for Blaze Magazine April 2000.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'Blaze Magazine April 2000',
            layout: 'full-width'
          }
        ]
      },
      'June 2000': {
        title: 'Blaze Magazine - June 2000',
        text: [
          'Content for Blaze Magazine June 2000.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'Blaze Magazine June 2000',
            layout: 'full-width'
          }
        ]
      }
    },
    'Rap Pages Magazine': {
      thirdMenuItems: ['October 1995', 'February 1998', 'August 1998', 'October 1998', 'February 1999', 'June 1999'],
      default: {
        title: 'Rap Pages Magazine',
        text: [
          'Select an issue to view content from Rap Pages Magazine.'
        ],
        images: []
      },
      'October 1995': {
        title: 'Rap Pages Magazine - October 1995',
        text: [
          'Content for Rap Pages Magazine October 1995.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Rap Pages Magazine October 1995',
            layout: 'full-width'
          }
        ]
      },
      'February 1998': {
        title: 'Rap Pages Magazine - February 1998',
        text: [
          'Content for Rap Pages Magazine February 1998.'
        ],
        images: [
          {
            src: outkast02,
            alt: 'Rap Pages Magazine February 1998',
            layout: 'full-width'
          }
        ]
      },
      'August 1998': {
        title: 'Rap Pages Magazine - August 1998',
        text: [
          'Content for Rap Pages Magazine August 1998.'
        ],
        images: [
          {
            src: outkast03,
            alt: 'Rap Pages Magazine August 1998',
            layout: 'full-width'
          }
        ]
      },
      'October 1998': {
        title: 'Rap Pages Magazine - October 1998',
        text: [
          'Content for Rap Pages Magazine October 1998.'
        ],
        images: [
          {
            src: outkast04,
            alt: 'Rap Pages Magazine October 1998',
            layout: 'full-width'
          }
        ]
      },
      'February 1999': {
        title: 'Rap Pages Magazine - February 1999',
        text: [
          'Content for Rap Pages Magazine February 1999.'
        ],
        images: [
          {
            src: outkast05,
            alt: 'Rap Pages Magazine February 1999',
            layout: 'full-width'
          }
        ]
      },
      'June 1999': {
        title: 'Rap Pages Magazine - June 1999',
        text: [
          'Content for Rap Pages Magazine June 1999.'
        ],
        images: [
          {
            src: outkast06,
            alt: 'Rap Pages Magazine June 1999',
            layout: 'full-width'
          }
        ]
      }
    },
    'Scratch Magazine': {
      thirdMenuItems: ['Fall 2004', 'Winter 2005'],
      default: {
        title: 'Scratch Magazine',
        text: [
          'Select an issue to view content from Scratch Magazine.'
        ],
        images: []
      },
      'Fall 2004': {
        title: 'Scratch Magazine - Fall 2004',
        text: [
          'Content for Scratch Magazine Fall 2004.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Scratch Magazine Fall 2004',
            layout: 'full-width'
          }
        ]
      },
      'Winter 2005': {
        title: 'Scratch Magazine - Winter 2005',
        text: [
          'Content for Scratch Magazine Winter 2005.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Scratch Magazine Winter 2005',
            layout: 'full-width'
          }
        ]
      }
    },
    'Honey Magazine': {
      thirdMenuItems: ['March 2000', 'June 2002'],
      default: {
        title: 'Honey Magazine',
        text: [
          'Select an issue to view content from Honey Magazine.'
        ],
        images: []
      },
      'March 2000': {
        title: 'Honey Magazine - March 2000',
        text: [
          'Content for Honey Magazine March 2000.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Honey Magazine March 2000',
            layout: 'full-width'
          }
        ]
      },
      'June 2002': {
        title: 'Honey Magazine - June 2002',
        text: [
          'Content for Honey Magazine June 2002.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Honey Magazine June 2002',
            layout: 'full-width'
          }
        ]
      }
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
        text: [
          'Content for Trace Magazine Issue 19.'
        ],
        images: [
          {
            src: dmxTraceCover,
            alt: 'Trace Magazine Issue 19',
            layout: 'full-width'
          },
          {
            src: outkast01,
            alt: 'Outkast Image 1',
            layout: 'two-column'
          },
          {
            src: outkast02,
            alt: 'Outkast Image 2',
            layout: 'two-column'
          },
          {
            src: outkast03,
            alt: 'Outkast Image 3',
            layout: 'two-column'
          },
          {
            src: outkast04,
            alt: 'Outkast Image 4',
            layout: 'two-column'
          },
          {
            src: outkast05,
            alt: 'Outkast Image 5',
            layout: 'two-column'
          },
          {
            src: outkast06,
            alt: 'Outkast Image 6',
            layout: 'two-column'
          }
        ]
      },
      'Issue 22': {
        title: 'Trace Magazine - Issue 22',
        text: [
          'Content for Trace Magazine Issue 22.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Trace Magazine Issue 22',
            layout: 'full-width'
          }
        ]
      }
    }
  },
  'about': {
    title: 'About',
    text: [
      'This is a personal webpage showcasing magazine scans and collections.',
      'Browse through various magazines and their issues to explore the content.'
    ]
  },
  'blog': {
    title: 'Blog',
    text: [
      'Welcome to the blog. This is a simple blog page where you can read articles and updates.',
      'Here you can find thoughts, insights, and stories about various topics.',
      'Check back regularly for new posts and updates.'
    ],
    images: [
      {
        src: dmxTraceCover,
        alt: 'Blog image',
        layout: 'full-width'
      },
      {
        src: outkast01,
        alt: 'Blog image 2',
        layout: 'two-column'
      },
      {
        src: outkast01,
        alt: 'Blog image 3',
        layout: 'two-column'
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

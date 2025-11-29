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
      thirdMenuItems: ['Volume 10 Issue #1', 'Volume 11 Issue #3', 'Volume 12 Issue #2'],
      default: {
        title: 'XXL Magazine',
        text: [
          'Select an issue to view content from XXL Magazine.'
        ],
        images: []
      },
      'Volume 10 Issue #1': {
        title: 'XXL Magazine - Volume 10 Issue #1',
        text: [
          'Content for XXL Magazine Volume 10 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'XXL Magazine Volume 10 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 11 Issue #3': {
        title: 'XXL Magazine - Volume 11 Issue #3',
        text: [
          'Content for XXL Magazine Volume 11 Issue #3.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'XXL Magazine Volume 11 Issue #3',
            layout: 'full-width'
          }
        ]
      },
      'Volume 12 Issue #2': {
        title: 'XXL Magazine - Volume 12 Issue #2',
        text: [
          'Content for XXL Magazine Volume 12 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'XXL Magazine Volume 12 Issue #2',
            layout: 'full-width'
          }
        ]
      }
    },
    'Vibe Magazine': {
      thirdMenuItems: ['Volume 5 Issue #4', 'Volume 6 Issue #1', 'Volume 7 Issue #2'],
      default: {
        title: 'Vibe Magazine',
        text: [
          'Select an issue to view content from Vibe Magazine.'
        ],
        images: []
      },
      'Volume 5 Issue #4': {
        title: 'Vibe Magazine - Volume 5 Issue #4',
        text: [
          'Content for Vibe Magazine Volume 5 Issue #4.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Vibe Magazine Volume 5 Issue #4',
            layout: 'full-width'
          }
        ]
      },
      'Volume 6 Issue #1': {
        title: 'Vibe Magazine - Volume 6 Issue #1',
        text: [
          'Content for Vibe Magazine Volume 6 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Vibe Magazine Volume 6 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 7 Issue #2': {
        title: 'Vibe Magazine - Volume 7 Issue #2',
        text: [
          'Content for Vibe Magazine Volume 7 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Vibe Magazine Volume 7 Issue #2',
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
      thirdMenuItems: ['Volume 3 Issue #1', 'Volume 4 Issue #2'],
      default: {
        title: 'Blaze Magazine',
        text: [
          'Select an issue to view content from Blaze Magazine.'
        ],
        images: []
      },
      'Volume 3 Issue #1': {
        title: 'Blaze Magazine - Volume 3 Issue #1',
        text: [
          'Content for Blaze Magazine Volume 3 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Blaze Magazine Volume 3 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 4 Issue #2': {
        title: 'Blaze Magazine - Volume 4 Issue #2',
        text: [
          'Content for Blaze Magazine Volume 4 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Blaze Magazine Volume 4 Issue #2',
            layout: 'full-width'
          }
        ]
      }
    },
    'Rap Pages Magazine': {
      thirdMenuItems: ['Volume 2 Issue #3', 'Volume 3 Issue #1'],
      default: {
        title: 'Rap Pages Magazine',
        text: [
          'Select an issue to view content from Rap Pages Magazine.'
        ],
        images: []
      },
      'Volume 2 Issue #3': {
        title: 'Rap Pages Magazine - Volume 2 Issue #3',
        text: [
          'Content for Rap Pages Magazine Volume 2 Issue #3.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Rap Pages Magazine Volume 2 Issue #3',
            layout: 'full-width'
          }
        ]
      },
      'Volume 3 Issue #1': {
        title: 'Rap Pages Magazine - Volume 3 Issue #1',
        text: [
          'Content for Rap Pages Magazine Volume 3 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Rap Pages Magazine Volume 3 Issue #1',
            layout: 'full-width'
          }
        ]
      }
    },
    'Scratch Magazine': {
      thirdMenuItems: ['Volume 1 Issue #1', 'Volume 2 Issue #2'],
      default: {
        title: 'Scratch Magazine',
        text: [
          'Select an issue to view content from Scratch Magazine.'
        ],
        images: []
      },
      'Volume 1 Issue #1': {
        title: 'Scratch Magazine - Volume 1 Issue #1',
        text: [
          'Content for Scratch Magazine Volume 1 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Scratch Magazine Volume 1 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 2 Issue #2': {
        title: 'Scratch Magazine - Volume 2 Issue #2',
        text: [
          'Content for Scratch Magazine Volume 2 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Scratch Magazine Volume 2 Issue #2',
            layout: 'full-width'
          }
        ]
      }
    },
    'Honey Magazine': {
      thirdMenuItems: ['Volume 5 Issue #1', 'Volume 6 Issue #3'],
      default: {
        title: 'Honey Magazine',
        text: [
          'Select an issue to view content from Honey Magazine.'
        ],
        images: []
      },
      'Volume 5 Issue #1': {
        title: 'Honey Magazine - Volume 5 Issue #1',
        text: [
          'Content for Honey Magazine Volume 5 Issue #1.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Honey Magazine Volume 5 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 6 Issue #3': {
        title: 'Honey Magazine - Volume 6 Issue #3',
        text: [
          'Content for Honey Magazine Volume 6 Issue #3.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Honey Magazine Volume 6 Issue #3',
            layout: 'full-width'
          }
        ]
      }
    },
    'Trace Magazine': {
      thirdMenuItems: ['Volume 4 Issue #1', 'Volume 5 Issue #2'],
      default: {
        title: 'Trace Magazine',
        text: [
          'Select an issue to view content from Trace Magazine.'
        ],
        images: []
      },
      'Volume 4 Issue #1': {
        title: 'Trace Magazine - Volume 4 Issue #1',
        text: [
          'Content for Trace Magazine Volume 4 Issue #1.'
        ],
        images: [
          {
            src: dmxTraceCover,
            alt: 'Trace Magazine Volume 4 Issue #1',
            layout: 'full-width'
          }
        ]
      },
      'Volume 5 Issue #2': {
        title: 'Trace Magazine - Volume 5 Issue #2',
        text: [
          'Content for Trace Magazine Volume 5 Issue #2.'
        ],
        images: [
          {
            src: outkast01,
            alt: 'Trace Magazine Volume 5 Issue #2',
            layout: 'full-width'
          }
        ]
      }
    }
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
// For blog, returns content directly without submenu/third menu
export const getContent = (menuItem, submenuItem, thirdMenuItem = null) => {
  // Handle blog - return content directly
  if (menuItem === 'blog' && contentData[menuItem]) {
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

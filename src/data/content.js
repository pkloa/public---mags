// Content data structure: menu → submenu → content
export const contentData = {
  'Menu Item 1': {
    'Sub Menu 1': {
      title: 'Sub Menu 1 Content',
      text: [
        'This is the first paragraph for Sub Menu 1. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.',
        'This is the third paragraph. You can continue adding more paragraphs as needed to provide comprehensive information.'
      ],
      images: [
        {
          src: 'https://placehold.co/800x400',
          alt: 'Full width image 1',
          layout: 'full-width'
        }
      ]
    },
    'Sub Menu 2': {
      title: 'Sub Menu 2 Content',
      text: [
        'This is the first paragraph for Sub Menu 2. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 1',
          layout: 'two-column'
        },
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 2',
          layout: 'two-column'
        }
      ]
    },
    'Sub Menu 3': {
      title: 'Sub Menu 3 Content',
      text: [
        'This is the first paragraph for Sub Menu 3. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/800x400',
          alt: 'Full width image 2',
          layout: 'full-width'
        }
      ]
    },
    'Sub Menu 4': {
      title: 'Sub Menu 4 Content',
      text: [
        'This is the first paragraph for Sub Menu 4. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 3',
          layout: 'two-column'
        },
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 4',
          layout: 'two-column'
        }
      ]
    }
  },
  'Menu Item 2': {
    'Sub Menu A': {
      title: 'Sub Menu A Content',
      text: [
        'This is the first paragraph for Sub Menu A. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/800x400',
          alt: 'Full width image 3',
          layout: 'full-width'
        }
      ]
    },
    'Sub Menu B': {
      title: 'Sub Menu B Content',
      text: [
        'This is the first paragraph for Sub Menu B. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 5',
          layout: 'two-column'
        },
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 6',
          layout: 'two-column'
        }
      ]
    },
    'Sub Menu C': {
      title: 'Sub Menu C Content',
      text: [
        'This is the first paragraph for Sub Menu C. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/800x400',
          alt: 'Full width image 4',
          layout: 'full-width'
        }
      ]
    }
  },
  'Menu Item 3': {
    'Sub Menu X': {
      title: 'Sub Menu X Content',
      text: [
        'This is the first paragraph for Sub Menu X. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/800x400',
          alt: 'Full width image 5',
          layout: 'full-width'
        }
      ]
    },
    'Sub Menu Y': {
      title: 'Sub Menu Y Content',
      text: [
        'This is the first paragraph for Sub Menu Y. You can add multiple paragraphs of text here to create rich content.',
        'This is the second paragraph. It provides additional information and context about the topic.'
      ],
      images: [
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 7',
          layout: 'two-column'
        },
        {
          src: 'https://placehold.co/400x300',
          alt: 'Image 8',
          layout: 'two-column'
        }
      ]
    }
  }
}

// Helper function to get content for a specific menu and submenu
export const getContent = (menuItem, submenuItem) => {
  if (contentData[menuItem] && contentData[menuItem][submenuItem]) {
    return contentData[menuItem][submenuItem]
  }
  return null
}

// Helper function to get submenu items for a menu
export const getSubmenuItems = (menuItem) => {
  if (contentData[menuItem]) {
    return Object.keys(contentData[menuItem])
  }
  return []
}


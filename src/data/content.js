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
    'XXL Magazine*': {
      thirdMenuItems: ['June 1999*', 'February 2000', 'December 2000', 'January 2001', 'September 2001', 'October 2004', 'November 2005', 'October 2007'],
      default: {
        title: 'XXL Magazine*',
        text: [
          'Select an issue to view content from XXL Magazine.'
        ],
        images: []
      },
      'June 1999*': {
        title: 'XXL Magazine* - June 1999*',
        text: ['Content for XXL Magazine June 1999.'],
        images: [
          { src: '/murder inc xxl 1.jpg', alt: 'Murder Inc XXL June 1999 Cover', layout: 'full-width' },
          { src: '/murder inc xxl 2.jpg', alt: 'Murder Inc XXL June 1999 Page 2', layout: 'two-column' },
          { src: '/murder inc xxl 3.jpg', alt: 'Murder Inc XXL June 1999 Page 3', layout: 'two-column' },
          { src: '/murder inc xxl 4.jpg', alt: 'Murder Inc XXL June 1999 Page 4', layout: 'two-column' },
          { src: '/murder inc xxl 5.jpg', alt: 'Murder Inc XXL June 1999 Page 5', layout: 'two-column' },
          { src: '/murder inc xxl 6.jpg', alt: 'Murder Inc XXL June 1999 Page 6', layout: 'two-column' },
          { src: '/murder inc xxl 7.jpg', alt: 'Murder Inc XXL June 1999 Page 7', layout: 'two-column' },
          { src: '/murder inc xxl 8.jpg', alt: 'Murder Inc XXL June 1999 Page 8', layout: 'full-width' },
          { src: '/murder inc xxl 9.jpg', alt: 'Murder Inc XXL June 1999 Page 9', layout: 'full-width' }
        ]
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
    'Vibe Magazine*': {
      thirdMenuItems: ['March 1999', 'March 2000', 'May 2000', 'March 2001', 'April 2001', 'June 2001', 'September 2001*', 'October 2003', 'March 2004', 'July 2005'],
      default: {
        title: 'Vibe Magazine*',
        text: ['Select an issue to view content from Vibe Magazine.'],
        images: []
      },
      'March 1999': { title: 'Vibe Magazine* - March 1999', text: ['Content for Vibe Magazine March 1999.'], images: [] },
      'March 2000': { title: 'Vibe Magazine* - March 2000', text: ['Content for Vibe Magazine March 2000.'], images: [] },
      'May 2000': { title: 'Vibe Magazine* - May 2000', text: ['Content for Vibe Magazine May 2000.'], images: [] },
      'March 2001': { title: 'Vibe Magazine* - March 2001', text: ['Content for Vibe Magazine March 2001.'], images: [] },
      'April 2001': { title: 'Vibe Magazine* - April 2001', text: ['Content for Vibe Magazine April 2001.'], images: [] },
      'June 2001': { title: 'Vibe Magazine* - June 2001', text: ['Content for Vibe Magazine June 2001.'], images: [] },
      'September 2001*': { 
        title: 'Vibe Magazine* - September 2001*', 
        text: ['Content for Vibe Magazine September 2001.'], 
        images: [
          // First image (cover) - full width
          { src: '/vibe-sept-2001/vibe sept 01-01.jpg', alt: 'Vibe September 2001 Cover', layout: 'full-width' },
          // Middle pages - two column
          ...Array.from({ length: 266 }, (_, i) => ({
            src: `/vibe-sept-2001/vibe sept 01-${String(i + 2).padStart(2, '0')}.jpg`,
            alt: `Vibe September 2001 Page ${i + 2}`,
            layout: 'two-column'
          })),
          // Last image - full width
          { src: '/vibe-sept-2001/vibe sept 01-268.jpg', alt: 'Vibe September 2001 Back Cover', layout: 'full-width' }
        ]
      },
      'October 2003': { title: 'Vibe Magazine* - October 2003', text: ['Content for Vibe Magazine October 2003.'], images: [] },
      'March 2004': { title: 'Vibe Magazine* - March 2004', text: ['Content for Vibe Magazine March 2004.'], images: [] },
      'July 2005': { title: 'Vibe Magazine* - July 2005', text: ['Content for Vibe Magazine July 2005.'], images: [] }
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
    'True/Trace Magazine': {
      thirdMenuItems: ['July 1995', 'June 1996', 'June 1997', 'November 1997', 'October 1998'],
      default: {
        title: 'True/Trace Magazine',
        text: [
          'Select an issue to view content from True/Trace Magazine.'
        ],
        images: []
      },
      'July 1995': {
        title: 'True/Trace Magazine - July 1995',
        text: ['Content for True/Trace Magazine July 1995.'],
        images: []
      },
      'June 1996': {
        title: 'True/Trace Magazine - June 1996',
        text: ['Content for True/Trace Magazine June 1996.'],
        images: []
      },
      'June 1997': {
        title: 'True/Trace Magazine - June 1997',
        text: ['Content for True/Trace Magazine June 1997.'],
        images: []
      },
      'November 1997': {
        title: 'True/Trace Magazine - November 1997',
        text: ['Content for True/Trace Magazine November 1997.'],
        images: []
      },
      'October 1998': {
        title: 'True/Trace Magazine - October 1998',
        text: ['Content for True/Trace Magazine October 1998.'],
        images: []
      }
    },
    'NME Magazine*': {
      thirdMenuItems: ['March 2001', 'April 2001', 'June 2001*', 'August 2001'],
      default: {
        title: 'NME Magazine*',
        text: ['Select an issue to view content from NME Magazine.'],
        images: []
      },
      'March 2001': {
        title: 'NME Magazine - March 2001',
        text: ['Content for NME Magazine March 2001.'],
        images: []
      },
      'April 2001': {
        title: 'NME Magazine - April 2001',
        text: ['Content for NME Magazine April 2001.'],
        images: []
      },
      'June 2001*': {
        title: 'NME Magazine* - June 2001*',
        text: ['Content for NME Magazine June 2001.'],
        images: [
          { src: '/outkast nme 1.jpg', alt: 'OutKast NME June 2001 Cover', layout: 'full-width' },
          { src: '/outkast nme 2.jpg', alt: 'OutKast NME June 2001 Page 2', layout: 'two-column' },
          { src: '/outkast nme 3.jpg', alt: 'OutKast NME June 2001 Page 3', layout: 'two-column' },
          { src: '/outkast nme 4.jpg', alt: 'OutKast NME June 2001 Page 4', layout: 'full-width' }
        ]
      },
      'August 2001': {
        title: 'NME Magazine - August 2001',
        text: [],
        images: []
      }
    },
    'Switch Magazine': {
      thirdMenuItems: ['March 1996', 'November 1997'],
      default: {
        title: 'Switch Magazine',
        text: ['Select an issue to view content from Switch Magazine.'],
        images: []
      },
      'March 1996': {
        title: 'Switch Magazine - March 1996',
        text: ['Content for Switch Magazine March 1996.'],
        images: []
      },
      'November 1997': {
        title: 'Switch Magazine - November 1997',
        text: ['Content for Switch Magazine November 1997.'],
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
  'collection': {
    title: 'Collection',
    text: [
      'The Source Magazine',
      '',
      'source dec \'93/ tribe called quest',
      'source jan \'94/ das efx',
      'source feb \'94/ ice cube',
      'source oct \'96/ da brat',
      'source jul \'97/ fugues',
      'source sep \'98/ lauryn hill',
      'source oct \'98/ tribe called quest',
      'source jun \'99/ snoop dogg',
      'source oct \'99/ hot boys',
      'source nov \'99/ q tip',
      'source dec \'99/ lil kim',
      'source jan \'00/ jay z',
      'source mar \'00/ rza & ghostface killah',
      'source aug \'00/ wyclef jean',
      'source jan \'01/ wu tang',
      'source apr \'01/ trick daddy',
      'source jan \'02/ outkast',
      'source may \'02/ eminem',
      'source aug \'02/ eve',
      'source oct \'02/ murder inc',
      'source apr \'03/ dipset',
      'source jun \'03/ Pharrell',
      'source sep \'03/ outkast',
      'source apr \'04/ kanye',
      'source apr \'06/ don\'t mess with texas',
      '',
      'XXL Magazine',
      '',
      'xxl \'98/ goodie mob',
      'xxl \'98/ c murder',
      'xxl apr \'99/ cash money',
      'xxl jun \'99/ ja rule, jay z & dmx',
      'xxl feb \'00/ dmx',
      'xxl jul \'00/ snoop dogg',
      'xxl nov \'00/ mystikal',
      'xxl dec \'00/ outkast',
      'xxl jan\' 01/ dmx',
      'xxl sept\' 01/ juvenile',
      'xxl jul \'02/ foxy brown',
      'xxl sept \'02/ birdman',
      'xxl dec \'02/ jay z',
      'xxl oct \'04/ dave chappelle w/ kanye, kweli, common & dead prez',
      'xxl dec \'04/ chingy',
      'xxl nov \'05/ lil wayne',
      'xxl apr \'06/ t.i',
      'xxl aug \'07/ 50 cent',
      'xxl oct \'07/ kanye',
      'xxl oct \'08/ lil wayne',
      'xxl mar \'09/ jim jones, juelz sanatana, freekey zeekey',
      'xxl jun \'09/ eminem the punisher',
      'xxl jul \'09/ icey city',
      'xxl oct \'09/ jay z',
      'xxl nov \'09/ def jam',
      'xxl may \'10/ drake & nicki minaj',
      '',
      'Vibe Magazine',
      '',
      'vibe mar \'99/ master p & silkk the shocker',
      'vibe mar \'00/ q tip',
      'vibe may \'00/ juvenile',
      'vibe mar \'01/ eve',
      'vibe apr \'01/ maxwell',
      'vibe jun \'01/ missy elliott',
      'vibe sept \'01/ dre & eminem',
      'vibe jun \'02/ master p, mystikal & luda',
      'vibe aug \'02/ nelly',
      'vibe oct \'03/ outkast',
      'vibe mar \'04/ alicia keys',
      'vibe mar \'05/ pharrell & gwen stefani',
      'vibe jul \'05/ kanye, common & john legend',
      'vibe apr \'09/ t.i.',
      '',
      'Rap Pages Magazine',
      '',
      'rap pages oct \'95/ krs one',
      'rap pages feb \'98/ nwa',
      'rap pages apr \'98/ organized noize',
      'rap pages aug \'98/ jermaine dupri',
      'rap pages oct \'98/ ras kass',
      'rap pages feb \'99/ cash money',
      'rap pages jun \'99/ dmx',
      '',
      'Blaze Magazine',
      '',
      'blaze fall \'98/ method man',
      'blaze jan \'99/ jay z',
      'blaze apr \'99/ juvenile',
      'blaze jun \'99/ nas',
      'blaze sep \'99/ mobb deep',
      'blaze oct \'99/ eve',
      'blaze nov \'99/ goodie mob',
      'blaze feb \'00/ lil wayne',
      'blaze apr \'00/ beanie sigel',
      'blaze jun \'00/ swizz beatz & mannie fresh',
      '',
      'Murder Dog Magazine',
      '',
      'murder dog vol 6 issue #5/ juvenile',
      'murder dog vol 7 issue #1/ big tymers',
      'murder dog vol 8 issue #5/ warren g',
      'murder dog vol 9 issue #1/ dungeon family',
      'murder dog vol 9 issue #2/ nelly',
      'murder dog vol 10 issue #3/ soulja slim',
      'murder dog vol 11 issue #1/ lil jon',
      'murder dog vol 12 issue #2/ slim thug',
      'murder dog vol 20 issue #2/ freddie gibbs',
      '',
      'Rap Sheet Magazine',
      '',
      'rap sheet jan \'99/ master p',
      'rap sheet mar \'99/ nonchalant',
      '',
      'Scratch Magazine',
      '',
      'scratch fall \'04/ kanye',
      'scratch winter \'05/ the neptunes',
      '',
      'King Magazine',
      '',
      'king winter \'03/ foxy brown',
      '',
      'Elemental Magazine',
      '',
      'elemental #67 \'03/ madlib',
      '',
      'Honey Magazine',
      '',
      'honey mar \'00/ jennifer lopez',
      'honey jun \'02/ andre 3k',
      '',
      'Rides Magazine',
      '',
      'rides nov \'06/ lil wayne & birdman',
      '',
      'Mean Magazine',
      '',
      'mean \'01/ outkast',
      '',
      'Rolling Stone Magazine',
      '',
      'rolling stone apr \'99/ eminem',
      '',
      'Vanity Fair Magazine',
      '',
      'vanity nov \'00/ music issue',
      'vanity nov \'01/ music issue',
      '',
      'Vogue Magazine',
      '',
      'vogue paris aug \'05/ demi moore',
      '',
      'Interview Magazine',
      '',
      'interview jul \'90/ denzel washington',
      '',
      'Vice Magazine',
      '',
      'vice oct \'98/ outkast',
      '',
      'True/Trace Magazine',
      '',
      'true jul \'95/ method man',
      'true jun \'96/ nas',
      'trace jun \'97/ goldie',
      'trace nov \'97/ method man',
      'trace oct \'98/ dmx',
      'trace \'00/ ghostface killah',
      '',
      'Blues & Soul Magazine',
      '',
      'blues & soul jul \'01/ nelly',
      '',
      'NME Magazine',
      '',
      'nme 6 jan \'01/ new stars',
      'nme 13 jan \'01/ manic street preachers',
      'nme 20 jan \'01/ jj72',
      'nme 27 jan \'01/ sex drugs & rock',
      'nme 3 feb \'01/ tour',
      'nme 31 mar \'01/ missy elliott',
      'nme 7 apr \'01/ miami dance',
      'nme 14 apr \'01/ starsailor',
      'nme 21 apr \'01/ ny',
      'nme 28 apr \'01/ destiny\'s child',
      'nme 5 may \'01/ mogwai',
      'nme 12 may \'01/ basement jaxx',
      'nme 19 may \'01/ radiohead',
      'nme 26 may \'01/ air',
      'nme 16 jun \'01/ outkast',
      'nme 23 jun \'01/ travis',
      'nme 30 jun \'01/ super furry animals',
      'nme 21 jul \'01/ spiritualized',
      'nme 28 jul \'01/ bradford riots',
      'nme 4 aug \'01/ mercury rev',
      'nme 18 aug \'01/ tim burgess',
      'nme 22 sep \'01/ starsailor',
      'nme 20 oct \'01/ andrew wk',
      'nme 27 oct \'01/ guitar britain',
      'nme 17 nov \'01/ weed',
      'nme 8 dec \'01/ year',
      'nme 15 dec \'01/ year',
      '',
      'BMR Magazine',
      '',
      'bmr mar \'97/ snoop dogg',
      'bmr may \'01/ destiny\'s child',
      'bmr dec \'03/ missy elliott',
      'bmr jun \'04/ d12',
      'bmr aug \'04/ outkast',
      'bmr nov \'11/ drake',
      '',
      'Woofin\' Magazine',
      '',
      'woofin\' sep \'02/ jay z',
      '',
      'Blast Magazine',
      '',
      'blast jan \'99/ method man & redman',
      'blast dec \'99/ d\'angelo',
      'blast feb \'01/ dj krush',
      'blast oct \'01/ lefteye',
      '',
      'The Kool Hoppers Magazine',
      '',
      'kool hoppers spring \'05/ lil flip',
      'kool hoppers summer \'05/ nelly',
      '',
      'Remix Magazine',
      '',
      'remix jun \'05/ bob marley',
      '',
      'RM Magazine',
      '',
      'rm \'96/ linton kwesi johnson',
      'rm \'96/ bounty killer',
      '',
      'Relax Magazine',
      '',
      'relax mar \'01/ ape ny',
      'relax jul \'01/',
      'relax dec \'01/ paris',
      '',
      'Smart Magazine',
      '',
      'smart \'03/ nigo & hiroshi fujiwara',
      '',
      'Switch Magazine',
      '',
      'switch mar \'96/ takeshi kaneshiro',
      'switch nov \'97/ faye wong',
      '',
      'Amoeba Magazine',
      '',
      'amoeba jan \'99/ tony leung'
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
    video: '/blog/process 4 3 S.mp4',
    videoDate: '1.31.26',
    videoCaption: 'process',
    blogItems: [
      {
        type: 'image',
        src: '/IMG_9700.PNG',
        alt: 'Eddie Plein',
        date: '1.24.26',
        caption: 'eddie plein'
      },
      {
        type: 'video',
        src: '/blog/scannin.mp4',
        date: '01.22.26',
        sideText: `public mags has become therapy for me

burn incense, spin a record, scan mags

this is all i need`
      },
      {
        type: 'image',
        src: '/nas true cover.jpg',
        alt: 'Nas True Magazine Cover',
        caption: 'grails'
      },
      {
        type: 'image',
        src: '/method man true cover.jpg',
        alt: 'Method Man True Magazine Cover',
        date: '1.19.26'
      },
      {
        type: 'video',
        src: '/blog/first draft.mp4',
        date: '12.14.25',
        caption: 'public---mags[dot]com        first draft'
      },
      {
        type: 'image',
        src: '/blog/IMG_966.jpeg',
        alt: 'Magazine scan',
        small: true,
        date: '12.04.25',
        caption: 'why get gold fronts?'
      },
      {
        type: 'image',
        src: '/paper draft.JPG',
        alt: 'Paper draft',
        date: '11.19.25',
        caption: 'rough draft'
      },
      {
        type: 'image',
        src: '/blog/IMG_918.jpeg',
        alt: 'Magazine scan',
        small: true,
        date: '10.05.25',
        caption: 'silkk the shocker'
      },
      {
        type: 'image',
        src: oneYearImg,
        alt: '1 year of public---mags',
        date: '08.14.25',
        sideText: `one year of public---mags

crazy it's been a year! i was having so much fun, time flew by so fast. i never imagined i'd be where i am now, but i'm so grateful for it.

all of the support has been unreal! it's been so cool to see how the scans have brought back memories for people, while also sharing rare scans some of you haven't seen before.

thank you again for all the love and support. more scans to come!

-e`
      },
      {
        type: 'video',
        src: crunkVideo,
        date: '06.28.25',
        caption: 'crunk\nshot n edited by me'
      }
    ]
  }
}

// Helper function to get content for a specific menu, magazine (submenu), and issue (third menu)
// Only returns content when an issue (thirdMenuItem) is selected
// For blog and about, returns content directly without submenu/third menu
export const getContent = (menuItem, submenuItem, thirdMenuItem = null) => {
  // Handle blog, about, and collection - return content directly
  if ((menuItem === 'blog' || menuItem === 'about' || menuItem === 'collection') && contentData[menuItem]) {
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

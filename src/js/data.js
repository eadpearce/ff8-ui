
const gfs = [
  {
    name: 'Quezacotl',
    image: './images/quezacotl.png',
    id: 'quezacotl',
    level: 20,
  },
  {
    name: 'Shiva',
    image: './images/shiva.png',
    id: 'shiva',
    level: 24,
  },
  {
    name: 'Ifrit',
    image: './images/ifrit.png',
    id: 'ifrit',
    level: 18,
  },
  {
    name: 'Siren',
    image: './images/siren.png',
    id: 'siren',
    level: 21,
  },
  {
    name: 'Brothers',
    image: './images/brothers.png',
    id: 'brothers',
    level: 22,
  },
  {
    name: 'Diablos',
    image: './images/diablos.png',
    id: 'diablos',
    level: 20,
  },
  {
    name: 'Carbuncle',
    image: './images/carbuncle.png',
    id: 'carbuncle',
    level: 25,
  },
  {
    name: 'Leviathan',
    image: './images/leviathan.png',
    id: 'leviathan',
    level: 20,
  },
  {
    name: 'Pandemona',
    image: './images/pandemona.png',
    id: 'pandemona',
    level: 20,
  },
  {
    name: 'Cerberus',
    image: './images/cerberus.png',
    id: 'cerberus',
    level: 20,
  },
  {
    name: 'Alexander',
    image: './images/alexander.png',
    id: 'alexander',
    level: 20,
  },
  {
    name: 'Doomtrain',
    image: './images/doomtrain.png',
    id: 'doomtrain',
    level: 20,
  },
  {
    name: 'Bahamut',
    image: './images/bahamut.png',
    id: 'bahamut',
    level: 20,
  },
  {
    name: 'Cactuar',
    image: './images/cactuar.png',
    id: 'cactuar',
    level: 20,
  },
  {
    name: 'Tonberry',
    image: './images/tonberry.png',
    id: 'tonberry',
    level: 20,
  },
  {
    name: 'Eden',
    image: './images/eden.png',
    id: 'eden',
    level: 20,
  }
];

const menuIDs = [
  'junction',
  'item',
  'magic',
  'status',
  'gf',
  'ability',
  'switch',
  'card',
  'config',
  'tutorial',
  'save',
];

const junctionMenuItems = [
  {
    id: 'junction-junction',
    title: 'Junction',
    helpText: 'Junctioning',
    isActive: false,
  },
  {
    id: 'junction-off',
    title: 'Off',
    helpText: 'Remove all that is junctioned',
    isActive: false,
  },
  {
    id: 'junction-auto',
    title: 'Auto',
    helpText: 'Auto-junction magic',
    isActive: false,
  },
  {
    id: 'junction-ability',
    title: 'Ability',
    helpText: 'Assign abilities',
    isActive: false,
  },
];

const mainMenuItems = [
  {
    id: 'junction',
    title: 'Junction',
    helpText: 'Junction Menu',
    isActive: false,
  },
  {
    id: 'item',
    title: 'Item',
    helpText: 'Item Menu',
    isActive: false,
  },
  {
    id: 'magic',
    title: 'Magic',
    helpText: 'Magic Menu',
    isActive: false,
  },
  {
    id: 'status',
    title: 'Status',
    helpText: 'Status Menu',
    isActive: false,
  },
  {
    id: 'gf',
    title: 'GF',
    helpText: 'Guardian Force Menu',
    isActive: false,
  },
  {
    id: 'ability',
    title: 'Ability',
    helpText: 'Use GF Ability',
    isActive: false,
  },
  {
    id: 'switch',
    title: 'Switch',
    helpText: 'Switch Party Members',
    isActive: false,
  },
  {
    id: 'card',
    title: 'Card',
    helpText: 'Look at Cards',
    isActive: false,
  },
  {
    id: 'config',
    title: 'Config',
    helpText: 'Configuration Menu',
    isActive: false,
  },
  {
    id: 'tutorial',
    title: 'Tutorial',
    helpText: 'Explanation',
    isActive: false,
  },
  {
    id: 'save',
    title: 'Save',
    helpText: 'Save Menu',
    isActive: false,
  }
];

const partyMembers = [
  {
    name: 'Quistis',
    level: 100,
    skills: ['Attack', 'Recover', 'Magic', 'Item'],
    gfs: ['Quezacotl', 'Brothers', 'Pandemona', 'Alexander', 'Doomtrain'],
    stats: {
      hp: {
        unlocked: true,
        magic: 'Full-life',
        value: 9999
      },
      str: {
        unlocked: true,
        magic: 'Ultima',
        value: 255
      },
      vit: {
        unlocked: true,
        magic: 'Meltdown',
        value: 255
      },
      mag: {
        unlocked: true,
        magic: 'Meteor',
        value: 176
      },
      spr: {
        unlocked: true,
        magic: 'Reflect',
        value: 106
      },
      spd: {
        unlocked: true,
        magic: 'Triple',
        value: 145
      },
      eva: {
        unlocked: true,
        magic: 'Tornado',
        value: 26
      },
      hit: {
        unlocked: true,
        magic: 'Double',
        value: 147
      },
      luck: {
        unlocked: true,
        magic: 'Aura',
        value: 61
      }
    }
  },
  {
    name: 'Squall',
    level: 100,
    gfs: ['Siren', 'Carbuncle', 'Leviathan', 'Cerberus', 'Bahamut', 'Cactuar'],
    skills: ['Attack', 'GF', 'Draw', 'Item'],
    stats: {
      hp: {
        unlocked: true,
        magic: 'Full-life',
        value: 9999
      },
      str: {
        unlocked: true,
        magic: 'Ultima',
        value: 255
      },
      vit: {
        unlocked: true,
        magic: 'Meltdown',
        value: 182
      },
      mag: {
        unlocked: true,
        magic: 'Meteor',
        value: 160
      },
      spr: {
        unlocked: true,
        magic: 'Reflect',
        value: 155
      },
      spd: {
        unlocked: true,
        magic: 'Triple',
        value: 149
      },
      eva: {
        unlocked: true,
        magic: 'Tornado',
        value: 27
      },
      hit: {
        unlocked: false,
        magic: '',
        value: 255
      },
      luck: {
        unlocked: true,
        magic: 'Aura',
        value: 62
      }
    }
  },
  {
    name: 'Zell',
    level: 100,
    skills: ['Attack', 'GF', 'Magic', 'Devour'],
    gfs: ['Shiva', 'Ifrit', 'Diablos', 'Tonberry', 'Eden'],
    stats: {
      hp: {
        unlocked: true,
        magic: 'Full-life',
        value: 9999
      },
      str: {
        unlocked: true,
        magic: 'Ultima',
        value: 255
      },
      vit: {
        unlocked: true,
        magic: 'Meltdown',
        value: 255
      },
      mag: {
        unlocked: true,
        magic: 'Meteor',
        value: 172
      },
      spr: {
        unlocked: true,
        magic: 'Reflect',
        value: 138
      },
      spd: {
        unlocked: true,
        magic: 'Triple',
        value: 105
      },
      eva: {
        unlocked: true,
        magic: 'Tornado',
        value: 22
      },
      hit: {
        unlocked: true,
        magic: 'Double',
        value: 143
      },
      luck: {
        unlocked: true,
        magic: 'Aura',
        value: 60
      }
    }
  }
];

const nonPartyMembers = [
  {
    name: 'Irvine',
    level: 100,
    hp: 6280
  },
  {
    name: 'Rinoa',
    level: 100,
    hp: 6611
  },
  {
    name: 'Selphie',
    level: 100,
    hp: 6110
  }
];

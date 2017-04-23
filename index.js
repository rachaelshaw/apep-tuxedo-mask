/**
 * Module dependencies
 */
const pep = require('@sailshq/apep');
const pep_trans = require('apep-std-transformations');
const pep_vars = require('apep-std-vars');
const md = require('apep-md');
const capitalize = (g) => pep_trans.capitalizeFirst(pep.join(g));// Sentence level capitalization.


const tuxedoMaskQuote = pep.declare(function (){
  return pep.choice([
    pep.choice('I am Tuxedo Mask.\n','','',''),
    pep.choice(
      [
        pep.choice(
          ['Sailor Moon, ',ENCOURAGING_COMMAND_FOR_SAILOR_MOON_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON],
          capitalize(ENCOURAGING_COMMAND_FOR_SAILOR_MOON_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON)
        ),
        '.',
        pep.opt('\nIt is your destiny.')
      ],
      [
        pep.opt([capitalize(pep.choice(
          POSITIVE_PEARL_OF_WISDOM,
          NEUTRAL_INFORMATIVE_PEARL_OF_WISDOM
        )),'.\n']),
        pep.opt([capitalize(COMPLIMENT_FOR_SAILOR_MOON),'.\n']),
        pep.choice(
          ['Sailor Moon, ',ENCOURAGING_COMMAND_FOR_SAILOR_MOON],
          capitalize(ENCOURAGING_COMMAND_FOR_SAILOR_MOON)
        ),
        '.'
      ],
      [
        pep.choice(
          [capitalize(COMPLIMENT_FOR_SAILOR_MOON),'.']
        )
      ],
      [
        [
          pep.choice(
            [capitalize(SCOLDING_DESCRIPTION_OF_ENEMY_ACTIONS_FOR_ENEMY),pep.opt([', ',ENEMY_NAME_PROPER_NOUN]),'.'],
            [capitalize(NEGATIVE_PEARL_OF_WISDOM),'.\n',capitalize(TAUNTING_QUESTION_FOR_ENEMY),pep.opt([', ',ENEMY_NAME_PROPER_NOUN]),'?'],
            [capitalize(TAUNTING_QUESTION_FOR_ENEMY),pep.opt([', ',ENEMY_NAME_PROPER_NOUN]),'?'],
            [capitalize(NEGATIVE_PEARL_OF_WISDOM),pep.opt([', ',ENEMY_NAME_PROPER_NOUN]),'.']
          ),
          '\n'
        ],
        pep.choice(
          [capitalize(ADMONITION_FOR_ENEMY),pep.choice('.','!','!!!')],
          [capitalize(DENOUNCEMENT_FOR_ENEMY),pep.choice('!','!!!')]
        )
      ]
      // (
      //   ''
      // ),
      // (
      //   ''
      // ),

    )
  ]);
});


const SCOLDING_DESCRIPTION_OF_ENEMY_ACTIONS_FOR_ENEMY = pep.choice(
  'you use your magic powers only for evil'
);

const TAUNTING_QUESTION_FOR_ENEMY = pep.choice(
  'you really get a buzz out of picking on kids, don\'t you',
  'don\'t you ever stay to fight your own battles',
  'how dare you place a Dark Henge and toy with the innocent minds of youths'
);

const POSITIVE_PEARL_OF_WISDOM = pep.choice(
  'a serenade fits a beautiful moonlit night'
);

const NEUTRAL_INFORMATIVE_PEARL_OF_WISDOM = pep.choice(
  'a cram school is where students study to prepare for high school entrance exams'
);

const NEGATIVE_PEARL_OF_WISDOM = pep.choice(
  'those who toy with pure hearts will someday be tried by pure hearts',
  'the crystal of a Pure Heart does not suit someone with a tainted heart',
  'turning a sacred place of learning into a battlefield is an unforgivable outrage'
);

const POSITIVE_ARCHETYPE_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON = pep.choice(
  [
    pep.opt([pep.choice('moon', 'pretty', 'strong'),' ']),
    pep.choice(
      'warrior',
      'princess',
      'guardian'
    )
  ]
);

const ENEMY_NAME_PROPER_NOUN = pep.choice(
  'Jadeite',
  'Queen Beryl',
  'Zoisite',
  'Kaolinite',
  'Mimete',
  'PallaPalla'
);

const ENEMY_TYPE = pep.choice('demon','daimon','droid','imposter','fiend','scourge','circus performer','negamonster');

const DENOUNCEMENT_FOR_ENEMY = pep.choice(
  ['you underhanded ', ENEMY_TYPE, ', I cannot forgive you'],
  ['you, ',ENEMY_TYPE,', are unforgivable']
);

const ADMONITION_FOR_ENEMY = pep.choice(
  'big mistake',
  'you will regret that',
  'it\'s best you retreat',
  ['in the name of ',pep.choice('love','the Earth','loyalty','chastity','fashion'),', I will punish you']
);

const COMPLIMENT_FOR_SAILOR_MOON = pep.choice(
  ['you did really well against that ',ENEMY_TYPE],
  'you are the beautiful solitary guardian',
  'you are an innocent maiden with a pure heart'
);


const ENCOURAGING_COMMAND_FOR_SAILOR_MOON_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON = pep.choice(
  ['look into your heart and find the ',POSITIVE_ARCHETYPE_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON,' within']
);


const PREVIOUSLY_UNMENTIONED_MYSTERY_VILLAIN = pep.choice(
  'him',
  'her',
  ['that ',ENEMY_TYPE],
  'injustice',
  'the temptations of the flesh',
  'Seiya',
  'Sailor Star Fighter',
  'bad eating habits'
);


const ENCOURAGING_COMMAND_FOR_SAILOR_MOON = pep.choice(
  ENCOURAGING_COMMAND_FOR_SAILOR_MOON_ASSOCIATED_WITH_DESTINY_OF_SAILOR_MOON,
  ['don\'t give in to ', PREVIOUSLY_UNMENTIONED_MYSTERY_VILLAIN],
  'teach them the ABCs of Justice',
  'follow your path without fear',
  'don\'t give up',
  'pull yourself together'
);



var txt = tuxedoMaskQuote.run();
module.exports = txt;
console.log(txt);



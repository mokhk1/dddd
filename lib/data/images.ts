// Central registry of verified geological photography from Pexels.
// Every ID here has been confirmed to return HTTP 200 from the Pexels CDN.
// Format: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg

const base = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Landscapes & heroes
export const HERO_MOUNTAIN = base(34031086, 1920);
export const HERO_MOUNTAIN_ALT = base(29068248, 1920);
export const HERO_COASTAL_ROCKS = base(4216431, 1920);
export const HERO_SANDSTONE = base(21858632, 1920);
export const HERO_VOLCANIC = base(18199392, 1920);
export const HERO_STRATA = base(10081281, 1920);

// Section / page imagery
export const ABOUT_STORY = base(15263635, 1200); // desert canyon / wadi
export const ABOUT_FIELDWORK = base(5908677, 1200); // geologist fieldwork
export const FACULTY_CAMPUS = base(35532017, 1200); // university building
export const FACULTY_OUTCROP = base(10081281, 1200); // rock outcrop strata
export const CONTACT_COAST = base(16668481, 1920); // coastal rock formations

// Features page — museum feature highlights
export const FEATURE_IMAGES = {
  guides: base(8471926, 800),
  documentation: base(13949979, 800),
  bilingual: base(23938509, 800),
  curated: base(256262, 800),
  archive: base(8533045, 800),
  navigation: base(36219579, 800),
};

// Character mascots — replace placeholder URLs with custom character art when ready
export const MASCOT_IMAGES = {
  sakhr: base(8471926, 600),
  yaqoot: base(8471961, 600),
};

// Team profile placeholders — replace with actual photos when available
export const TEAM_IMAGES = {
  mohammed: base(6942776, 400),
  layan: base(33369429, 400),
};

// Faculty gallery (geological field imagery)
export const FACULTY_GALLERY = [
  base(19786594, 800),
  base(18795070, 800),
  base(15263635, 800),
  base(15609350, 800),
];

// Rocks — each specimen gets a geologically appropriate photo
export const ROCK_IMAGES = {
  'granite-jabal': base(9875497),
  'basalt-harrat': base(18199392),
  'sandstone-rub-al-khali': base(21858632),
  'limestone-jeddah': base(27925571),
  'marble-jabal-al-luz': base(18325786),
  'gneiss-precambrian': base(11599874),
  'conglomerate-wadi': base(14195752),
  'shale-jubaila': base(14212269),
  'peridotite-mantle': base(34258985),
  'pumice-harrat': base(20258496),
  'quartzite-umm-barka': base(14465902),
  'diorite-tayma': base(28101598),
  'rhyolite-madbid': base(4344257),
  'obsidian-harrat': base(38178512),
  'andesite-harrat': base(18926729),
  'dacite-harrat': base(18926843),
  'gabbro-shield': base(6788569),
  'schist-shield': base(30461343),
  'slate-shield': base(33753290),
  'phyllite-shield': base(36054392),
  'amphibolite-shield': base(18325725),
  'argillite-jubaila': base(2004166),
  'dolostone-jubaila': base(7409836),
  'chert-jubaila': base(12275709),
  'coal-jubaila': base(2646237),
  'rock-salt-jubaila': base(30402153),
  'travertine-jeddah': base(23322335),
  'tuff-harrat': base(5908314),
  'scoria-harrat': base(12275700),
  'breccia-wadi': base(17829840),
  'arkose-wadi': base(11499002),
  'greywacke-wadi': base(19049834),
  'siltite-jubaila': base(11873077),
  'marble-banded': base(23322336),
  'quartzite-ridge': base(29681272),
  'granite-pink': base(17547171),
  'basalt-columnar': base(37374364),
  'sandstone-red': base(30650229),
  'limestone-fossil': base(6876993),
  'gneiss-banded': base(36012670),
  'conglomerate-cobble': base(4709421),
};

// Rock gallery extras (additional angles / related geology)
export const ROCK_GALLERY: Record<string, string[]> = {
  'granite-jabal': [base(9875497), base(11255408), base(6156587)],
  'basalt-harrat': [base(18199392), base(18926817), base(6788527)],
  'sandstone-rub-al-khali': [base(21858632), base(29559238), base(11934979)],
  'limestone-jeddah': [base(27925571), base(32108359), base(34267335)],
  'marble-jabal-al-luz': [base(18325786), base(11949659), base(1101122)],
  'gneiss-precambrian': [base(11599874), base(37163136), base(18795070)],
  'conglomerate-wadi': [base(14195752), base(6332498), base(37073622)],
  'shale-jubaila': [base(14212269), base(10006619), base(11623893)],
  'peridotite-mantle': [base(34258985), base(2894952), base(7147868)],
  'pumice-harrat': [base(20258496), base(10411074), base(32965927)],
  'quartzite-umm-barka': [base(14465902), base(15185154), base(29569107)],
  'diorite-tayma': [base(28101598), base(11722981), base(4112945)],
  'rhyolite-madbid': [base(4344257)],
  'obsidian-harrat': [base(38178512)],
  'andesite-harrat': [base(18926729)],
  'dacite-harrat': [base(18926843)],
  'gabbro-shield': [base(6788569)],
  'schist-shield': [base(30461343)],
  'slate-shield': [base(33753290)],
  'phyllite-shield': [base(36054392)],
  'amphibolite-shield': [base(18325725)],
  'argillite-jubaila': [base(2004166)],
  'dolostone-jubaila': [base(7409836)],
  'chert-jubaila': [base(12275709)],
  'coal-jubaila': [base(2646237)],
  'rock-salt-jubaila': [base(30402153)],
  'travertine-jeddah': [base(23322335)],
  'tuff-harrat': [base(5908314)],
  'scoria-harrat': [base(12275700)],
  'breccia-wadi': [base(17829840)],
  'arkose-wadi': [base(11499002)],
  'greywacke-wadi': [base(19049834)],
  'siltite-jubaila': [base(11873077)],
  'marble-banded': [base(23322336)],
  'quartzite-ridge': [base(29681272)],
  'granite-pink': [base(17547171)],
  'basalt-columnar': [base(37374364)],
  'sandstone-red': [base(30650229)],
  'limestone-fossil': [base(6876993)],
  'gneiss-banded': [base(36012670)],
  'conglomerate-cobble': [base(4709421)],
};

// Minerals — each specimen gets a geologically appropriate photo
export const MINERAL_IMAGES = {
  quartz: base(9037438),
  feldspar: base(34514246),
  olivine: base(37924953),
  calcite: base(12275693),
  magnetite: base(34045315),
  gypsum: base(12275616),
  halite: base(7779878),
  muscovite: base(11198509),
  pyrite: base(9541540),
  barite: base(12275709),
};

// Mineral gallery extras
export const MINERAL_GALLERY: Record<string, string[]> = {
  quartz: [base(9037438), base(37924977), base(37942939)],
  feldspar: [base(34514246), base(3737445), base(6944924)],
  olivine: [base(37924953), base(37924965), base(17940554)],
  calcite: [base(12275693), base(12275644), base(12275694)],
  magnetite: [base(34045315), base(2363901), base(35497189)],
  gypsum: [base(12275616), base(12275623), base(3725723)],
  halite: [base(7779878), base(30669128), base(8970615)],
  muscovite: [base(11198509), base(7867405), base(6104433)],
  pyrite: [base(9541540), base(10545699), base(35497189)],
  barite: [base(12275709), base(30176540), base(33203193)],
};

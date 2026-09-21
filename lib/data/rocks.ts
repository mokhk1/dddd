import { ROCK_IMAGES, ROCK_GALLERY } from './images';

export type Specimen = {
  id: string;
  museumNumber: string;
  name: string;
  arabicName: string;
  image: string;
  gallery?: string[];
  description: string;
  geologicalDescription?: string;
  arabicGeologicalDescription?: string;
  arabicDescription: string;
  subtitle: string;
  arabicSubtitle: string;
  type: string;
  arabicType: string;
  chemicalFormula?: string;
  arabicChemicalFormula?: string;
  specimenType?: string;
  texture?: string;
  arabicTexture?: string;
  mineralogy?: string;
  arabicMineralogy?: string;
  formation: string;
  arabicFormation: string;
  color: string;
  arabicColor: string;
  environment: string;
  arabicEnvironment: string;
  uses: string;
  arabicUses: string;
  location: string;
  arabicLocation: string;
  hardness?: string;
  luster?: string;
  arabicLuster?: string;
  crystalSystem?: string;
  arabicCrystalSystem?: string;
  streak?: string;
  arabicStreak?: string;
  tags?: string[];
};

export const rocks: Specimen[] = [
  {
  id: 'agglomerate',
  museumNumber: 'DR-001',

  name: 'Agglomerate',
  arabicName: 'الأجلوميريت',

  image: ROCK_IMAGES['agglomerate'],
  gallery: ROCK_GALLERY['agglomerate'],

  description:
    'Agglomerate is a coarse-grained pyroclastic volcanic rock composed predominantly of rounded to sub-rounded volcanic bombs and large fragments exceeding 64 mm in diameter, embedded within a finer ash or lapilli matrix. It forms during highly explosive volcanic eruptions when molten or semi-molten ejecta are expelled from a volcanic vent and accumulate close to the source before cooling and lithifying. The presence of large volcanic bombs reflects rapid deposition around the vent and provides valuable evidence of eruption style, magma viscosity, and volcanic dynamics.',

  arabicDescription:
    'الأجلوميريت هو صخر بركاني فتاتي خشن الحبيبات يتكون أساسًا من القنابل البركانية المستديرة أو شبه المستديرة والشظايا البركانية الكبيرة التي يزيد قطرها على 64 ملم، والمترسبة داخل أرضية دقيقة من الرماد أو اللابيلي. يتشكل أثناء الثورات البركانية الانفجارية العنيفة عندما تُقذف كتل من الصهارة المنصهرة أو شبه المنصهرة من الفوهة البركانية، ثم تتراكم بالقرب منها قبل أن تبرد وتتصلب. ويعد وجود القنابل البركانية الكبيرة دليلاً مهمًا على طبيعة الثوران البركاني ولزوجة الصهارة وآليات النشاط البركاني.',

  subtitle: 'Pyroclastic Volcanic Rock',
  arabicSubtitle: 'صخر بركاني فتاتي',

  type: 'Igneous (Pyroclastic Extrusive)',
  arabicType: 'صخر ناري بركاني فتاتي',

  texture: 'Very coarse pyroclastic, bomb-bearing',
  arabicTexture: 'فتاتي خشن جدًا يحتوي على قنابل بركانية',

  mineralogy:
    'Volcanic bombs, basaltic to andesitic lava fragments, volcanic ash, plagioclase, pyroxene, olivine (variable)',

  arabicMineralogy:
    'قنابل بركانية، شظايا لافا بازلتية إلى أنديزيتية، رماد بركاني، بلاجيوكليز، بيروكسين، أوليفين (بحسب نوع الصهارة)',

  formation:
    'Forms during explosive volcanic eruptions when large volcanic bombs and pyroclastic fragments are ejected from a volcanic vent and rapidly deposited around the crater before consolidation.',

  arabicFormation:
    'يتكون أثناء الثورات البركانية الانفجارية عندما تُقذف القنابل البركانية والشظايا الكبيرة من الفوهة البركانية وتترسب بسرعة حولها قبل أن تتماسك.',

  color:
    'Dark gray, brown, reddish brown, black',

  arabicColor:
    'رمادي داكن، بني، بني محمر، أسود',

  environment:
    'Volcanic vents, crater rims, volcanic cones, proximal pyroclastic deposits',

  arabicEnvironment:
    'الفوهات البركانية، حواف الفوهة، المخاريط البركانية، الرواسب الفتاتية القريبة من الفوهة',

  uses:
    'Primarily of scientific and educational importance for studying volcanic processes. It may also be used locally as decorative stone or lightweight construction aggregate where available.',

  arabicUses:
    'يستخدم بشكل رئيسي في الدراسات الجيولوجية والتعليم لفهم العمليات البركانية، وقد يُستخدم محليًا كحجر زينة أو كركام خفيف في بعض التطبيقات الإنشائية.',

  location:
    'Wadi Fatimah, Saudi Arabia; volcanic fields of Italy, Iceland, Japan, Indonesia, and New Zealand.',

  arabicLocation:
    'وادي فاطمة، المملكة العربية السعودية؛ كما يوجد في الحقول البركانية بإيطاليا وآيسلندا واليابان وإندونيسيا ونيوزيلندا.',

  tags: [
    'igneous',
    'pyroclastic',
    'volcanic',
    'explosive eruption',
  ],
},
{
  id: 'amphibolite',
  museumNumber: 'DR-002',

  name: 'Amphibolite',
  arabicName: 'الأمفيبوليت',

  image: ROCK_IMAGES['amphibolite'],
  gallery: ROCK_GALLERY['amphibolite'],

  description:
    'Amphibolite is a medium- to coarse-grained metamorphic rock composed predominantly of amphibole minerals, typically hornblende, together with plagioclase feldspar. It forms through the regional metamorphism of mafic igneous rocks such as basalt and gabbro under moderate to high temperatures and pressures. Amphibolite is an important indicator of amphibolite-facies metamorphism and provides valuable evidence of deep crustal geological processes, mountain-building events, and tectonic evolution.',

  arabicDescription:
    'الأمفيبوليت هو صخر متحول متوسط إلى خشن الحبيبات يتكون بشكل رئيسي من معادن الأمفيبول، وخاصة الهورنبلند، مع الفلسبار البلاجيوكليزي. يتشكل نتيجة التحول الإقليمي للصخور النارية المافية مثل البازلت والجابرو تحت درجات حرارة وضغوط متوسطة إلى مرتفعة. ويُعد الأمفيبوليت من أهم الصخور الدالة على نطاق التحول المعروف بوجوه الأمفيبوليت، كما يوفر معلومات مهمة عن العمليات التي تحدث في أعماق القشرة الأرضية وتاريخ بناء السلاسل الجبلية والتطور التكتوني.',

  subtitle: 'Metamorphic Rock · Amphibolite Facies',
  arabicSubtitle: 'صخر متحول · وجوه الأمفيبوليت',

  type: 'Metamorphic Rock',
  arabicType: 'صخر متحول',

  texture: 'Medium- to coarse-grained, foliated to massive',
  arabicTexture: 'متوسط إلى خشن الحبيبات، متورق أو كتلي',

  mineralogy:
    'Hornblende (Amphibole), Plagioclase Feldspar, Quartz (minor), Garnet, Biotite, Epidote (variable)',

  arabicMineralogy:
    'هورنبلند (أمفيبول)، بلاجيوكليز، كوارتز (بنسب قليلة)، جارنت، بيوتيت، إبيدوت (قد يوجد)',

  formation:
    'Forms through regional metamorphism of mafic igneous rocks such as basalt and gabbro under temperatures of approximately 500–750°C and moderate to high pressures within the continental crust.',

  arabicFormation:
    'يتكون نتيجة التحول الإقليمي للصخور النارية المافية مثل البازلت والجابرو عند درجات حرارة تقارب 500–750°م وضغوط متوسطة إلى مرتفعة داخل القشرة القارية.',

  color:
    'Dark green, black, dark gray',

  arabicColor:
    'أخضر داكن، أسود، رمادي داكن',

  environment:
    'Regional metamorphic belts, continental collision zones, deep continental crust',

  arabicEnvironment:
    'أحزمة التحول الإقليمي، مناطق تصادم القارات، أعماق القشرة القارية',

  uses:
    'Dimension stone, crushed aggregate, decorative stone, road construction, and geological research.',

  arabicUses:
    'يستخدم كحجر بناء، وركام للطرق، وحجر زينة، وفي الدراسات الجيولوجية والتعليم.',

  location:
    'Shaqra, Saudi Arabia; also occurs in the Arabian Shield, Canada, Norway, Finland, Scotland, India, and the United States.',

  arabicLocation:
    'شقراء، المملكة العربية السعودية؛ كما يوجد في الدرع العربي، وكندا، والنرويج، وفنلندا، واسكتلندا، والهند، والولايات المتحدة.',

  tags: [
    'metamorphic',
    'amphibolite',
    'regional metamorphism',
    'hornblende',
  ],
},
{
  id: 'andesite',
  museumNumber: 'DR-003',

  name: 'Andesite',
  arabicName: 'الأنديزيت',

  image: ROCK_IMAGES['andesite'],
  gallery: ROCK_GALLERY['andesite'],

  description:
    'Andesite is an intermediate volcanic igneous rock that forms from magma of intermediate composition erupted at or near the Earth\'s surface. It is characterized by a fine-grained groundmass commonly containing visible phenocrysts of plagioclase, amphibole, pyroxene, or biotite. Andesite is typically associated with convergent plate boundaries and volcanic arcs above subduction zones, where it records the evolution of magma through crystallization, magma mixing, and crustal assimilation. It is one of the most widespread volcanic rocks in continental arc environments.',

  arabicDescription:
    'الأنديزيت هو صخر ناري بركاني متوسط التركيب يتكون من صهارة متوسطة التركيب اندفعت إلى سطح الأرض أو بالقرب منه. يتميز بأرضية دقيقة الحبيبات تحتوي غالبًا على بلورات ظاهرة من البلاجيوكليز والأمفيبول أو البيروكسين أو البيوتيت. ويرتبط الأنديزيت عادةً بالأقواس البركانية الواقعة فوق مناطق الاندساس عند حدود الصفائح المتقاربة، حيث يمثل سجلًا مهمًا لتطور الصهارة من خلال التبلور والتمازج الصهاري والتفاعل مع القشرة الأرضية. ويعد من أكثر الصخور البركانية انتشارًا في البيئات القارية البركانية.',

  subtitle: 'Intermediate Volcanic Rock',
  arabicSubtitle: 'صخر بركاني متوسط',

  type: 'Igneous (Extrusive)',
  arabicType: 'صخر ناري بركاني',

  texture: 'Aphanitic to Porphyritic',
  arabicTexture: 'دقيق الحبيبات إلى بورفيري',

  mineralogy:
    'Plagioclase Feldspar, Amphibole (Hornblende), Pyroxene, Biotite, Magnetite',

  arabicMineralogy:
    'بلاجيوكليز، هورنبلند، بيروكسين، بيوتيت، ماجنيتيت',

  formation:
    'Forms by rapid cooling of intermediate magma erupted from stratovolcanoes and volcanic arcs, commonly in subduction-related tectonic settings.',

  arabicFormation:
    'يتكون نتيجة التبريد السريع لصهارة متوسطة التركيب خرجت من البراكين الطبقية والأقواس البركانية، غالبًا في البيئات التكتونية المرتبطة بالاندساس.',

  color: 'Medium Gray, Dark Gray, Greenish Gray',
  arabicColor: 'رمادي متوسط، رمادي داكن، رمادي مخضر',

  environment:
    'Volcanic arcs, stratovolcanoes, subduction zones, continental margins',

  arabicEnvironment:
    'الأقواس البركانية، البراكين الطبقية، مناطق الاندساس، الهوامش القارية',

  uses:
    'Construction aggregate, road base material, dimension stone, decorative stone, and geological research.',

  arabicUses:
    'يستخدم كركام للبناء، وإنشاء الطرق، وكحجر بناء وزينة، وفي الدراسات الجيولوجية.',

  location:
    'Arabian Shield, Saudi Arabia; Andes Mountains (South America), Japan, Indonesia, Philippines, New Zealand, and the Cascade Range (USA).',

  arabicLocation:
    'الدرع العربي، المملكة العربية السعودية؛ كما يوجد في جبال الأنديز بأمريكا الجنوبية، واليابان، وإندونيسيا، والفلبين، ونيوزيلندا، وسلسلة كاسكيد في الولايات المتحدة.',

  tags: [
    'igneous',
    'extrusive',
    'intermediate',
    'volcanic',
    'andesite',
  ],
},
{
  id: 'arkose',
  museumNumber: 'DR-004',

  name: 'Arkose',
  arabicName: 'الأركوز',

  image: ROCK_IMAGES['arkose'],
  gallery: ROCK_GALLERY['arkose'],

  description:
    'Arkose is a coarse-grained feldspathic sandstone composed predominantly of quartz and potassium feldspar, with feldspar typically exceeding 25% of the total framework grains. It forms through the rapid erosion and deposition of granitic or gneissic source rocks under conditions where chemical weathering is limited, allowing feldspar minerals to survive transport. Its angular grains and poor sorting indicate short transport distances and deposition close to the source area. Arkose commonly develops in alluvial fans, braided river systems, fault-controlled basins, and arid to semi-arid continental environments, providing valuable evidence of active tectonism and rapid uplift.',

  arabicDescription:
    'الأركوز هو حجر رملي فلدسباثي خشن الحبيبات يتكون أساسًا من الكوارتز والفلدسبار البوتاسي، حيث تزيد نسبة الفلدسبار عادةً عن 25٪ من مكونات الصخر. يتكون نتيجة التجوية والتعرية السريعة لصخور الجرانيت أو النيس مع محدودية التجوية الكيميائية، مما يسمح ببقاء معادن الفلدسبار أثناء النقل. وتدل الحبيبات الزاوية وسوء الفرز على أن الرواسب لم تنتقل لمسافات طويلة، بل ترسبت بالقرب من مصدرها الأصلي. ويتواجد الأركوز غالبًا في المراوح الفيضية، والأنهار المتشابكة، والأحواض التكتونية، والبيئات القارية الجافة وشبه الجافة، ويعد مؤشرًا مهمًا على النشاط التكتوني والرفع القاري السريع.',

  subtitle: 'Feldspathic Sandstone',
  arabicSubtitle: 'حجر رملي فلدسباثي',

  type: 'Sedimentary (Clastic)',
  arabicType: 'صخر رسوبي فتاتي',

  texture: 'Coarse-grained, poorly sorted, angular',
  arabicTexture: 'خشن الحبيبات، سيئ الفرز، زاوي الحبيبات',

  mineralogy:
    'Potassium Feldspar, Quartz, Plagioclase, Mica, Rock Fragments',

  arabicMineralogy:
    'فلدسبار بوتاسي، كوارتز، بلاجيوكليز، ميكا، فتات صخري',

  formation:
    'Forms by rapid erosion and deposition of granitic and metamorphic terrains with limited chemical weathering, usually near uplifted source regions.',

  arabicFormation:
    'يتكون نتيجة التعرية السريعة لصخور الجرانيت والصخور المتحولة وترسيبها بالقرب من مناطق الرفع التكتوني مع محدودية التجوية الكيميائية.',

  color: 'Pink, Reddish Brown, Light Brown, Gray',
  arabicColor: 'وردي، بني محمر، بني فاتح، رمادي',

  environment:
    'Alluvial fans, braided rivers, continental basins, fault basins, arid to semi-arid environments',

  arabicEnvironment:
    'المراوح الفيضية، الأنهار المتشابكة، الأحواض القارية، الأحواض التكتونية، البيئات الجافة وشبه الجافة',

  uses:
    'Building stone, decorative stone, aggregate, and an important indicator of provenance and tectonic setting in sedimentary geology.',

  arabicUses:
    'يستخدم كحجر بناء وزينة وركام، كما يعد صخرًا مهمًا في الدراسات الرسوبية لتحديد مصدر الرواسب والبيئة التكتونية.',

  location:
    'Occurs worldwide in continental sedimentary basins; classic occurrences include the Old Red Sandstone of Scotland, western North America, Europe, and the Arabian Shield region.',

  arabicLocation:
    'ينتشر في الأحواض الرسوبية القارية حول العالم، ومن أشهر أماكن وجوده صخور الحجر الرملي الأحمر القديم في اسكتلندا، وغرب أمريكا الشمالية، وأوروبا، كما يوجد في مناطق من الدرع العربي.',

  tags: [
    'sedimentary',
    'clastic',
    'sandstone',
    'feldspar',
    'arkose',
  ],
},
{
  id: 'banded-gneiss',
  museumNumber: 'DR-005',

  name: 'Banded Gneiss',
  arabicName: 'النايس المخطط',

  image: ROCK_IMAGES['bandedGneiss'],
  gallery: ROCK_GALLERY['bandedGneiss'],

  description:
    'A high-grade metamorphic rock distinguished by alternating light and dark mineral bands produced through intense metamorphism and mineral segregation under high temperatures and pressures. Banded gneiss commonly represents the metamorphic equivalent of granite or other felsic igneous rocks and records deep crustal tectonic processes.',

  arabicDescription:
    'صخر متحول عالي الدرجة يتميز بتناوب أشرطة فاتحة وأخرى داكنة ناتجة عن إعادة تبلور المعادن وانفصالها أثناء التحول الإقليمي تحت درجات حرارة وضغوط مرتفعة. ويُعد النايس المخطط غالبًا النظير المتحول لصخور الجرانيت أو الصخور النارية الفلسية، ويمثل دليلًا على العمليات التكتونية العميقة داخل القشرة الأرضية.',

  subtitle: 'High-Grade Metamorphic Rock',
  arabicSubtitle: 'صخر متحول عالي الدرجة',

  type: 'Metamorphic (Regional)',
  arabicType: 'صخر متحول (تحول إقليمي)',

  texture: 'Medium- to coarse-grained, foliated, banded (gneissic texture)',
  arabicTexture: 'متوسط إلى خشن الحبيبات، متورق، ذو نسيج نايسي مخطط',

  mineralogy: 'Quartz, plagioclase feldspar, hornblende, biotite',
  arabicMineralogy: 'كوارتز، بلاجيوكليز، هورنبلند، بيوتيت',

  formation:
    'Formed through high-grade regional metamorphism that causes recrystallization and segregation of light and dark minerals into distinct compositional bands.',

  arabicFormation:
    'يتكون نتيجة التحول الإقليمي عالي الدرجة، حيث تؤدي الحرارة والضغط إلى إعادة تبلور المعادن وانفصالها إلى نطاقات فاتحة وأخرى داكنة.',

  color: 'Light grey, white and dark grey to black banding',
  arabicColor: 'أشرطة رمادية فاتحة وبيضاء تتناوب مع رمادية داكنة إلى سوداء',

  environment: 'Deep continental crust within regional metamorphic belts',
  arabicEnvironment: 'أعماق القشرة القارية ضمن أحزمة التحول الإقليمي',

  uses:
    'Dimension stone, decorative facing stone, building stone and architectural applications.',

  arabicUses:
    'يستخدم كحجر زينة، وكسوة معمارية، وأحجار بناء، وفي التطبيقات الزخرفية.',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['metamorphic', 'gneiss', 'banded',],
},
{
  id: 'biotite-schist',
  museumNumber: 'DR-006',

  name: 'Biotite Schist',
  arabicName: 'شيست البيوتيت',

  image: ROCK_IMAGES['biotiteSchist'],
  gallery: ROCK_GALLERY['biotiteSchist'],

  description:
    'A medium- to high-grade metamorphic rock characterized by abundant biotite mica aligned into well-developed foliation. The preferred orientation of platy minerals gives the rock its distinctive schistosity and allows it to split easily into thin layers. Biotite schist commonly forms through regional metamorphism of clay-rich sedimentary rocks under elevated temperatures and pressures.',

  arabicDescription:
    'صخر متحول متوسط إلى عالي الدرجة يتميز بغناه بمعدن البيوتيت المصطف في اتجاه واحد، مما يمنحه التورق الواضح المعروف بالشيستوزية ويجعله ينفصل بسهولة إلى صفائح رقيقة. يتكون شيست البيوتيت غالبًا نتيجة التحول الإقليمي للصخور الرسوبية الغنية بالطين تحت تأثير درجات حرارة وضغوط مرتفعة.',

  subtitle: 'Foliated Metamorphic Rock',
  arabicSubtitle: 'صخر متحول متورق',

  type: 'Metamorphic (Regional)',
  arabicType: 'صخر متحول (تحول إقليمي)',

  texture: 'Medium- to coarse-grained, strongly foliated, schistose',
  arabicTexture: 'متوسط إلى خشن الحبيبات، متورق بشدة، ذو نسيج شيستي',

  mineralogy: 'Biotite, quartz, muscovite, feldspar',
  arabicMineralogy: 'بيوتيت، كوارتز، مسكوفيت، فلدسبار',

  formation:
    'Produced by regional metamorphism of shale or other clay-rich sedimentary rocks, where increasing temperature and pressure cause mica minerals to recrystallize and align parallel to one another.',

  arabicFormation:
    'ينتج عن التحول الإقليمي للصخور الطينية مثل الطفل، حيث تؤدي الحرارة والضغط إلى إعادة تبلور معادن الميكا واصطفافها في اتجاه واحد مكونة التورق المميز.',

  color: 'Brown, golden brown, dark brown to black',
  arabicColor: 'بني، بني ذهبي، بني داكن إلى أسود',

  environment: 'Regional metamorphic belts within continental crust',
  arabicEnvironment: 'أحزمة التحول الإقليمي داخل القشرة القارية',

  uses:
    'Primarily valued for geological and educational studies; locally used as decorative stone and landscape rock where suitable.',

  arabicUses:
    'يستخدم بشكل رئيسي في الدراسات الجيولوجية والتعليمية، وقد يستعمل محليًا كحجر زينة أو في تنسيق المناظر الطبيعية.',

  location: 'Southern Region, Saudi Arabia',
  arabicLocation: 'المنطقة الجنوبية، المملكة العربية السعودية',

  tags: ['metamorphic', 'schist', 'biotite'],
},
{
  id: 'banded-marble',
  museumNumber: 'DR-007',

  name: 'Banded Marble',
  arabicName: 'الرخام المخطط',

  image: ROCK_IMAGES['bandedMarble'],
  gallery: ROCK_GALLERY['bandedMarble'],

  description:
    'A crystalline metamorphic carbonate rock characterized by alternating light and dark mineral bands formed during regional metamorphism. Banded marble develops through the recrystallization of limestone or dolostone, producing an interlocking mosaic of calcite crystals while preserving distinctive compositional layering.',

  arabicDescription:
    'صخر كربوناتي متحول متبلور يتميز بتناوب أشرطة فاتحة وأخرى داكنة نتجت عن التحول الإقليمي وإعادة تبلور الحجر الجيري أو الدولوستون. تتكون بلورات الكالسيت المتشابكة لتمنح الصخر نسيجه البلوري المميز مع احتفاظه بالتطبق أو التراكيب الشريطية الأصلية.',

  subtitle: 'Metamorphic Carbonate Rock',
  arabicSubtitle: 'صخر كربوناتي متحول',

  type: 'Metamorphic',
  arabicType: 'صخر متحول',

  texture: 'Crystalline, medium- to coarse-grained, banded',
  arabicTexture: 'بلوري، متوسط إلى خشن الحبيبات، مخطط',

  mineralogy: 'Calcite (CaCO₃)',
  arabicMineralogy: 'كالسيت (CaCO₃)',

  formation:
    'Formed by the metamorphism of limestone under elevated temperatures and pressures, causing complete recrystallization of calcite and the development of compositional banding.',

  arabicFormation:
    'يتكون نتيجة تحول الحجر الجيري تحت درجات حرارة وضغوط مرتفعة، مما يؤدي إلى إعادة تبلور الكالسيت بالكامل وتكوين الأشرطة المعدنية المميزة.',

  color: 'White, cream, light grey with darker bands',
  arabicColor: 'أبيض، كريمي، رمادي فاتح مع أشرطة داكنة',

  environment: 'Regional metamorphic terranes',
  arabicEnvironment: 'أحزمة التحول الإقليمي',

  uses:
    'Dimension stone, architectural cladding, flooring, monuments, decorative stone and sculpture.',

  arabicUses:
    'يستخدم كحجر بناء فاخر، وكسوة معمارية، وأرضيات، ونُصب تذكارية، وأعمال الزينة والنحت.',

  location: 'Wadi Fatimah, Saudi Arabia',
  arabicLocation: 'وادي فاطمة، المملكة العربية السعودية',

  tags: ['metamorphic', 'marble', 'carbonate'],
},
{
  id: 'chlorite-schist',
  museumNumber: 'DR-008',

  name: 'Chlorite Schist',
  arabicName: 'شيست الكلوريت',

  image: ROCK_IMAGES['chloriteSchist'],
  gallery: ROCK_GALLERY['chloriteSchist'],

  description:
    'A foliated metamorphic rock dominated by chlorite, giving it a characteristic green to grey-green appearance. Chlorite schist forms under low- to medium-grade regional metamorphism, where platy chlorite crystals align parallel to one another, producing a well-developed schistosity and allowing the rock to split easily along foliation planes.',

  arabicDescription:
    'صخر متحول متورق يهيمن عليه معدن الكلوريت، مما يمنحه لونه الأخضر أو الأخضر الرمادي المميز. يتكون شيست الكلوريت خلال التحول الإقليمي منخفض إلى متوسط الدرجة، حيث تصطف بلورات الكلوريت الصفائحية في اتجاه واحد، مكونةً التورق الشيستي الواضح الذي يسمح بانفصال الصخر بسهولة على امتداد مستويات التورق.',

  subtitle: 'Low-Grade Metamorphic Rock',
  arabicSubtitle: 'صخر متحول منخفض الدرجة',

  type: 'Metamorphic (Regional)',
  arabicType: 'صخر متحول (تحول إقليمي)',

  texture: 'Fine- to medium-grained, strongly foliated, schistose',
  arabicTexture: 'دقيق إلى متوسط الحبيبات، متورق بشدة، ذو نسيج شيستي',

  mineralogy: 'Chlorite, quartz, muscovite, albite',
  arabicMineralogy: 'كلوريت، كوارتز، مسكوفيت، ألبيت',

  formation:
    'Formed during low- to medium-grade regional metamorphism of mafic volcanic rocks or clay-rich sedimentary rocks, where chlorite becomes the dominant metamorphic mineral.',

  arabicFormation:
    'يتكون نتيجة التحول الإقليمي منخفض إلى متوسط الدرجة للصخور البركانية المافية أو الصخور الرسوبية الغنية بالطين، حيث يصبح معدن الكلوريت المعدن المتحول السائد.',

  color: 'Green, grey-green to dark green',
  arabicColor: 'أخضر، أخضر رمادي إلى أخضر داكن',

  environment: 'Low-grade regional metamorphic belts',
  arabicEnvironment: 'أحزمة التحول الإقليمي منخفضة الدرجة',

  uses:
    'Primarily used for geological education and research, with limited use as decorative stone.',

  arabicUses:
    'يستخدم بشكل رئيسي في الدراسات والتعليم الجيولوجي، وقد يستعمل أحيانًا كحجر زينة.',

  location: 'Khamis Mushayt, Saudi Arabia',
  arabicLocation: 'خميس مشيط، المملكة العربية السعودية',

  tags: ['metamorphic', 'schist', 'chlorite'],
},
{
  id: 'compacted-schist',
  museumNumber: 'DR-009',

  name: 'Compacted Schist',
  arabicName: 'الشيست المضغوط',

  image: ROCK_IMAGES['compactedSchist'],
  gallery: ROCK_GALLERY['compactedSchist'],

  description:
    'A strongly foliated metamorphic rock displaying intense deformation and closely compacted mineral layers. This specimen exhibits ultramylonitic foliation produced by extreme ductile shearing within deep crustal fault zones, where minerals were flattened, recrystallized, and aligned under very high differential stress.',

  arabicDescription:
    'صخر متحول شديد التورق يتميز بطبقات معدنية متراصة نتيجة تشوه قوي. تُظهر هذه العينة تورقًا أولتراميلونايتيًا (Ultramylonitic Foliation) نتج عن القص اللدن الشديد داخل مناطق الصدوع العميقة، حيث تعرضت المعادن لإعادة التبلور والاستطالة والاصطفاف تحت إجهادات تكتونية مرتفعة.',

  subtitle: 'Strongly Deformed Metamorphic Rock',
  arabicSubtitle: 'صخر متحول شديد التشوه',

  type: 'Metamorphic (Dynamic Regional)',
  arabicType: 'صخر متحول (تحول ديناميكي)',

  texture: 'Fine-grained, intensely foliated, ultramylonitic',
  arabicTexture: 'دقيق الحبيبات، شديد التورق، ذو نسيج أولتراميلونايتي',

  mineralogy: 'Quartz, feldspar, chlorite, sericite',
  arabicMineralogy: 'كوارتز، فلدسبار، كلوريت، سيريسيت',

  formation:
    'Formed within deep crustal shear zones where intense ductile deformation reduced the grain size, recrystallized minerals, and produced ultramylonitic foliation.',

  arabicFormation:
    'تكون داخل نطاقات القص العميقة في القشرة الأرضية، حيث أدت التشوهات اللدنة الشديدة إلى تصغير حجم الحبيبات، وإعادة تبلور المعادن، وتكوين التورق الأولتراميلونايتي.',

  color: 'Dark grey to grey-black',
  arabicColor: 'رمادي داكن إلى أسود رمادي',

  environment: 'Deep crustal shear zones',
  arabicEnvironment: 'نطاقات القص العميقة في القشرة الأرضية',

  uses:
    'Primarily valuable for structural geology, tectonic research, and geological education.',

  arabicUses:
    'يستخدم في الدراسات البنيوية والتكتونية والأبحاث والتعليم الجيولوجي.',

  location: 'Wadi Liyyah, Taif, Saudi Arabia',
  arabicLocation: 'وادي ليّة، الطائف، المملكة العربية السعودية',

  tags: ['metamorphic', 'schist', 'mylonite', 'shear-zone'],
},
{
  id: 'concretion-sandstone',
  museumNumber: 'DR-010',

  name: 'Concration Sandstone',
  arabicName: 'الحجر الرملي العقدي',

  image: ROCK_IMAGES['concretionSandstone'],
  gallery: ROCK_GALLERY['concretionSandstone'],

  description:
    'A sedimentary sandstone characterized by rounded concretionary structures formed through localized mineral cementation around a nucleus during diagenesis. These spherical to irregular concretions develop when mineral-rich groundwater precipitates cement, binding surrounding sand grains into resistant nodules while the host sandstone remains less consolidated.',

  arabicDescription:
    'صخر رسوبي من الحجر الرملي يتميز بوجود تراكيب عقدية مستديرة تكونت نتيجة ترسيب المعادن حول نواة مركزية أثناء عمليات التحجر (Diagenesis). تنشأ هذه العقد عندما تترسب معادن من المياه الجوفية الغنية بالأيونات فتعمل على إسمنتة حبيبات الرمل المحيطة، مكونة كتلًا صلبة أكثر مقاومة من الصخور المحيطة بها.',

  subtitle: 'Sedimentary Rock with Concretions',
  arabicSubtitle: 'صخر رسوبي ذو تراكيب عقدية',

  type: 'Sedimentary',
  arabicType: 'صخر رسوبي',

  texture: 'Medium-grained, concretionary',
  arabicTexture: 'متوسط الحبيبات، ذو نسيج عقدي',

  mineralogy: 'Quartz, calcite, silica, iron oxides',
  arabicMineralogy: 'كوارتز، كالسيت، سيليكا، أكاسيد الحديد',

  formation:
    'Formed by the deposition of sand followed by localized mineral cementation around a central nucleus during diagenesis, producing resistant concretionary masses.',

  arabicFormation:
    'تكون نتيجة ترسيب الرمال ثم حدوث إسمنتة موضعية حول نواة مركزية أثناء عمليات التحجر، مما أدى إلى تكوين عقد صخرية صلبة داخل الحجر الرملي.',

  color: 'Brown, tan, light grey',
  arabicColor: 'بني، بني فاتح، رمادي فاتح',

  environment: 'Fluvial, deltaic and shallow marine sedimentary environments',
  arabicEnvironment: 'البيئات النهرية والدلتاوية والبحرية الضحلة',

  uses:
    'Mainly used for geological research and education, providing evidence of groundwater movement, diagenetic processes, and sedimentary history.',

  arabicUses:
    'يستخدم في الدراسات الرسوبية والتعليم الجيولوجي لفهم حركة المياه الجوفية وعمليات التحجر وتاريخ الترسيب.',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['sedimentary', 'sandstone', 'concretion'],
},
{
  id: 'curly-schist',
  museumNumber: 'DR-011',

  name: 'Curly Schist',
  arabicName: 'شيست مجعد',

  image: ROCK_IMAGES['curlySchist'],
  gallery: ROCK_GALLERY['curlySchist'],

  description:
    'A strongly foliated metamorphic rock displaying distinctive wavy and tightly folded schistosity that gives it a curled appearance. This specimen represents a granodioritic mylonite that has undergone intense ductile deformation within a major shear zone, where original minerals were stretched, recrystallized, and aligned under high differential stress.',

  arabicDescription:
    'صخر متحول شديد التورق يتميز بسطوح مموجة ومطوية بإحكام تمنحه مظهرًا مجعدًا. تمثل هذه العينة ميلونايت مشتقًا من الجرانوديوريت تعرض لتشوه لدن شديد داخل منطقة قص رئيسية، حيث استطالت المعادن الأصلية وأعيد تبلورها واصطفت بفعل الإجهادات التكتونية المرتفعة.',

  subtitle: 'Mylonitic Metamorphic Rock',
  arabicSubtitle: 'صخر متحول ميلونايتي',

  type: 'Metamorphic',
  arabicType: 'صخر متحول',

  texture: 'Strongly foliated, mylonitic, wavy schistosity',
  arabicTexture: 'تورق قوي، ميلونايتي، مجعد ومتموج',

  mineralogy:
    'Quartz, feldspar, biotite, muscovite with dynamically recrystallized minerals',

  arabicMineralogy:
    'كوارتز، فلدسبار، بيوتيت، مسكوفيت مع معادن أعيد تبلورها ديناميكيًا',

  formation:
    'Produced by intense ductile shearing and dynamic metamorphism of granodiorite within deep crustal fault zones, where deformation and recrystallization generated a mylonitic fabric.',

  arabicFormation:
    'تكوّن نتيجة التشوه اللدن الشديد والتحول الديناميكي لصخر الجرانوديوريت داخل مناطق الصدوع العميقة، حيث أدى القص وإعادة التبلور إلى تكوين النسيج الميلونايتي المميز.',

  color: 'Dark grey to brown',
  arabicColor: 'رمادي داكن إلى بني',

  environment: 'Deep crustal shear zones and regional metamorphic belts',
  arabicEnvironment: 'مناطق القص العميقة وأحزمة التحول الإقليمي',

  uses:
    'Important for structural geology and tectonic studies because it preserves evidence of ancient deformation and crustal movement.',

  arabicUses:
    'يستخدم في الدراسات البنيوية والتكتونية لفهم تاريخ التشوه وحركة القشرة الأرضية داخل مناطق القص.',

  location: 'Wadi Fatimah, Saudi Arabia',
  arabicLocation: 'وادي فاطمة، المملكة العربية السعودية',

  tags: [
    'metamorphic',
    'schist',
    'mylonite',
    'shear-zone',
    'wadi-fatimah',
  ],
},
{
  id: 'desert-rose',
  museumNumber: 'DR-012',

  name: 'Desert Rose (Gypsum)',
  arabicName: 'وردة الصحراء (الجبس)',

  image: ROCK_IMAGES['desertRose'],
  gallery: ROCK_GALLERY['desertRose'],

  description:
    'A spectacular rosette-shaped variety of gypsum composed of intergrown tabular crystals that resemble the petals of a blooming rose. Desert roses form naturally in arid environments where mineral-rich groundwater evaporates, allowing gypsum crystals to grow while trapping fine sand grains between crystal layers. Each specimen is unique, making it one of the most recognizable evaporite mineral formations.',

  arabicDescription:
    'شكل بلوري مميز من معدن الجبس يتكون من تجمعات بلورية صفائحية متداخلة تشبه بتلات الوردة المتفتحة. تتكون وردة الصحراء طبيعيًا في البيئات الصحراوية الجافة عندما تتبخر المياه الجوفية الغنية بالأملاح، فتترسب بلورات الجبس مع احتجاز حبيبات الرمل الدقيقة بين طبقاتها. تتميز كل عينة بشكل فريد، مما يجعلها من أشهر التراكيب البلورية في الصخور التبخرية.',

  subtitle: 'Evaporite Mineral Formation',
  arabicSubtitle: 'تكوين تبخري',

  type: 'Chemical Sedimentary (Evaporite)',
  arabicType: 'رسوبي كيميائي (تبخري)',

  texture: 'Rosette-shaped crystalline aggregate',
  arabicTexture: 'تجمع بلوري وردي الشكل',

  mineralogy: 'Gypsum (CaSO₄·2H₂O) with fine quartz sand inclusions',
  arabicMineralogy: 'جبس (CaSO₄·2H₂O) مع شوائب دقيقة من حبيبات الكوارتز',

  formation:
    'Forms through evaporation of sulfate-rich groundwater in arid climates, where gypsum crystallizes into radiating rosette clusters while incorporating surrounding sand particles.',

  arabicFormation:
    'يتكون نتيجة تبخر المياه الجوفية الغنية بالكبريتات في البيئات الصحراوية، حيث تنمو بلورات الجبس في هيئة وردية متشععة مع احتجاز حبيبات الرمل بين البلورات.',

  color: 'Cream, beige, light brown',
  arabicColor: 'كريمي، بيج، بني فاتح',

  environment: 'Desert sabkhas, evaporite basins and arid sedimentary environments',
  arabicEnvironment: 'السبخات الصحراوية، الأحواض التبخرية، والبيئات الرسوبية الجافة',

  uses:
    'Highly valued as a museum specimen and ornamental mineral. It also provides important evidence of evaporitic environments and past climatic conditions.',

  arabicUses:
    'تُعد من أشهر عينات العرض في المتاحف والمجموعات الجيولوجية، كما تساعد في دراسة البيئات التبخرية والظروف المناخية القديمة.',

  location: 'Al Qassim, Saudi Arabia',
  arabicLocation: 'منطقة القصيم، المملكة العربية السعودية',

  tags: [
    'gypsum',
    'desert-rose',
    'evaporite',
    'sedimentary',
    'al-qassim',
  ],
},
{
  id: 'dunite',
  museumNumber: 'DR-013',

  name: 'Dunite',
  arabicName: 'دونايت',

  image: ROCK_IMAGES['dunite'],
  gallery: ROCK_GALLERY['dunite'],

  description:
    'An ultramafic intrusive igneous rock composed almost entirely of olivine, typically exceeding 90% of its mineral content. Dunite represents one of the purest mantle-derived rocks and provides valuable insight into the composition of Earth’s upper mantle. Weathering commonly alters olivine into serpentine minerals, producing the characteristic greenish appearance observed in many specimens.',

  arabicDescription:
    'صخر ناري جوفي فوق مافي يتكون بصورة شبه كاملة من معدن الأوليفين، والذي يشكل عادةً أكثر من 90٪ من مكوناته المعدنية. ويُعد الدونايت من أنقى الصخور المشتقة من وشاح الأرض، لذلك يمثل دليلًا مهمًا لفهم تركيب الوشاح العلوي وتطوره. ومع التجوية يتحول جزء من الأوليفين إلى معادن السربنتين، مما يمنح الصخر لونه الأخضر المميز في كثير من العينات.',

  subtitle: 'Ultramafic Mantle Rock',
  arabicSubtitle: 'صخر فوق مافي من الوشاح',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Coarse-grained, granular',
  arabicTexture: 'خشن الحبيبات، حبيبي',

  mineralogy: 'Olivine (>90%), minor chromite, pyroxene and spinel',
  arabicMineralogy: 'أوليفين (>90٪)، مع كميات قليلة من الكروميت والبيروكسين والسبينل',

  formation:
    'Forms by crystallization of ultramafic magma or as mantle peridotite residues after partial melting. It commonly occurs in layered mafic intrusions and ophiolite complexes representing fragments of the upper mantle.',

  arabicFormation:
    'يتكون من تبلور الصهارة فوق المافية أو يمثل بقايا صخور الوشاح بعد الانصهار الجزئي. ويوجد غالبًا في التداخلات المافية الطبقية والأوفيوليتات التي تمثل أجزاءً من الوشاح العلوي.',

  color: 'Dark green to olive green',
  arabicColor: 'أخضر داكن إلى أخضر زيتوني',

  environment: 'Upper mantle, ophiolite complexes and layered mafic intrusions',
  arabicEnvironment: 'الوشاح العلوي، الأوفيوليتات، والتداخلات المافية الطبقية',

  uses:
    'Important for mantle petrology, tectonic studies and exploration for chromium, nickel and platinum-group elements. Fresh dunite is also used as a refractory and industrial raw material.',

  arabicUses:
    'يستخدم في دراسة الوشاح الأرضي والتكتونية، كما يرتبط باستكشاف خامات الكروم والنيكل وعناصر مجموعة البلاتين، ويستعمل أحيانًا كمواد حرارية وخامات صناعية.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: [
    'igneous',
    'ultramafic',
    'dunite',
    'olivine',
    'mantle',
    'arabian-shield',
  ],
},
{
  id: 'ferrousSandstone',
  museumNumber: 'DR-014',

  name: 'Ferrous Sandstone',
  arabicName: 'حجر رملي حديدي',

  image: ROCK_IMAGES['ferrousSandstone'],
  gallery: ROCK_GALLERY['ferrousSandstone'],

  description:
    'Ferrous Sandstone is a medium-grained sedimentary rock composed predominantly of quartz sand grains cemented by iron oxides, which impart its distinctive reddish to brown coloration. The iron-rich cement enhances the rock’s durability and reflects deposition and diagenesis in oxidizing continental environments.',

  arabicDescription:
    'الحجر الرملي الحديدي هو صخر رسوبي متوسط الحبيبات يتكون أساسًا من حبيبات الكوارتز الرملية المرتبطة بواسطة أكاسيد الحديد، مما يمنحه لونه الأحمر إلى البني المميز. تعمل الإسمنتات الغنية بالحديد على زيادة صلابة الصخر، كما تشير إلى ترسبه وتحجره في بيئات قارية مؤكسدة.',

  subtitle: 'Iron-rich Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي غني بالحديد',

  type: 'Sedimentary (Clastic)',
  arabicType: 'رسوبي (فتاتي)',

  texture: 'Medium-grained, clastic',
  arabicTexture: 'متوسط الحبيبات، فتاتي',

  mineralogy: 'Quartz, iron oxides (hematite and goethite), minor feldspar',
  arabicMineralogy: 'كوارتز، أكاسيد الحديد (الهيماتيت والجويثيت)، كميات قليلة من الفلدسبار',

  formation: 'Formed through the deposition of quartz-rich sand followed by cementation with iron oxides during diagenesis under oxidizing conditions.',
  arabicFormation: 'يتكون من ترسيب الرمال الغنية بالكوارتز ثم تماسكها بواسطة أكاسيد الحديد أثناء عمليات التحجر في بيئات مؤكسدة.',

  color: 'Reddish brown to dark red',
  arabicColor: 'أحمر بني إلى أحمر داكن',

  environment: 'Fluvial systems, alluvial fans, deserts and continental oxidizing environments',
  arabicEnvironment: 'الأنهار، المراوح الفيضية، الصحارى، والبيئات القارية المؤكسدة',

  uses: 'Building stone, decorative stone, paving, and geological studies of paleoenvironments',
  arabicUses: 'حجر بناء، حجر زينة، رصف، ودراسة البيئات الرسوبية القديمة',

  location: 'Taif, Saudi Arabia',
  arabicLocation: 'الطائف، المملكة العربية السعودية',

  tags: ['sedimentary', 'sandstone', 'iron-rich', ],
},
{
  id: 'gabbro',
  museumNumber: 'DR-015',

  name: 'Gabbro',
  arabicName: 'الجابرو',

  image: ROCK_IMAGES['gabbro'],
  gallery: ROCK_GALLERY['gabbro'],

  description:
    'Gabbro is a coarse-grained intrusive igneous rock formed by the slow crystallization of mafic magma deep within the Earth’s crust. It consists mainly of calcium-rich plagioclase feldspar and pyroxene, with minor olivine or amphibole in some varieties. Its dark color, high density, and coarse crystalline texture reflect prolonged cooling beneath the surface, making it one of the principal rocks of the lower continental crust and oceanic crust.',

  arabicDescription:
    'الجابرو هو صخر ناري جوفي خشن الحبيبات يتكون نتيجة التبلور البطيء للصهارة المافية في أعماق القشرة الأرضية. يتركب أساسًا من البلاجيوكليز الغني بالكالسيوم والبيروكسين، مع وجود الأوليفين أو الأمفيبول بنسب متفاوتة في بعض الأنواع. ويعكس لونه الداكن وكثافته العالية ونسيجه البلوري الخشن فترة تبريد طويلة تحت سطح الأرض، مما يجعله أحد الصخور الرئيسية المكونة للقشرة المحيطية والجزء السفلي من القشرة القارية.',

  subtitle: 'Mafic Intrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري جوفي مافي',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Coarse-grained, phaneritic',
  arabicTexture: 'خشن الحبيبات، بلوري ظاهر',

  mineralogy: 'Calcium-rich plagioclase, pyroxene, minor olivine and amphibole',
  arabicMineralogy: 'بلاجيوكليز غني بالكالسيوم، بيروكسين، مع كميات قليلة من الأوليفين والأمفيبول',

  formation: 'Formed by the slow cooling and crystallization of mafic magma deep beneath the Earth’s surface.',
  arabicFormation: 'يتكون نتيجة التبريد البطيء وتبلور الصهارة المافية في أعماق القشرة الأرضية.',

  color: 'Dark gray to black with greenish hues',
  arabicColor: 'رمادي داكن إلى أسود مع درجات خضراء',

  environment: 'Lower continental crust, oceanic crust, layered mafic intrusions',
  arabicEnvironment: 'القشرة القارية السفلية، القشرة المحيطية، والتداخلات المافية الطبقية',

  uses: 'Dimension stone, crushed aggregate, road construction, railway ballast, and geological studies',
  arabicUses: 'حجر بناء، ركام للخرسانة والطرق، حصى لسكك الحديد، والدراسات الجيولوجية',

  location: 'Asas, Saudi Arabia',
  arabicLocation: 'الأساس، المملكة العربية السعودية',

  tags: ['igneous', 'intrusive', 'mafic', 'gabbro'],
},
{
  id: 'granite-collection',
  museumNumber: 'DR-016',

  name: 'Granite Collection',
  arabicName: 'مجموعة الجرانيت',

  image: ROCK_IMAGES['granite'],
  gallery: ROCK_GALLERY['granite'],

  description:
    'A collection of granite specimens displaying different textures, mineral compositions, and grain sizes. The collection includes varieties such as biotite granite, porphyritic granite, microgranite, leucocratic granite, rapakivi granite, and mica-bearing granite.',

  arabicDescription:
    'مجموعة من عينات الجرانيت تُظهر اختلافات في النسيج والتركيب المعدني وحجم الحبيبات. تضم أنواعًا مثل جرانيت البيوتيت، والجرانيت البورفيري، والميكروجرانيت، والجرانيت الليوكوقراطي، وجرانيت الراباكيفي، والجرانيت الغني بالميكا.',

  subtitle: 'Educational Granite Collection',
  arabicSubtitle: 'مجموعة تعليمية لصخور الجرانيت',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Mostly Phaneritic',
  arabicTexture: 'غالبًا ظاهر التبلور',

  mineralogy:
    'Quartz, Potassium Feldspar, Plagioclase Feldspar, Biotite, Muscovite, Hornblende',

  arabicMineralogy:
    'كوارتز، فلسبار بوتاسي، بلاجيوكليز، بيوتيت، مسكوفيت، هورنبلند',

  formation:
    'Formed by the slow cooling and crystallization of magma deep beneath the Earth’s surface.',

  arabicFormation:
    'تتشكل نتيجة التبريد البطيء للصهارة في أعماق القشرة الأرضية.',

  color: 'White, Gray, Pink',
  arabicColor: 'أبيض، رمادي، وردي',

  environment: 'Continental Plutonic Environment',
  arabicEnvironment: 'بيئة نارية جوفية قارية',

  uses:
    'Educational reference, building stone, monuments, decorative stone, and geological studies.',

  arabicUses:
    'مرجع تعليمي، وأحجار بناء، وأحجار زينة، والنصب التذكارية، والدراسات الجيولوجية.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6–7',

  tags: [
    'granite',
    'granite collection',
    'igneous',
    'intrusive',
    'museum',
  ],
},
{
  id: 'granodiorite',
  museumNumber: 'DR-017',

  name: 'Granodiorite',
  arabicName: 'جرانوديوريت',

  image: ROCK_IMAGES['granodiorite'],
  gallery: ROCK_GALLERY['granodiorite'],

  description:
    'Granodiorite is a coarse-grained intrusive igneous rock intermediate in composition between granite and diorite. It consists mainly of quartz, plagioclase feldspar, potassium feldspar, and biotite.',

  arabicDescription:
    'الجرانوديوريت صخر ناري جوفي خشن الحبيبات، يقع تركيبه بين الجرانيت والديوريت، ويتكون أساسًا من الكوارتز والبلاجيوكليز والفلسبار البوتاسي والبيوتيت.',

  subtitle: 'Coarse-Grained Intrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري جوفي خشن الحبيبات',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Phaneritic (Coarse-grained)',
  arabicTexture: 'ظاهر التبلور (خشن الحبيبات)',

  mineralogy:
    'Quartz, Plagioclase Feldspar, Potassium Feldspar, Biotite',
  arabicMineralogy:
    'كوارتز، بلاجيوكليز، فلسبار بوتاسي، بيوتيت',

  formation:
    'Formed by the slow cooling and crystallization of magma beneath the Earth’s surface.',

  arabicFormation:
    'يتكون نتيجة التبريد البطيء وتبلور الصهارة في أعماق القشرة الأرضية.',

  color: 'Gray to Light Gray',
  arabicColor: 'رمادي إلى رمادي فاتح',

  environment: 'Continental Plutonic Environment',
  arabicEnvironment: 'بيئة نارية جوفية قارية',

  uses:
    'Dimension stone, construction aggregate, decorative stone, and geological studies.',

  arabicUses:
    'يستخدم كحجر بناء، وركام للإنشاءات، وأحجار زينة، وفي الدراسات الجيولوجية.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6–7',

  tags: [
    'igneous',
    'intrusive',
    'granodiorite',
    'phaneritic',
    'plutonic',
  ],
},
{
  id: 'graptoliticShale',
  museumNumber: 'DR-018',

  name: 'Graptolitic Shale',
  arabicName: 'طفلة جرابتوليتية',

  image: ROCK_IMAGES['graptoliticShale'],
  gallery: ROCK_GALLERY['graptoliticShale'],

  description:
    'Graptolitic Shale is a fine-grained sedimentary rock that contains abundant fossilized graptolites, extinct colonial marine organisms that flourished during the Ordovician and Silurian periods. These fossils make the rock an important biostratigraphic marker, allowing geologists to determine the relative ages of sedimentary sequences and reconstruct ancient marine environments.',

  arabicDescription:
    'الطفلة الجرابتوليتية هي صخر رسوبي دقيق الحبيبات يحتوي على وفرة من أحافير الجرابتوليت، وهي كائنات بحرية مستعمِرة منقرضة ازدهرت خلال العصرين الأوردوفيشي والسيلوري. وتُعد هذه الأحافير من أهم الأحافير المرشدة في علم الطبقات، إذ تساعد الجيولوجيين على تحديد الأعمار النسبية للطبقات الرسوبية وإعادة بناء البيئات البحرية القديمة.',

  subtitle: 'Fossil-bearing Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي حاوٍ للأحافير',

  type: 'Sedimentary',
  arabicType: 'رسوبي',

  texture: 'Very fine-grained, fissile',
  arabicTexture: 'دقيق الحبيبات، صفائحي',

  mineralogy: 'Clay minerals, quartz, organic matter, graptolite fossils',
  arabicMineralogy: 'معادن طينية، كوارتز، مواد عضوية، وأحافير جرابتوليت',

  formation: 'Formed by the accumulation of fine mud in quiet marine basins, followed by compaction and lithification while preserving graptolite fossils.',
  arabicFormation: 'يتكون من ترسيب الطين الدقيق في أحواض بحرية هادئة، ثم تعرضه للانضغاط والتحجر مع حفظ أحافير الجرابتوليت داخله.',

  color: 'Dark gray to black',
  arabicColor: 'رمادي داكن إلى أسود',

  environment: 'Deep marine basins and offshore continental shelves',
  arabicEnvironment: 'الأحواض البحرية العميقة والجروف القارية البحرية',

  uses: 'Biostratigraphic correlation, paleoenvironmental reconstruction, geological research and education',
  arabicUses: 'دراسة الطبقDuات الرسوبية، إعادة بناء البيئات القديمة، الأبحاث الجيولوجية والتعليم',

  location: 'Tabuk, Saudi Arabia',
  arabicLocation: 'تبوك، المملكة العربية السعودية',

  tags: ['sedimentary', 'shale', 'fossil', 'graptolite'],
},
{
  id: 'lapilliTuff',
  museumNumber: 'DR-019',

  name: 'Lapilli Tuff',
  arabicName: 'طف لابيلي',

  image: ROCK_IMAGES['lapilliTuff'],
  gallery: ROCK_GALLERY['lapilliTuff'],

  description:
    'Lapilli Tuff is a pyroclastic volcanic rock formed by the consolidation of volcanic ash mixed with lapilli, fragments of volcanic material ranging from 2 to 64 mm in diameter. It is produced during explosive volcanic eruptions, where ash, pumice, crystals, and volcanic rock fragments accumulate around volcanic vents before becoming lithified. The presence of abundant lapilli records the highly explosive nature of the eruption.',

  arabicDescription:
    'طف اللابيلي هو صخر بركاني فتاتي يتكون من التحام الرماد البركاني مع حبيبات اللابيلي، وهي شظايا بركانية يتراوح قطرها بين 2 و64 ملم. يتشكل أثناء الثورات البركانية الانفجارية عندما تتراكم الرماد البركاني والخفاف والبلورات وقطع الصخور البركانية حول الفوهات البركانية، ثم تتحجر مع مرور الزمن. ويعد وجود اللابيلي بكميات كبيرة دليلاً على شدة النشاط البركاني الانفجاري الذي كوّن هذا الصخر.',

  subtitle: 'Pyroclastic Volcanic Rock',
  arabicSubtitle: 'صخر بركاني فتاتي',

  type: 'Igneous (Pyroclastic)',
  arabicType: 'ناري (فتاتي بركاني)',

  texture: 'Pyroclastic, coarse ash with lapilli fragments',
  arabicTexture: 'فتاتي بركاني، رماد خشن مع شظايا لابيلي',

  mineralogy: 'Volcanic glass, feldspar, pyroxene, pumice fragments and volcanic lithic clasts',
  arabicMineralogy: 'زجاج بركاني، فلدسبار، بيروكسين، شظايا خفاف وفتات صخور بركانية',

  formation:
    'Formed by explosive volcanic eruptions that eject volcanic ash and lapilli into the atmosphere, which later settle, accumulate, and become compacted into solid rock.',
  arabicFormation:
    'يتكون نتيجة الثورات البركانية الانفجارية التي تقذف الرماد البركاني واللابيلي إلى الغلاف الجوي، ثم تترسب هذه المواد وتتراكم وتتحجر لتكوّن الصخر.',

  color: 'Reddish brown, reddish gray to dark brown',
  arabicColor: 'بني محمر، رمادي محمر إلى بني داكن',

  environment: 'Volcanic cones, pyroclastic deposits and explosive volcanic fields',
  arabicEnvironment: 'المخاريط البركانية، رواسب المقذوفات البركانية، والحقول البركانية الانفجارية',

  uses: 'Geological research, volcanic history reconstruction, educational collections and decorative stone',
  arabicUses: 'الدراسات الجيولوجية، إعادة بناء التاريخ البركاني، المجموعات التعليمية، وأحجار الزينة',

  location: 'Wadi Fatimah, Saudi Arabia',
  arabicLocation: 'وادي فاطمة، المملكة العربية السعودية',

  tags: ['igneous', 'pyroclastic', 'lapilli', 'tuff', 'volcanic'],
},
{
  id: 'lava-flow-types',
  museumNumber: 'DR-020',

  name: 'Lava Flow Types',
  arabicName: 'أنواع وأشكال تدفقات اللابة',

  image: ROCK_IMAGES['lavaFlowTypes'],
  gallery: ROCK_GALLERY['lavaFlowTypes'],

  description:
    'A museum specimen demonstrating the diverse morphologies produced by flowing lava during volcanic eruptions. The rope-like surface displayed here is characteristic of pāhoehoe lava, formed when low-viscosity basaltic lava cools slowly while its molten interior continues to move beneath a thin solid crust. Variations in lava temperature, viscosity, gas content, and eruption rate create distinctive surface textures that record the dynamics of volcanic flows.',

  arabicDescription:
    'عينة متحفية توضح الأشكال المختلفة التي تتخذها اللابة أثناء تدفقها في أثناء الثورات البركانية. ويُعد السطح الحبلي الظاهر في هذه العينة من السمات المميزة للابة الباهويهوي (Pāhoehoe)، التي تتكون عندما تبرد اللابة البازلتية منخفضة اللزوجة تدريجيًا بينما يستمر الجزء الداخلي المنصهر بالحركة أسفل قشرة رقيقة متصلبة. وتؤدي اختلافات درجة الحرارة واللزوجة ومحتوى الغازات ومعدل التدفق إلى إنتاج تراكيب سطحية متنوعة تسجل ظروف تدفق اللابة أثناء النشاط البركاني.',

  subtitle: 'Volcanic Lava Flow Structures',
  arabicSubtitle: 'تراكيب تدفقات اللابة البركانية',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (سطحي)',

  texture: 'Ropy, flow-banded volcanic surface',
  arabicTexture: 'حبلي مع تراكيب تدفق',

  mineralogy: 'Predominantly basaltic minerals including plagioclase, pyroxene and olivine',
  arabicMineralogy: 'معادن بازلتية يغلب عليها البلاجيوكليز والبيروكسين والأوليفين',

  formation:
    'Produced as basaltic lava flowed across the surface and cooled progressively, allowing the still-molten interior to deform the solidifying crust into rope-like folds and flow structures.',

  arabicFormation:
    'تكوّن عندما تدفقت اللابة البازلتية فوق سطح الأرض وتبردت تدريجيًا، بينما استمر الجزء الداخلي المنصهر بالحركة، مما أدى إلى طي القشرة المتصلبة وتكوين التراكيب الحبلية المميزة.',

  color: 'Dark grey to black',
  arabicColor: 'رمادي داكن إلى أسود',

  environment: 'Basaltic volcanic fields, shield volcanoes and fissure eruptions',
  arabicEnvironment: 'الحقول البركانية البازلتية والبراكين الدرعية والثورات الشقية',

  uses:
    'Important for interpreting volcanic flow behavior, eruption conditions, and the physical properties of basaltic lava in volcanological studies.',

  arabicUses:
    'تستخدم في دراسة آليات تدفق اللابة والظروف البركانية والخصائص الفيزيائية للحمم البازلتية، كما تعد من العينات التعليمية المهمة في علم البراكين.',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: [
    'igneous',
    'volcanic',
    'lava',
    'pahoehoe',
    'basalt',
    'extrusive',
  ],
},
{
  id: 'layeredGabbro',
  museumNumber: 'DR-021',

  name: 'Layered Gabbro',
  arabicName: 'جابرو طباقي',

  image: ROCK_IMAGES['layeredGabbro'],
  gallery: ROCK_GALLERY['layeredGabbro'],

  description:
    'Layered Gabbro is a coarse-grained mafic intrusive igneous rock distinguished by rhythmic mineral layering produced during the slow crystallization of magma within large magma chambers. The alternating layers are formed as dense minerals such as pyroxene settle before plagioclase, creating well-defined magmatic bands. These structures provide valuable evidence for magmatic differentiation and crystal accumulation processes deep within the Earth’s crust.',

  arabicDescription:
    'الجابرو الطباقي هو صخر ناري جوفي مافي خشن الحبيبات يتميز بوجود طبقات معدنية متعاقبة نشأت أثناء التبلور البطيء للصهارة داخل حجرات صهارية كبيرة. تتكون هذه الطبقات نتيجة ترسب المعادن الثقيلة مثل البيروكسين قبل البلاجيوكليز، مما يؤدي إلى ظهور نطاقات صهارية واضحة. وتعد هذه البنية من أهم الأدلة على عمليات التمايز الصهاري وتراكم البلورات في أعماق القشرة الأرضية.',

  subtitle: 'Layered Mafic Intrusive Rock',
  arabicSubtitle: 'صخر ناري جوفي مافي طباقي',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Coarse-grained, layered (cumulate texture)',
  arabicTexture: 'خشن الحبيبات، ذو نسيج طباقي تراكمي',

  mineralogy: 'Calcium-rich plagioclase, pyroxene, minor olivine and iron oxides',
  arabicMineralogy: 'بلاجيوكليز غني بالكالسيوم، بيروكسين، كميات قليلة من الأوليفين وأكاسيد الحديد',

  formation:
    'Formed through fractional crystallization within large magma chambers, where early-formed minerals settle by gravity to produce distinct magmatic layers.',
  arabicFormation:
    'يتكون نتيجة التبلور التجزيئي داخل حجرات الصهارة، حيث تترسب البلورات المبكرة بفعل الجاذبية مكونة طبقات صهارية متتابعة.',

  color: 'Dark gray to black with alternating light and dark bands',
  arabicColor: 'رمادي داكن إلى أسود مع نطاقات فاتحة وداكنة',

  environment: 'Layered mafic intrusions within continental crust',
  arabicEnvironment: 'التداخلات المافية الطباقية داخل القشرة القارية',

  uses: 'Geological research, dimension stone, aggregate, and studies of magmatic differentiation',
  arabicUses: 'الدراسات الجيولوجية، أحجار البناء، الركام، ودراسة التمايز الصهاري',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['igneous', 'intrusive', 'gabbro', 'layered', 'mafic'],
},
{
  id: 'Limestone',
  museumNumber: 'DR-022',

  name: 'Limestone',
  arabicName: 'حجر جيري دقيق الحبيبات',

  image: ROCK_IMAGES['Limestone'],
  gallery: ROCK_GALLERY['Limestone'],

  description:
    'Aphanitic Limestone is a fine-grained sedimentary carbonate rock composed predominantly of microscopic calcite crystals (CaCO₃). The individual grains are too small to be distinguished with the naked eye, giving the rock a smooth and homogeneous appearance. It commonly forms through the accumulation of carbonate mud in calm marine environments and may preserve fossils or sedimentary structures despite its very fine texture.',

  arabicDescription:
    'الحجر الجيري دقيق الحبيبات هو صخر رسوبي كربوناتي يتكون أساسًا من بلورات دقيقة جدًا من معدن الكالسيت (CaCO₃). تكون حبيباته صغيرة للغاية بحيث لا يمكن تمييزها بالعين المجردة، مما يمنحه مظهرًا متجانسًا وناعمًا. يتكون غالبًا من تراكم الطين الكربوناتي في البيئات البحرية الهادئة، وقد يحتوي على أحافير أو تراكيب رسوبية محفوظة رغم دقة نسيجه.',

  subtitle: 'Fine-grained Carbonate Rock',
  arabicSubtitle: 'صخر كربوناتي دقيق الحبيبات',

  type: 'Sedimentary (Chemical/Biochemical)',
  arabicType: 'رسوبي (كيميائي/حيوي)',

  texture: 'Aphanitic, microcrystalline',
  arabicTexture: 'دقيق الحبيبات، مجهري التبلور',

  mineralogy: 'Calcite (CaCO₃)',
  arabicMineralogy: 'كالسيت (CaCO₃)',

  formation:
    'Formed by the accumulation and lithification of carbonate mud and microscopic skeletal material in quiet, shallow marine environments.',
  arabicFormation:
    'يتكون من تراكم وتحجر الطين الكربوناتي وبقايا الكائنات المجهرية في البيئات البحرية الهادئة والضحلة.',

  color: 'Light gray, beige to cream',
  arabicColor: 'رمادي فاتح، بيج إلى كريمي',

  environment: 'Shallow marine platforms, lagoons and carbonate shelves',
  arabicEnvironment: 'الرفوف الكربوناتية، البحيرات الساحلية، والمنصات البحرية الضحلة',

  uses: 'Cement production, building stone, lime manufacture, aggregate and geological studies',
  arabicUses: 'صناعة الأسمنت، أحجار البناء، إنتاج الجير، الركام، والدراسات الجيولوجية',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['sedimentary', 'limestone', 'carbonate', 'aphanitic'],
},
{
  id: 'microDiorite',
  museumNumber: 'DR-023',

  name: 'Micro Diorite',
  arabicName: 'ميكرو ديوريت',

  image: ROCK_IMAGES['microDiorite'],
  gallery: ROCK_GALLERY['microDiorite'],

  description:
    'Micro Diorite is a fine-grained to medium-grained intrusive igneous rock that shares the same intermediate composition as diorite but crystallized more rapidly, producing a much finer crystalline texture. It is composed primarily of plagioclase feldspar with hornblende and pyroxene, while quartz, biotite, or minor potassium feldspar may occur in small amounts. Micro Diorite commonly forms in shallow intrusive bodies such as dikes and sills, representing the hypabyssal equivalent of diorite.',

  arabicDescription:
    'الميكرو ديوريت هو صخر ناري جوفي دقيق إلى متوسط الحبيبات يمتلك التركيب المتوسط نفسه لصخر الديوريت، إلا أنه تبلور بسرعة أكبر، مما أدى إلى تكوين نسيج بلوري أدق. يتركب أساسًا من البلاجيوكليز مع الهورنبلند والبيروكسين، وقد يحتوي على كميات قليلة من الكوارتز أو البيوتيت أو الفلدسبار البوتاسي. ويتكون غالبًا داخل التداخلات النارية الضحلة مثل القواطع (Dikes) والعتبات (Sills)، ويُعد النظير الضحل لصخر الديوريت.',

  subtitle: 'Hypabyssal Intermediate Igneous Rock',
  arabicSubtitle: 'صخر ناري متوسط ضحل',

  type: 'Igneous (Hypabyssal)',
  arabicType: 'ناري (ضحل)',

  texture: 'Fine- to medium-grained, microcrystalline',
  arabicTexture: 'دقيق إلى متوسط الحبيبات، مجهري التبلور',

  mineralogy: 'Plagioclase, hornblende, pyroxene, minor quartz and biotite',
  arabicMineralogy: 'بلاجيوكليز، هورنبلند، بيروكسين، مع كميات قليلة من الكوارتز والبيوتيت',

  formation:
    'Formed by the cooling of intermediate magma at shallow crustal depths, where the magma crystallizes more rapidly than in deep plutonic environments.',
  arabicFormation:
    'يتكون نتيجة تبريد الصهارة متوسطة التركيب على أعماق ضحلة من القشرة الأرضية، حيث يكون معدل التبريد أسرع من الصخور الجوفية العميقة.',

  color: 'Light gray to dark gray',
  arabicColor: 'رمادي فاتح إلى رمادي داكن',

  environment: 'Dikes, sills and shallow intrusive bodies',
  arabicEnvironment: 'القواطع، العتبات، والتداخلات النارية الضحلة',

  uses: 'Dimension stone, crushed aggregate, ornamental stone and geological studies',
  arabicUses: 'أحجار البناء، الركام، أحجار الزينة، والدراسات الجيولوجية',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['igneous', 'hypabyssal', 'microdiorite', 'intermediate'],
},
{
  id: 'microGranodiorite',
  museumNumber: 'DR-024',

  name: 'Micro Granodiorite',
  arabicName: 'ميكرو جرانوديوريت',

  image: ROCK_IMAGES['microGranodiorite'],
  gallery: ROCK_GALLERY['microGranodiorite'],

  description:
    'Micro Granodiorite is a fine-grained hypabyssal igneous rock with an intermediate to felsic composition, representing the shallow intrusive equivalent of granodiorite. It consists predominantly of plagioclase feldspar and quartz, accompanied by potassium feldspar and hornblende, with minor biotite commonly present. Its fine crystalline texture reflects relatively rapid cooling within shallow crustal intrusions such as dikes and small plutonic bodies.',

  arabicDescription:
    'الميكرو جرانوديوريت هو صخر ناري ضحل دقيق الحبيبات ذو تركيب متوسط إلى حمضي، ويُعد النظير الضحل لصخر الجرانوديوريت. يتكون أساسًا من البلاجيوكليز والكوارتز، مع الفلدسبار البوتاسي والهورنبلند، وقد يوجد البيوتيت بكميات قليلة. ويعكس نسيجه البلوري الدقيق سرعة تبريد أعلى مقارنة بالصخور الجوفية العميقة، حيث يتبلور داخل القواطع والتداخلات النارية الضحلة.',

  subtitle: 'Hypabyssal Intermediate–Felsic Igneous Rock',
  arabicSubtitle: 'صخر ناري ضحل متوسط إلى حمضي',

  type: 'Igneous (Hypabyssal)',
  arabicType: 'ناري (ضحل)',

  texture: 'Fine-grained, microcrystalline',
  arabicTexture: 'دقيق الحبيبات، مجهري التبلور',

  mineralogy: 'Quartz, plagioclase, potassium feldspar, hornblende, minor biotite',
  arabicMineralogy: 'كوارتز، بلاجيوكليز، فلدسبار بوتاسي، هورنبلند، وكميات قليلة من البيوتيت',

  formation:
    'Formed by the crystallization of intermediate to felsic magma within shallow intrusive bodies, where cooling occurs faster than in deep plutonic environments.',
  arabicFormation:
    'يتكون نتيجة تبلور صهارة متوسطة إلى حمضية داخل تداخلات نارية ضحلة، حيث يكون معدل التبريد أسرع من الصخور الجوفية العميقة.',

  color: 'Light gray to pale gray',
  arabicColor: 'رمادي فاتح إلى رمادي باهت',

  environment: 'Shallow intrusive bodies, dikes and small plutons',
  arabicEnvironment: 'التداخلات النارية الضحلة، القواطع، والأجسام البلوتونية الصغيرة',

  uses: 'Dimension stone, ornamental stone, crushed aggregate and geological research',
  arabicUses: 'أحجار البناء، أحجار الزينة، الركام، والأبحاث الجيولوجية',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['igneous', 'hypabyssal', 'granodiorite', 'microgranodiorite', 'felsic'],
},
{
  id: 'mudstone',
  museumNumber: 'DR-025',

  name: 'Mudstone',
  arabicName: 'حجر الطين',

  image: ROCK_IMAGES['mudstone'],
  gallery: ROCK_GALLERY['mudstone'],

  description:
    'Mudstone is a fine-grained sedimentary rock composed predominantly of compacted clay- and silt-sized particles. Unlike shale, it lacks pronounced fissility and typically breaks into irregular blocky fragments rather than thin sheets. It forms through the deposition of suspended mud in low-energy environments such as lakes, floodplains, lagoons, and quiet marine basins, where very fine sediments gradually accumulate and lithify over geological time.',

  arabicDescription:
    'حجر الطين هو صخر رسوبي دقيق الحبيبات يتكون أساسًا من حبيبات الطين والغرين المتماسكة. وعلى عكس الطفل الصفحي (Shale)، فإنه لا يمتلك انفصامًا صفائحيًا واضحًا، بل ينكسر إلى كتل غير منتظمة. يتكون نتيجة ترسب الرواسب الدقيقة جدًا في البيئات منخفضة الطاقة مثل البحيرات والسهول الفيضية واللاجونات والأحواض البحرية الهادئة، حيث تتراكم هذه الرواسب ثم تتحجر عبر الزمن الجيولوجي.',

  subtitle: 'Fine-Grained Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي دقيق الحبيبات',

  type: 'Sedimentary',
  arabicType: 'رسوبي',

  texture: 'Very fine-grained, massive, non-fissile',
  arabicTexture: 'دقيق جدًا، كتلي، غير صفائحي',

  mineralogy: 'Clay minerals, quartz, feldspar, silt-sized particles',
  arabicMineralogy: 'معادن طينية، كوارتز، فلدسبار، وحبيبات غرينية دقيقة',

  formation:
    'Formed by the compaction and lithification of mud deposited in calm, low-energy depositional environments.',
  arabicFormation:
    'يتكون من انضغاط وتحجر الرواسب الطينية الدقيقة المترسبة في البيئات الهادئة منخفضة الطاقة.',

  color: 'Reddish brown, gray, brown, greenish gray',
  arabicColor: 'بني محمر، رمادي، بني، أو رمادي مخضر',

  environment: 'Lakes, floodplains, lagoons, deltas, and quiet marine basins',
  arabicEnvironment: 'البحيرات، السهول الفيضية، اللاجونات، الدلتات، والأحواض البحرية الهادئة',

  uses: 'Raw material for bricks and ceramics, cement manufacture, geological and paleoenvironmental studies',
  arabicUses: 'صناعة الطوب والسيراميك، إنتاج الأسمنت، والدراسات الجيولوجية والبيئية القديمة',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['sedimentary', 'mudstone', 'clay', 'fine-grained'],
},
{
  id: 'mylonite',
  museumNumber: 'DR-026',

  name: 'Mylonite',
  arabicName: 'الميلونايت',

  image: ROCK_IMAGES['mylonite'],
  gallery: ROCK_GALLERY['mylonite'],

  description:
    'Mylonite is a fine-grained metamorphic tectonic rock formed by intense ductile deformation within deep crustal fault and shear zones. During shearing, the original minerals are mechanically crushed, stretched, and recrystallized under high pressure and elevated temperatures without complete melting. This process produces a distinctive foliated fabric and mineral banding that records the direction and magnitude of crustal movement, making mylonite an important indicator of regional tectonic deformation.',

  arabicDescription:
    'الميلونايت هو صخر متحول تكتوني دقيق الحبيبات يتكون نتيجة التشوه اللدن الشديد داخل مناطق الصدوع وأحزمة القص في أعماق القشرة الأرضية. أثناء عملية القص تتكسر المعادن الأصلية وتتمدد ثم يعاد تبلورها تحت ضغط مرتفع ودرجات حرارة عالية دون حدوث انصهار كامل، مما ينتج نسيجًا متورقًا وأشرطة معدنية مميزة تسجل اتجاه وحجم حركة القشرة الأرضية، لذلك يعد الميلونايت من أهم الصخور المستخدمة لدراسة التشوهات التكتونية.',

  subtitle: 'Dynamic Metamorphic Rock',
  arabicSubtitle: 'صخر متحول ديناميكي',

  type: 'Metamorphic (Dynamic)',
  arabicType: 'متحول (ديناميكي)',

  texture: 'Fine-grained, foliated, strongly sheared',
  arabicTexture: 'دقيق الحبيبات، متورق، شديد القص',

  mineralogy: 'Quartz, feldspar, mica, amphibole (depends on the parent rock)',
  arabicMineralogy: 'كوارتز، فلدسبار، ميكا، أمفيبول (بحسب الصخر الأصلي)',

  formation:
    'Formed by intense ductile shearing and dynamic recrystallization within deep crustal shear zones.',
  arabicFormation:
    'يتكون نتيجة القص اللدن الشديد وإعادة التبلور الديناميكي داخل مناطق القص العميقة في القشرة الأرضية.',

  color: 'Gray, dark gray, brown, greenish gray',
  arabicColor: 'رمادي، رمادي داكن، بني، أو رمادي مخضر',

  environment: 'Deep crustal shear zones, major fault systems, and tectonic belts',
  arabicEnvironment: 'مناطق القص العميقة، أنظمة الصدوع الكبرى، والأحزمة التكتونية',

  uses: 'Scientific studies of fault mechanics, tectonic evolution, crustal deformation, and structural geology',
  arabicUses: 'الدراسات التكتونية، وتحليل حركة الصدوع، وتشوه القشرة الأرضية، والجيولوجيا التركيبية',

  location: 'Taif, Saudi Arabia',
  arabicLocation: 'الطائف، المملكة العربية السعودية',

  tags: ['metamorphic', 'mylonite', 'shear-zone', 'tectonic'],
},
{
  id: 'oligomictConglomerate',
  museumNumber: 'DR-027',

  name: 'Oligomict Conglomerate',
  arabicName: 'كونغلوميرات أوليغوميكتي',

  image: ROCK_IMAGES['oligomictConglomerate'],
  gallery: ROCK_GALLERY['oligomictConglomerate'],

  description:
    'Oligomict Conglomerate is a coarse-grained clastic sedimentary rock composed predominantly of rounded pebbles and cobbles derived from only one or a few rock types, most commonly quartz or quartzite. The clasts are cemented within a sandy or finer-grained matrix and record deposition in high-energy environments capable of transporting large, rounded fragments. The limited variety of clasts reflects a uniform source area or prolonged weathering and transport that removed less resistant rock fragments.',

  arabicDescription:
    'الكونغلوميرات الأوليغوميكتي هو صخر رسوبي فتاتي خشن الحبيبات يتكون أساسًا من حصى وجلاميد مستديرة مشتقة من نوع واحد أو عدد قليل جدًا من الصخور، وغالبًا ما تكون من الكوارتز أو الكوارتزيت. تتماسك هذه الحبيبات داخل مادة لاحمة رملية أو دقيقة الحبيبات، وتمثل ترسبها في بيئات عالية الطاقة قادرة على نقل الفتات الخشن. ويشير التنوع المحدود في مكونات الحصى إلى مصدر صخري متجانس أو إلى عمليات تجوية ونقل طويلة أزالت الصخور الأقل مقاومة.',

  subtitle: 'Quartz-Rich Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي غني بالكوارتز',

  type: 'Sedimentary (Clastic)',
  arabicType: 'رسوبي (فتاتي)',

  texture: 'Very coarse-grained, rounded clasts',
  arabicTexture: 'خشن جدًا، بحصى مستديرة',

  mineralogy: 'Rounded quartz pebbles, quartz sand, silica or calcite cement',
  arabicMineralogy: 'حصى كوارتزية مستديرة، رمل كوارتزي، ولاحمة من السيليكا أو الكالسيت',

  formation:
    'Formed by the deposition, burial, and cementation of rounded gravel transported by rivers, alluvial fans, or coastal environments.',
  arabicFormation:
    'يتكون من ترسيب الحصى المستدير ثم دفنه وتحجره بعد نقله بواسطة الأنهار أو المراوح الفيضية أو البيئات الساحلية.',

  color: 'Brown, reddish brown, gray, tan',
  arabicColor: 'بني، بني محمر، رمادي، أو أصفر فاتح',

  environment: 'Braided rivers, alluvial fans, beaches, and high-energy fluvial systems',
  arabicEnvironment: 'الأنهار المتشعبة، المراوح الفيضية، الشواطئ، والبيئات الرسوبية عالية الطاقة',

  uses: 'Construction aggregate, decorative stone, and reconstruction of ancient depositional environments',
  arabicUses: 'ركام البناء، أحجار الزينة، ودراسة البيئات الرسوبية القديمة',

  location: 'Wadi Fatimah, Saudi Arabia',
  arabicLocation: 'وادي فاطمة، المملكة العربية السعودية',

  tags: ['sedimentary', 'conglomerate', 'oligomict', 'quartz'],
},
{
  id: 'pegmatiticGabbro',
  museumNumber: 'DR-028',

  name: 'Pegmatitic Gabbro',
  arabicName: 'جابرو بيغماتيتي',

  image: ROCK_IMAGES['pegmatiticGabbro'],
  gallery: ROCK_GALLERY['pegmatiticGabbro'],

  description:
    'Pegmatitic Gabbro is an exceptionally coarse-grained intrusive mafic igneous rock representing the pegmatitic variety of gabbro. It crystallizes from water-rich residual magma during the final stages of cooling, allowing unusually large crystals of plagioclase and pyroxene to develop. The rock preserves the mineralogical composition of typical gabbro while exhibiting crystal sizes that may reach several centimeters, making it an excellent example of late-stage magmatic crystallization.',

  arabicDescription:
    'الجابرو البيغماتيتي هو صخر ناري جوفي مافي خشن الحبيبات جدًا، يمثل النوع البيغماتيتي من الجابرو. يتكون من الصهارة المتبقية الغنية بالمياه والعناصر المتطايرة خلال المراحل الأخيرة من تبريد الجسم الناري، مما يسمح بنمو بلورات كبيرة جدًا من البلاجيوكليز والبيروكسين. ويحتفظ بنفس التركيب المعدني للجابرو العادي، إلا أن حجم بلوراته قد يصل إلى عدة سنتيمترات، مما يجعله مثالًا مميزًا على التبلور المتأخر للصهارة.',

  subtitle: 'Pegmatitic Mafic Igneous Rock',
  arabicSubtitle: 'صخر ناري مافي بيغماتيتي',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Extremely coarse-grained, pegmatitic',
  arabicTexture: 'خشن جدًا، بيغماتيتي',

  mineralogy: 'Calcic plagioclase, pyroxene, minor olivine and amphibole',
  arabicMineralogy: 'بلاجيوكليز كالسي، بيروكسين، مع كميات قليلة من الأوليفين والأمفيبول',

  formation:
    'Formed during the final stages of crystallization of mafic magma, where volatile-rich residual melts promote the growth of exceptionally large crystals.',
  arabicFormation:
    'يتكون خلال المراحل الأخيرة من تبلور الصهارة المافية، حيث تساعد السوائل الغنية بالمواد المتطايرة على نمو بلورات كبيرة جدًا.',

  color: 'Black and white, dark gray, greenish black',
  arabicColor: 'أسود وأبيض، رمادي داكن، أو أسود مخضر',

  environment: 'Large mafic intrusive bodies, layered intrusions, and the lower continental crust',
  arabicEnvironment: 'الأجسام النارية المافية الجوفية الكبيرة، والتداخلات الطبقية، والجزء السفلي من القشرة القارية',

  uses: 'Dimension stone, educational specimens, and studies of magmatic differentiation and late-stage crystallization',
  arabicUses: 'أحجار الزينة والبناء، والعينات التعليمية، ودراسة تمايز الصهارة ومراحل التبلور المتأخرة',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['igneous', 'gabbro', 'pegmatitic', 'mafic'],
},
{
  id: 'phosphate',
  museumNumber: 'DR-029',

  name: 'Phosphate Rock',
  arabicName: 'صخر الفوسفات',

  image: ROCK_IMAGES['phosphate'],
  gallery: ROCK_GALLERY['phosphate'],

  description: `Phosphate Rock (Phosphorite) is a sedimentary rock enriched in phosphate minerals, primarily carbonate-fluorapatite (apatite). It forms through the concentration and lithification of phosphorus-rich marine sediments in shallow continental shelf environments where biological productivity is high. Phosphate rock represents the world's principal source of phosphorus, an essential element for agriculture, fertilizers, and numerous industrial applications.`,

  arabicDescription: `صخر الفوسفات (الفوسفوريت) هو صخر رسوبي غني بمعادن الفوسفات، وأهمها معدن الأباتيت الفوسفاتي (Carbonate-Fluorapatite). يتكون نتيجة تركيز وتحجر الرواسب البحرية الغنية بالفوسفور في البيئات البحرية الضحلة ذات الإنتاجية الحيوية المرتفعة. ويعد المصدر الرئيسي للفوسفور في العالم، وهو عنصر أساسي في صناعة الأسمدة والعديد من الصناعات الكيميائية والغذائية.`,

  subtitle: 'Phosphate Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي فوسفاتي',

  type: 'Sedimentary (Chemical–Biogenic)',
  arabicType: 'رسوبي (كيميائي–حيوي)',

  texture: 'Fine- to medium-grained, massive to nodular',
  arabicTexture: 'دقيق إلى متوسط الحبيبات، كتلي أو عقدي',

  mineralogy: 'Carbonate-fluorapatite (apatite), calcite, quartz, clay minerals',
  arabicMineralogy: 'أباتيت كربوناتي فلوري، كالسيت، كوارتز، ومعادن طينية',

  formation: 'Formed by the accumulation, concentration, and lithification of phosphorus-rich marine sediments in shallow marine environments.',
  arabicFormation: 'يتكون من تراكم وتركيز وتحجر الرواسب البحرية الغنية بالفوسفور في البيئات البحرية الضحلة.',

  color: 'Cream, beige, gray, brown',
  arabicColor: 'كريمي، بيج، رمادي، أو بني',

  environment: 'Shallow marine shelves, upwelling zones, and phosphogenic basins',
  arabicEnvironment: 'الرفوف القارية الضحلة، ومناطق صعود المياه العميقة، والأحواض الفوسفاتية',

  uses: 'Production of phosphate fertilizers, phosphoric acid, animal feed supplements, and chemical industries',
  arabicUses: 'إنتاج الأسمدة الفوسفاتية، وحمض الفوسفوريك، ومكملات أعلاف الحيوانات، والصناعات الكيميائية',

  location: 'Turayf, Saudi Arabia',
  arabicLocation: 'طريف، المملكة العربية السعودية',

  tags: ['sedimentary', 'phosphate', 'phosphorite', 'apatite'],
},
{
  id: 'porphyriticAndesite',
  museumNumber: 'DR-030',

  name: 'Porphyritic Andesite',
  arabicName: 'أنديزيت بورفيري',

  image: ROCK_IMAGES['porphyriticAndesite'],
  gallery: ROCK_GALLERY['porphyriticAndesite'],

  description: `Porphyritic Andesite is an intermediate extrusive igneous rock characterized by a porphyritic texture, in which large, well-formed crystals (phenocrysts) of plagioclase and mafic minerals are embedded within a fine-grained volcanic groundmass. This texture records a two-stage cooling history: the phenocrysts crystallized slowly at depth before the remaining magma erupted and cooled rapidly at or near Earth's surface. Porphyritic andesite is common in volcanic arcs associated with convergent plate boundaries.`,

  arabicDescription: `الأنديزيت البورفيري هو صخر ناري بركاني متوسط التركيب يتميز بالنسيج البورفيري، حيث تنتشر بلورات كبيرة وواضحة (البلورات الظاهرة) من البلاجيوكليز والمعادن المافية داخل أرضية دقيقة الحبيبات. ويعكس هذا النسيج مرحلتين من التبريد؛ إذ تتبلور البلورات الكبيرة ببطء في أعماق القشرة الأرضية، ثم تندفع الصهارة إلى السطح لتبرد بسرعة، مكونة الأرضية الدقيقة. ويعد هذا الصخر من أكثر الصخور شيوعًا في الأقواس البركانية المرتبطة بحدود الصفائح المتقاربة.`,

  subtitle: 'Intermediate Porphyritic Volcanic Rock',
  arabicSubtitle: 'صخر بركاني متوسط ذو نسيج بورفيري',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (بركاني)',

  texture: 'Porphyritic with fine-grained groundmass',
  arabicTexture: 'بورفيري بأرضية دقيقة الحبيبات',

  mineralogy: 'Plagioclase, hornblende, pyroxene, biotite, minor quartz',
  arabicMineralogy: 'بلاجيوكليز، هورنبلند، بيروكسين، بيوتيت، وكميات قليلة من الكوارتز',

  formation: 'Formed by two-stage cooling of intermediate magma, with slow crystallization at depth followed by rapid cooling after eruption.',
  arabicFormation: 'يتكون نتيجة تبريد الصهارة على مرحلتين؛ تبريد بطيء في الأعماق يليه تبريد سريع بعد الثوران البركاني.',

  color: 'Dark gray, gray, greenish gray',
  arabicColor: 'رمادي داكن، رمادي، أو رمادي مخضر',

  environment: 'Volcanic arcs, stratovolcanoes, and convergent plate boundaries',
  arabicEnvironment: 'الأقواس البركانية، البراكين الطبقية، وحدود الصفائح المتقاربة',

  uses: 'Construction aggregate, dimension stone, and geological studies of volcanic processes',
  arabicUses: 'ركام البناء، أحجار الزينة، ودراسة العمليات البركانية',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['igneous', 'andesite', 'porphyritic', 'volcanic'],
},
{
  id: 'porphyriticRhyolite',
  museumNumber: 'DR-031',

  name: 'Porphyritic Rhyolite',
  arabicName: 'ريوليت بورفيري',

  image: ROCK_IMAGES['porphyriticRhyolite'],
  gallery: ROCK_GALLERY['porphyriticRhyolite'],

  description: `Porphyritic Rhyolite is a felsic extrusive igneous rock characterized by large phenocrysts of quartz and feldspar embedded in a fine-grained volcanic groundmass. It forms from silica-rich magma that cools rapidly after an initial stage of slow crystallization beneath the Earth's surface. This texture records a two-stage cooling history typical of volcanic environments.`,

  arabicDescription: `الريوليت البورفيري هو صخر ناري بركاني فلسي يتميز بوجود بلورات كبيرة من الكوارتز والفلسبار ضمن أرضية دقيقة الحبيبات. يتكون من صهارة غنية بالسليكا بدأت بالتبلور ببطء في الأعماق ثم بردت بسرعة بعد خروجها إلى سطح الأرض، مما أدى إلى تكوين النسيج البورفيري المميز.`,

  subtitle: 'Porphyritic Felsic Volcanic Rock',
  arabicSubtitle: 'صخر بركاني فلسي بورفيري',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (بركاني)',

  texture: 'Porphyritic',
  arabicTexture: 'بورفيري',

  mineralogy: 'Quartz, potassium feldspar, sodium-rich plagioclase',
  arabicMineralogy: 'كوارتز، فلسبار بوتاسي، وبلاجيوكليز غني بالصوديوم',

  formation: 'Formed from silica-rich magma that cooled slowly at depth before erupting and cooling rapidly at the surface.',
  arabicFormation: 'يتكون من صهارة غنية بالسليكا تبرد ببطء في الأعماق ثم تبرد بسرعة بعد ثورانها على سطح الأرض.',

  color: 'Light gray to pink',
  arabicColor: 'رمادي فاتح إلى وردي',

  environment: 'Volcanic domes, lava flows, and continental volcanic arcs',
  arabicEnvironment: 'القباب البركانية، وتدفقات الحمم، والأقواس البركانية القارية',

  uses: 'Dimension stone, decorative stone, and geological research',
  arabicUses: 'أحجار البناء والزينة، والدراسات الجيولوجية',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['igneous', 'extrusive', 'felsic', 'rhyolite', 'porphyritic'],
},
{
  id: 'pyroxenite',
  museumNumber: 'DR-032',

  name: 'Pyroxenite',
  arabicName: 'بيروكسينيت',

  image: ROCK_IMAGES['pyroxenite'],
  gallery: ROCK_GALLERY['pyroxenite'],

  description: `Pyroxenite is an ultramafic intrusive igneous rock composed predominantly of pyroxene minerals, with little or no olivine or feldspar. It crystallizes deep within the Earth's crust or upper mantle from magnesium- and iron-rich magma. Pyroxenite commonly occurs in layered mafic-ultramafic intrusions and ophiolite complexes and provides valuable information about mantle processes and magmatic differentiation.`,

  arabicDescription: `البيروكسينيت هو صخر ناري جوفي فوق مافي يتكون بشكل أساسي من معادن البيروكسين مع غياب أو ندرة الأوليفين والفلسبار. يتبلور في أعماق القشرة الأرضية أو الوشاح العلوي من صهارة غنية بالمغنيسيوم والحديد. ويوجد غالبًا ضمن التداخلات النارية المافية والفوق مافية المتطبقة وفي مجمعات الأوفيوليت، ويعد من الصخور المهمة لدراسة عمليات الوشاح والتمايز الصهاري.`,

  subtitle: 'Ultramafic Intrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري جوفي فوق مافي',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Coarse-grained (Phaneritic)',
  arabicTexture: 'خشن الحبيبات (ظاهر التبلور)',

  mineralogy: 'Clinopyroxene, orthopyroxene, minor olivine and amphibole',
  arabicMineralogy: 'كلينوبيروكسين، أورثوبيروكسين، مع كميات قليلة من الأوليفين والأمفيبول',

  formation: 'Formed by slow crystallization of ultramafic magma deep within the crust or upper mantle.',
  arabicFormation: 'يتكون نتيجة التبلور البطيء لصهارة فوق مافية في أعماق القشرة الأرضية أو الوشاح العلوي.',

  color: 'Dark green to black',
  arabicColor: 'أخضر داكن إلى أسود',

  environment: 'Layered mafic-ultramafic intrusions, ophiolites, and mantle complexes',
  arabicEnvironment: 'التداخلات المافية والفوق مافية المتطبقة، والأوفيوليت، وصخور الوشاح',

  uses: 'Scientific research, dimension stone, and source of chromium, nickel, and platinum-group element exploration',
  arabicUses: 'الدراسات الجيولوجية، وأحجار الزينة، والاستكشاف عن الكروم والنيكل وعناصر مجموعة البلاتين',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['igneous', 'intrusive', 'ultramafic', 'pyroxenite'],
},
{
  id: 'serpentinite',
  museumNumber: 'DR-033',

  name: 'Serpentinite',
  arabicName: 'سربنتينيت',

  image: ROCK_IMAGES['serpentinite'],
  gallery: ROCK_GALLERY['serpentinite'],

  description: `Serpentinite is a metamorphic rock formed by the hydration and alteration of ultramafic rocks such as peridotite and pyroxenite. It is composed predominantly of serpentine minerals with variable amounts of olivine, pyroxene, amphibole, and magnetite. Serpentinite commonly occurs in ophiolite complexes and fault zones and is an important indicator of mantle-derived rocks.`,

  arabicDescription: `السربنتينيت هو صخر متحول يتكون نتيجة إماهة وتحول الصخور فوق المافية مثل البريدوتيت والبيروكسينيت. يتكون بشكل رئيسي من معادن السربنتين مع كميات متفاوتة من الأوليفين والبيروكسين والأمفيبول والمغنيتيت. ويوجد غالبًا في مجمعات الأوفيوليت ومناطق الصدوع، ويعد من الصخور المهمة الدالة على صخور الوشاح.`,

  subtitle: 'Ultramafic Metamorphic Rock',
  arabicSubtitle: 'صخر متحول فوق مافي',

  type: 'Metamorphic',
  arabicType: 'متحول',

  texture: 'Massive to foliated',
  arabicTexture: 'كتلي إلى متورق',

  mineralogy: 'Serpentine, olivine, pyroxene, amphibole, magnetite',
  arabicMineralogy: 'سربنتين، أوليفين، بيروكسين، أمفيبول، مغنيتيت',

  formation: 'Formed by hydrothermal alteration (serpentinization) of ultramafic rocks under low- to moderate-temperature conditions.',
  arabicFormation: 'يتكون نتيجة عملية السربنة (Serpentinization) التي تحول الصخور فوق المافية بفعل المياه الحارة في درجات حرارة منخفضة إلى متوسطة.',

  color: 'Green to dark green with black patches',
  arabicColor: 'أخضر إلى أخضر داكن مع بقع سوداء',

  environment: 'Ophiolite complexes, subduction zones, and major fault systems',
  arabicEnvironment: 'مجمعات الأوفيوليت، ومناطق الاندساس، وأنظمة الصدوع الكبرى',

  uses: 'Decorative stone, carving stone, geological research, and indicator of ultramafic terrains',
  arabicUses: 'أحجار الزينة والنحت، والدراسات الجيولوجية، والاستدلال على البيئات فوق المافية',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: ['metamorphic', 'ultramafic', 'serpentinite', 'ophiolite'],
},
{
  id: 'siltstone',
  museumNumber: 'DR-034',

  name: 'Siltstone',
  arabicName: 'حجر غريني',

  image: ROCK_IMAGES['siltstone'],
  gallery: ROCK_GALLERY['siltstone'],

  description: `Siltstone is a fine-grained sedimentary rock composed predominantly of silt-sized particles. It forms through the compaction and cementation of silt deposited in quiet-water environments such as rivers, lakes, floodplains, and shallow marine settings. Siltstone is finer than sandstone but coarser than shale and commonly preserves sedimentary structures and fossils.`,

  arabicDescription: `الحجر الغريني هو صخر رسوبي دقيق الحبيبات يتكون أساسًا من حبيبات الغرين. يتشكل نتيجة انضغاط وتماسك الرواسب الغرينية المترسبة في البيئات الهادئة مثل الأنهار والبحيرات والسهول الفيضية والبحار الضحلة. ويتميز بأنه أدق حبيبات من الحجر الرملي وأخشن من الطفل (Shale)، وقد يحفظ العديد من التراكيب الرسوبية والأحافير.`,

  subtitle: 'Fine-Grained Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي دقيق الحبيبات',

  type: 'Sedimentary (Clastic)',
  arabicType: 'رسوبي (فتاتي)',

  texture: 'Fine-grained',
  arabicTexture: 'دقيق الحبيبات',

  mineralogy: 'Quartz, feldspar, clay minerals, and mica',
  arabicMineralogy: 'كوارتز، فلسبار، معادن طينية، وميكا',

  formation: 'Formed by the compaction and cementation of silt-sized sediments deposited in low-energy environments.',
  arabicFormation: 'يتكون نتيجة انضغاط وتماسك رواسب الغرين المترسبة في البيئات منخفضة الطاقة.',

  color: 'Gray, brown, tan, or reddish',
  arabicColor: 'رمادي، بني، أسمر، أو محمر',

  environment: 'Floodplains, lakes, river deltas, shallow marine environments',
  arabicEnvironment: 'السهول الفيضية، البحيرات، دلتا الأنهار، والبيئات البحرية الضحلة',

  uses: 'Construction material, geological studies, and paleoenvironmental interpretation',
  arabicUses: 'مواد البناء، والدراسات الجيولوجية، وتفسير البيئات الرسوبية القديمة',

  location: 'Wadi Fatimah, Saudi Arabia',
  arabicLocation: 'وادي فاطمة، المملكة العربية السعودية',

  tags: ['sedimentary', 'clastic', 'siltstone', 'wadi-fatimah'],
},
{
  id: 'spottedSlate',
  museumNumber: 'DR-035',

  name: 'Spotted Slate',
  arabicName: 'أردواز مرقط',

  image: ROCK_IMAGES['spottedSlate'],
  gallery: ROCK_GALLERY['spottedSlate'],

  description: `Spotted Slate is a low-grade metamorphic rock formed from mudstone or shale that has undergone contact metamorphism. It is characterized by distinctive dark mineral spots, commonly composed of cordierite, andalusite, or biotite porphyroblasts, which develop during metamorphism. The rock retains its slaty cleavage while displaying the characteristic spotted texture.`,

  arabicDescription: `الأردواز المرقط هو صخر متحول منخفض الدرجة يتكون من تحول الطفل أو الحجر الطيني بفعل التحول التماسي. يتميز بوجود بقع داكنة ناتجة عن نمو بلورات معادن مثل الأندالوسيت أو الكورديريت أو البيوتيت أثناء عملية التحول، مع احتفاظ الصخر بانفصاله الأردوازي المميز.`,

  subtitle: 'Low-Grade Metamorphic Rock',
  arabicSubtitle: 'صخر متحول منخفض الدرجة',

  type: 'Metamorphic',
  arabicType: 'متحول',

  texture: 'Slaty with spotted porphyroblasts',
  arabicTexture: 'نسيج أردوازي مع بقع بلورية',

  mineralogy: 'Quartz, mica, chlorite, cordierite, andalusite, biotite',
  arabicMineralogy: 'كوارتز، ميكا، كلوريت، كورديريت، أندالوسيت، بيوتيت',

  formation: 'Formed by low-grade contact metamorphism of mudstone or shale near igneous intrusions.',
  arabicFormation: 'يتكون نتيجة التحول التماسي منخفض الدرجة لصخور الطفل أو الحجر الطيني بالقرب من التداخلات النارية.',

  color: 'Dark gray to black with lighter or darker spots',
  arabicColor: 'رمادي داكن إلى أسود مع بقع فاتحة أو داكنة',

  environment: 'Contact metamorphic aureoles surrounding igneous intrusions',
  arabicEnvironment: 'هالات التحول التماسي المحيطة بالتداخلات النارية',

  uses: 'Dimension stone, roofing slate, decorative stone, and geological research',
  arabicUses: 'أحجار البناء والأسقف، وأحجار الزينة، والدراسات الجيولوجية',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  tags: ['metamorphic', 'slate', 'spotted', 'contact metamorphism'],
},
{
  id: 'syenite',
  museumNumber: 'DR-036',

  name: 'Syenite',
  arabicName: 'سيانيت',

  image: ROCK_IMAGES['syenite'],
  gallery: ROCK_GALLERY['syenite'],

  description:
    'Syenite is a coarse-grained intrusive igneous rock composed predominantly of alkali feldspar with minor plagioclase and small amounts of mafic minerals such as amphibole, biotite, or pyroxene. It is similar to granite but contains little or no quartz. Syenite crystallizes slowly beneath the Earth\'s surface from silica-poor magma.',

  arabicDescription:
    'السيانيت هو صخر ناري جوفي خشن الحبيبات يتكون بشكل رئيسي من الفلسبار القلوي مع كميات قليلة من البلاجيوكليز ومعادن مافية مثل الأمفيبول أو البيوتيت أو البيروكسين. يشبه الجرانيت لكنه يحتوي على كمية قليلة جدًا أو يخلو من الكوارتز، ويتكون نتيجة التبلور البطيء لصهارة منخفضة السليكا في أعماق القشرة الأرضية.',

  subtitle: 'Coarse-Grained Intrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري جوفي خشن الحبيبات',

  type: 'Igneous (Intrusive)',
  arabicType: 'ناري (جوفي)',

  texture: 'Phaneritic (Coarse-grained)',
  arabicTexture: 'ظاهر التبلور (خشن الحبيبات)',

  mineralogy: 'Alkali feldspar, plagioclase, amphibole, biotite, pyroxene',
  arabicMineralogy: 'فلسبار قلوي، بلاجيوكليز، أمفيبول، بيوتيت، بيروكسين',

  formation:
    'Formed by the slow crystallization of silica-poor magma beneath the Earth\'s surface.',
  arabicFormation:
    'يتكون نتيجة التبلور البطيء لصهارة منخفضة السليكا تحت سطح الأرض.',

  color: 'Pink, gray, or reddish',
  arabicColor: 'وردي، رمادي، أو محمر',

  environment: 'Continental plutons and alkaline igneous complexes',
  arabicEnvironment: 'الكتل النارية القارية والمجمعات النارية القلوية',

  uses: 'Dimension stone, decorative stone, construction material, and geological research',
  arabicUses: 'أحجار البناء والزينة، ومواد البناء، والدراسات الجيولوجية',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  tags: [
    'igneous',
    'intrusive',
    'syenite',
    'alkaline',
  ],
},
{
  id: 'trachytic-andesite',
  museumNumber: 'DR-037',

  name: 'Trachytic Andesite',
  arabicName: 'أنديزيت تراكيتي',

  image: ROCK_IMAGES['trachyticAndesite'],
  gallery: ROCK_GALLERY['trachyticAndesite'],

  description:
    'Trachytic Andesite is a fine-grained volcanic igneous rock characterized by a trachytic texture formed by the preferred alignment of feldspar crystals during lava flow.',

  arabicDescription:
    'الأنديزيت التراكيتي صخر ناري بركاني دقيق الحبيبات يتميز بنسيج تراكيتي ناتج عن الاصطفاف المفضل لبلورات الفلسبار أثناء تدفق اللابة.',

  subtitle: 'Volcanic Igneous Rock',
  arabicSubtitle: 'صخر ناري بركاني',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (بركاني)',

  texture: 'Trachytic, Fine-grained',
  arabicTexture: 'نسيج تراكيتي، دقيق الحبيبات',

  mineralogy: 'Plagioclase, Amphibole, Pyroxene, Biotite',
  arabicMineralogy: 'بلاجيوكليز، أمفيبول، بيروكسين، بيوتيت',

  formation:
    'Formed by rapid cooling of intermediate lava at or near the Earth surface.',
  arabicFormation:
    'تكون نتيجة التبريد السريع للابة متوسطة التركيب على سطح الأرض أو بالقرب منه.',

  color: 'Gray to Dark Gray',
  arabicColor: 'رمادي إلى رمادي داكن',

  environment: 'Volcanic Arc',
  arabicEnvironment: 'بيئة الأقواس البركانية',

  uses: 'Geological research, education, and museum display.',
  arabicUses: 'الدراسات الجيولوجية، التعليم، والعرض المتحفي.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6',

  tags: [
    'igneous',
    'extrusive',
    'andesite',
    'trachytic',
    'volcanic',
  ],
},
{
  id: 'vesicular-andesite',
  museumNumber: 'DR-038',

  name: 'Vesicular Andesite',
  arabicName: 'أنديزيت فقاعي',

  image: ROCK_IMAGES['vesicularAndesite'],
  gallery: ROCK_GALLERY['vesicularAndesite'],

  description:
    'Vesicular Andesite is an extrusive igneous rock containing numerous vesicles formed by gas bubbles trapped during the rapid cooling of intermediate lava.',

  arabicDescription:
    'الأنديزيت الفقاعي صخر ناري بركاني متوسط التركيب يحتوي على فجوات ناتجة عن احتجاز فقاعات الغازات أثناء التبريد السريع للابة.',

  subtitle: 'Extrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري بركاني',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (بركاني)',

  texture: 'Aphanitic, Vesicular',
  arabicTexture: 'دقيق الحبيبات، فقاعي',

  mineralogy: 'Plagioclase, Amphibole, Pyroxene',
  arabicMineralogy: 'بلاجيوكليز، أمفيبول، بيروكسين',

  formation:
    'Formed by rapid cooling of gas-rich intermediate lava at or near the Earth surface.',
  arabicFormation:
    'يتكون نتيجة التبريد السريع للابة متوسطة التركيب والغنية بالغازات على سطح الأرض أو بالقرب منه.',

  color: 'Gray to Dark Gray',
  arabicColor: 'رمادي إلى رمادي داكن',

  environment: 'Volcanic Arc',
  arabicEnvironment: 'بيئة الأقواس البركانية',

  uses: 'Geological research, education, and museum display.',
  arabicUses: 'الدراسات الجيولوجية، التعليم، والعرض المتحفي.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6',

  tags: [
    'igneous',
    'extrusive',
    'andesite',
    'vesicular',
    'volcanic',
  ],
},
{
  id: 'vesicular-basalt',
  museumNumber: 'DR-039',

  name: 'Vesicular Basalt',
  arabicName: 'بازلت فقاعي',

  image: ROCK_IMAGES['vesicularBasalt'],
  gallery: ROCK_GALLERY['vesicularBasalt'],

  description:
    'Vesicular Basalt is an extrusive igneous rock containing numerous rounded cavities (vesicles) formed by gas bubbles trapped during rapid cooling of basaltic lava.',

  arabicDescription:
    'البازلت الفقاعي صخر ناري بركاني يحتوي على فجوات أو ثقوب مستديرة نتجت عن احتجاز فقاعات الغازات أثناء التبريد السريع للابة البازلتية.',

  subtitle: 'Extrusive Igneous Rock',
  arabicSubtitle: 'صخر ناري بركاني',

  type: 'Igneous (Extrusive)',
  arabicType: 'ناري (بركاني)',

  texture: 'Aphanitic, Vesicular',
  arabicTexture: 'دقيق الحبيبات، فقاعي',

  mineralogy: 'Plagioclase, Pyroxene, Olivine',
  arabicMineralogy: 'بلاجيوكليز، بيروكسين، أوليفين',

  formation:
    'Formed by rapid cooling of gas-rich basaltic lava at the Earth surface.',
  arabicFormation:
    'يتكون من التبريد السريع للابة البازلتية الغنية بالغازات على سطح الأرض.',

  color: 'Dark Gray to Black',
  arabicColor: 'رمادي داكن إلى أسود',

  environment: 'Volcanic Lava Flows',
  arabicEnvironment: 'تدفقات اللابة البركانية',

  uses: 'Construction aggregate, geological studies, museum display.',
  arabicUses: 'مواد البناء، الدراسات الجيولوجية، والعرض المتحفي.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6',

  tags: [
    'igneous',
    'extrusive',
    'basalt',
    'vesicular',
    'volcanic',
  ],
},
{
  id: 'volcanic-bomb',
  museumNumber: 'DR-040',

  name: 'Volcanic Bomb',
  arabicName: 'قنبلة بركانية',

  image: ROCK_IMAGES['volcanicBomb'],
  gallery: ROCK_GALLERY['volcanicBomb'],

  description:
    'A Volcanic Bomb is a mass of molten lava ejected during an explosive volcanic eruption. It solidifies while traveling through the air and commonly develops aerodynamic shapes.',

  arabicDescription:
    'القنبلة البركانية هي كتلة من اللابة المنصهرة تُقذف أثناء الثورانات البركانية الانفجارية، وتتصلب في الهواء أثناء طيرانها، مما يمنحها أشكالاً انسيابية مميزة.',

  subtitle: 'Pyroclastic Volcanic Material',
  arabicSubtitle: 'مقذوف بركاني فتاتي',

  type: 'Igneous (Pyroclastic)',
  arabicType: 'ناري (فتاتي بركاني)',

  texture: 'Vesicular, Fine-grained',
  arabicTexture: 'فقاعي، دقيق الحبيبات',

  mineralogy: 'Volcanic Glass, Plagioclase, Pyroxene, Olivine',
  arabicMineralogy: 'زجاج بركاني، بلاجيوكليز، بيروكسين، أوليفين',

  formation:
    'Formed when blobs of molten lava are ejected into the air during explosive volcanic eruptions and solidify before reaching the ground.',
  arabicFormation:
    'يتكون عند قذف كتل من اللابة المنصهرة في الهواء أثناء الثورانات البركانية الانفجارية، حيث تتصلب قبل وصولها إلى سطح الأرض.',

  color: 'Dark Brown to Black',
  arabicColor: 'بني داكن إلى أسود',

  environment: 'Explosive Volcanic Eruptions',
  arabicEnvironment: 'بيئات الثورانات البركانية الانفجارية',

  uses: 'Geological education, volcanology studies, and museum display.',
  arabicUses: 'التعليم الجيولوجي، ودراسة البراكين، والعرض المتحفي.',

  location: 'Saudi Arabia',
  arabicLocation: 'المملكة العربية السعودية',

  hardness: '5–6',

  tags: [
    'igneous',
    'pyroclastic',
    'volcanic',
    'bomb',
    'eruption',
  ],
},
{
  id: 'white-sandstone',
  museumNumber: 'DR-041',

  name: 'White Sandstone',
  arabicName: 'حجر رملي أبيض',

  image: ROCK_IMAGES['whiteSandstone'],
  gallery: ROCK_GALLERY['whiteSandstone'],

  description:
    'White Sandstone is a light-colored sedimentary rock composed predominantly of quartz grains cemented by silica. Its high quartz content gives it excellent durability and weather resistance.',

  arabicDescription:
    'الحجر الرملي الأبيض صخر رسوبي فاتح اللون يتكون أساسًا من حبيبات الكوارتز المتماسكة بواسطة السليكا، ويتميز بصلابته العالية ومقاومته للتجوية.',

  subtitle: 'Clastic Sedimentary Rock',
  arabicSubtitle: 'صخر رسوبي فتاتي',

  type: 'Sedimentary (Clastic)',
  arabicType: 'رسوبي (فتاتي)',

  texture: 'Medium-grained',
  arabicTexture: 'متوسط الحبيبات',

  mineralogy: 'Quartz (SiO₂)',
  arabicMineralogy: 'كوارتز (ثاني أكسيد السيليكون)',

  formation:
    'Formed by the deposition, compaction, and cementation of quartz-rich sand in ancient sedimentary environments.',
  arabicFormation:
    'يتكون من ترسيب وتراص وتلاحم الرمال الغنية بالكوارتز في البيئات الرسوبية القديمة.',

  color: 'White to Light Cream',
  arabicColor: 'أبيض إلى كريمي فاتح',

  environment: 'Desert and Shallow Marine Environments',
  arabicEnvironment: 'البيئات الصحراوية والبحرية الضحلة',

  uses: 'Building stone, decorative stone, geological research, and museum display.',
  arabicUses: 'أحجار البناء، الزينة، الدراسات الجيولوجية، والعرض المتحفي.',

  location: 'Arabian Shield, Saudi Arabia',
  arabicLocation: 'الدرع العربي، المملكة العربية السعودية',

  hardness: '6–7',

  tags: [
    'sedimentary',
    'sandstone',
    'quartz',
    'white',
    'clastic',
  ],
},

];

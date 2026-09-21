import { MINERAL_IMAGES, MINERAL_GALLERY } from './images';
import type { Specimen } from './rocks';

export const minerals: Specimen[] = [
{
  id: 'agate',
  museumNumber: 'DM-01',

  name: 'Agate',
  arabicName: 'العقيق',

  image: MINERAL_IMAGES.agate,
  gallery: MINERAL_GALLERY.agate,

  description:
    'A microcrystalline variety of quartz composed mainly of silica (SiO₂), distinguished by its colorful concentric bands and widely used as a gemstone.',

  arabicDescription:
    'نوع دقيق التبلور من الكوارتز يتكون أساسًا من ثاني أكسيد السيليكون (SiO₂)، يتميز بألوانه وطبقاته المتداخلة ويستخدم كحجر كريم.',

  subtitle: 'Silicate · Chalcedony',
  arabicSubtitle: 'سيليكات · كالسيدوني',

  type: 'Silicate mineral',
  arabicType: 'معدن سيليكاتي',

  chemicalFormula: 'SiO₂',
  arabicChemicalFormula: 'ثاني أكسيد السيليكون',

  hardness: '6.5–7',

  luster: 'Waxy to vitreous',
  arabicLuster: 'شمعي إلى زجاجي',

  crystalSystem: 'Trigonal (microcrystalline)',
  arabicCrystalSystem: 'ثلاثي (دقيق التبلور)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation: 'Forms by silica deposition in volcanic cavities and sedimentary environments.',

  arabicFormation:
    'يتكون من ترسب السيليكا داخل الفجوات البركانية والبيئات الرسوبية.',

  color: 'White, gray, blue, red, brown, multicolored',

  arabicColor:
    'أبيض، رمادي، أزرق، أحمر، بني، متعدد الألوان',

  environment: 'Volcanic rocks, hydrothermal veins, sedimentary deposits',

  arabicEnvironment:
    'الصخور البركانية، العروق الحرمائية، والرواسب الرسوبية.',

  uses: 'Gemstones, jewelry, ornaments, carvings',

  arabicUses:
    'الأحجار الكريمة، المجوهرات، الزينة، والمنحوتات.',

  location: 'Arabian Shield, Saudi Arabia',

  arabicLocation:
    'الدرع العربي، المملكة العربية السعودية',
},
  {
   id: 'apatite-quartz-vein',
  museumNumber: 'DM-02',

  name: 'Apatite in Quartz Vein',
  arabicName: 'أباتيت في عرق كوارتز',

  image: MINERAL_IMAGES.apatiteQuartzVein,
  gallery: MINERAL_GALLERY.apatiteQuartzVein,

  description:
    'Apatite is a phosphate mineral commonly found in igneous, metamorphic, and hydrothermal environments. In this specimen, well-developed apatite crystals are embedded within a quartz vein formed by silica-rich hydrothermal fluids. Such mineral associations provide valuable evidence for fluid evolution and mineralizing processes within the Earth’s crust. Apatite is also an important source of phosphorus and serves as a key indicator mineral in geological exploration.',

  arabicDescription:
    'الأباتيت معدن من مجموعة الفوسفات ينتشر في البيئات النارية والمتحولة والحرمائية. في هذه العينة تظهر بلورات الأباتيت متداخلة داخل عرق من الكوارتز تكوّن نتيجة ترسب سوائل حرمائية غنية بالسيليكا. ويُعد هذا الترابط المعدني دليلًا مهمًا على تطور السوائل الحرمائية وعمليات التمعدن داخل القشرة الأرضية، كما يُعتبر الأباتيت المصدر الرئيس للفوسفور وأحد المعادن الدالة المستخدمة في الدراسات والاستكشافات الجيولوجية.',

  subtitle: 'Phosphate · Hydrothermal Association',
  arabicSubtitle: 'فوسفات · ارتباط حرمائي',

  type: 'Phosphate mineral',
  arabicType: 'معدن فوسفاتي',

  chemicalFormula: 'Ca₅(PO₄)₃(F,Cl,OH)',
  arabicChemicalFormula: 'فوسفات كالسيوم يحتوي على الفلور أو الكلور أو مجموعة الهيدروكسيل',

  hardness: '5',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Crystallizes in igneous rocks, pegmatites, metamorphic rocks, and hydrothermal quartz veins through phosphorus-rich fluids.',

  arabicFormation:
    'يتبلور في الصخور النارية والبيجماتيتية والمتحولة، كما يترسب داخل عروق الكوارتز الحرمائية من سوائل غنية بالفوسفور.',

  color:
    'Green, blue, yellow, brown, violet, or colorless',

  arabicColor:
    'أخضر، أزرق، أصفر، بني، بنفسجي، أو عديم اللون',

  environment:
    'Igneous rocks, pegmatites, metamorphic rocks, hydrothermal quartz veins',

  arabicEnvironment:
    'الصخور النارية، البيجماتيت، الصخور المتحولة، وعروق الكوارتز الحرمائية',

  uses:
    'Primary source of phosphorus for fertilizers, gemstone material, scientific research, and a valuable indicator mineral in mineral exploration.',

  arabicUses:
    'المصدر الرئيس للفوسفور في صناعة الأسمدة، ويستخدم كحجر كريم، وفي الأبحاث العلمية، وكأحد المعادن الدالة في الاستكشاف المعدني.',

  location:
    'Hydrothermal quartz veins, Arabian Shield and worldwide',

  arabicLocation:
    'عروق الكوارتز الحرمائية، الدرع العربي ومناطق متعددة حول العالم',

},
{
  id: 'green-apophyllite',
  museumNumber: 'DM-03',

  name: 'Green Apophyllite',
  arabicName: 'الأبوفيلايت الأخضر',

  image: MINERAL_IMAGES.ApophylliteGreen,
  gallery: MINERAL_GALLERY.ApophylliteGreen,

  description:
    'Green Apophyllite is a hydrated potassium calcium phyllosilicate renowned for its transparent to translucent crystals and delicate green coloration. It commonly develops within cavities of basaltic lava flows, where mineral-rich hydrothermal fluids slowly crystallize. Its exceptional crystal habit and vitreous luster make it one of the most sought-after collector minerals worldwide.',

  arabicDescription:
    'الأبوفيلايت الأخضر معدن سيليكاتي صفائحي مائي غني بالبوتاسيوم والكالسيوم، يتميز ببلوراته الشفافة إلى شبه الشفافة ولونه الأخضر الهادئ. يتكون غالبًا داخل الفجوات في تدفقات البازلت نتيجة تبلور السوائل الحرمائية الغنية بالمعادن، ويُعد من أجمل المعادن البلورية وأكثرها طلبًا بين هواة جمع العينات والمتاحف الجيولوجية.',

  subtitle: 'Silicate',
  arabicSubtitle: 'سيليكات',

  type: 'Phyllosilicate',
  arabicType: 'سيليكات صفائحية',

  chemicalFormula: 'KCa₄Si₈O₂₀(F,OH)·8H₂O',
  arabicChemicalFormula: 'سيليكات بوتاسيوم وكالسيوم مائية تحتوي على الفلور أو الهيدروكسيل',

  hardness: '4.5–5',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Tetragonal',
  arabicCrystalSystem: 'رباعي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through low-temperature hydrothermal activity within cavities of basaltic volcanic rocks.',

  arabicFormation:
    'يتكون بفعل النشاط الحرمائي منخفض الحرارة داخل الفجوات والفقاعات الموجودة في الصخور البازلتية البركانية.',

  color:
    'Colorless, white, pale green, green',

  arabicColor:
    'عديم اللون، أبيض، أخضر فاتح، أخضر',

  environment:
    'Basalt cavities, volcanic rocks, hydrothermal environments',

  arabicEnvironment:
    'فجوات البازلت، الصخور البركانية، والبيئات الحرمائية',

  uses:
    'Museum collections, mineral specimens, scientific study, decorative gemstones and collectors’ pieces.',

  arabicUses:
    'عينات متحفية، ودراسات علمية، وأحجار للزينة، وعينات لهواة جمع المعادن.',

  location:
    'Poona (Pune), Maharashtra, India',

  arabicLocation:
    'بونا (بيون)، ولاية ماهاراشترا، الهند',

},
{
  id: 'aquamarine',
  museumNumber: 'DM-04',

  name: 'Aquamarine',
  arabicName: 'الأكوامارين',

  image: MINERAL_IMAGES.aquamarine,
  gallery: MINERAL_GALLERY.aquamarine,

  description:
    'Aquamarine is the blue to blue-green gem variety of beryl, prized for its exceptional clarity and delicate ocean-blue color. It crystallizes in granitic pegmatites through the slow cooling of silica-rich magmas and is considered one of the most valuable beryl varieties. Large, well-formed crystals are highly sought after by collectors, museums, and the gemstone industry.',

  arabicDescription:
    'الأكوامارين هو الصنف الأزرق إلى الأزرق المخضر من معدن البريل، ويشتهر بنقاوته العالية ولونه الهادئ الذي يشبه مياه البحر. يتبلور داخل صخور البيجماتيت الجرانيتية نتيجة التبريد البطيء للصهارة الغنية بالسيليكا، ويُعد من أثمن أنواع البريل وأكثرها شهرة بين هواة جمع المعادن والأحجار الكريمة.',

  subtitle: 'Silicate',
  arabicSubtitle: 'سيليكات',

  type: 'Cyclosilicate',
  arabicType: 'سيليكات حلقية',

  chemicalFormula: 'Be₃Al₂Si₆O₁₈',
  arabicChemicalFormula: 'سيليكات بريليوم وألومنيوم',

  hardness: '7.5–8',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during the late stages of crystallization in granitic pegmatites and hydrothermal veins enriched in beryllium.',

  arabicFormation:
    'يتكون خلال المراحل الأخيرة من تبلور البيجماتيت الجرانيتي والعروق الحرمائية الغنية بعنصر البريليوم.',

  color:
    'Light blue, blue-green, pale green',

  arabicColor:
    'أزرق فاتح، أزرق مخضر، أخضر فاتح',

  environment:
    'Granitic pegmatites and hydrothermal veins',

  arabicEnvironment:
    'البيجماتيت الجرانيتي والعروق الحرمائية',

  uses:
    'Gemstone jewelry, museum collections, mineral specimens, and scientific research.',

  arabicUses:
    'الأحجار الكريمة، والمجوهرات، والعينات المتحفية، والدراسات الجيولوجية.',

  location:
    'Pegmatite deposits worldwide, including Brazil, Pakistan, Afghanistan, Madagascar, and Nigeria.',

  arabicLocation:
    'رواسب البيجماتيت حول العالم، ومنها البرازيل، وباكستان، وأفغانستان، ومدغشقر، ونيجيريا.',

},
{
  id: 'barite',
  museumNumber: 'DM-005',

  name: 'Barite',
  arabicName: 'الباريت',

  image: MINERAL_IMAGES.barite,
  gallery: MINERAL_GALLERY.barite,

  description:
    'Barite is a dense barium sulfate mineral renowned for its exceptionally high specific gravity. It commonly forms in hydrothermal veins associated with metallic ore deposits and in sedimentary environments. Owing to its chemical inertness and density, barite is one of the most important industrial minerals worldwide.',

  arabicDescription:
    'الباريت معدن كبريتات الباريوم يتميز بكثافته العالية جدًا مقارنة بمعظم المعادن الأخرى. يتكوّن غالبًا في العروق الحرمائية المصاحبة للرواسب الفلزية، كما يوجد في البيئات الرسوبية. ويُعد من أهم المعادن الصناعية بفضل كثافته العالية واستقراره الكيميائي.',

  subtitle: 'Sulfate · Anhydrous Sulfate',
  arabicSubtitle: 'كبريتات · كبريتات لا مائية',

  type: 'Sulfate Mineral',
  arabicType: 'معدن كبريتاتي',

  chemicalFormula: 'BaSO₄',
  arabicChemicalFormula: 'كبريتات الباريوم',

  hardness: '3–3.5 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms by precipitation from barium-rich hydrothermal fluids and through sedimentary chemical deposition.',

  arabicFormation:
    'يتكوّن بترسب السوائل الحرمائية الغنية بالباريوم، كما يتكون بالترسيب الكيميائي في البيئات الرسوبية.',

  color:
    'White, colorless, pale blue, yellow, brown, gray',

  arabicColor:
    'أبيض، عديم اللون، أزرق فاتح، أصفر، بني، رمادي',

  environment:
    'Hydrothermal veins, sedimentary basins, and lead-zinc ore deposits.',

  arabicEnvironment:
    'العروق الحرمائية، الأحواض الرسوبية، ورواسب الرصاص والزنك.',

  uses:
    'Drilling fluids for oil and gas wells, radiation shielding, medical contrast agents, paints, plastics, rubber, and industrial fillers.',

  arabicUses:
    'سوائل حفر آبار النفط والغاز، الحماية من الإشعاع، مواد التباين الطبية، الدهانات، البلاستيك، المطاط، والحشوات الصناعية.',

  location:
    'Arabian Shield, Saudi Arabia, Morocco, China, India, United States',

  arabicLocation:
    'الدرع العربي، المملكة العربية السعودية، المغرب، الصين، الهند، الولايات المتحدة',

},
{
  id: 'bauxite',
  museumNumber: 'DM-06',

  name: 'Bauxite',
  arabicName: 'البوكسيت',

  image: MINERAL_IMAGES.bauxite,
  gallery: MINERAL_GALLERY.bauxite,

  description:
    'Bauxite is the world’s principal ore of aluminum and consists mainly of the aluminum hydroxide minerals gibbsite, boehmite, and diaspore, together with iron oxides, silica, and clay minerals. It forms through intense tropical weathering of aluminum-rich rocks and is the primary raw material used for aluminum production worldwide.',

  arabicDescription:
    'البوكسيت هو الخام الرئيسي لإنتاج الألومنيوم عالميًا، ويتكون أساسًا من معادن هيدروكسيدات الألومنيوم مثل الجبسيت والبوهيميت والدياسبور، إضافةً إلى أكاسيد الحديد والسيليكا ومعادن الطين. ويتشكل نتيجة التجوية الشديدة للصخور الغنية بالألومنيوم، ويُعد المصدر الأساسي لإنتاج معدن الألومنيوم.',

  subtitle: 'Oxide · Aluminum Ore',
  arabicSubtitle: 'أكاسيد · خام الألومنيوم',

  type: 'Aluminum Ore (Oxide Group)',
  arabicType: 'خام ألومنيوم (مجموعة الأكاسيد)',

  chemicalFormula: 'Al₂O₃·xH₂O',
  arabicChemicalFormula: 'أكسيد الألومنيوم المائي',

  hardness: '1–3 (Mohs)',

  luster: 'Dull to Earthy',
  arabicLuster: 'باهت إلى ترابي',

  crystalSystem: 'Amorphous / Variable',
  arabicCrystalSystem: 'غير متبلور / متغير',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms by intense chemical weathering and lateritic alteration of aluminum-rich igneous and metamorphic rocks in tropical and subtropical climates.',

  arabicFormation:
    'يتكون نتيجة التجوية الكيميائية الشديدة والتحول اللاتيريتي للصخور النارية والمتحولة الغنية بالألومنيوم في البيئات المدارية وشبه المدارية.',

  color:
    'Reddish-brown, brown, yellow, white, gray',

  arabicColor:
    'بني محمر، بني، أصفر، أبيض، رمادي',

  environment:
    'Lateritic weathering profiles, tropical plateaus, and residual deposits.',

  arabicEnvironment:
    'رواسب اللاتيريت، الهضاب المدارية، والرواسب المتبقية.',

  uses:
    'Primary source of aluminum for aircraft, transportation, construction, electrical industries, packaging, refractories, abrasives, and chemical manufacturing.',

  arabicUses:
    'المصدر الرئيسي لإنتاج الألومنيوم المستخدم في صناعة الطائرات، ووسائل النقل، والإنشاءات، والصناعات الكهربائية، ومواد التغليف، والمواد الحرارية، والمواد الكاشطة، والصناعات الكيميائية.',

  location:
    'Australia, Guinea, Brazil, India, Jamaica, Vietnam, and Saudi Arabia (limited lateritic occurrences).',

  arabicLocation:
    'أستراليا، غينيا، البرازيل، الهند، جامايكا، فيتنام، والمملكة العربية السعودية (تواجدات لاتيريتية محدودة).',

},
{
  id: 'beryl',
  museumNumber: 'DM-07',

  name: 'Beryl',
  arabicName: 'البيريل',

  image: MINERAL_IMAGES.beryl,
  gallery: MINERAL_GALLERY.beryl,

  description:
    'Beryl is a beryllium aluminum cyclosilicate renowned for producing some of the world’s most valuable gemstones, including emerald and aquamarine. It crystallizes primarily in granitic pegmatites and hydrothermal veins, where slow crystallization allows the formation of large, well-developed hexagonal crystals prized by collectors and the gemstone industry.',

  arabicDescription:
    'البيريل معدن سيكلوسيليكات من البيريليوم والألومنيوم، ويُعد المصدر لأشهر الأحجار الكريمة في العالم مثل الزمرد والأكوامارين. يتبلور أساسًا في البيجماتيت الجرانيتية والعروق الحرمائية، حيث يسمح التبلور البطيء بتكوين بلورات سداسية كبيرة ومتقنة، مما يجعله ذا قيمة علمية واقتصادية عالية.',

  subtitle: 'Silicate · Cyclosilicate',
  arabicSubtitle: 'سيليكات · سيكلوسيليكات',

  type: 'Cyclosilicate Mineral',
  arabicType: 'معدن سيكلوسيليكات',

  chemicalFormula: 'Be₃Al₂Si₆O₁₈',
  arabicChemicalFormula: 'سيليكات البيريليوم والألومنيوم',

  hardness: '7.5–8 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during the late stages of crystallization in granitic pegmatites and hydrothermal veins enriched in beryllium.',

  arabicFormation:
    'يتكوّن خلال المراحل الأخيرة من تبلور الصهارة داخل البيجماتيت الجرانيتية والعروق الحرمائية الغنية بالبيريليوم.',

  color:
    'Green, blue, yellow, pink, white, colorless',

  arabicColor:
    'أخضر، أزرق، أصفر، وردي، أبيض، عديم اللون',

  environment:
    'Granitic pegmatites, hydrothermal veins, and high-temperature metamorphic rocks.',

  arabicEnvironment:
    'البيجماتيت الجرانيتية، العروق الحرمائية، والصخور المتحولة عالية الحرارة.',

  uses:
    'Gemstones (Emerald, Aquamarine, Morganite, Heliodor), museum specimens, collectors, and a minor source of beryllium for aerospace and advanced technology applications.',

  arabicUses:
    'الأحجار الكريمة مثل الزمرد والأكوامارين والمورغانيت والهيليودور، والعينات المتحفية، كما يُعد مصدرًا للبيريليوم المستخدم في صناعات الطيران والتقنيات المتقدمة.',

  location:
    'Brazil, Colombia, Pakistan, Afghanistan, Madagascar, Russia, and the Arabian Shield.',

  arabicLocation:
    'البرازيل، كولومبيا، باكستان، أفغانستان، مدغشقر، روسيا، والدرع العربي.',

},
{
  id: 'biotite',
  museumNumber: 'DM-08',

  name: 'Biotite',
  arabicName: 'البيوتيت',

  image: MINERAL_IMAGES.biotite,
  gallery: MINERAL_GALLERY.biotite,

description:
  'Biotite is a dark-colored rock-forming mineral belonging to the mica group and the phyllosilicate subclass of silicates. Rich in iron and magnesium, it crystallizes as thin, flexible sheets with perfect basal cleavage, giving it the characteristic flaky appearance shared by all mica minerals. Biotite is one of the most abundant ferromagnesian minerals in the Earth’s crust and is commonly found in granites, granodiorites, pegmatites, schists, and gneisses. It forms during the crystallization of intermediate to felsic magmas as well as through regional metamorphism, making it an important indicator of pressure-temperature conditions in geological environments. Because its crystal structure readily incorporates potassium, iron, magnesium, titanium, and other trace elements, biotite is widely used in petrological research, geochronology, and metamorphic studies to reconstruct the geological history of rocks. Although it has limited commercial value compared with gemstones, biotite remains one of the most scientifically significant minerals in mineralogy and igneous petrology.',

arabicDescription:
  'البيوتيت معدن داكن اللون ينتمي إلى مجموعة الميكا وإلى تحت مجموعة الفيلوسيليكات ضمن معادن السيليكات، ويُعد من أكثر المعادن المكوِّنة للصخور انتشارًا في القشرة الأرضية. يتميز باحتوائه على الحديد والمغنيسيوم، ويتبلور على هيئة صفائح رقيقة مرنة ذات انفصام قاعدي كامل يمنحه المظهر الرقائقي المعروف لمعادن الميكا. ينتشر البيوتيت في الصخور النارية مثل الجرانيت والجرانوديوريت والبيجماتيت، كما يوجد بكثرة في الصخور المتحولة مثل الشيست والنيس. ويتكون أثناء تبلور الصهارة المتوسطة والحامضية، وكذلك خلال عمليات التحول الإقليمي، لذلك يُعد معدنًا مهمًا لفهم ظروف الضغط ودرجة الحرارة التي تعرضت لها الصخور. كما أن احتواءه على عناصر مثل البوتاسيوم والحديد والمغنيسيوم والتيتانيوم يجعله معدنًا مهمًا في الدراسات البتروجرافية والتأريخ الجيولوجي وإعادة بناء التاريخ الجيولوجي للصخور. وعلى الرغم من محدودية استخدامه التجاري مقارنة بالأحجار الكريمة، فإنه يُعد من أكثر المعادن أهمية في علم المعادن ودراسة الصخور النارية والمتحولة.',
  subtitle: 'Silicate · Phyllosilicate',
  arabicSubtitle: 'سيليكات · فيلوسيليكات',

  type: 'Phyllosilicate Mineral (Mica Group)',
  arabicType: 'معدن فيلوسيليكات (مجموعة الميكا)',

  chemicalFormula: 'K(Mg,Fe)₃AlSi₃O₁₀(F,OH)₂',
  arabicChemicalFormula: 'سيليكات البوتاسيوم والمغنيسيوم والحديد والألومنيوم',

  hardness: '2.5–3 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'White to Gray',
  arabicStreak: 'أبيض إلى رمادي',

  formation:
    'Forms during the crystallization of intermediate to felsic magmas and through regional metamorphism, commonly occurring in granites, pegmatites, schists, and gneisses.',

  arabicFormation:
    'يتكوّن أثناء تبلور الصهارة المتوسطة والحامضية، كما يتكون خلال التحول الإقليمي، وينتشر في الجرانيت والبيجماتيت والشيست والنيس.',

  color:
    'Dark brown, black, greenish-black',

  arabicColor:
    'بني داكن، أسود، أسود مائل إلى الأخضر',

  environment:
    'Granitic pegmatites, granites, schists, gneisses, and metamorphic rocks.',

  arabicEnvironment:
    'البيجماتيت الجرانيتية، الجرانيت، الشيست، النيس، والصخور المتحولة.',

  uses:
    'Educational and museum specimens, geological studies, geochronology, and as an indicator mineral in petrological investigations.',

  arabicUses:
    'العينات التعليمية والمتحفية، والدراسات الجيولوجية، والتأريخ الجيولوجي، وكمعادن دالة في الدراسات البتروجرافية.',

  location:
    'Arabian Shield, Canada, Brazil, Russia, India, Norway, and the United States.',

  arabicLocation:
    'الدرع العربي، كندا، البرازيل، روسيا، الهند، النرويج، والولايات المتحدة.',

}, 
{
id: 'calcite',
museumNumber: 'DM-09',

name: 'Calcite',
arabicName: 'الكالسيت',

image: MINERAL_IMAGES.calcite,
gallery: MINERAL_GALLERY.calcite,

description:
  'Calcite is one of the most abundant carbonate minerals on Earth and the principal mineral composing limestone, marble, and many sedimentary rocks. It belongs to the carbonate mineral group and crystallizes in the trigonal crystal system, producing an exceptional variety of crystal habits including rhombohedral, scalenohedral, prismatic, and massive forms. Calcite forms in an extensive range of geological environments, including marine sedimentation, hydrothermal veins, caves, metamorphic terrains, and low-temperature groundwater systems. It plays a fundamental role in the global carbon cycle by storing and recycling carbon dioxide through natural geological processes. Calcite is well known for its perfect rhombohedral cleavage, relatively low hardness, and vigorous reaction with dilute hydrochloric acid, making it one of the easiest minerals to identify in the field. Transparent varieties, such as Iceland spar, exhibit remarkable optical properties including strong double refraction. Owing to its abundance and industrial importance, calcite is extensively used in cement and lime production, construction materials, agriculture, chemical manufacturing, glass production, and environmental applications.',

arabicDescription:
  'الكالسيت هو أحد أكثر معادن الكربونات انتشارًا على سطح الأرض، ويُعد المعدن الرئيس المكوّن للحجر الجيري والرخام والعديد من الصخور الرسوبية. ينتمي إلى مجموعة معادن الكربونات ويتبلور في النظام البلوري الثلاثي، ويتميز بتنوع كبير في أشكاله البلورية مثل البلورات المعينية والرأسية والمنشورية والكتلية. يتكون الكالسيت في نطاق واسع من البيئات الجيولوجية، بما في ذلك الترسيب البحري، والعروق الحرمائية، والكهوف، والصخور المتحولة، وأنظمة المياه الجوفية منخفضة الحرارة. ويؤدي دورًا محوريًا في دورة الكربون العالمية من خلال تخزين وإعادة تدوير ثاني أكسيد الكربون عبر العمليات الجيولوجية الطبيعية. ويشتهر الكالسيت بانفصامه المعيني الكامل، وصلادته المنخفضة نسبيًا، وتفاعله السريع مع حمض الهيدروكلوريك المخفف، مما يجعله من أسهل المعادن تمييزًا في الدراسات الحقلية. كما تتميز بعض أنواعه الشفافة مثل كالسيت آيسلندا بخاصية الانكسار المزدوج الواضحة. وبفضل وفرته وأهميته الاقتصادية، يدخل الكالسيت في صناعة الأسمنت والجير ومواد البناء والزجاج والصناعات الكيميائية والزراعة والعديد من التطبيقات البيئية.',

subtitle: 'Carbonate · Calcite Group',
arabicSubtitle: 'كربونات · مجموعة الكالسيت',

type: 'Carbonate Mineral',
arabicType: 'معدن كربوناتي',

chemicalFormula: 'CaCO₃',
arabicChemicalFormula: 'كربونات الكالسيوم',

hardness: '3 (Mohs)',

luster: 'Vitreous to Pearly',
arabicLuster: 'زجاجي إلى لؤلؤي',

crystalSystem: 'Trigonal',
arabicCrystalSystem: 'ثلاثي',

streak: 'White',
arabicStreak: 'أبيض',

formation:
  'Forms through marine precipitation, hydrothermal activity, cave deposition, groundwater processes, and regional metamorphism.',

arabicFormation:
  'يتكوّن نتيجة الترسيب البحري، والنشاط الحرمائي، وترسيبات الكهوف، وعمليات المياه الجوفية، والتحول الإقليمي.',

color:
  'Colorless, white, gray, yellow, pink, green, blue, brown',

arabicColor:
  'عديم اللون، أبيض، رمادي، أصفر، وردي، أخضر، أزرق، بني',

environment:
  'Sedimentary basins, hydrothermal veins, caves, metamorphic rocks, and carbonate platforms.',

arabicEnvironment:
  'الأحواض الرسوبية، والعروق الحرمائية، والكهوف، والصخور المتحولة، والمنصات الكربوناتية.',

uses:
  'Cement and lime production, construction materials, steel industry, agriculture, glass manufacturing, chemical industries, and environmental treatment.',

arabicUses:
  'إنتاج الأسمنت والجير، ومواد البناء، وصناعة الحديد والصلب، والزراعة، وصناعة الزجاج، والصناعات الكيميائية، ومعالجة البيئة.',

location:
  'Occurs worldwide, including abundant deposits within the Arabian Shield and sedimentary basins of Saudi Arabia.',

arabicLocation:
  'ينتشر عالميًا، بما في ذلك رواسب وفيرة في الدرع العربي والأحواض الرسوبية في المملكة العربية السعودية.',

},
{
  id: 'celestine',
  museumNumber: 'DM-10',

  name: 'Celestine',
  arabicName: 'السيليستين',

  image: MINERAL_IMAGES.celestine,
  gallery: MINERAL_GALLERY.celestine,

  description:
    'Celestine is a strontium sulfate mineral renowned for its delicate sky-blue color and well-developed prismatic crystals. It commonly forms in sedimentary evaporite deposits where sulfate-rich fluids interact with strontium-bearing rocks, although it may also occur in hydrothermal veins. Its remarkable crystal habit and vitreous luster make it one of the most visually striking sulfate minerals in museum collections. Beyond its aesthetic appeal, celestine is the principal commercial source of strontium, an element widely used in pyrotechnics, specialty glass, ceramics, electronics, and scientific applications.',

  arabicDescription:
    'السيليستين معدن من مجموعة الكبريتات يُعرف بلونه الأزرق السماوي المميز وبلوراته المنشورية الجميلة. يتكوّن غالبًا في البيئات الرسوبية التبخّرية نتيجة تفاعل المحاليل الغنية بالكبريتات مع الصخور الحاوية على السترونشيوم، كما قد يوجد في العروق الحرمائية. ويُعد من أكثر معادن الكبريتات جمالًا في العينات المتحفية بفضل بريقه الزجاجي وشكله البلوري الواضح. ويُعتبر المصدر الرئيسي لعنصر السترونشيوم المستخدم في الألعاب النارية والزجاج المتخصص والسيراميك والإلكترونيات والعديد من التطبيقات الصناعية والعلمية.',

  subtitle: 'Sulfate · Celestine Group',
  arabicSubtitle: 'كبريتات · مجموعة السيليستين',

  type: 'Sulfate Mineral',
  arabicType: 'معدن كبريتاتي',

  chemicalFormula: 'SrSO₄',
  arabicChemicalFormula: 'كبريتات السترونشيوم',

  hardness: '3–3.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms primarily in evaporite sedimentary deposits through precipitation from sulfate-rich brines, and less commonly in hydrothermal veins.',

  arabicFormation:
    'يتكوّن أساسًا في الرواسب التبخرية نتيجة ترسب المحاليل الملحية الغنية بالكبريتات، وقد يوجد أيضًا في العروق الحرمائية.',

  color:
    'Colorless, white, pale blue, sky blue',

  arabicColor:
    'عديم اللون، أبيض، أزرق فاتح، أزرق سماوي',

  environment:
    'Evaporite deposits, sedimentary rocks, hydrothermal veins',

  arabicEnvironment:
    'الرواسب التبخرية، الصخور الرسوبية، العروق الحرمائية',

  uses:
    'Primary ore of strontium, pyrotechnics, specialty glass, ceramics, electronics, scientific research, and museum specimens.',

  arabicUses:
    'خام رئيسي للسترونشيوم، الألعاب النارية، الزجاج المتخصص، السيراميك، الإلكترونيات، الأبحاث العلمية، والعينات المتحفية.',

  location:
    'Madagascar, Mexico, Poland, United Kingdom, Libya, and worldwide evaporite deposits.',

  arabicLocation:
    'مدغشقر، المكسيك، بولندا، المملكة المتحدة، ليبيا، ورواسب تبخرية حول العالم.',

},
{
  id: 'citrine',
  museumNumber: 'DM-43',

  name: 'Citrine',
  arabicName: 'سترين',

  image: MINERAL_IMAGES.citrine,
  gallery: MINERAL_GALLERY.citrine,

  description:
    'Citrine is the golden-yellow to orange variety of quartz, colored primarily by trace amounts of iron. It commonly forms in hydrothermal veins and pegmatites, although natural citrine is relatively rare compared to heat-treated amethyst. Citrine is valued as a gemstone for its clarity, durability, and warm golden color.',

  arabicDescription:
    'السترين هو الصنف الأصفر الذهبي إلى البرتقالي من معدن الكوارتز، ويكتسب لونه بسبب كميات ضئيلة من الحديد داخل بنيته البلورية. يتكوّن غالبًا في العروق الحرارية المائية والبيجماتيت، ويُعد السترين الطبيعي نادرًا مقارنة بالأنواع المعالجة حراريًا من الجمشت. ويتميز بجمال لونه وشفافيته ومتانته، مما يجعله من الأحجار الكريمة الشائعة.',

  subtitle: 'Silicate · Quartz Group',
  arabicSubtitle: 'سيليكات · مجموعة الكوارتز',

  type: 'Gemstone Mineral',
  arabicType: 'معدن كريم',

  chemicalFormula: 'SiO₂',
  arabicChemicalFormula: 'ثاني أكسيد السيليكون',

  hardness: '7 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms in hydrothermal veins, pegmatites, and volcanic cavities where iron impurities produce its yellow coloration.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية والبيجماتيت والفراغات البركانية، ويعود لونه الأصفر إلى وجود شوائب الحديد.',

  color: 'Yellow, Golden Yellow, Orange-Yellow',
  arabicColor: 'أصفر، أصفر ذهبي، أصفر برتقالي',

  environment:
    'Hydrothermal veins, pegmatites, and volcanic rocks.',

  arabicEnvironment:
    'العروق الحرارية المائية، البيجماتيت، والصخور البركانية.',

  uses:
    'Gemstones, jewelry, decorative carvings, and mineral collections.',

  arabicUses:
    'يستخدم في المجوهرات، وأحجار الزينة، والمنحوتات، والعينات المتحفية.',

  location:
    'Brazil, Madagascar, Russia, Spain, Bolivia, Mexico, United States, and Zambia.',

  arabicLocation:
    'البرازيل، مدغشقر، روسيا، إسبانيا، بوليفيا، المكسيك، الولايات المتحدة، وزامبيا.',

},
{
  id: 'chalcedony',
  museumNumber: 'DM-11',

  name: 'Chalcedony',
  arabicName: 'الكالسيدوني',

  image: MINERAL_IMAGES.chalcedony,
  gallery: MINERAL_GALLERY.chalcedony,

  description:
    'Chalcedony is a cryptocrystalline variety of silica composed of extremely fine intergrowths of quartz and moganite. Unlike transparent quartz crystals, chalcedony forms as dense, compact masses with a waxy luster and exceptional toughness. It develops through the gradual precipitation of silica-rich fluids within cavities, fractures, and volcanic rocks, producing nodules, veins, geodes, and botryoidal structures. Numerous well-known gemstones—including agate, onyx, jasper, chrysoprase, and carnelian—are recognized as distinctive varieties of chalcedony. Owing to its durability, attractive appearance, and wide range of colors, it has been valued throughout history for jewelry, ornamental carvings, decorative objects, and scientific collections.',

  arabicDescription:
    'الكالسيدوني هو أحد الأنواع الميكروبلورية للسيليكا، ويتكون من تداخل دقيق للغاية بين معدني الكوارتز والموجانايت. وعلى عكس بلورات الكوارتز الشفافة، يظهر الكالسيدوني على هيئة كتل متماسكة ذات بريق شمعي ومتانة عالية. يتكوّن نتيجة الترسيب البطيء للمحاليل الغنية بالسيليكا داخل الفجوات والشقوق والصخور البركانية، مكوّنًا عقيدات وعروقًا وجيودات وتراكيب عنقودية مميزة. وتندرج تحته العديد من أشهر الأحجار الكريمة مثل العقيق، والأونيكس، واليشب، والكريسوبراس، والعقيق الأحمر (كارنيليان). وقد استُخدم منذ العصور القديمة في صناعة الحلي، والمنحوتات الزخرفية، والأدوات الفنية، ويُعد من أكثر معادن السيليكا أهمية في المجموعات المتحفية.',

  subtitle: 'Silicate · Cryptocrystalline Quartz',
  arabicSubtitle: 'سيليكات · كوارتز دقيق التبلور',

  type: 'Silicate Mineral',
  arabicType: 'معدن سيليكاتي',

  chemicalFormula: 'SiO₂',
  arabicChemicalFormula: 'ثاني أكسيد السيليكون',

  hardness: '6.5–7 (Mohs)',

  luster: 'Waxy to Vitreous',
  arabicLuster: 'شمعي إلى زجاجي',

  crystalSystem: 'Trigonal (Microcrystalline)',
  arabicCrystalSystem: 'ثلاثي (دقيق التبلور)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through the slow precipitation of silica-rich groundwater or hydrothermal fluids within cavities, fractures, and volcanic rocks, commonly producing nodules, geodes, veins, and botryoidal masses.',

  arabicFormation:
    'يتكوّن نتيجة الترسيب البطيء للمحاليل الغنية بالسيليكا أو السوائل الحرمائية داخل الفجوات والشقوق والصخور البركانية، مكوّنًا عقيدات وجيودات وعروقًا وتراكيب عنقودية.',

  color:
    'White, gray, blue, brown, black, red, orange, green',

  arabicColor:
    'أبيض، رمادي، أزرق، بني، أسود، أحمر، برتقالي، أخضر',

  environment:
    'Volcanic rocks, hydrothermal veins, sedimentary cavities, silica-rich environments',

  arabicEnvironment:
    'الصخور البركانية، العروق الحرمائية، الفجوات الرسوبية، والبيئات الغنية بالسيليكا',

  uses:
    'Gemstones, jewelry, ornamental carvings, decorative stone, scientific collections, and lapidary work.',

  arabicUses:
    'الأحجار الكريمة، والمجوهرات، والمنحوتات الزخرفية، وأحجار الزينة، والمجموعات العلمية، وأعمال نحت وصقل الأحجار.',

  location:
    'Worldwide; abundant in Brazil, Uruguay, Madagascar, India, United States, Mexico, and the Arabian Shield.',

  arabicLocation:
    'ينتشر عالميًا، ويُوجد بكثرة في البرازيل، وأوروغواي، ومدغشقر، والهند، والولايات المتحدة، والمكسيك، كما سُجلت رواسب له في الدرع العربي.',

},
{
  id: 'chalcopyrite',
  museumNumber: 'DM-12',

  name: 'Chalcopyrite',
  arabicName: 'الكالكوبايرايت',

  image: MINERAL_IMAGES.chalcopyrite,
  gallery: MINERAL_GALLERY.chalcopyrite,

  description:
    'Chalcopyrite is the most abundant and economically important copper-bearing sulfide mineral, supplying a significant proportion of the world’s copper production. It is recognized by its distinctive brassy-yellow metallic luster, often displaying iridescent tarnish in shades of blue, purple, and green upon weathering. Chalcopyrite commonly crystallizes in hydrothermal veins, porphyry copper systems, volcanogenic massive sulfide deposits, and contact metamorphic environments. It frequently occurs alongside pyrite, quartz, sphalerite, galena, and gold-bearing minerals. Beyond its importance as the principal ore of copper, chalcopyrite plays a key role in understanding hydrothermal mineralization and is a valuable specimen in geological museums due to its striking metallic appearance.',

  arabicDescription:
    'الكالكوبايرايت هو أكثر معادن النحاس الكبريتيدية انتشارًا وأهمية اقتصادية، ويُعد المصدر الرئيسي لإنتاج النحاس في العالم. يتميز بلونه الأصفر النحاسي وبريقه المعدني القوي، وغالبًا ما يُظهر ألوانًا قزحية زرقاء وبنفسجية وخضراء نتيجة التجوية السطحية. يتكوّن عادةً في العروق الحرمائية، ورواسب النحاس البورفيرية، ورواسب الكبريتيدات البركانية الضخمة، وبيئات التحول التماسي. ويرتبط غالبًا بمعادن البيريت، والكوارتز، والسفاليريت، والجالينا، ومعادن الذهب. ويُعد من أهم المعادن المستخدمة في استكشاف رواسب النحاس، كما يمثل عينة متحفية مميزة بفضل مظهره المعدني الجذاب.',

  subtitle: 'Sulfide · Chalcopyrite Group',
  arabicSubtitle: 'كبريتيدات · مجموعة الكالكوبايرايت',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيدي',

  chemicalFormula: 'CuFeS₂',
  arabicChemicalFormula: 'كبريتيد النحاس والحديد',

  hardness: '3.5–4 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Tetragonal',
  arabicCrystalSystem: 'رباعي',

  streak: 'Greenish Black',
  arabicStreak: 'أسود مخضر',

  formation:
    'Forms primarily from hydrothermal fluids associated with intrusive igneous activity, and is common in porphyry copper deposits, volcanogenic massive sulfide deposits, and contact metamorphic environments.',

  arabicFormation:
    'يتكوّن أساسًا من السوائل الحرمائية المرتبطة بالصخور النارية المتداخلة، ويشيع في رواسب النحاس البورفيرية ورواسب الكبريتيدات البركانية الضخمة وبيئات التحول التماسي.',

  color:
    'Brassy yellow, golden yellow, commonly iridescent when tarnished',

  arabicColor:
    'أصفر نحاسي، أصفر ذهبي، وقد يظهر بألوان قزحية عند التجوية',

  environment:
    'Hydrothermal veins, porphyry copper systems, massive sulfide deposits, contact metamorphic rocks',

  arabicEnvironment:
    'العروق الحرمائية، رواسب النحاس البورفيرية، رواسب الكبريتيدات الضخمة، وصخور التحول التماسي',

  uses:
    'Primary ore of copper, source of sulfur, geological exploration, mineralogical research, and museum collections.',

  arabicUses:
    'الخام الرئيسي للنحاس، ومصدر للكبريت، ويستخدم في الاستكشاف الجيولوجي، والأبحاث المعدنية، والمجموعات المتحفية.',

  location:
    'Mahd Ad Dahab, Saudi Arabia; Chile, Peru, Mexico, Canada, United States, China, and major copper districts worldwide.',

  arabicLocation:
    'مهد الذهب، المملكة العربية السعودية، كما يوجد في تشيلي، وبيرو، والمكسيك، وكندا، والولايات المتحدة، والصين، ومعظم مناطق النحاس في العالم.',

},
{
  id: 'chromite',
  museumNumber: 'DM-13',

  name: 'Chromite',
  arabicName: 'الكروميت',

  image: MINERAL_IMAGES.chromite,
  gallery: MINERAL_GALLERY.chromite,

  description:
    'Chromite is the only commercially significant ore of chromium and one of the most important oxide minerals in economic geology. It commonly occurs as massive, granular, or disseminated crystals within ultramafic and mafic igneous rocks, particularly peridotites, dunites, and layered intrusions. Due to its exceptional resistance to weathering and high melting point, chromite remains stable under extreme geological conditions. Chromium extracted from chromite is essential for the production of stainless steel, corrosion-resistant alloys, refractory materials, pigments, and numerous industrial chemicals. Well-preserved chromite specimens are highly valued in geological collections because of their economic significance and association with mantle-derived rocks.',

  arabicDescription:
    'الكروميت هو الخام الاقتصادي الوحيد لإنتاج عنصر الكروم، ويُعد من أهم معادن الأكاسيد في الجيولوجيا الاقتصادية. يوجد عادةً على هيئة كتل أو حبيبات أو بلورات متناثرة داخل الصخور النارية فوق المافية والمافية، خاصة البريدوتيت والدونايت والتداخلات النارية الطبقية. يتميز بمقاومته العالية للتجوية ودرجات الحرارة المرتفعة، مما يجعله مستقرًا في البيئات الجيولوجية القاسية. ويُستخدم الكروم المستخلص منه في صناعة الفولاذ المقاوم للصدأ، والسبائك المقاومة للتآكل، والمواد الحرارية، والأصباغ، والعديد من الصناعات الكيميائية، كما تُعد عيناته ذات قيمة كبيرة في المتاحف لارتباطها بصخور الوشاح ورواسب الكروم الاقتصادية.',

  subtitle: 'Oxide · Spinel Group',
  arabicSubtitle: 'أكاسيد · مجموعة الإسبينيل',

  type: 'Oxide Mineral',
  arabicType: 'معدن أكسيدي',

  chemicalFormula: 'FeCr₂O₄',
  arabicChemicalFormula: 'أكسيد الحديد والكروم',

  hardness: '5.5 (Mohs)',

  luster: 'Submetallic to Metallic',
  arabicLuster: 'شبه فلزي إلى فلزي',

  crystalSystem: 'Isometric',
  arabicCrystalSystem: 'متساوي الأبعاد',

  streak: 'Brown',
  arabicStreak: 'بني',

  formation:
    'Forms through magmatic crystallization in ultramafic and mafic igneous rocks, particularly within layered intrusions and podiform chromite deposits.',

  arabicFormation:
    'يتكوّن نتيجة التبلور المباشر من الصهارة داخل الصخور فوق المافية والمافية، خاصة في التداخلات النارية الطبقية ورواسب الكروميت البوديفورمية.',

  color:
    'Black, brownish black, dark brown',

  arabicColor:
    'أسود، أسود بني، بني داكن',

  environment:
    'Ultramafic rocks, layered mafic intrusions, ophiolite complexes',

  arabicEnvironment:
    'الصخور فوق المافية، التداخلات النارية الطبقية، ومجمعات الأوفيوليت',

  uses:
    'Primary ore of chromium for stainless steel, superalloys, refractory bricks, foundry sand, pigments, and chemical industries.',

  arabicUses:
    'الخام الرئيسي لإنتاج الكروم المستخدم في الفولاذ المقاوم للصدأ، والسبائك الفائقة، والطوب الحراري، ورمال السباكة، والأصباغ، والصناعات الكيميائية.',

  location:
    'Bir Talaoha, Saudi Arabia; South Africa, Kazakhstan, India, Turkey, Zimbabwe, Finland, and major ophiolite belts worldwide.',

  arabicLocation:
    'بئر طلوحة، المملكة العربية السعودية، كما يوجد في جنوب أفريقيا، وكازاخستان، والهند، وتركيا، وزيمبابوي، وفنلندا، وأحزمة الأوفيوليت حول العالم.',

},
{
  id: 'cinnabar',
  museumNumber: 'DM-14',

  name: 'Cinnabar',
  arabicName: 'الزنجفر',

  image: MINERAL_IMAGES.cinnabar,
  gallery: MINERAL_GALLERY.cinnabar,

  description:
    'Cinnabar is the principal ore of mercury and one of the most visually distinctive sulfide minerals due to its brilliant scarlet to deep crimson color. It commonly forms in low-temperature hydrothermal veins associated with volcanic activity, hot springs, and fault-controlled mineralization. Throughout history, cinnabar has been prized both as the primary source of mercury and as a natural red pigment used in art, decoration, and ancient manuscripts. Although highly attractive, the mineral contains mercury and must be handled with care. Its vibrant color, scientific importance, and historical significance make cinnabar one of the most recognizable minerals displayed in geological museums.',

  arabicDescription:
    'الزنجفر هو الخام الرئيسي لاستخلاص عنصر الزئبق، ويُعد من أكثر المعادن الكبريتيدية تميزًا بفضل لونه الأحمر القاني اللامع. يتكوّن غالبًا في العروق الحرمائية منخفضة الحرارة المرتبطة بالنشاط البركاني والينابيع الحارة ومناطق الصدوع. وقد استُخدم عبر التاريخ كمصدر رئيسي للزئبق، وكذلك كصبغة حمراء طبيعية في الفنون والزخرفة والمخطوطات القديمة. ورغم جماله، فإنه يحتوي على الزئبق، لذلك يجب التعامل معه بحذر. ويُعد من أشهر المعادن المعروضة في المتاحف الجيولوجية بفضل لونه الفريد وأهميته العلمية والتاريخية.',

  subtitle: 'Sulfide · Mercury Mineral',
  arabicSubtitle: 'كبريتيدات · معدن الزئبق',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيدي',

  chemicalFormula: 'HgS',
  arabicChemicalFormula: 'كبريتيد الزئبق',

  hardness: '2–2.5 (Mohs)',

  luster: 'Adamantine to Submetallic',
  arabicLuster: 'ألماسي إلى شبه فلزي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'Scarlet Red',
  arabicStreak: 'أحمر قرمزي',

  formation:
    'Forms from low-temperature hydrothermal fluids associated with volcanic activity, hot springs, and mercury-bearing hydrothermal systems.',

  arabicFormation:
    'يتكوّن من السوائل الحرمائية منخفضة الحرارة المرتبطة بالنشاط البركاني والينابيع الحارة وأنظمة تمعدن الزئبق.',

  color:
    'Scarlet red to dark crimson',

  arabicColor:
    'أحمر قانٍ إلى أحمر قرمزي داكن',

  environment:
    'Hydrothermal veins, volcanic regions, hot spring deposits, fault zones',

  arabicEnvironment:
    'العروق الحرمائية، المناطق البركانية، رواسب الينابيع الحارة، ومناطق الصدوع',

  uses:
    'Primary ore of mercury, historical red pigment, scientific research, mineral collections, and museum specimens.',

  arabicUses:
    'الخام الرئيسي للزئبق، وصبغة حمراء تاريخية، والأبحاث العلمية، والمجموعات المعدنية، والعينات المتحفية.',

  location:
    'Spain, Italy, China, Slovenia, Mexico, Peru, the United States, and hydrothermal mercury districts worldwide.',

  arabicLocation:
    'إسبانيا، وإيطاليا، والصين، وسلوفينيا، والمكسيك، وبيرو، والولايات المتحدة، ومناطق تمعدن الزئبق حول العالم.',

},
{
  id: 'cordierite',
  museumNumber: 'DM-15',

  name: 'Cordierite',
  arabicName: 'الكوردييريت',

  image: MINERAL_IMAGES.cordierite,
  gallery: MINERAL_GALLERY.cordierite,

  description:
    'Cordierite is a magnesium–iron aluminosilicate mineral best known for its remarkable pleochroism, displaying different shades of blue, violet, and gray when viewed from different directions. It forms under high-temperature, low-pressure metamorphic conditions and is considered an important index mineral for regional metamorphism. Cordierite commonly occurs in hornfels, gneisses, schists, and granitic pegmatites, often associated with quartz, feldspar, biotite, sillimanite, and garnet. Transparent gem-quality varieties are known as Iolite and have long been valued as ornamental gemstones and historical navigation aids due to their unique optical properties.',

  arabicDescription:
    'الكوردييريت هو معدن سيليكاتي غني بالمغنيسيوم والألومنيوم والحديد، ويشتهر بخاصية التعدد اللوني (Pleochroism) التي تجعله يظهر بدرجات مختلفة من الأزرق والبنفسجي والرمادي عند النظر إليه من زوايا مختلفة. يتكوّن في ظروف التحول الإقليمي ذات درجات الحرارة المرتفعة والضغوط المنخفضة، ويُعد من المعادن الدالة على بيئات التحول. يوجد عادةً في صخور الهورنفلس والنيس والشيست والبيجماتيت الجرانيتي، ويرتبط بمعادن الكوارتز والفلسبار والبيوتيت والسيليمانيت والجارنت. أما العينات الشفافة منه فتُعرف باسم أيوليت (Iolite)، وتُستخدم كأحجار كريمة بفضل خصائصها البصرية الفريدة.',

  subtitle: 'Silicate · Cyclosilicate',
  arabicSubtitle: 'سيليكات · سيكلوسيليكات',

  type: 'Cyclosilicate Mineral',
  arabicType: 'معدن سيكلوسيليكات',

  chemicalFormula: 'Mg₂Al₄Si₅O₁₈',
  arabicChemicalFormula: 'سيليكات المغنيسيوم والألومنيوم',

  hardness: '7–7.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during high-temperature, low-pressure regional metamorphism and is also found in granitic pegmatites and contact metamorphic environments.',

  arabicFormation:
    'يتكوّن أثناء التحول الإقليمي عالي الحرارة ومنخفض الضغط، كما يوجد في البيجماتيت الجرانيتي وبيئات التحول التماسي.',

  color:
    'Blue, violet-blue, gray, brown, greenish-blue',

  arabicColor:
    'أزرق، أزرق بنفسجي، رمادي، بني، أزرق مخضر',

  environment:
    'Metamorphic rocks, hornfels, gneiss, schist, granulites, granitic pegmatites',

  arabicEnvironment:
    'الصخور المتحولة، الهورنفلس، النيس، الشيست، الجرانولايت، والبيجماتيت الجرانيتي',

  uses:
    'Gemstone (Iolite), refractory ceramics, geological indicator mineral, scientific research, and museum collections.',

  arabicUses:
    'أحجار كريمة (أيوليت)، المواد الحرارية، كمعدن دال في الدراسات الجيولوجية، والأبحاث العلمية، والمجموعات المتحفية.',

  location:
    'India, Sri Lanka, Madagascar, Norway, Brazil, Canada, the United States, and metamorphic terrains worldwide.',

  arabicLocation:
    'الهند، سريلانكا، مدغشقر، النرويج، البرازيل، كندا، الولايات المتحدة، ومناطق الصخور المتحولة حول العالم.',

},
{
  id: 'diamond',
  museumNumber: 'DM-16',

  name: 'Diamond',
  arabicName: 'الألماس',

  image: MINERAL_IMAGES.diamond,
  gallery: MINERAL_GALLERY.diamond,

  description:
    'Diamond is the crystalline form of pure carbon and is universally recognized as the hardest naturally occurring mineral on Earth. It forms deep within the Earth\'s mantle under extreme pressures and temperatures exceeding 1,000°C before being transported to the surface by kimberlite and lamproite volcanic eruptions. Beyond its exceptional brilliance and value as a gemstone, diamond possesses remarkable thermal conductivity, outstanding wear resistance, and exceptional optical properties, making it indispensable in scientific research, advanced engineering, precision cutting, drilling, polishing, and high-technology industries.',

  arabicDescription:
    'الألماس هو الشكل البلوري النقي لعنصر الكربون، ويُعد أصلب معدن طبيعي معروف على سطح الأرض. يتكوّن في أعماق وشاح الأرض تحت ضغوط هائلة ودرجات حرارة تتجاوز 1000 درجة مئوية، ثم يُنقل إلى السطح بواسطة صخور الكمبرلايت واللامبرويت البركانية. وإلى جانب شهرته كأحد أثمن الأحجار الكريمة وأكثرها بريقًا، يتميز الألماس بموصلية حرارية مرتفعة للغاية ومقاومة استثنائية للتآكل وخصائص بصرية فريدة، مما يجعله مادة أساسية في الصناعات الدقيقة، وأدوات القطع والحفر والصقل، والأبحاث العلمية، والتقنيات المتقدمة.',

  subtitle: 'Native Element · Carbon Group',
  arabicSubtitle: 'عنصر طبيعي · مجموعة الكربون',

  type: 'Native Element Mineral',
  arabicType: 'معدن من العناصر الطبيعية',

  chemicalFormula: 'C',
  arabicChemicalFormula: 'الكربون',

  hardness: '10 (Mohs)',

  luster: 'Adamantine',
  arabicLuster: 'ألماسي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'Colorless',
  arabicStreak: 'عديم اللون',

  formation:
    'Forms deep within the Earth\'s mantle under extreme pressure and temperature and reaches the surface through kimberlite and lamproite volcanic pipes.',

  arabicFormation:
    'يتكوّن في أعماق وشاح الأرض تحت ضغوط ودرجات حرارة مرتفعة جدًا، ثم يصل إلى السطح عبر أنابيب الكمبرلايت واللامبرويت البركانية.',

  color:
    'Colorless, yellow, brown, blue, pink, green, black',

  arabicColor:
    'عديم اللون، أصفر، بني، أزرق، وردي، أخضر، أسود',

  environment:
    'Kimberlite pipes, lamproite pipes, alluvial placer deposits',

  arabicEnvironment:
    'أنابيب الكمبرلايت، أنابيب اللامبرويت، والرواسب الغرينية',

  uses:
    'Gemstones, industrial cutting and drilling tools, abrasives, polishing materials, electronics, optics, thermal management systems, and scientific research.',

  arabicUses:
    'الأحجار الكريمة، وأدوات القطع والحفر الصناعية، ومواد الصقل، والإلكترونيات، والبصريات، وأنظمة التبريد الحراري، والأبحاث العلمية.',

  location:
    'Botswana, Russia, Canada, South Africa, Australia, Angola, Namibia, and alluvial deposits worldwide.',

  arabicLocation:
    'بوتسوانا، روسيا، كندا، جنوب أفريقيا، أستراليا، أنغولا، ناميبيا، والرواسب الغرينية حول العالم.',

},
{
  id: 'dioptase',
  museumNumber: 'DM-17',

  name: 'Dioptase',
  arabicName: 'الديوبتاز',

  image: MINERAL_IMAGES.dioptase,
  gallery: MINERAL_GALLERY.dioptase,

  description:
    'Dioptase is a rare copper cyclosilicate mineral celebrated for its vivid emerald-green color and brilliant vitreous luster. It forms as a secondary mineral within the oxidized zones of copper deposits, where copper-rich solutions react with silica-bearing rocks. Although its hardness limits its use in jewelry, Dioptase is among the most sought-after collector minerals due to its striking crystal habit, exceptional transparency, and intense coloration. Well-developed crystals are prized in museums and private collections and are considered among the finest examples of secondary copper mineralization.',

  arabicDescription:
    'الديوبتاز معدن سيكلوسيليكاتي نادر غني بالنحاس، ويشتهر بلونه الأخضر الزمردي الزاهي وبريقه الزجاجي المميز. يتكوّن كمعدن ثانوي داخل مناطق الأكسدة في رواسب النحاس، حيث تتفاعل المحاليل الغنية بالنحاس مع الصخور المحتوية على السيليكا. وعلى الرغم من أن صلابته المحدودة تقلل من استخدامه كحجر كريم، فإنه يُعد من أكثر معادن الهواة والمتاحف قيمةً لجمال بلوراته وشفافيتها ولونها الأخضر العميق، ويُعتبر مثالًا رائعًا على معادن النحاس الثانوية.',

  subtitle: 'Silicate · Cyclosilicate',
  arabicSubtitle: 'سيليكات · سيكلوسيليكات',

  type: 'Cyclosilicate Mineral',
  arabicType: 'معدن سيكلوسيليكات',

  chemicalFormula: 'CuSiO₃·H₂O',
  arabicChemicalFormula: 'سيليكات النحاس المائية',

  hardness: '5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'Light Green',
  arabicStreak: 'أخضر فاتح',

  formation:
    'Forms as a secondary mineral in the oxidized zones of copper deposits through the interaction of copper-bearing solutions with silica-rich rocks.',

  arabicFormation:
    'يتكوّن كمعدن ثانوي في مناطق أكسدة رواسب النحاس نتيجة تفاعل المحاليل الغنية بالنحاس مع الصخور الغنية بالسيليكا.',

  color:
    'Emerald green, bluish green',

  arabicColor:
    'أخضر زمردي، أخضر مزرق',

  environment:
    'Oxidized copper deposits, hydrothermal veins, and secondary enrichment zones',

  arabicEnvironment:
    'مناطق أكسدة رواسب النحاس، والعروق الحرمائية، ومناطق الإثراء الثانوي',

  uses:
    'Museum specimens, mineral collections, educational displays, and occasionally as a rare collector gemstone.',

  arabicUses:
    'العينات المتحفية، والمجموعات المعدنية، والعروض التعليمية، وأحيانًا كحجر كريم نادر لهواة الجمع.',

  location:
    'Kazakhstan, Namibia, Democratic Republic of the Congo, Chile, Arizona (USA), and other oxidized copper deposits worldwide.',

  arabicLocation:
    'كازاخستان، ناميبيا، جمهورية الكونغو الديمقراطية، تشيلي، أريزونا (الولايات المتحدة)، ورواسب النحاس المؤكسدة حول العالم.',

},
{
  id: 'emerald',
  museumNumber: 'DM-18',

  name: 'Emerald',
  arabicName: 'الزمرد',

  image: MINERAL_IMAGES.emerald,
  gallery: MINERAL_GALLERY.emerald,

  description:
    'Emerald is the vivid green gemstone variety of the mineral beryl and is among the most valuable and historically significant gemstones in the world. Its distinctive color is produced by trace amounts of chromium and, in some deposits, vanadium. Emerald forms through hydrothermal and metamorphic processes where beryllium-rich fluids interact with chromium-bearing host rocks. Fine-quality crystals are prized for their exceptional beauty, rarity, and cultural importance, making emerald one of the traditional "Big Four" precious gemstones alongside diamond, ruby, and sapphire.',

  arabicDescription:
    'الزمرد هو الصنف الأخضر الثمين من معدن البريل، ويُعد من أكثر الأحجار الكريمة قيمةً وشهرةً عبر التاريخ. ينتج لونه الأخضر المميز عن وجود كميات ضئيلة من الكروم، وأحيانًا الفاناديوم. يتكوّن الزمرد في البيئات الحرمائية والمتحولة عندما تتفاعل السوائل الغنية بالبيريليوم مع الصخور الحاوية على الكروم. وتُعد البلورات عالية الجودة من أكثر الأحجار الكريمة ندرةً وجمالًا، ويصنف الزمرد ضمن أشهر أربعة أحجار كريمة ثمينة في العالم إلى جانب الألماس والياقوت والياقوت الأزرق.',

  subtitle: 'Silicate · Cyclosilicate (Beryl Group)',
  arabicSubtitle: 'سيليكات · سيكلوسيليكات (مجموعة البريل)',

  type: 'Cyclosilicate Mineral',
  arabicType: 'معدن سيكلوسيليكات',

  chemicalFormula: 'Be₃Al₂Si₆O₁₈',
  arabicChemicalFormula: 'سيليكات البيريليوم والألومنيوم',

  hardness: '7.5–8 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms in hydrothermal veins, pegmatites, and metamorphic environments where beryllium-rich fluids react with chromium- or vanadium-bearing rocks.',

  arabicFormation:
    'يتكوّن في العروق الحرمائية والبيجماتيت وبيئات التحول، حيث تتفاعل السوائل الغنية بالبيريليوم مع الصخور الحاوية على الكروم أو الفاناديوم.',

  color:
    'Deep green, bluish green, vivid green',

  arabicColor:
    'أخضر داكن، أخضر مزرق، أخضر زمردي',

  environment:
    'Hydrothermal veins, pegmatites, schists, and metamorphic rocks',

  arabicEnvironment:
    'العروق الحرمائية، والبيجماتيت، والشيست، والصخور المتحولة',

  uses:
    'High-value gemstone, luxury jewelry, museum specimens, mineral collections, and scientific research.',

  arabicUses:
    'الأحجار الكريمة الفاخرة، والمجوهرات الراقية، والعينات المتحفية، والمجموعات المعدنية، والأبحاث العلمية.',

  location:
    'Colombia, Zambia, Brazil, Russia, Afghanistan, Pakistan, Ethiopia, Zimbabwe, and Madagascar.',

  arabicLocation:
    'كولومبيا، زامبيا، البرازيل، روسيا، أفغانستان، باكستان، إثيوبيا، زيمبابوي، ومدغشقر.',

},
{
  id: 'erythrite',
  museumNumber: 'DM-19',

  name: 'Erythrite',
  arabicName: 'إريثريت',

  image: MINERAL_IMAGES.erythrite,
  gallery: MINERAL_GALLERY.erythrite,

  description:
    'Erythrite is a rare secondary cobalt arsenate mineral renowned for its striking crimson to pink coloration, earning it the nickname "Cobalt Bloom." It forms through the weathering and oxidation of primary cobalt-bearing minerals in the near-surface environment. Although it is not a major ore mineral, erythrite is an important geological indicator of cobalt mineralization and is highly prized by mineral collectors for its vibrant color, delicate crystal habits, and rarity.',

  arabicDescription:
    'الإريثريت هو معدن ثانوي نادر من زرنيخات الكوبالت، يتميز بلونه الأحمر القرمزي إلى الوردي الزاهي، ولذلك يُعرف باسم "زهرة الكوبالت". يتكوّن نتيجة تجوية وأكسدة المعادن الأولية الحاوية على الكوبالت بالقرب من سطح الأرض. وعلى الرغم من أنه لا يُعد خامًا اقتصاديًا رئيسيًا للكوبالت، فإنه يُعد مؤشرًا جيولوجيًا مهمًا على وجود رواسب الكوبالت، كما يحظى بتقدير كبير بين هواة جمع المعادن بفضل ألوانه الزاهية وبلوراته الدقيقة وندرته.',

  subtitle: 'Arsenate · Erythrite Group',
  arabicSubtitle: 'زرنيخات · مجموعة الإريثريت',

  type: 'Arsenate Mineral',
  arabicType: 'معدن زرنيخاتي',

  chemicalFormula: 'Co₃(AsO₄)₂·8H₂O',
  arabicChemicalFormula: 'زرنيخات الكوبالت المائية',

  hardness: '1.5–2.5 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'Pale Pink',
  arabicStreak: 'وردي فاتح',

  formation:
    'Forms as a secondary mineral through the oxidation of cobalt-bearing arsenide deposits in the weathering zone of hydrothermal ore bodies.',

  arabicFormation:
    'يتكوّن كمعدن ثانوي نتيجة أكسدة رواسب معادن الكوبالت الزرنيخية في منطقة التجوية للرواسب الحرمائية.',

  color:
    'Crimson red, rose pink, purple-pink',

  arabicColor:
    'أحمر قرمزي، وردي، وردي مائل للبنفسجي',

  environment:
    'Oxidized zones of hydrothermal cobalt deposits',

  arabicEnvironment:
    'مناطق الأكسدة في رواسب الكوبالت الحرمائية',

  uses:
    'Indicator mineral for cobalt exploration, museum specimens, mineral collections, educational displays, and scientific research.',

  arabicUses:
    'مؤشر جيولوجي لاستكشاف الكوبالت، والعينات المتحفية، والمجموعات المعدنية، والعروض التعليمية، والأبحاث العلمية.',

  location:
    'Morocco, Germany, France, Democratic Republic of the Congo, Australia, and Canada.',

  arabicLocation:
    'المغرب، ألمانيا، فرنسا، جمهورية الكونغو الديمقراطية، أستراليا، وكندا.',

},
{
  id: 'eucryptite',
  museumNumber: 'DM-20',

  name: 'Eucryptite',
  arabicName: 'إيوكريبتيت',

  image: MINERAL_IMAGES.eucryptite,
  gallery: MINERAL_GALLERY.eucryptite,

  description:
    'Eucryptite is a rare lithium aluminium tectosilicate mineral commonly associated with highly evolved granitic pegmatites. It crystallizes during the final stages of magma differentiation and often occurs alongside spodumene, lepidolite, petalite, quartz, and feldspar. Although relatively uncommon, eucryptite is scientifically significant because of its exceptionally low thermal expansion and excellent thermal shock resistance, making it valuable in advanced ceramic engineering, glass-ceramic manufacturing, and specialized industrial applications.',

  arabicDescription:
    'الإيوكريبتيت هو معدن نادر من سيليكات الليثيوم والألومنيوم ينتمي إلى مجموعة التكتوسيليكات، ويرتبط عادةً بالبيجماتيتات الجرانيتية المتطورة. يتبلور خلال المراحل الأخيرة من تمايز الصهارة، وغالبًا ما يوجد مصاحبًا لمعادن الإسبودومين، والليبيدوليت، والبيتاليت، والكوارتز، والفلسبار. وعلى الرغم من ندرته، فإنه يحظى بأهمية علمية وصناعية كبيرة بسبب معامل تمدده الحراري المنخفض جدًا ومقاومته العالية للصدمات الحرارية، مما يجعله مادة مثالية في صناعة السيراميك المتقدم والزجاج السيراميكي والتطبيقات الهندسية الدقيقة.',

  subtitle: 'Silicate · Tectosilicate',
  arabicSubtitle: 'سيليكات · تكتوسيليكات',

  type: 'Lithium Aluminium Tectosilicate Mineral',
  arabicType: 'معدن سيليكات الليثيوم والألومنيوم (تكتوسيليكات)',

  chemicalFormula: 'LiAlSiO₄',
  arabicChemicalFormula: 'سيليكات الليثيوم والألومنيوم',

  hardness: '6–6.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during the late stages of crystallization in lithium-rich granitic pegmatites and commonly occurs with other lithium-bearing minerals.',

  arabicFormation:
    'يتكوّن خلال المراحل النهائية من تبلور البيجماتيتات الجرانيتية الغنية بالليثيوم، ويظهر غالبًا مع المعادن الحاملة لليثيوم.',

  color:
    'White, gray, colorless, pale pink',

  arabicColor:
    'أبيض، رمادي، عديم اللون، وردي فاتح',

  environment:
    'Lithium-rich granitic pegmatites',

  arabicEnvironment:
    'البيجماتيتات الجرانيتية الغنية بالليثيوم',

  uses:
    'Advanced ceramics, glass-ceramics, thermal shock resistant materials, scientific research, and mineral collections.',

  arabicUses:
    'السيراميك المتقدم، والزجاج السيراميكي، والمواد المقاومة للصدمات الحرارية، والأبحاث العلمية، والمجموعات المعدنية.',

  location:
    'Zimbabwe, Namibia, Brazil, Australia, the United States, and other lithium-rich pegmatite districts worldwide.',

  arabicLocation:
    'زيمبابوي، ناميبيا، البرازيل، أستراليا، الولايات المتحدة، ومناطق البيجماتيت الغنية بالليثيوم حول العالم.',

},
{
  id: 'fluorite',
  museumNumber: 'DM-21',

  name: 'Fluorite',
  arabicName: 'الفلوريت',

  image: MINERAL_IMAGES.fluorite,
  gallery: MINERAL_GALLERY.fluorite,

  description:
    'Fluorite is one of the most beautiful and scientifically significant halide minerals, renowned for its exceptional diversity of colors and its perfect cubic crystal habit. It commonly forms in hydrothermal veins associated with lead, zinc, silver, and other metallic ore deposits, but may also occur in granites, pegmatites, and sedimentary environments. Fluorite is the defining mineral for the phenomenon of fluorescence, where certain specimens emit brilliant blue or violet light under ultraviolet radiation. Beyond its popularity among collectors, fluorite is an essential industrial mineral used in metallurgy, hydrofluoric acid production, ceramics, optical components, and advanced chemical industries.',

  arabicDescription:
    'الفلوريت هو أحد أجمل وأهم معادن الهاليدات، ويشتهر بتنوع ألوانه الاستثنائي وبلوراته المكعبة المثالية. يتكوّن غالبًا في العروق الحرمائية المصاحبة لرواسب الرصاص والزنك والفضة والمعادن الفلزية الأخرى، كما قد يوجد في الجرانيت والبيجماتيت وبعض البيئات الرسوبية. ويُعد الفلوريت المعدن الذي اشتُقت منه ظاهرة "الفلورة"، حيث تُصدر بعض عيناته توهجًا أزرق أو بنفسجيًا عند تعريضها للأشعة فوق البنفسجية. وإلى جانب قيمته الجمالية العالية لدى هواة جمع المعادن، يُستخدم الفلوريت على نطاق واسع في الصناعات المعدنية، وإنتاج حمض الهيدروفلوريك، وصناعة السيراميك، والعدسات البصرية، والعديد من التطبيقات الكيميائية المتقدمة.',

  subtitle: 'Halide · Fluorite Group',
  arabicSubtitle: 'هاليدات · مجموعة الفلوريت',

  type: 'Halide Mineral',
  arabicType: 'معدن هاليدي',

  chemicalFormula: 'CaF₂',
  arabicChemicalFormula: 'فلوريد الكالسيوم',

  hardness: '4 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms primarily from hydrothermal fluids filling fractures and veins, and may also crystallize in granitic pegmatites, carbonate rocks, and sedimentary deposits.',

  arabicFormation:
    'يتكوّن أساسًا من المحاليل الحرمائية التي تملأ الشقوق والعروق، كما قد يتبلور في البيجماتيتات الجرانيتية والصخور الكربوناتية وبعض الرواسب الرسوبية.',

  color:
    'Purple, green, blue, yellow, pink, colorless, white',

  arabicColor:
    'بنفسجي، أخضر، أزرق، أصفر، وردي، عديم اللون، أبيض',

  environment:
    'Hydrothermal veins, granitic pegmatites, carbonate rocks, and sedimentary deposits',

  arabicEnvironment:
    'العروق الحرمائية، والبيجماتيتات الجرانيتية، والصخور الكربوناتية، والرواسب الرسوبية',

  uses:
    'Hydrofluoric acid production, steel and aluminum smelting, ceramics, glass manufacturing, optical lenses, gemstones, scientific research, and museum collections.',

  arabicUses:
    'إنتاج حمض الهيدروفلوريك، وصناعة الفولاذ والألمنيوم، والسيراميك، والزجاج، والعدسات البصرية، والأحجار الزخرفية، والأبحاث العلمية، والمجموعات المتحفية.',

  location:
    'Brazil, China, Mexico, South Africa, Spain, England, the United States, and hydrothermal districts worldwide.',

  arabicLocation:
    'البرازيل، الصين، المكسيك، جنوب أفريقيا، إسبانيا، إنجلترا، الولايات المتحدة، والعديد من المناطق الحرمائية حول العالم.',

},
{
  id: 'gypsum',
  museumNumber: 'DM-22',

  name: 'Gypsum',
  arabicName: 'الجبس',

  image: MINERAL_IMAGES.gypsum,
  gallery: MINERAL_GALLERY.gypsum,

  description:
    'Gypsum is one of the most widespread sulfate minerals on Earth and consists of hydrated calcium sulfate. It forms primarily through the evaporation of saline waters in lakes and shallow marine basins, although it may also crystallize from hydrothermal fluids or occur as a secondary mineral during the weathering of sulfide deposits. Its extremely low hardness makes it one of the softest common minerals, allowing it to be easily scratched with a fingernail. Gypsum is an economically important industrial mineral extensively used in cement production, plaster, drywall panels, fertilizers, medical casts, sculptures, and decorative building materials.',

  arabicDescription:
    'الجبس هو أحد أكثر معادن الكبريتات انتشارًا على سطح الأرض، ويتكون من كبريتات الكالسيوم المائية. يتشكل بصورة رئيسية نتيجة تبخر المياه المالحة في البحيرات والأحواض البحرية الضحلة، كما قد يتكون من المحاليل الحرمائية أو ينتج كمعدن ثانوي أثناء تجوية بعض الرواسب الكبريتيدية. ويُعد من أكثر المعادن شيوعًا ذات الصلادة المنخفضة، إذ يمكن خدشه بسهولة بواسطة الظفر. ويتميز الجبس بأهمية اقتصادية كبيرة، حيث يدخل في صناعة الأسمنت، والجبس الطبي، وألواح الجدران، والأسمدة، والقوالب الفنية، والزخارف المعمارية، والعديد من مواد البناء الحديثة.',

  subtitle: 'Sulfate · Gypsum Group',
  arabicSubtitle: 'كبريتات · مجموعة الجبس',

  type: 'Hydrated Sulfate Mineral',
  arabicType: 'معدن كبريتاتي مائي',

  chemicalFormula: 'CaSO₄·2H₂O',
  arabicChemicalFormula: 'كبريتات الكالسيوم المائية',

  hardness: '2 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms mainly through evaporation of saline waters in evaporite basins and may also crystallize from hydrothermal solutions or develop during weathering processes.',

  arabicFormation:
    'يتكوّن أساسًا نتيجة تبخر المياه المالحة في البيئات التبخيرية، كما قد يتبلور من المحاليل الحرمائية أو يتكون أثناء عمليات التجوية.',

  color:
    'Colorless, white, gray, yellow, brown, pink',

  arabicColor:
    'عديم اللون، أبيض، رمادي، أصفر، بني، وردي',

  environment:
    'Evaporite deposits, saline lakes, shallow marine basins, hydrothermal veins, and weathering zones',

  arabicEnvironment:
    'الرواسب التبخيرية، والبحيرات المالحة، والأحواض البحرية الضحلة، والعروق الحرمائية، ومناطق التجوية',

  uses:
    'Cement manufacturing, plaster of Paris, drywall panels, fertilizers, medical casts, sculptures, ceramics, ornamental stone, and industrial construction materials.',

  arabicUses:
    'صناعة الأسمنت، وجبس باريس، وألواح الجدران، والأسمدة، والجبائر الطبية، والمنحوتات، والسيراميك، وأحجار الزينة، ومواد البناء الصناعية.',

  location:
    'Germany, Spain, Mexico, the United States, Canada, Iran, and extensive evaporite basins worldwide.',

  arabicLocation:
    'ألمانيا، إسبانيا، المكسيك، الولايات المتحدة، كندا، إيران، والعديد من الأحواض التبخيرية حول العالم.',

},
{
  id: 'halite',
  museumNumber: 'DM-23',

  name: 'Halite',
  arabicName: 'الهاليت',

  image: MINERAL_IMAGES.halite,
  gallery: MINERAL_GALLERY.halite,

  description:
    'Halite is the natural mineral form of sodium chloride and is one of the most abundant evaporite minerals on Earth. It crystallizes through the evaporation of saline waters in oceans, inland seas, salt lakes, and enclosed basins, producing its characteristic cubic crystals and perfect cubic cleavage. Halite plays a fundamental role in both geology and human civilization, forming extensive rock salt deposits that preserve records of ancient climates and marine environments. Beyond its importance as table salt, halite is a vital industrial mineral used in chemical manufacturing, water treatment, food preservation, de-icing, and numerous industrial processes.',

  arabicDescription:
    'الهاليت هو الشكل المعدني الطبيعي لكلوريد الصوديوم، ويُعد من أكثر المعادن التبخيرية انتشارًا على سطح الأرض. يتبلور نتيجة تبخر المياه المالحة في البحار والمحيطات والبحيرات المالحة والأحواض المغلقة، مكوّنًا بلوراته المكعبة المميزة وانفصامه المكعبي الكامل. ويلعب الهاليت دورًا مهمًا في فهم البيئات الجيولوجية القديمة، إذ تُسجل رواسب الملح الصخري تاريخ البحار والمناخات القديمة. وإلى جانب استخدامه كملح غذائي، يُعد الهاليت مادة أساسية في الصناعات الكيميائية، ومعالجة المياه، وحفظ الأغذية، وإذابة الجليد، والعديد من التطبيقات الصناعية.',

  subtitle: 'Halide · Halite Group',
  arabicSubtitle: 'هاليدات · مجموعة الهاليت',

  type: 'Halide Mineral',
  arabicType: 'معدن هاليدي',

  chemicalFormula: 'NaCl',
  arabicChemicalFormula: 'كلوريد الصوديوم',

  hardness: '2–2.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through the evaporation of saline waters in marine basins, salt lakes, and enclosed evaporite environments.',

  arabicFormation:
    'يتكوّن نتيجة تبخر المياه المالحة في الأحواض البحرية والبحيرات المالحة والبيئات التبخيرية المغلقة.',

  color:
    'Colorless, white, gray, pink, blue, yellow',

  arabicColor:
    'عديم اللون، أبيض، رمادي، وردي، أزرق، أصفر',

  environment:
    'Evaporite basins, salt lakes, inland seas, and marine sedimentary environments',

  arabicEnvironment:
    'الأحواض التبخيرية، والبحيرات المالحة، والبحار الداخلية، والبيئات الرسوبية البحرية',

  uses:
    'Food seasoning and preservation, chemical manufacturing, chlorine and caustic soda production, water softening, de-icing roads, animal feed supplements, and industrial processing.',

  arabicUses:
    'ملح غذائي وحفظ الأغذية، والصناعات الكيميائية، وإنتاج الكلور والصودا الكاوية، وتليين المياه، وإذابة الجليد، وإضافات الأعلاف، والعديد من العمليات الصناعية.',

  location:
    'Germany, Poland, Pakistan, the United States, Canada, Chile, and major evaporite basins worldwide.',

  arabicLocation:
    'ألمانيا، بولندا، باكستان، الولايات المتحدة، كندا، تشيلي، والأحواض التبخيرية حول العالم.',

},
{
  id: 'hematite',
  museumNumber: 'DM-24',

  name: 'Hematite',
  arabicName: 'الهيماتيت',

  image: MINERAL_IMAGES.hematite,
  gallery: MINERAL_GALLERY.hematite,

  description: `
Hematite is one of the most important and abundant iron oxide minerals and serves as the world's primary source of iron. It forms in a wide variety of geological environments, including banded iron formations, hydrothermal veins, igneous and metamorphic rocks, and weathering zones. Hematite exhibits remarkable variability in appearance, ranging from metallic steel-gray crystals to earthy red masses, yet it is consistently identified by its characteristic reddish-brown streak. In addition to its immense economic value in steel production, hematite is widely used as a pigment, polishing compound, radiation shielding material, and an indicator mineral in geological exploration.
`,

  arabicDescription: `
الهيماتيت هو أحد أهم وأكثر معادن أكاسيد الحديد انتشارًا، ويُعد المصدر الرئيسي لخام الحديد في العالم. يتكوّن في مجموعة واسعة من البيئات الجيولوجية، بما في ذلك تكوينات الحديد النطاقية، والعروق الحرمائية، والصخور النارية والمتحولة، ومناطق التجوية. ويتميز الهيماتيت بتنوع كبير في مظهره، فقد يظهر على هيئة بلورات معدنية ذات بريق فلزي رمادي، أو كتل ترابية حمراء، إلا أن أثره الأحمر البني يُعد من أبرز خصائصه التشخيصية. وإلى جانب أهميته الاقتصادية في صناعة الحديد والصلب، يُستخدم الهيماتيت في صناعة الأصباغ، ومواد الصقل، والحماية من الإشعاع، كما يُعد معدنًا دالًا في العديد من برامج الاستكشاف الجيولوجي.
`,

  subtitle: 'Oxide · Hematite Group',
  arabicSubtitle: 'أكاسيد · مجموعة الهيماتيت',

  type: 'Iron Oxide Mineral',
  arabicType: 'معدن أكسيد الحديد',

  chemicalFormula: 'Fe₂O₃',
  arabicChemicalFormula: 'أكسيد الحديد',

  hardness: '5.5–6.5 (Mohs)',

  luster: 'Metallic to Earthy',
  arabicLuster: 'فلزي إلى ترابي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'Reddish Brown',
  arabicStreak: 'أحمر بني',

  formation:
    'Forms through magmatic crystallization, hydrothermal activity, sedimentary deposition, metamorphism, and oxidation during weathering processes.',

  arabicFormation:
    'يتكوّن نتيجة التبلور الصهاري، والنشاط الحرمائي، والترسيب الرسوبي، والتحول، وعمليات الأكسدة أثناء التجوية.',

  color:
    'Steel gray, black, silver, reddish brown, earthy red',

  arabicColor:
    'رمادي فولاذي، أسود، فضي، بني محمر، أحمر ترابي',

  environment:
    'Banded iron formations, hydrothermal veins, igneous and metamorphic rocks, sedimentary deposits, and weathering zones',

  arabicEnvironment:
    'تكوينات الحديد النطاقية، والعروق الحرمائية، والصخور النارية والمتحولة، والرواسب الرسوبية، ومناطق التجوية',

  uses:
    'Primary iron ore for steel production, pigments, polishing compounds, heavy concrete, radiation shielding, jewelry, scientific research, and museum collections.',

  arabicUses:
    'خام الحديد الرئيسي لصناعة الفولاذ، والأصباغ، ومواد الصقل، والخرسانة الثقيلة، والحماية من الإشعاع، والمجوهرات، والأبحاث العلمية، والمجموعات المتحفية.',

  location:
    'Brazil, Australia, South Africa, Canada, China, India, Sweden, the United States, and the Arabian Shield, Saudi Arabia.',

  arabicLocation:
    'البرازيل، أستراليا، جنوب أفريقيا، كندا، الصين، الهند، السويد، الولايات المتحدة، والدرع العربي في المملكة العربية السعودية.',

},
{
  id: 'lepidolite',
  museumNumber: 'DM-25',

  name: 'Lepidolite',
  arabicName: 'الليبيدوليت',

  image: MINERAL_IMAGES.lepidolite,
  gallery: MINERAL_GALLERY.lepidolite,

  description: `
Lepidolite is a lithium-rich mica mineral distinguished by its attractive lilac, violet, and pink colors and its characteristic pearly luster. It commonly occurs in granitic pegmatites associated with quartz, feldspar, tourmaline, and spodumene, representing one of the principal natural sources of lithium. Fine-grained flakes of lepidolite exhibit perfect basal cleavage, allowing them to split into thin, flexible sheets typical of mica minerals. In addition to its importance as a lithium ore, lepidolite is highly valued by mineral collectors for its vibrant coloration and is increasingly significant in supplying lithium for rechargeable batteries, glass, ceramics, and advanced technological applications.
`,

  arabicDescription: `
الليبيدوليت هو معدن ميكائي غني بعنصر الليثيوم، يتميز بألوانه البنفسجية والوردية والليلكية الجذابة وبريقه اللؤلؤي المميز. يتواجد غالبًا في صخور البيجماتيت الجرانيتية مصاحبًا لمعادن الكوارتز والفلسبار والتورمالين والسبودومين، ويُعد أحد أهم المصادر الطبيعية لعنصر الليثيوم. وتتميز رقائقه الدقيقة بانفصام قاعدي كامل يسمح بانقسامها إلى صفائح رقيقة ومرنة، وهي خاصية مميزة لمعادن الميكا. وإلى جانب قيمته الجمالية لدى هواة جمع المعادن، يكتسب الليبيدوليت أهمية اقتصادية متزايدة باعتباره خامًا رئيسيًا لإنتاج الليثيوم المستخدم في البطاريات القابلة لإعادة الشحن، وصناعة الزجاج والسيراميك، والتقنيات الحديثة.
`,

  subtitle: 'Phyllosilicate · Mica Group',
  arabicSubtitle: 'فيلوسيليكات · مجموعة الميكا',

  type: 'Lithium Mica Mineral',
  arabicType: 'معدن ميكا غني بالليثيوم',

  chemicalFormula: 'K(Li,Al)₃(Si,Al)₄O₁₀(F,OH)₂',
  arabicChemicalFormula: 'سيليكات ألومنيوم وبوتاسيوم وليثيوم',

  hardness: '2.5–4 (Mohs)',

  luster: 'Pearly to Vitreous',
  arabicLuster: 'لؤلؤي إلى زجاجي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during the late stages of crystallization in lithium-rich granitic pegmatites.',

  arabicFormation:
    'يتكوّن خلال المراحل الأخيرة من تبلور البيجماتيت الجرانيتية الغنية بالليثيوم.',

  color:
    'Lilac, violet, pink, lavender, gray, white',

  arabicColor:
    'ليلكي، بنفسجي، وردي، أرجواني فاتح، رمادي، أبيض',

  environment:
    'Lithium-rich granitic pegmatites',

  arabicEnvironment:
    'البيجماتيت الجرانيتية الغنية بالليثيوم',

  uses:
    'Lithium ore, rechargeable batteries, glass, ceramics, heat-resistant materials, decorative stone, scientific research, and museum collections.',

  arabicUses:
    'خام لليثيوم، البطاريات القابلة لإعادة الشحن، صناعة الزجاج والسيراميك، المواد المقاومة للحرارة، أحجار الزينة، الأبحاث العلمية، والمجموعات المتحفية.',

  location:
    'Brazil, Afghanistan, Madagascar, Zimbabwe, Russia, the United States, Canada, and Namibia.',

  arabicLocation:
    'البرازيل، أفغانستان، مدغشقر، زيمبابوي، روسيا، الولايات المتحدة، كندا، وناميبيا.',

},
{
  id: 'magnesite',
  museumNumber: 'DM-26',

  name: 'Magnesite',
  arabicName: 'المغنسيت',

  image: MINERAL_IMAGES.magnesite,
  gallery: MINERAL_GALLERY.magnesite,

  description: `
Magnesite is a magnesium carbonate mineral recognized as one of the world's primary sources of magnesium. It typically forms through the alteration of magnesium-rich ultramafic rocks or by the precipitation of carbonate-rich hydrothermal fluids. Magnesite commonly occurs as massive white to gray aggregates, though well-developed rhombohedral crystals may also form under favorable geological conditions. Owing to its exceptional resistance to high temperatures, it is an indispensable industrial mineral used in the production of refractory bricks, furnace linings, magnesium compounds, and numerous metallurgical and chemical processes. High-quality specimens are also appreciated in mineral collections for their purity and distinctive crystal habits.
`,

  arabicDescription: `
المغنسيت هو معدن كربوناتي غني بالمغنيسيوم ويُعد أحد أهم الخامات الطبيعية لإنتاج عنصر المغنيسيوم على مستوى العالم. يتكوّن غالبًا نتيجة تحول الصخور فوق المافية الغنية بالمغنيسيوم أو من ترسيب المحاليل الحرمائية الغنية بالكربونات. يظهر عادةً على هيئة كتل بيضاء أو رمادية، وقد يتبلور أحيانًا في بلورات رومبوهدرية واضحة عند توافر الظروف المناسبة. ويتميز بمقاومته العالية للحرارة، مما يجعله معدنًا أساسيًا في صناعة الطوب الحراري وبطانات الأفران وإنتاج مركبات المغنيسيوم، إضافةً إلى استخداماته الواسعة في الصناعات المعدنية والكيميائية، كما تحظى عيناته النقية بتقدير كبير في المجموعات المتحفية.
`,

  subtitle: 'Carbonate · Calcite Group',
  arabicSubtitle: 'كربونات · مجموعة الكالسيت',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربوناتي',

  chemicalFormula: 'MgCO₃',
  arabicChemicalFormula: 'كربونات المغنيسيوم',

  hardness: '3.5–4.5 (Mohs)',

  luster: 'Vitreous to Dull',
  arabicLuster: 'زجاجي إلى باهت',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through hydrothermal alteration of ultramafic rocks or by precipitation from magnesium-rich carbonate fluids.',

  arabicFormation:
    'يتكوّن نتيجة التحول الحرمائي للصخور فوق المافية أو بترسيب المحاليل الغنية بالمغنيسيوم والكربونات.',

  color:
    'White, gray, yellowish, brown',

  arabicColor:
    'أبيض، رمادي، مصفر، بني',

  environment:
    'Hydrothermal veins, altered ultramafic rocks, and carbonate deposits',

  arabicEnvironment:
    'العروق الحرمائية، الصخور فوق المافية المتحولة، والرواسب الكربوناتية',

  uses:
    'Primary ore of magnesium, refractory bricks, furnace linings, magnesium oxide production, chemical industries, environmental applications, and museum collections.',

  arabicUses:
    'خام رئيسي للمغنيسيوم، صناعة الطوب الحراري، بطانات الأفران، إنتاج أكسيد المغنيسيوم، الصناعات الكيميائية، التطبيقات البيئية، والمجموعات المتحفية.',

  location:
    'Saudi Arabia (Darghat), China, Brazil, Austria, Slovakia, Greece, Australia, and the United States.',

  arabicLocation:
    'السعودية (ضرغط)، الصين، البرازيل، النمسا، سلوفاكيا، اليونان، أستراليا، والولايات المتحدة.',

},
{
  id: 'malachite',
  museumNumber: 'DM-27',

  name: 'Malachite',
  arabicName: 'المالاكيت',

  image: MINERAL_IMAGES.malachite,
  gallery: MINERAL_GALLERY.malachite,

  description: `
Malachite is a vibrant green secondary copper carbonate mineral renowned for its striking banded patterns and botryoidal crystal habit. It forms through the weathering and oxidation of copper sulfide deposits, where copper-rich groundwater reacts with carbonate-bearing solutions. Its rich emerald to dark green coloration has made it one of the most recognizable ornamental minerals throughout history, having been used as a gemstone, decorative stone, and natural pigment since ancient civilizations. Beyond its aesthetic value, malachite serves as an important indicator of copper mineralization and remains a significant secondary copper ore in many mining districts around the world.
`,

  arabicDescription: `
المالاكيت هو معدن كربوناتي ثانوي غني بالنحاس، يتميز بلونه الأخضر الزاهي ونطاقاته المتدرجة وبنيته العنقودية المميزة. يتكوّن نتيجة عمليات التجوية وأكسدة رواسب كبريتيدات النحاس، حيث تتفاعل المحاليل الغنية بالنحاس مع المياه المحتوية على الكربونات. وقد اشتهر منذ الحضارات القديمة كحجر زينة ومادة للزخرفة وصناعة الأصباغ الطبيعية، بفضل لونه الأخضر الفريد. وإلى جانب قيمته الجمالية، يُعد المالاكيت مؤشرًا جيولوجيًا مهمًا على وجود خامات النحاس، كما يمثل أحد الخامات الثانوية المهمة لإنتاج النحاس في العديد من مناطق التعدين حول العالم.
`,

  subtitle: 'Carbonate · Copper Group',
  arabicSubtitle: 'كربونات · مجموعة النحاس',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربوناتي',

  chemicalFormula: 'Cu₂CO₃(OH)₂',
  arabicChemicalFormula: 'كربونات هيدروكسيد النحاس',

  hardness: '3.5–4 (Mohs)',

  luster: 'Silky to Vitreous',
  arabicLuster: 'حريري إلى زجاجي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'Light Green',
  arabicStreak: 'أخضر فاتح',

  formation:
    'Forms as a secondary mineral in the oxidation zones of copper deposits through weathering of primary copper sulfides.',

  arabicFormation:
    'يتكوّن كمعدن ثانوي في مناطق أكسدة رواسب النحاس نتيجة تجوية كبريتيدات النحاس الأولية.',

  color:
    'Bright green, dark green, emerald green',

  arabicColor:
    'أخضر زاهٍ، أخضر داكن، أخضر زمردي',

  environment:
    'Oxidized copper deposits, hydrothermal veins, and carbonate host rocks',

  arabicEnvironment:
    'مناطق أكسدة رواسب النحاس، العروق الحرمائية، والصخور الكربوناتية',

  uses:
    'Copper ore, ornamental stone, jewelry, carvings, pigments, museum collections, and geological indicator for copper exploration.',

  arabicUses:
    'خام للنحاس، أحجار الزينة، المجوهرات، المنحوتات، الأصباغ الطبيعية، المجموعات المتحفية، ودليل جيولوجي في استكشاف النحاس.',

  location:
    'Peru, Democratic Republic of the Congo, Namibia, Zambia, Australia, Russia, Mexico, and the United States.',

  arabicLocation:
    'بيرو، جمهورية الكونغو الديمقراطية، ناميبيا، زامبيا، أستراليا، روسيا، المكسيك، والولايات المتحدة.',

},
{
  id: 'manganocalcite',
  museumNumber: 'DM-28',

  name: 'Manganocalcite',
  arabicName: 'المنجانوكالسيت',

  image: MINERAL_IMAGES.manganocalcite,
  gallery: MINERAL_GALLERY.manganocalcite,

  description: `
Manganocalcite is a pink to pale rose manganese-rich variety of calcite in which manganese partially replaces calcium within the crystal structure. Its delicate coloration ranges from soft pink to pale reddish hues, making it highly desirable among collectors and ornamental stone enthusiasts. The mineral commonly forms in hydrothermal veins, metamorphosed carbonate rocks, and manganese-rich ore deposits where manganese-bearing fluids interact with limestone and other carbonate rocks. Besides its aesthetic appeal, manganocalcite provides valuable geological evidence of manganese-rich hydrothermal environments and serves as an important indicator mineral in economic geology.
`,

  arabicDescription: `
المنجانوكالسيت هو أحد أصناف معدن الكالسيت الغنية بعنصر المنجنيز، حيث يحل المنجنيز جزئيًا محل الكالسيوم داخل البناء البلوري للمعدن، مما يمنحه ألوانًا وردية جذابة تتدرج من الوردي الفاتح إلى الوردي المحمر. يتكوّن عادةً في العروق الحرمائية والصخور الكربوناتية المتحولة ورواسب المنجنيز، نتيجة تفاعل المحاليل الغنية بالمنجنيز مع الصخور الجيرية. وإلى جانب قيمته الجمالية كحجر للعرض والزينة، يُعد مؤشرًا جيولوجيًا مهمًا على البيئات الغنية بالمنجنيز، كما يساعد في دراسة العمليات الحرمائية وتقييم رواسب المنجنيز الاقتصادية.
`,

  subtitle: 'Carbonate · Calcite Group',
  arabicSubtitle: 'كربونات · مجموعة الكالسيت',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربوناتي',

  chemicalFormula: '(Ca,Mn)CO₃',
  arabicChemicalFormula: 'كربونات الكالسيوم والمنجنيز',

  hardness: '3 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms in hydrothermal veins, manganese-rich carbonate deposits, and metamorphosed limestones where manganese substitutes for calcium in calcite.',

  arabicFormation:
    'يتكوّن في العروق الحرمائية والرواسب الكربوناتية الغنية بالمنجنيز والصخور الجيرية المتحولة، حيث يحل المنجنيز محل الكالسيوم في معدن الكالسيت.',

  color:
    'Pale pink, pink, rose, light reddish',

  arabicColor:
    'وردي فاتح، وردي، وردي محمر',

  environment:
    'Hydrothermal veins, manganese deposits, metamorphosed carbonate rocks',

  arabicEnvironment:
    'العروق الحرمائية، رواسب المنجنيز، والصخور الكربوناتية المتحولة',

  uses:
    'Collector specimens, ornamental stone, museum collections, geological research, and indicator mineral for manganese-rich hydrothermal systems.',

  arabicUses:
    'عينات لهواة الجمع، أحجار الزينة، المجموعات المتحفية، الأبحاث الجيولوجية، ومؤشر على الأنظمة الحرمائية الغنية بالمنجنيز.',

  location:
    'Peru, Mexico, Romania, South Africa, Slovakia, China, and the United States.',

  arabicLocation:
    'بيرو، المكسيك، رومانيا، جنوب أفريقيا، سلوفاكيا، الصين، والولايات المتحدة.',

},
{
  id: 'massivePyrite',
  museumNumber: 'DM-29',

  name: 'Massive Pyrite',
  arabicName: 'البيريت الكتلي',

  image: MINERAL_IMAGES.massivePyrite,
  gallery: MINERAL_GALLERY.massivePyrite,

  description: `
Massive Pyrite is a dense, compact variety of pyrite composed of intergrown masses of iron sulfide rather than well-developed individual crystals. Often referred to as "Fool's Gold" because of its metallic luster and brass-yellow color, pyrite is one of the most widespread sulfide minerals in the Earth's crust. Massive pyrite commonly forms in hydrothermal veins, volcanic massive sulfide (VMS) deposits, sedimentary environments, and contact metamorphic systems. Besides serving as an important source of sulfur, it is widely used in geological studies as an indicator of ore-forming processes and frequently occurs alongside economically valuable minerals such as chalcopyrite, sphalerite, galena, and gold.
`,

  arabicDescription: `
البيريت الكتلي هو أحد أشكال معدن البيريت يتكون من كتل متماسكة ومتداخلة من كبريتيد الحديد بدلاً من البلورات المنفردة الواضحة. ويُعرف البيريت باسم "ذهب المغفلين" بسبب بريقه المعدني ولونه الأصفر النحاسي الذي يشبه الذهب. يُعد من أكثر معادن الكبريتيدات انتشارًا في القشرة الأرضية، ويتكوّن غالبًا في العروق الحرمائية، ورواسب الكبريتيدات البركانية الضخمة (VMS)، والبيئات الرسوبية، ومناطق التحول التماسي. وإلى جانب أهميته كمصدر للكبريت، يُستخدم كمؤشر جيولوجي مهم على البيئات المكوّنة للخامات، وغالبًا ما يوجد مصاحبًا لمعادن اقتصادية مثل الكالكوبايرايت والسفاليريت والجالينا والذهب.
`,

  subtitle: 'Sulfide · Pyrite Group',
  arabicSubtitle: 'كبريتيدات · مجموعة البيريت',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيدي',

  chemicalFormula: 'FeS₂',
  arabicChemicalFormula: 'ثنائي كبريتيد الحديد',

  hardness: '6–6.5 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'Greenish Black',
  arabicStreak: 'أسود مخضر',

  formation:
    'Forms in hydrothermal veins, volcanic massive sulfide deposits, sedimentary rocks, and contact metamorphic environments.',

  arabicFormation:
    'يتكوّن في العروق الحرمائية، ورواسب الكبريتيدات البركانية الضخمة، والصخور الرسوبية، وبيئات التحول التماسي.',

  color:
    'Brass yellow, golden yellow',

  arabicColor:
    'أصفر نحاسي، أصفر ذهبي',

  environment:
    'Hydrothermal veins, VMS deposits, sedimentary rocks, contact metamorphic zones',

  arabicEnvironment:
    'العروق الحرمائية، رواسب الكبريتيدات البركانية الضخمة، الصخور الرسوبية، ومناطق التحول التماسي',

  uses:
    'Source of sulfur and sulfuric acid, geological indicator mineral, mineral collections, educational specimens, and ore exploration.',

  arabicUses:
    'مصدر للكبريت وحمض الكبريتيك، مؤشر جيولوجي للخامات، عينات متحفية، عينات تعليمية، واستكشاف الرواسب المعدنية.',

  location:
    'Sudbury, Ontario, Canada; Spain, Peru, China, Mexico, Russia, and the United States.',

  arabicLocation:
    'سادبوري، أونتاريو، كندا؛ إسبانيا، بيرو، الصين، المكسيك، روسيا، والولايات المتحدة.',

},
{
  id: 'massiveOreSphaleriteStibnite',
  museumNumber: 'DM-30',

  name: 'Massive Ore (Sphalerite – Stibnite)',
  arabicName: 'خام كتلي (سفاليريت – ستيبنايت)',

  image: MINERAL_IMAGES.massiveOreSphaleriteStibnite,
  gallery: MINERAL_GALLERY.massiveOreSphaleriteStibnite,

  description: `
Massive Ore (Sphalerite–Stibnite) is a composite sulfide ore consisting predominantly of sphalerite (ZnS), the principal ore mineral of zinc, and stibnite (Sb₂S₃), the primary ore mineral of antimony. These minerals commonly crystallize together in hydrothermal systems where metal-rich fluids precipitate within fractures and veins under moderate temperatures. Massive aggregates such as this specimen represent economically significant ore bodies that have historically supplied zinc and antimony for metallurgy, alloy production, batteries, flame retardants, semiconductors, and numerous industrial applications. Such assemblages also provide valuable geological evidence for understanding hydrothermal mineralization processes and ore-forming environments.
`,

  arabicDescription: `
يمثل هذا النموذج خامًا كبريتيديًا كتليًا يتكون بصورة رئيسية من معدني السفاليريت (ZnS)، وهو أهم خام للزنك، والستيبنايت (Sb₂S₃)، وهو الخام الرئيسي للأنتيمون. يتكوّن هذا التجمع المعدني داخل الأنظمة الحرمائية عندما تترسب المحاليل الغنية بالعناصر الفلزية داخل الشقوق والعروق الصخرية في درجات حرارة متوسطة. وتُعد مثل هذه التجمعات من أهم الخامات الاقتصادية لإنتاج الزنك والأنتيمون المستخدمين في الصناعات المعدنية، والسبائك، والبطاريات، ومثبطات اللهب، وأشباه الموصلات، والعديد من التطبيقات الصناعية المتقدمة. كما توفر هذه العينات معلومات جيولوجية مهمة لفهم عمليات التمعدن الحرمائي وتكوين الرواسب المعدنية.
`,

  subtitle: 'Sulfides · Ore Assemblage',
  arabicSubtitle: 'كبريتيدات · تجمع خامي',

  type: 'Composite Sulfide Ore',
  arabicType: 'خام كبريتيدي مركب',

  chemicalFormula: 'ZnS + Sb₂S₃',
  arabicChemicalFormula: 'كبريتيد الزنك + كبريتيد الأنتيمون',

  hardness: '2–4 (Mohs)',

  luster: 'Metallic to Resinous',
  arabicLuster: 'فلزي إلى راتنجي',

  crystalSystem: 'Isometric (Sphalerite) + Orthorhombic (Stibnite)',
  arabicCrystalSystem: 'مكعب (السفاليريت) + معيني قائم (الستيبنايت)',

  streak: 'Brown to Gray',
  arabicStreak: 'بني إلى رمادي',

  formation:
    'Forms in hydrothermal veins and replacement deposits where zinc- and antimony-rich fluids precipitate sulfide minerals.',

  arabicFormation:
    'يتكوّن في العروق الحرمائية والرواسب الإحلالية نتيجة ترسيب معادن الكبريتيدات من محاليل غنية بالزنك والأنتيمون.',

  color:
    'Dark gray, black, brown, steel gray',

  arabicColor:
    'رمادي داكن، أسود، بني، رمادي فولاذي',

  environment:
    'Hydrothermal veins, polymetallic sulfide deposits, replacement deposits',

  arabicEnvironment:
    'العروق الحرمائية، رواسب الكبريتيدات متعددة الفلزات، والرواسب الإحلالية',

  uses:
    'Primary ore of zinc and antimony for metallurgy, galvanization, batteries, alloys, flame retardants, semiconductors, scientific research, and museum collections.',

  arabicUses:
    'خام رئيسي للزنك والأنتيمون، يستخدم في الصناعات المعدنية، والجلفنة، والبطاريات، والسبائك، ومثبطات اللهب، وأشباه الموصلات، والأبحاث العلمية، والمجموعات المتحفية.',

  location:
    'Morocco, China, Peru, Bolivia, Mexico, Australia, and Kazakhstan.',

  arabicLocation:
    'المغرب، الصين، بيرو، بوليفيا، المكسيك، أستراليا، وكازاخستان.',

},
{
  id: 'nettunite',
  museumNumber: 'DM-31',

  name: 'Nettunite',
  arabicName: 'نيتونيت',

  image: MINERAL_IMAGES.nettunite,
  gallery: MINERAL_GALLERY.nettunite,

  description:
    'Nettunite is a rare lithium-bearing titanosilicate mineral distinguished by its lustrous black to deep reddish-brown prismatic crystals. It crystallizes primarily in highly alkaline igneous rocks, especially nepheline syenite pegmatites, where it forms during the final stages of magmatic crystallization. Although it has little commercial value because of its rarity, Nettunite is highly prized by mineral collectors and museums for its distinctive crystal habit, geological significance, and association with unusual alkaline mineral assemblages.',

  arabicDescription:
    'النيتونيت معدن سيليكاتي نادر يحتوي على الليثيوم والتيتانيوم، ويتميز ببلوراته المنشورية اللامعة ذات اللون الأسود أو البني المحمر الداكن. يتكوّن غالبًا في الصخور النارية القلوية، وخاصة في بيجماتيتات النيفلين سيانيت، خلال المراحل الأخيرة من تبلور الصهارة. ونظرًا لندرته الشديدة، فإنه لا يمتلك أهمية اقتصادية كبيرة، إلا أنه يُعد من المعادن المميزة في المجموعات المتحفية والعلمية لما يتمتع به من شكل بلوري فريد وأهمية جيولوجية في دراسة البيئات القلوية النادرة.',

  subtitle: 'Titanosilicate · Lithium Mineral',
  arabicSubtitle: 'تيتانوسيليكات · معدن الليثيوم',

  type: 'Titanosilicate Mineral',
  arabicType: 'معدن تيتانوسيليكات',

  chemicalFormula: 'KNa₂Li(Fe²⁺,Mn²⁺)₂Ti₂Si₈O₂₄',
  arabicChemicalFormula: 'سيليكات بوتاسيوم وصوديوم وليثيوم وحديد وتيتانيوم',

  hardness: '5–6 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'Light Brown',
  arabicStreak: 'بني فاتح',

  formation:
    'Forms in highly alkaline nepheline syenites and pegmatites during late-stage magmatic crystallization.',

  arabicFormation:
    'يتكوّن في صخور النيفلين سيانيت والبيجماتيت القلوية خلال المراحل الأخيرة من تبلور الصهارة.',

  color:
    'Black, dark brown, reddish-brown',

  arabicColor:
    'أسود، بني داكن، بني محمر',

  environment:
    'Alkaline igneous complexes, nepheline syenites, pegmatites',

  arabicEnvironment:
    'المعقدات النارية القلوية، النيفلين سيانيت، والبيجماتيت',

  uses:
    'Primarily valued as a rare collector’s mineral, museum specimen, and scientific research material.',

  arabicUses:
    'يستخدم كعينة متحفية نادرة، وللهواة، وفي الأبحاث والدراسات المعدنية.',

  location:
    'United States (California), Greenland, Russia, Norway, Canada, and Brazil.',

  arabicLocation:
    'الولايات المتحدة (كاليفورنيا)، جرينلاند، روسيا، النرويج، كندا، والبرازيل.',

},
{
  id: 'calcium-phosphate',
  museumNumber: 'DM-32',

  name: 'Phosphate',
  arabicName: 'فوسفات الكالسيوم',

  image: MINERAL_IMAGES.calciumPhosphate,
  gallery: MINERAL_GALLERY.calciumPhosphate,

  description:
    'Calcium Phosphate is a phosphate mineral material composed primarily of calcium phosphate compounds and represents the principal source of phosphorus used worldwide. It commonly occurs as massive sedimentary phosphorite deposits formed in ancient marine environments through biological and chemical accumulation processes. Calcium phosphate plays a fundamental role in global agriculture as the raw material for phosphate fertilizers and is also widely utilized in the chemical industry, food production, medicine, and biomaterials because of its compatibility with bone and tooth tissues.',

  arabicDescription:
    'فوسفات الكالسيوم مادة معدنية تتكون أساسًا من مركبات فوسفات الكالسيوم، وتمثل المصدر الرئيسي للفوسفور المستخدم عالميًا. توجد غالبًا في هيئة رواسب فوسفوريت رسوبية ضخمة تكوّنت في البيئات البحرية القديمة نتيجة عمليات الترسيب الحيوية والكيميائية. ويُعد هذا المعدن المادة الخام الأساسية لإنتاج الأسمدة الفوسفاتية، كما يدخل في الصناعات الكيميائية والغذائية والدوائية، ويُستخدم أيضًا في التطبيقات الطبية والمواد الحيوية نظرًا لتوافقه الكبير مع أنسجة العظام والأسنان.',

  subtitle: 'Phosphate Mineral',
  arabicSubtitle: 'معدن فوسفات',

  type: 'Phosphate Mineral',
  arabicType: 'معدن فوسفات',

  chemicalFormula: 'Ca₅(PO₄)₃(F,Cl,OH)',
  arabicChemicalFormula: 'فوسفات الكالسيوم',

  hardness: '5 (Mohs)',

  luster: 'Dull to Vitreous',
  arabicLuster: 'باهت إلى زجاجي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms mainly in marine sedimentary phosphate deposits through biological accumulation and chemical precipitation.',

  arabicFormation:
    'يتكوّن أساسًا في الرواسب الفوسفاتية البحرية نتيجة التراكم الحيوي والترسيب الكيميائي.',

  color:
    'White, gray, cream, brown',

  arabicColor:
    'أبيض، رمادي، كريمي، بني',

  environment:
    'Marine sedimentary phosphorite deposits, weathered igneous rocks, and guano deposits.',

  arabicEnvironment:
    'الرواسب الفوسفاتية البحرية، الصخور النارية المتجواة، ورواسب ذرق الطيور.',

  uses:
    'Production of phosphate fertilizers, phosphoric acid, animal feed supplements, food additives, pharmaceuticals, ceramics, biomaterials, and medical implants.',

  arabicUses:
    'إنتاج الأسمدة الفوسفاتية، وحمض الفوسفوريك، وإضافات الأعلاف، والصناعات الغذائية، والأدوية، والسيراميك، والمواد الحيوية، وزراعة العظام والأسنان.',

  location:
    'Saudi Arabia (Turayf), Morocco, Jordan, Tunisia, China, the United States, and Russia.',

  arabicLocation:
    'المملكة العربية السعودية (طريف)، المغرب، الأردن، تونس، الصين، الولايات المتحدة، وروسيا.',

},
{
  id: 'prehnite',
  museumNumber: 'DM-33',

  name: 'Prehnite',
  arabicName: 'بريهنيت',

  image: MINERAL_IMAGES.prehnite,
  gallery: MINERAL_GALLERY.prehnite,

  description:
    'Prehnite is a calcium aluminum silicate mineral renowned for its soft green color and distinctive botryoidal, globular, or crystalline aggregates. It commonly forms as a secondary hydrothermal mineral filling cavities and fractures in basaltic volcanic rocks and low-grade metamorphic environments. Due to its attractive appearance, translucency, and well-developed crystal habits, Prehnite is highly valued as a collector’s mineral and is also fashioned into ornamental gemstones and jewelry.',

  arabicDescription:
    'البريهنيت معدن سيليكاتي يتكون من الكالسيوم والألومنيوم، ويشتهر بلونه الأخضر الهادئ وتجمعاته الكروية أو العنقودية وبلوراته الجميلة. يتكوّن عادةً كمعدن ثانوي من المحاليل الحرارية المائية داخل الفجوات والشقوق في الصخور البركانية البازلتية وبيئات التحول منخفض الدرجة. ويُعد من المعادن المحببة لهواة جمع العينات، كما يُستخدم كحجر زينة وفي صناعة بعض المجوهرات بفضل شفافيته وجمال مظهره.',

  subtitle: 'Phyllosilicate · Prehnite Group',
  arabicSubtitle: 'فيلوسيليكات · مجموعة البريهنيت',

  type: 'Phyllosilicate Mineral',
  arabicType: 'معدن فيلوسيليكات',

  chemicalFormula: 'Ca₂Al(AlSi₃O₁₀)(OH)₂',
  arabicChemicalFormula: 'سيليكات الكالسيوم والألومنيوم',

  hardness: '6–6.5 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms as a secondary hydrothermal mineral within cavities, veins, and fractures in basaltic volcanic rocks and low-grade metamorphic environments.',

  arabicFormation:
    'يتكوّن كمعدن ثانوي بفعل المحاليل الحرارية المائية داخل الفجوات والعروق والشقوق في الصخور البركانية البازلتية وبيئات التحول منخفض الدرجة.',

  color:
    'Light green, yellow-green, white, colorless',

  arabicColor:
    'أخضر فاتح، أخضر مصفر، أبيض، عديم اللون',

  environment:
    'Basalts, hydrothermal veins, volcanic cavities, low-grade metamorphic rocks',

  arabicEnvironment:
    'صخور البازلت، العروق الحرارية المائية، الفجوات البركانية، والصخور المتحولة منخفضة الدرجة',

  uses:
    'Collector specimens, ornamental gemstones, jewelry, decorative carvings, and geological research.',

  arabicUses:
    'عينات لهواة الجمع، أحجار زينة، مجوهرات، منحوتات زخرفية، والدراسات الجيولوجية.',

  location:
    'India, South Africa, Australia, China, Scotland, the United States, and Mali.',

  arabicLocation:
    'الهند، جنوب أفريقيا، أستراليا، الصين، اسكتلندا، الولايات المتحدة، ومالي.',

},
{
  id: 'psilomelane',
  museumNumber: 'DM-34',

  name: 'Psilomelane',
  arabicName: 'بسيلوميلين',

  image: MINERAL_IMAGES.psilomelane,
  gallery: MINERAL_GALLERY.psilomelane,

  description:
    'Psilomelane is a hard black manganese oxide mineraloid traditionally used to describe massive botryoidal aggregates of hydrous barium and manganese oxides. Although modern mineralogy classifies many specimens previously called Psilomelane as members of the Romanechite group, the historical name remains widely used in museums and mineral collections. It commonly forms in the oxidized zones of manganese deposits through the weathering of primary manganese-bearing minerals and is valued as an important manganese ore and an attractive collector specimen.',

  arabicDescription:
    'البسيلوميلين هو أكسيد منغنيز أسود صلب يُستخدم تاريخيًا لوصف التجمعات الكروية والعنقودية الضخمة من أكاسيد المنغنيز والباريوم المائية. وعلى الرغم من أن العديد من العينات التي كانت تُسمى قديمًا بسيلوميلين تُصنف اليوم ضمن مجموعة الرومانيشيت، إلا أن الاسم لا يزال مستخدمًا على نطاق واسع في المتاحف والمجموعات المعدنية. ويتكوّن غالبًا في مناطق الأكسدة لرواسب المنغنيز نتيجة تجوية المعادن الأولية الحاملة للمنغنيز، ويُعد خامًا مهمًا للمنغنيز إضافةً إلى قيمته كعينة جيولوجية مميزة.',

  subtitle: 'Manganese Oxide · Mineraloid',
  arabicSubtitle: 'أكسيد منغنيز · معدن شبه معدني',

  type: 'Manganese Oxide',
  arabicType: 'أكسيد منغنيز',

  chemicalFormula: '(Ba,H₂O)₂Mn₅O₁₀',
  arabicChemicalFormula: 'أكسيد منغنيز وباريوم مائي',

  hardness: '5–6 (Mohs)',

  luster: 'Submetallic',
  arabicLuster: 'شبه فلزي',

  crystalSystem: 'Amorphous to Massive',
  arabicCrystalSystem: 'غير متبلور إلى كتلي',

  streak: 'Brownish Black',
  arabicStreak: 'أسود بني',

  formation:
    'Forms in the oxidation zones of manganese ore deposits through the weathering and alteration of primary manganese minerals.',

  arabicFormation:
    'يتكوّن في مناطق الأكسدة لرواسب المنغنيز نتيجة تجوية وتحول المعادن الأولية الحاملة للمنغنيز.',

  color:
    'Black, dark gray',

  arabicColor:
    'أسود، رمادي داكن',

  environment:
    'Oxidized manganese deposits, hydrothermal veins, supergene enrichment zones',

  arabicEnvironment:
    'مناطق أكسدة رواسب المنغنيز، العروق الحرارية المائية، ومناطق الإثراء الفوقي',

  uses:
    'Source of manganese for steel production, batteries, chemical industries, pigments, and mineral collections.',

  arabicUses:
    'مصدر للمنغنيز في صناعة الفولاذ، والبطاريات، والصناعات الكيميائية، والأصباغ، وعينات المتاحف.',

  location:
    'South Africa, Brazil, Morocco, Australia, India, Mexico, Germany, and the United States.',

  arabicLocation:
    'جنوب أفريقيا، البرازيل، المغرب، أستراليا، الهند، المكسيك، ألمانيا، والولايات المتحدة.',

},
{
  id: 'pyrite',
  museumNumber: 'DM-35',

  name: 'Pyrite',
  arabicName: 'البيريت',

  image: MINERAL_IMAGES.pyrite,
  gallery: MINERAL_GALLERY.pyrite,

  description:
    'Pyrite is an iron sulfide mineral widely recognized for its brilliant metallic luster and pale brass-yellow color, earning it the nickname "Fool\'s Gold." It commonly crystallizes as perfect cubes, pyritohedrons, and octahedrons in igneous, metamorphic, and sedimentary rocks, as well as hydrothermal veins. Although it contains iron rather than gold, Pyrite is one of the most abundant sulfide minerals on Earth and serves as an important indicator mineral in mineral exploration. It is also utilized in sulfuric acid production, scientific research, and mineral collections because of its remarkable crystal forms.',

  arabicDescription:
    'البيريت هو معدن كبريتيد الحديد، ويشتهر ببريقه المعدني القوي ولونه الأصفر النحاسي اللامع، مما أكسبه لقب "ذهب المغفلين". يتبلور غالبًا على هيئة مكعبات أو أشكال بلورية منتظمة داخل الصخور النارية والمتحولة والرسوبية، وكذلك في العروق الحرارية المائية. وعلى الرغم من تشابهه مع الذهب في المظهر، فإنه يتكون من الحديد والكبريت وليس الذهب. ويُعد البيريت من أكثر معادن الكبريتيد انتشارًا على سطح الأرض، كما يمثل معدنًا دليليًا مهمًا في عمليات الاستكشاف المعدني، ويدخل في إنتاج حمض الكبريتيك، إضافةً إلى أهميته الكبيرة لهواة جمع المعادن والمتاحف.',

  subtitle: 'Sulfide · Pyrite Group',
  arabicSubtitle: 'كبريتيد · مجموعة البيريت',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيد',

  chemicalFormula: 'FeS₂',
  arabicChemicalFormula: 'كبريتيد الحديد',

  hardness: '6–6.5 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'Greenish Black',
  arabicStreak: 'أسود مخضر',

  formation:
    'Forms in hydrothermal veins, sedimentary rocks, metamorphic rocks, coal beds, and magmatic sulfide deposits.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية، والصخور الرسوبية، والصخور المتحولة، وطبقات الفحم، ورواسب الكبريتيدات النارية.',

  color:
    'Brass yellow, pale gold',

  arabicColor:
    'أصفر نحاسي، ذهبي باهت',

  environment:
    'Hydrothermal veins, sedimentary deposits, metamorphic rocks, magmatic sulfide deposits',

  arabicEnvironment:
    'العروق الحرارية المائية، الرواسب الرسوبية، الصخور المتحولة، ورواسب الكبريتيدات النارية',

  uses:
    'Production of sulfuric acid, mineral exploration, educational specimens, collectors’ minerals, and occasionally as an ornamental stone.',

  arabicUses:
    'إنتاج حمض الكبريتيك، الاستكشاف المعدني، العينات التعليمية، مجموعات هواة جمع المعادن، وأحيانًا كحجر للزينة.',

  location:
    'Spain, Peru, Italy, China, the United States, Canada, Russia, and Morocco.',

  arabicLocation:
    'إسبانيا، بيرو، إيطاليا، الصين، الولايات المتحدة، كندا، روسيا، والمغرب.',

},
{
  id: 'pyrrhotite',
  museumNumber: 'DM-36',

  name: 'Pyrrhotite',
  arabicName: 'البيروتيت',

  image: MINERAL_IMAGES.pyrrhotite,
  gallery: MINERAL_GALLERY.pyrrhotite,

  description:
    'Pyrrhotite is an iron sulfide mineral distinguished by its bronze to brownish-bronze metallic appearance and its weak natural magnetism, a property that separates it from most other sulfide minerals. It commonly occurs in mafic and ultramafic igneous rocks, hydrothermal veins, contact metamorphic deposits, and magmatic nickel-copper sulfide ores. Pyrrhotite is an important source of sulfur and is frequently associated with economically valuable minerals such as pentlandite, chalcopyrite, and pyrite, making it significant in nickel and copper exploration.',

  arabicDescription:
    'البيروتيت معدن من كبريتيدات الحديد يتميز بلونه البرونزي إلى البني البرونزي وبريقه المعدني، كما يُعرف بخاصية مغناطيسيته الطبيعية الضعيفة التي تميزه عن معظم معادن الكبريتيد الأخرى. يتكوّن عادةً في الصخور النارية المافية وفوق المافية، والعروق الحرارية المائية، ورواسب التحول التماسي، ورواسب كبريتيدات النيكل والنحاس النارية. ويُعد مصدرًا مهمًا للكبريت، ويرتبط غالبًا بمعادن اقتصادية مثل البنتلانديت والكالكوبايرايت والبيريت، مما يجعله معدنًا مهمًا في استكشاف رواسب النيكل والنحاس.',

  subtitle: 'Sulfide · Iron Sulfide Group',
  arabicSubtitle: 'كبريتيد · مجموعة كبريتيدات الحديد',

  type: 'Iron Sulfide Mineral',
  arabicType: 'معدن كبريتيد الحديد',

  chemicalFormula: 'Fe₁₋ₓS',
  arabicChemicalFormula: 'كبريتيد الحديد',

  hardness: '3.5–4.5 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'Dark Gray to Black',
  arabicStreak: 'رمادي داكن إلى أسود',

  formation:
    'Forms in mafic and ultramafic igneous rocks, hydrothermal veins, contact metamorphic deposits, and magmatic nickel-copper sulfide deposits.',

  arabicFormation:
    'يتكوّن في الصخور النارية المافية وفوق المافية، والعروق الحرارية المائية، ورواسب التحول التماسي، ورواسب كبريتيدات النيكل والنحاس النارية.',

  color:
    'Bronze, brownish bronze, dark bronze',

  arabicColor:
    'برونزي، بني برونزي، برونزي داكن',

  environment:
    'Mafic and ultramafic igneous rocks, hydrothermal veins, contact metamorphic deposits, magmatic sulfide deposits',

  arabicEnvironment:
    'الصخور النارية المافية وفوق المافية، العروق الحرارية المائية، رواسب التحول التماسي، ورواسب الكبريتيدات النارية',

  uses:
    'Source of sulfur, indicator mineral in nickel and copper exploration, scientific research, and mineral collections.',

  arabicUses:
    'مصدر للكبريت، ومعدن دليلي في استكشاف رواسب النيكل والنحاس، والأبحاث العلمية، ومجموعات المتاحف.',

  location:
    'Canada, Russia, Norway, South Africa, Australia, China, Finland, and the United States.',

  arabicLocation:
    'كندا، روسيا، النرويج، جنوب أفريقيا، أستراليا، الصين، فنلندا، والولايات المتحدة.',

},
{
  id: 'quartz-bearing-gold',
  museumNumber: 'DM-37',

  name: 'Quartz Bearing Gold',
  arabicName: 'عرق كوارتز حامل للذهب',

  image: MINERAL_IMAGES.quartzBearingGold,
  gallery: MINERAL_GALLERY.quartzBearingGold,

  description:
    'Quartz Bearing Gold is a quartz vein containing visible or microscopic native gold. These deposits form when hot hydrothermal fluids transport dissolved silica and gold through fractures in the Earth\'s crust. As the fluids cool, quartz crystallizes while gold precipitates within the vein. Quartz-bearing gold is one of the world\'s most important sources of primary gold and is widely mined for precious metal production.',

  arabicDescription:
    'عرق الكوارتز الحامل للذهب هو عرق من معدن الكوارتز يحتوي على ذهب طبيعي مرئي أو مجهري. يتكوّن عندما تنقل المحاليل الحرارية المائية السيليكا والذهب الذائب عبر الشقوق في القشرة الأرضية، ثم يترسب الكوارتز والذهب مع انخفاض درجة الحرارة. ويُعد من أهم المصادر الأولية لإنتاج الذهب في العالم.',

  subtitle: 'Native Gold in Quartz Vein',
  arabicSubtitle: 'ذهب طبيعي داخل عرق كوارتز',

  type: 'Gold Ore',
  arabicType: 'خام ذهب',

  chemicalFormula: 'SiO₂ + Au',
  arabicChemicalFormula: 'ثاني أكسيد السيليكون + الذهب',

  hardness: 'Quartz: 7 (Mohs), Gold: 2.5–3',

  luster: 'Vitreous (Quartz), Metallic (Gold)',
  arabicLuster: 'زجاجي (الكوارتز)، فلزي (الذهب)',

  crystalSystem: 'Trigonal (Quartz), Isometric (Gold)',
  arabicCrystalSystem: 'ثلاثي (الكوارتز)، متساوي القياس (الذهب)',

  streak: 'White (Quartz), Golden Yellow (Gold)',
  arabicStreak: 'أبيض (الكوارتز)، أصفر ذهبي (الذهب)',

  formation:
    'Hydrothermal quartz veins formed by silica- and gold-rich fluids circulating through fractures in the Earth\'s crust.',

  arabicFormation:
    'يتكوّن في عروق الكوارتز الحرارية المائية نتيجة دوران محاليل غنية بالسيليكا والذهب داخل شقوق القشرة الأرضية.',

  color: 'White quartz with metallic yellow gold',
  arabicColor: 'كوارتز أبيض مع ذهب أصفر فلزي',

  environment:
    'Hydrothermal quartz veins, shear zones, and orogenic gold deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، مناطق القص، ورواسب الذهب الأوروجينية.',

  uses:
    'Primary source of gold for jewelry, electronics, investment, and industrial applications.',

  arabicUses:
    'مصدر رئيسي للذهب المستخدم في المجوهرات، والإلكترونيات، والاستثمار، والتطبيقات الصناعية.',

  location:
    'Saudi Arabia, Canada, Australia, South Africa, China, Russia, and Brazil.',

  arabicLocation:
    'المملكة العربية السعودية، كندا، أستراليا، جنوب أفريقيا، الصين، روسيا، والبرازيل.',

},
{
  id: 'red-copper',
  museumNumber: 'DM-38',

  name: 'Red Copper',
  arabicName: 'النحاس الأحمر',

  image: MINERAL_IMAGES.redCopper,
  gallery: MINERAL_GALLERY.redCopper,

  description:
    'Red Copper, also known as Native Copper, is naturally occurring metallic copper found in its elemental form. It develops through hydrothermal activity and secondary enrichment in oxidized copper deposits. Native copper is valued both as an important copper ore and as an attractive mineral specimen due to its distinctive reddish metallic appearance.',

  arabicDescription:
    'النحاس الأحمر، أو النحاس الطبيعي، هو النحاس الذي يوجد في الطبيعة على هيئة عنصر حر دون أن يكون متحدًا مع عناصر أخرى. يتكوّن بفعل النشاط الحراري المائي وعمليات الإثراء الثانوي في رواسب النحاس المؤكسدة، ويُعد مصدرًا مهمًا للنحاس بالإضافة إلى قيمته كعينة معدنية ذات بريق فلزي ولون أحمر مميز.',

  subtitle: 'Native Element · Copper Group',
  arabicSubtitle: 'عنصر طبيعي · مجموعة النحاس',

  type: 'Native Element Mineral',
  arabicType: 'معدن من العناصر الطبيعية',

  chemicalFormula: 'Cu',
  arabicChemicalFormula: 'النحاس',

  hardness: '2.5–3 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'Copper Red',
  arabicStreak: 'أحمر نحاسي',

  formation:
    'Forms in hydrothermal veins and oxidized zones of copper deposits through precipitation of native copper.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية والمناطق المؤكسدة لرواسب النحاس نتيجة ترسب النحاس الطبيعي.',

  color: 'Copper Red',
  arabicColor: 'أحمر نحاسي',

  environment:
    'Hydrothermal veins, basaltic lava flows, and oxidized copper deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، تدفقات البازلت، ورواسب النحاس المؤكسدة.',

  uses:
    'Major source of copper for electrical wiring, electronics, construction, alloys, and mineral collecting.',

  arabicUses:
    'مصدر مهم للنحاس المستخدم في الأسلاك الكهربائية، والإلكترونيات، ومواد البناء، والسبائك، وعينات العرض.',

  location:
    'United States, Chile, Russia, Australia, Canada, Democratic Republic of the Congo, and Zambia.',

  arabicLocation:
    'الولايات المتحدة، تشيلي، روسيا، أستراليا، كندا، جمهورية الكونغو الديمقراطية، وزامبيا.',

},
{
  id: 'rhodonite',
  museumNumber: 'DM-39',

  name: 'Rhodonite',
  arabicName: 'رودونيت',

  image: MINERAL_IMAGES.rhodonite,
  gallery: MINERAL_GALLERY.rhodonite,

  description:
    'Rhodonite is a manganese inosilicate mineral renowned for its distinctive pink to rose-red color with black manganese oxide veining. It forms primarily in metamorphic rocks rich in manganese and is highly valued as an ornamental stone, gemstone, and collector\'s mineral. Rhodonite is also an important indicator of manganese-rich geological environments.',

  arabicDescription:
    'الرودونيت هو معدن سيليكات المنغنيز يتميز بلونه الوردي إلى الأحمر الوردي مع عروق سوداء من أكاسيد المنغنيز. يتكوّن غالبًا في الصخور المتحولة الغنية بالمنغنيز، ويُستخدم كحجر كريم وحجر زينة، كما يُعد مؤشرًا مهمًا على البيئات الجيولوجية الغنية بالمنغنيز.',

  subtitle: 'Inosilicate · Pyroxenoid Group',
  arabicSubtitle: 'إينوسيليكات · مجموعة البيروكسينويد',

  type: 'Silicate Mineral',
  arabicType: 'معدن سيليكات',

  chemicalFormula: 'MnSiO₃',
  arabicChemicalFormula: 'سيليكات المنغنيز',

  hardness: '5.5–6.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Triclinic',
  arabicCrystalSystem: 'ثلاثي الميل',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through regional metamorphism and hydrothermal alteration in manganese-rich deposits.',

  arabicFormation:
    'يتكوّن بفعل التحول الإقليمي والنشاط الحراري المائي في الرواسب الغنية بالمنغنيز.',

  color: 'Pink, rose-red with black veins',
  arabicColor: 'وردي، أحمر وردي مع عروق سوداء',

  environment:
    'Metamorphic rocks, manganese deposits, and hydrothermal veins.',

  arabicEnvironment:
    'الصخور المتحولة، رواسب المنغنيز، والعروق الحرارية المائية.',

  uses:
    'Gemstone, ornamental stone, jewelry, carvings, decorative objects, and mineral collections.',

  arabicUses:
    'يستخدم كحجر كريم، وأحجار زينة، وفي المجوهرات، والمنحوتات، وقطع الديكور، والعينات المتحفية.',

  location:
    'Russia, Australia, Sweden, Peru, Canada, Mexico, Madagascar, and the United States.',

  arabicLocation:
    'روسيا، أستراليا، السويد، بيرو، كندا، المكسيك، مدغشقر، والولايات المتحدة.',

},
{
  id: 'ruby-corundum',
  museumNumber: 'DM-40',

  name: 'Ruby Corundum',
  arabicName: 'الياقوت (كورندوم)',

  image: MINERAL_IMAGES.rubyCorundum,
  gallery: MINERAL_GALLERY.rubyCorundum,

  description:
    'Ruby is the red gem-quality variety of the mineral corundum. Its vivid red color is caused by trace amounts of chromium replacing aluminum within the crystal structure. Ruby is one of the most valuable gemstones in the world due to its exceptional hardness, brilliance, rarity, and durability. It forms in metamorphic rocks such as marble and in some igneous environments.',

  arabicDescription:
    'الياقوت هو الصنف الأحمر من معدن الكورندوم، ويكتسب لونه الأحمر المميز بسبب وجود كميات ضئيلة من عنصر الكروم داخل بنيته البلورية. يُعد من أثمن الأحجار الكريمة في العالم بفضل صلابته العالية وبريقه وجماله وندرته، ويتكوّن غالبًا في الصخور المتحولة مثل الرخام، وقد يوجد أيضًا في بعض الصخور النارية.',

  subtitle: 'Oxide · Corundum Group',
  arabicSubtitle: 'أكسيد · مجموعة الكورندوم',

  type: 'Gemstone Mineral',
  arabicType: 'معدن كريم',

  chemicalFormula: 'Al₂O₃',
  arabicChemicalFormula: 'أكسيد الألومنيوم',

  hardness: '9 (Mohs)',

  luster: 'Adamantine to Vitreous',
  arabicLuster: 'ألماسي إلى زجاجي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms in high-grade metamorphic rocks, especially marble, and in some igneous pegmatites and alluvial deposits.',

  arabicFormation:
    'يتكوّن في الصخور المتحولة عالية الدرجة، خصوصًا الرخام، كما يوجد في بعض البيجماتيت والرواسب الغرينية.',

  color: 'Deep Red to Pinkish Red',
  arabicColor: 'أحمر داكن إلى أحمر وردي',

  environment:
    'Marble-hosted metamorphic deposits, basaltic deposits, and placer deposits.',

  arabicEnvironment:
    'الرخام المتحول، بعض الصخور البازلتية، والرواسب الغرينية.',

  uses:
    'Fine jewelry, luxury watches, laser technology, precision instruments, and mineral collections.',

  arabicUses:
    'المجوهرات الفاخرة، الساعات الفاخرة، تقنيات الليزر، الأجهزة الدقيقة، والعينات المتحفية.',

  location:
    'Myanmar, Sri Lanka, Thailand, Mozambique, Madagascar, Tanzania, Afghanistan, and Vietnam.',

  arabicLocation:
    'ميانمار، سريلانكا، تايلاند، موزمبيق، مدغشقر، تنزانيا، أفغانستان، وفيتنام.',

},
{
  id: 'siderite',
  museumNumber: 'DM-41',

  name: 'Siderite',
  arabicName: 'سيديريت',

  image: MINERAL_IMAGES.siderite,
  gallery: MINERAL_GALLERY.siderite,

  description:
    'Siderite is an iron carbonate mineral that commonly forms in sedimentary rocks, hydrothermal veins, and metamorphic deposits. It is an important ore of iron and is recognized by its brownish to gray color and characteristic rhombohedral crystals. Siderite also serves as a valuable indicator of reducing geological environments.',

  arabicDescription:
    'السيديريت هو معدن من كربونات الحديد يتكوّن غالبًا في الصخور الرسوبية، والعروق الحرارية المائية، وبعض البيئات المتحولة. يُعد أحد خامات الحديد المهمة، ويتميز بلونه البني إلى الرمادي وبلوراته المعينية، كما يُستخدم كمؤشر على البيئات الجيولوجية المختزلة.',

  subtitle: 'Carbonate · Calcite Group',
  arabicSubtitle: 'كربونات · مجموعة الكالسيت',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربونات',

  chemicalFormula: 'FeCO₃',
  arabicChemicalFormula: 'كربونات الحديد',

  hardness: '3.5–4.5 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through sedimentary, hydrothermal, and low-grade metamorphic processes in iron-rich environments.',

  arabicFormation:
    'يتكوّن بفعل العمليات الرسوبية والحرارية المائية والتحول منخفض الدرجة في البيئات الغنية بالحديد.',

  color: 'Brown, yellowish-brown, gray, tan',
  arabicColor: 'بني، بني مصفر، رمادي، بني فاتح',

  environment:
    'Sedimentary rocks, hydrothermal veins, iron deposits, and metamorphic rocks.',

  arabicEnvironment:
    'الصخور الرسوبية، العروق الحرارية المائية، رواسب الحديد، والصخور المتحولة.',

  uses:
    'Iron ore, source of iron in the steel industry, geological studies, and mineral collections.',

  arabicUses:
    'يستخدم كخام للحديد، وفي صناعة الفولاذ، والدراسات الجيولوجية، والعينات المتحفية.',

  location:
    'Germany, Austria, United Kingdom, Czech Republic, China, Brazil, South Africa, and the United States.',

  arabicLocation:
    'ألمانيا، النمسا، المملكة المتحدة، التشيك، الصين، البرازيل، جنوب أفريقيا، والولايات المتحدة.',

},
{
  id: 'native-silver',
  museumNumber: 'DM-42',

  name: 'Native Silver',
  arabicName: 'الفضة الحرة',

  image: MINERAL_IMAGES.nativeSilver,
  gallery: MINERAL_GALLERY.nativeSilver,

  description:
    'Native Silver is naturally occurring metallic silver found in its elemental form. It commonly forms in hydrothermal veins, oxidized ore deposits, and volcanic environments. Owing to its excellent electrical and thermal conductivity, brilliant metallic luster, and rarity, native silver is highly valued as both an ore mineral and a collector\'s specimen.',

  arabicDescription:
    'الفضة الحرة هي الفضة التي توجد في الطبيعة على هيئة عنصر حر دون اتحادها مع عناصر أخرى. تتكوّن غالبًا في العروق الحرارية المائية، والمناطق المؤكسدة للرواسب المعدنية، وبعض البيئات البركانية. وتُعد من أهم مصادر الفضة الطبيعية، كما تتميز بموصليتها الكهربائية والحرارية العالية وبريقها الفلزي وقيمتها الاقتصادية.',

  subtitle: 'Native Element · Silver Group',
  arabicSubtitle: 'عنصر طبيعي · مجموعة الفضة',

  type: 'Native Element Mineral',
  arabicType: 'معدن من العناصر الطبيعية',

  chemicalFormula: 'Ag',
  arabicChemicalFormula: 'الفضة',

  hardness: '2.5–3 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Isometric (Cubic)',
  arabicCrystalSystem: 'متساوي القياس (مكعب)',

  streak: 'Silver White',
  arabicStreak: 'أبيض فضي',

  formation:
    'Forms in hydrothermal veins, oxidized zones of ore deposits, and volcanic environments through precipitation of native silver.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية، والمناطق المؤكسدة للرواسب المعدنية، وبعض البيئات البركانية نتيجة ترسب الفضة الطبيعية.',

  color: 'Silver Gray',
  arabicColor: 'رمادي فضي',

  environment:
    'Hydrothermal veins, volcanic rocks, oxidized ore deposits, and placer deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، الصخور البركانية، الرواسب المعدنية المؤكسدة، والرواسب الغرينية.',

  uses:
    'Jewelry, coins, electronics, electrical contacts, solar panels, photography, medical applications, and mineral collections.',

  arabicUses:
    'يستخدم في المجوهرات، والعملات، والإلكترونيات، والموصلات الكهربائية، والألواح الشمسية، والتصوير، والتطبيقات الطبية، والعينات المتحفية.',

  location:
    'Mexico, Peru, Canada, United States, Germany, Norway, Australia, and Chile.',

  arabicLocation:
    'المكسيك، بيرو، كندا، الولايات المتحدة، ألمانيا، النرويج، أستراليا، وتشيلي.',

},
{
  id: 'smithsonite',
  museumNumber: 'DM-44',

  name: 'Smithsonite',
  arabicName: 'سميثسونيت',

  image: MINERAL_IMAGES.smithsonite,
  gallery: MINERAL_GALLERY.smithsonite,

  description:
    'Smithsonite is a zinc carbonate mineral commonly found in the oxidation zones of zinc ore deposits. It is prized for its attractive botryoidal crystal habit, vitreous to pearly luster, and wide range of colors. Although once an important ore of zinc, today it is highly valued by mineral collectors and is occasionally fashioned into ornamental gemstones.',

  arabicDescription:
    'السميثسونيت هو معدن من كربونات الزنك، ويتكوّن غالبًا في مناطق أكسدة رواسب خامات الزنك. يتميز بأشكاله العنقودية الكروية (Botryoidal) وبريقه الزجاجي إلى اللؤلؤي وتنوع ألوانه. وكان يُعد قديمًا أحد أهم خامات الزنك، أما اليوم فيُقدّر بشكل كبير كعينة معدنية مميزة، ويستخدم أحيانًا كحجر زينة.',

  subtitle: 'Carbonate · Calcite Group',
  arabicSubtitle: 'كربونات · مجموعة الكالسيت',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربوناتي',

  chemicalFormula: 'ZnCO₃',
  arabicChemicalFormula: 'كربونات الزنك',

  hardness: '4–4.5 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms as a secondary mineral in the oxidation zones of zinc-rich sulfide deposits.',

  arabicFormation:
    'يتكوّن كمعدن ثانوي في مناطق أكسدة رواسب كبريتيدات الزنك.',

  color:
    'White, gray, green, blue, pink, yellow, brown',

  arabicColor:
    'أبيض، رمادي، أخضر، أزرق، وردي، أصفر، بني',

  environment:
    'Oxidized zinc deposits, carbonate-hosted ore bodies, hydrothermal environments.',

  arabicEnvironment:
    'رواسب الزنك المؤكسدة، والرواسب الكربوناتية، والبيئات الحرارية المائية.',

  uses:
    'Zinc ore, collector specimens, ornamental stones, and gemstones.',

  arabicUses:
    'يستخدم كخام للزنك، وفي العينات المتحفية، وأحجار الزينة، والأحجار الكريمة.',

  location:
    'Namibia, Mexico, Greece, Italy (Sardinia), Australia, United States, and Morocco.',

  arabicLocation:
    'ناميبيا، المكسيك، اليونان، إيطاليا (سردينيا)، أستراليا، الولايات المتحدة، والمغرب.',

},
{
  id: 'sphalerite-with-wurtzite',
  museumNumber: 'DM-45',

  name: 'Sphalerite with Wurtzite',
  arabicName: 'سفاليريت مع وورتزيت',

  image: MINERAL_IMAGES.sphaleriteWithWurtzite,
  gallery: MINERAL_GALLERY.sphaleriteWithWurtzite,

  description:
    'Sphalerite with Wurtzite is a natural association of the two principal polymorphs of zinc sulfide (ZnS). Sphalerite crystallizes in the isometric system, whereas wurtzite forms in the hexagonal system. These minerals commonly occur together in hydrothermal ore deposits and are important sources of zinc. Their coexistence reflects variations in temperature and pressure during mineral formation.',

  arabicDescription:
    'السفاليريت مع الوورتزيت هو تجمع طبيعي للشكلين المتعددين لمعدن كبريتيد الزنك (ZnS). يتبلور السفاليريت في النظام المكعب، بينما يتبلور الوورتزيت في النظام السداسي. يوجد المعدنان معًا في العديد من الرواسب الحرارية المائية ويعدان من أهم خامات الزنك، ويعكس وجودهما معًا اختلاف ظروف الحرارة والضغط أثناء التكوين.',

  subtitle: 'Sulfide · Zinc Sulfides',
  arabicSubtitle: 'كبريتيدات · كبريتيدات الزنك',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيدي',

  chemicalFormula: 'ZnS',
  arabicChemicalFormula: 'كبريتيد الزنك',

  hardness: '3.5–4 (Mohs)',

  luster: 'Resinous to Submetallic',
  arabicLuster: 'راتنجي إلى شبه فلزي',

  crystalSystem: 'Isometric (Sphalerite) / Hexagonal (Wurtzite)',
  arabicCrystalSystem: 'مكعب (السفاليريت) / سداسي (الوورتزيت)',

  streak: 'Light Brown to Yellowish Brown',
  arabicStreak: 'بني فاتح إلى بني مصفر',

  formation:
    'Forms in medium- to low-temperature hydrothermal veins and replacement deposits associated with lead, silver, and copper ores.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية متوسطة إلى منخفضة الحرارة وفي رواسب الإحلال المصاحبة لخامات الرصاص والفضة والنحاس.',

  color:
    'Gray, black, brown, yellow, reddish brown',

  arabicColor:
    'رمادي، أسود، بني، أصفر، بني محمر',

  environment:
    'Hydrothermal veins, carbonate-hosted ore deposits, and massive sulfide deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، والرواسب الكربوناتية الحاملة للخامات، ورواسب الكبريتيدات الكتلية.',

  uses:
    'Primary ore of zinc, production of brass and galvanized steel, chemical industry, and mineral collections.',

  arabicUses:
    'الخام الرئيسي لإنتاج الزنك، وصناعة النحاس الأصفر، والفولاذ المجلفن، والصناعات الكيميائية، والعينات المتحفية.',

  location:
    'China, Peru, Mexico, Canada, United States, Spain, Australia, and Morocco.',

  arabicLocation:
    'الصين، بيرو، المكسيك، كندا، الولايات المتحدة، إسبانيا، أستراليا، والمغرب.',

},
{
  id: 'stibnite',
  museumNumber: 'DM-46',

  name: 'Stibnite',
  arabicName: 'ستبنيت',

  image: MINERAL_IMAGES.stibnite,
  gallery: MINERAL_GALLERY.stibnite,

  description:
    'Stibnite is the principal ore mineral of antimony and is recognized by its long, slender metallic crystals with a bright lead-gray color. It commonly forms in low-temperature hydrothermal veins associated with quartz, calcite, barite, and sulfide minerals. Well-formed stibnite crystals are among the most spectacular metallic mineral specimens.',

  arabicDescription:
    'الستبنيت هو المعدن الخام الرئيسي للأنتيمون، ويتميز ببلوراته الطويلة والإبرية ذات البريق المعدني واللون الرمادي الرصاصي. يتكوّن عادةً في العروق الحرارية المائية منخفضة الحرارة مصاحبًا للكوارتز والكالسيت والباريت والمعادن الكبريتيدية، وتُعد عيناته البلورية من أجمل العينات المعدنية الفلزية.',

  subtitle: 'Sulfide · Antimony Group',
  arabicSubtitle: 'كبريتيدات · مجموعة الأنتيمون',

  type: 'Sulfide Mineral',
  arabicType: 'معدن كبريتيدي',

  chemicalFormula: 'Sb₂S₃',
  arabicChemicalFormula: 'كبريتيد الأنتيمون',

  hardness: '2 (Mohs)',

  luster: 'Metallic',
  arabicLuster: 'فلزي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'Lead Gray',
  arabicStreak: 'رمادي رصاصي',

  formation:
    'Forms in low-temperature hydrothermal veins associated with quartz, calcite, barite, cinnabar, and other sulfide minerals.',

  arabicFormation:
    'يتكوّن في العروق الحرارية المائية منخفضة الحرارة مصاحبًا للكوارتز والكالسيت والباريت والسينابار والمعادن الكبريتيدية الأخرى.',

  color:
    'Lead Gray to Steel Gray',

  arabicColor:
    'رمادي رصاصي إلى رمادي فولاذي',

  environment:
    'Hydrothermal veins, epithermal deposits, and antimony-bearing ore deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، والرواسب فوق الحرارية، ورواسب خامات الأنتيمون.',

  uses:
    'Primary ore of antimony, used in flame retardants, batteries, semiconductors, alloys, and collectors’ specimens.',

  arabicUses:
    'الخام الرئيسي للأنتيمون، ويستخدم في مثبطات اللهب، والبطاريات، وأشباه الموصلات، والسبائك المعدنية، والعينات المتحفية.',

  location:
    'China, Romania, Japan, Mexico, Peru, Morocco, Russia, and Bolivia.',

  arabicLocation:
    'الصين، رومانيا، اليابان، المكسيك، بيرو، المغرب، روسيا، وبوليفيا.',

},
{
  id: 'stilbite',
  museumNumber: 'DM-47',

  name: 'Stilbite',
  arabicName: 'ستيلبيت',

  image: MINERAL_IMAGES.stilbite,
  gallery: MINERAL_GALLERY.stilbite,

  description:
    'Stilbite is a hydrous tectosilicate mineral belonging to the zeolite group. It commonly forms delicate sheaf-like, fan-shaped, or bow-tie crystal aggregates in cavities within volcanic rocks. Its attractive crystal habits and soft pastel colors make it one of the most sought-after zeolite minerals among collectors.',

  arabicDescription:
    'الستيلبيت هو معدن سيليكات مائية ينتمي إلى مجموعة الزيوليت. يتكوّن غالبًا على هيئة تجمعات بلورية مروحية أو حزم شعاعية داخل تجاويف الصخور البركانية. ويُعد من أشهر معادن الزيوليت لجمال بلوراته وألوانه الهادئة، لذلك يحظى بتقدير كبير لدى هواة جمع المعادن.',

  subtitle: 'Zeolite · Tectosilicate Group',
  arabicSubtitle: 'زيوليت · مجموعة التكتوسيليكات',

  type: 'Zeolite Mineral',
  arabicType: 'معدن زيوليت',

  chemicalFormula: 'NaCa₄(Si₂₇Al₉)O₇₂·28H₂O',
  arabicChemicalFormula: 'سيليكات الصوديوم والكالسيوم المائية',

  hardness: '3.5–4 (Mohs)',

  luster: 'Vitreous to Pearly',
  arabicLuster: 'زجاجي إلى لؤلؤي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms in cavities of basaltic volcanic rocks through low-temperature hydrothermal alteration.',

  arabicFormation:
    'يتكوّن داخل تجاويف الصخور البركانية البازلتية نتيجة عمليات التحول الحراري المائي منخفضة الحرارة.',

  color:
    'White, cream, peach, pink, yellow, brown',

  arabicColor:
    'أبيض، كريمي، خوخي، وردي، أصفر، بني',

  environment:
    'Basalt cavities, volcanic rocks, hydrothermal veins, and zeolite deposits.',

  arabicEnvironment:
    'تجاويف البازلت، والصخور البركانية، والعروق الحرارية المائية، ورواسب الزيوليت.',

  uses:
    'Collector specimens, mineral displays, scientific research, and educational collections.',

  arabicUses:
    'عينات متحفية، وهواية جمع المعادن، والأبحاث العلمية، والمجموعات التعليمية.',

  location:
    'India, Iceland, United States, Italy, Scotland, New Zealand, and Germany.',

  arabicLocation:
    'الهند، آيسلندا، الولايات المتحدة، إيطاليا، اسكتلندا، نيوزيلندا، وألمانيا.',

},
{
  id: 'sulfur',
  museumNumber: 'DM-48',

  name: 'Sulfur',
  arabicName: 'الكبريت',

  image: MINERAL_IMAGES.sulfur,
  gallery: MINERAL_GALLERY.sulfur,

  description:
    'Sulfur is a native element mineral known for its bright yellow color and brittle nature. It commonly forms around volcanic fumaroles, hot springs, and evaporite deposits, where sulfur-rich gases cool and crystallize. Sulfur has been used for thousands of years and remains an essential raw material in the chemical industry.',

  arabicDescription:
    'الكبريت هو معدن من العناصر الطبيعية يتميز بلونه الأصفر الزاهي وهشاشته. يتكوّن غالبًا حول الفوهات البركانية والينابيع الحارة والرواسب التبخيرية، حيث تتبلور الغازات الغنية بالكبريت عند انخفاض درجة حرارتها. وقد استُخدم الكبريت منذ آلاف السنين، ولا يزال مادة أساسية في الصناعات الكيميائية.',

  subtitle: 'Native Element · Sulfur Group',
  arabicSubtitle: 'عنصر طبيعي · مجموعة الكبريت',

  type: 'Native Element Mineral',
  arabicType: 'معدن من العناصر الطبيعية',

  chemicalFormula: 'S',
  arabicChemicalFormula: 'الكبريت',

  hardness: '1.5–2.5 (Mohs)',

  luster: 'Resinous',
  arabicLuster: 'راتنجي',

  crystalSystem: 'Orthorhombic',
  arabicCrystalSystem: 'معيني قائم',

  streak: 'Yellow',
  arabicStreak: 'أصفر',

  formation:
    'Forms around volcanic fumaroles, hot springs, and evaporite deposits through precipitation from sulfur-rich gases and fluids.',

  arabicFormation:
    'يتكوّن حول الفوهات البركانية والينابيع الحارة والرواسب التبخيرية نتيجة ترسب الكبريت من الغازات والسوائل الغنية به.',

  color:
    'Bright Yellow to Greenish Yellow',

  arabicColor:
    'أصفر زاهٍ إلى أصفر مخضر',

  environment:
    'Volcanic regions, fumaroles, hot springs, and evaporite deposits.',

  arabicEnvironment:
    'المناطق البركانية، والفوهات البركانية، والينابيع الحارة، والرواسب التبخيرية.',

  uses:
    'Sulfuric acid production, fertilizers, pharmaceuticals, rubber vulcanization, fungicides, matches, and chemical manufacturing.',

  arabicUses:
    'إنتاج حمض الكبريتيك، والأسمدة، والأدوية، وفلكنة المطاط، والمبيدات الفطرية، وأعواد الثقاب، والصناعات الكيميائية.',

  location:
    'Italy, Poland, United States, Mexico, Japan, Indonesia, Chile, and Saudi Arabia.',

  arabicLocation:
    'إيطاليا، بولندا، الولايات المتحدة، المكسيك، اليابان، إندونيسيا، تشيلي، والمملكة العربية السعودية.',

},
{
  id: 'tigers-eye',
  museumNumber: 'DM-49',

  name: "Tiger's Eye",
  arabicName: 'عين النمر',

  image: MINERAL_IMAGES.tigersEye,
  gallery: MINERAL_GALLERY.tigersEye,

  description:
    "Tiger's Eye is a chatoyant variety of quartz formed by the replacement of crocidolite fibers with silica while preserving the original fibrous structure. Its silky golden-brown bands produce the famous 'cat's eye' effect, making it one of the world's most popular ornamental gemstones.",

  arabicDescription:
    'عين النمر هو نوع من الكوارتز يتميز بظاهرة التشاتويانسي (عين القط)، وينشأ نتيجة إحلال السيليكا محل ألياف معدن الكروسيدوليت مع الاحتفاظ بالبنية الليفية الأصلية. ويشتهر بخطوطه الذهبية والبنية اللامعة التي تعطيه مظهر عين النمر، مما يجعله من أشهر أحجار الزينة في العالم.',

  subtitle: 'Quartz Variety · Silicate Group',
  arabicSubtitle: 'نوع من الكوارتز · مجموعة السيليكات',

  type: 'Gemstone',
  arabicType: 'حجر كريم',

  chemicalFormula: 'SiO₂',
  arabicChemicalFormula: 'ثاني أكسيد السيليكون',

  hardness: '7 (Mohs)',

  luster: 'Silky',
  arabicLuster: 'حريري',

  crystalSystem: 'Trigonal (Quartz)',
  arabicCrystalSystem: 'ثلاثي (كوارتز)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through the silicification of crocidolite fibers during metamorphic and hydrothermal processes.',

  arabicFormation:
    'يتكوّن نتيجة إحلال السيليكا محل ألياف الكروسيدوليت أثناء عمليات التحول والعمليات الحرارية المائية.',

  color:
    'Golden Brown, Yellow, Brown, Reddish Brown',

  arabicColor:
    'بني ذهبي، أصفر، بني، بني محمر',

  environment:
    'Metamorphic rocks and hydrothermal quartz veins.',

  arabicEnvironment:
    'الصخور المتحولة وعروق الكوارتز الحرارية المائية.',

  uses:
    'Gemstones, jewelry, carvings, ornamental objects, and collector specimens.',

  arabicUses:
    'الحلي والمجوهرات، والمنحوتات، وأحجار الزينة، والعينات المتحفية.',

  location:
    'South Africa, Namibia, Australia, India, Brazil, and United States.',

  arabicLocation:
    'جنوب أفريقيا، ناميبيا، أستراليا، الهند، البرازيل، والولايات المتحدة.',

},
{
  id: 'tourmaline',
  museumNumber: 'DM-50',

  name: 'Tourmaline',
  arabicName: 'التورمالين',

  image: MINERAL_IMAGES.tourmaline,
  gallery: MINERAL_GALLERY.tourmaline,

  description:
    'Tourmaline is a complex boron silicate mineral group renowned for its exceptional variety of colors and well-developed prismatic crystals. The black variety, known as Schorl, is the most common tourmaline species and is widely found in granitic pegmatites and metamorphic rocks. Due to its durability, piezoelectric properties, and aesthetic appeal, tourmaline is highly valued both as a gemstone and as a scientific mineral.',

  arabicDescription:
    'التورمالين هو مجموعة معقدة من معادن سيليكات البورون تشتهر بتنوع ألوانها وبلوراتها المنشورية الطويلة. ويُعد التورمالين الأسود (شورل) أكثر أنواعه شيوعًا، ويتواجد غالبًا في البيجماتيت الجرانيتية والصخور المتحولة. وبفضل صلابته وخصائصه الكهروضغطية وجماله، يُستخدم كحجر كريم وعينة معدنية ذات أهمية علمية.',

  subtitle: 'Cyclosilicate · Tourmaline Group',
  arabicSubtitle: 'سيكلوسيليكات · مجموعة التورمالين',

  type: 'Cyclosilicate Mineral',
  arabicType: 'معدن سيكلوسيليكات',

  chemicalFormula: 'NaFe₃Al₆(BO₃)₃Si₆O₁₈(OH)₄',
  arabicChemicalFormula: 'سيليكات بورون الصوديوم والحديد والألومنيوم',

  hardness: '7–7.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Trigonal',
  arabicCrystalSystem: 'ثلاثي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms primarily in granitic pegmatites, metamorphic rocks, and hydrothermal veins.',

  arabicFormation:
    'يتكوّن أساسًا في البيجماتيت الجرانيتية، والصخور المتحولة، والعروق الحرارية المائية.',

  color:
    'Black, Green, Pink, Blue, Red, Yellow, Brown, Colorless',

  arabicColor:
    'أسود، أخضر، وردي، أزرق، أحمر، أصفر، بني، عديم اللون',

  environment:
    'Pegmatites, metamorphic rocks, granites, and hydrothermal veins.',

  arabicEnvironment:
    'البيجماتيت، والصخور المتحولة، والجرانيت، والعروق الحرارية المائية.',

  uses:
    'Gemstones, jewelry, collector specimens, pressure sensors, electronic devices, and scientific research.',

  arabicUses:
    'الأحجار الكريمة، والمجوهرات، والعينات المتحفية، وأجهزة الاستشعار، وبعض التطبيقات الإلكترونية، والأبحاث العلمية.',

  location:
    'Brazil, Afghanistan, Pakistan, Madagascar, Namibia, Mozambique, United States, and Sri Lanka.',

  arabicLocation:
    'البرازيل، أفغانستان، باكستان، مدغشقر، ناميبيا، موزمبيق، الولايات المتحدة، وسريلانكا.',

},
{
  id: 'travertine',
  museumNumber: 'DM-51',

  name: 'Travertine',
  arabicName: 'الترافرتين',

  image: MINERAL_IMAGES.travertine,
  gallery: MINERAL_GALLERY.travertine,

  description:
    'Travertine is a terrestrial sedimentary limestone composed mainly of calcium carbonate. It forms through the rapid precipitation of calcite from mineral-rich hot springs, caves, and groundwater. Its porous texture and attractive appearance have made it a popular decorative and construction stone since ancient Roman times.',

  arabicDescription:
    'الترافرتين هو حجر جيري رسوبي أرضي يتكون أساسًا من كربونات الكالسيوم. يتشكل نتيجة الترسيب السريع للكالسيت من المياه الغنية بالمعادن في الينابيع الحارة والكهوف والمياه الجوفية. ويتميز بمساميته ومظهره الجميل، مما جعله من أشهر أحجار البناء والزينة منذ العصر الروماني.',

  subtitle: 'Sedimentary Rock · Limestone Variety',
  arabicSubtitle: 'صخر رسوبي · أحد أنواع الحجر الجيري',

  type: 'Sedimentary Carbonate Rock',
  arabicType: 'صخر كربوناتي رسوبي',

  chemicalFormula: 'CaCO₃',
  arabicChemicalFormula: 'كربونات الكالسيوم',

  hardness: '3 (Mohs)',

  luster: 'Dull to Vitreous',
  arabicLuster: 'باهت إلى زجاجي',

  crystalSystem: 'Trigonal (Calcite)',
  arabicCrystalSystem: 'ثلاثي (للكالسيت)',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms by precipitation of calcium carbonate from mineral-rich hot springs, caves, rivers, and groundwater.',

  arabicFormation:
    'يتكوّن بترسيب كربونات الكالسيوم من المياه الغنية بالمعادن في الينابيع الحارة والكهوف والأنهار والمياه الجوفية.',

  color:
    'White, Cream, Beige, Gray, Brown',

  arabicColor:
    'أبيض، كريمي، بيج، رمادي، بني',

  environment:
    'Hot springs, caves, river systems, and carbonate-rich groundwater environments.',

  arabicEnvironment:
    'الينابيع الحارة، والكهوف، والأنهار، وبيئات المياه الجوفية الغنية بالكربونات.',

  uses:
    'Building stone, flooring, wall cladding, monuments, landscaping, and interior decoration.',

  arabicUses:
    'أحجار البناء، والأرضيات، وتكسية الجدران، والآثار، وتنسيق الحدائق، والديكور الداخلي.',

  location:
    'Italy, Turkey, Iran, Mexico, United States, China, and Saudi Arabia.',

  arabicLocation:
    'إيطاليا، تركيا، إيران، المكسيك، الولايات المتحدة، الصين، والمملكة العربية السعودية.',

},
{
  id: 'trona',
  museumNumber: 'DM-52',

  name: 'Trona',
  arabicName: 'الترونا',

  image: MINERAL_IMAGES.trona,
  gallery: MINERAL_GALLERY.trona,

  description:
    'Trona is an evaporite mineral composed of hydrated sodium carbonate bicarbonate. It forms in highly alkaline saline lakes through the evaporation of sodium-rich waters. Trona is the world’s primary natural source of soda ash, an essential industrial chemical.',

  arabicDescription:
    'الترونا معدن تبخري يتكون من كربونات وبيكربونات الصوديوم المائية. يتشكل في البحيرات الملحية القلوية نتيجة تبخر المياه الغنية بالصوديوم، ويُعد المصدر الطبيعي الرئيسي لإنتاج رماد الصودا المستخدم في العديد من الصناعات.',

  subtitle: 'Carbonate Mineral · Evaporite Group',
  arabicSubtitle: 'معدن كربوناتي · مجموعة المعادن التبخيرية',

  type: 'Carbonate Mineral',
  arabicType: 'معدن كربوناتي',

  chemicalFormula: 'Na₃(HCO₃)(CO₃)·2H₂O',
  arabicChemicalFormula: 'كربونات وبيكربونات الصوديوم المائية',

  hardness: '2.5–3 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms through evaporation in highly alkaline saline lakes and closed-basin evaporite environments.',

  arabicFormation:
    'يتكوّن نتيجة تبخر المياه في البحيرات الملحية القلوية والبيئات التبخيرية المغلقة.',

  color:
    'Colorless, White, Gray, Yellowish',

  arabicColor:
    'عديم اللون، أبيض، رمادي، مصفر',

  environment:
    'Alkaline saline lakes and evaporite basins.',

  arabicEnvironment:
    'البحيرات الملحية القلوية والأحواض التبخيرية.',

  uses:
    'Production of soda ash, glass manufacturing, detergents, paper, chemicals, and water treatment.',

  arabicUses:
    'إنتاج رماد الصودا، وصناعة الزجاج، والمنظفات، والورق، والمواد الكيميائية، ومعالجة المياه.',

  location:
    'United States (Wyoming), Kenya, Turkey, China, Egypt, and Ethiopia.',

  arabicLocation:
    'الولايات المتحدة (وايومنغ)، كينيا، تركيا، الصين، مصر، وإثيوبيا.',

},
{
  id: 'vanadinite',
  museumNumber: 'DM-53',

  name: 'Vanadinite',
  arabicName: 'الفانادينيت',

  image: MINERAL_IMAGES.vanadinite,
  gallery: MINERAL_GALLERY.vanadinite,

  description:
    'Vanadinite is a lead vanadate chloride mineral best known for its brilliant red to orange hexagonal crystals. It forms in the oxidation zones of lead ore deposits in arid regions and is one of the world’s most important vanadium-bearing minerals.',

  arabicDescription:
    'الفانادينيت معدن يتكون من فانادات الرصاص والكلور، ويشتهر ببلوراته السداسية ذات اللون الأحمر إلى البرتقالي اللامع. يتكون في مناطق أكسدة رواسب الرصاص، خاصة في البيئات الصحراوية، ويُعد من أهم خامات عنصر الفاناديوم.',

  subtitle: 'Vanadate Mineral · Apatite Group',
  arabicSubtitle: 'معدن فانادات · مجموعة الأباتيت',

  type: 'Vanadate Mineral',
  arabicType: 'معدن فانادات',

  chemicalFormula: 'Pb₅(VO₄)₃Cl',
  arabicChemicalFormula: 'فانادات الرصاص والكلور',

  hardness: '2.5–3 (Mohs)',

  luster: 'Resinous to Adamantine',
  arabicLuster: 'راتنجي إلى ألماسي',

  crystalSystem: 'Hexagonal',
  arabicCrystalSystem: 'سداسي',

  streak: 'Pale Yellow',
  arabicStreak: 'أصفر فاتح',

  formation:
    'Forms in the oxidation zones of lead deposits where vanadium-rich fluids react with lead-bearing minerals.',

  arabicFormation:
    'يتكوّن في مناطق أكسدة رواسب الرصاص نتيجة تفاعل السوائل الغنية بالفاناديوم مع معادن الرصاص.',

  color:
    'Bright Red, Orange-Red, Brownish Red',

  arabicColor:
    'أحمر زاهٍ، أحمر برتقالي، أحمر بني',

  environment:
    'Oxidized lead deposits in arid and semi-arid regions.',

  arabicEnvironment:
    'مناطق أكسدة رواسب الرصاص في البيئات الصحراوية وشبه الصحراوية.',

  uses:
    'Minor ore of vanadium, mineral collecting, scientific research, and museum display specimens.',

  arabicUses:
    'خام ثانوي للفاناديوم، وعينات للعرض المتحفي، والبحث العلمي، واقتناء الهواة.',

  location:
    'Morocco, Namibia, United States, Mexico, Argentina, Australia, and South Africa.',

  arabicLocation:
    'المغرب، ناميبيا، الولايات المتحدة، المكسيك، الأرجنتين، أستراليا، وجنوب أفريقيا.',

},
{
  id: 'vesuvianite',
  museumNumber: 'DM-54',

  name: 'Vesuvianite',
  arabicName: 'الفيسوفيانيت',

  image: MINERAL_IMAGES.vesuvianite,
  gallery: MINERAL_GALLERY.vesuvianite,

  description:
    'Vesuvianite is a calcium aluminum silicate mineral that forms during contact metamorphism of limestone and skarn deposits. It is well known for its prismatic crystals and occurs in a variety of colors, including green, brown, yellow, and purple. The mineral was first identified near Mount Vesuvius in Italy, from which it takes its name.',

  arabicDescription:
    'الفيسوفيانيت هو معدن من سيليكات الكالسيوم والألومنيوم يتكون في الصخور المتحولة بالتماس، خاصة في صخور السكارن والحجر الجيري المتحول. يتميز ببلوراته المنشورية، ويوجد بألوان متعددة مثل الأخضر والبني والأصفر والبنفسجي. اكتُشف لأول مرة بالقرب من جبل فيزوف في إيطاليا، ومنه اشتُق اسمه.',

  subtitle: 'Silicate Mineral · Sorosilicate Group',
  arabicSubtitle: 'معدن سيليكات · مجموعة السوروسيليكات',

  type: 'Sorosilicate Mineral',
  arabicType: 'معدن سوروسيليكات',

  chemicalFormula: 'Ca₁₉(Al,Mg,Fe)₁₃(SiO₄)₁₀(Si₂O₇)₄(O,OH,F)₁₀',
  arabicChemicalFormula: 'سيليكات الكالسيوم والألومنيوم',

  hardness: '6.5 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Tetragonal',
  arabicCrystalSystem: 'رباعي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms during contact metamorphism in skarn deposits and metamorphosed limestones through interaction between magma and carbonate rocks.',

  arabicFormation:
    'يتكوّن أثناء التحول بالتماس في رواسب السكارن والحجر الجيري المتحول نتيجة تفاعل الصهارة مع الصخور الكربوناتية.',

  color:
    'Green, Brown, Yellow, Purple, White',

  arabicColor:
    'أخضر، بني، أصفر، بنفسجي، أبيض',

  environment:
    'Skarn deposits, contact metamorphic zones, and metamorphosed limestones.',

  arabicEnvironment:
    'رواسب السكارن، ومناطق التحول بالتماس، والحجر الجيري المتحول.',

  uses:
    'Gemstone, mineral collecting, museum specimens, and geological research.',

  arabicUses:
    'الأحجار الكريمة، واقتناء العينات المعدنية، والعرض المتحفي، والبحث الجيولوجي.',

  location:
    'Italy, Canada, United States, Russia, Pakistan, Switzerland, Norway, and Kenya.',

  arabicLocation:
    'إيطاليا، كندا، الولايات المتحدة، روسيا، باكستان، سويسرا، النرويج، وكينيا.',

},
{
  id: 'wernerite',
  museumNumber: 'DM-55',

  name: 'Wernerite',
  arabicName: 'فيرنيرايت',

  image: MINERAL_IMAGES.wernerite,
  gallery: MINERAL_GALLERY.wernerite,

  description:
    'Wernerite is the historical name for Scapolite, a group of calcium and sodium aluminum tectosilicate minerals. It commonly forms in metamorphic rocks such as marble and gneiss, as well as in some igneous rocks. Well-formed crystals are valued by mineral collectors and may occasionally be cut as gemstones.',

  arabicDescription:
    'فيرنيرايت هو الاسم التاريخي لمجموعة معادن السكابوليت، وهي معادن من سيليكات الألومنيوم والكالسيوم والصوديوم. يتكون غالبًا في الصخور المتحولة مثل الرخام والنيس، كما يوجد أحيانًا في بعض الصخور النارية. وتُعد بلوراته الجيدة من العينات المميزة لهواة جمع المعادن، وقد تُستخدم كأحجار كريمة.',

  subtitle: 'Tectosilicate Mineral · Scapolite Group',
  arabicSubtitle: 'معدن تكتوسيليكات · مجموعة السكابوليت',

  type: 'Tectosilicate Mineral',
  arabicType: 'معدن تكتوسيليكات',

  chemicalFormula: '(Na,Ca)₄Al₃Si₉O₂₄Cl–Ca₄Al₆Si₆O₂₄CO₃',
  arabicChemicalFormula: 'سيليكات الألومنيوم والكالسيوم والصوديوم',

  hardness: '5–6 (Mohs)',

  luster: 'Vitreous',
  arabicLuster: 'زجاجي',

  crystalSystem: 'Tetragonal',
  arabicCrystalSystem: 'رباعي',

  streak: 'White',
  arabicStreak: 'أبيض',

  formation:
    'Forms mainly during regional and contact metamorphism of calcium-rich rocks and occasionally in igneous environments.',

  arabicFormation:
    'يتكوّن بشكل رئيسي أثناء التحول الإقليمي والتحول بالتماس للصخور الغنية بالكالسيوم، وقد يوجد أيضًا في بعض البيئات النارية.',

  color:
    'White, Gray, Colorless, Yellow, Green, Violet',

  arabicColor:
    'أبيض، رمادي، عديم اللون، أصفر، أخضر، بنفسجي',

  environment:
    'Metamorphic rocks including marble, gneiss, skarn, and occasionally igneous rocks.',

  arabicEnvironment:
    'الصخور المتحولة مثل الرخام والنيس والسكارن، وأحيانًا الصخور النارية.',

  uses:
    'Mineral collecting, gemstones, geological research, and museum specimens.',

  arabicUses:
    'اقتناء العينات المعدنية، والأحجار الكريمة، والبحث الجيولوجي، والعرض المتحفي.',

  location:
    'Canada, Norway, Italy, Myanmar, Pakistan, Madagascar, Brazil, and Russia.',

  arabicLocation:
    'كندا، النرويج، إيطاليا، ميانمار، باكستان، مدغشقر، البرازيل، وروسيا.',

},
{
  id: 'wolframite',
  museumNumber: 'DM-56',

  name: 'Wolframite',
  arabicName: 'الولفراميت',

  image: MINERAL_IMAGES.wolframite,
  gallery: MINERAL_GALLERY.wolframite,

  description:
    'Wolframite is an iron-manganese tungstate mineral and the principal ore of tungsten. It commonly occurs in quartz veins associated with granitic intrusions and hydrothermal deposits. Its high density and dark metallic appearance make it one of the most recognizable tungsten minerals.',

  arabicDescription:
    'الولفراميت هو معدن من تنغستات الحديد والمنغنيز، ويُعد الخام الرئيسي لاستخراج عنصر التنغستن. يوجد غالبًا في عروق الكوارتز المرتبطة بالصخور الجرانيتية والرواسب الحرارية المائية، ويتميز بكثافته العالية ولونه الأسود ولمعانه شبه الفلزي.',

  subtitle: 'Tungstate Mineral · Wolframite Group',
  arabicSubtitle: 'معدن تنغستات · مجموعة الولفراميت',

  type: 'Tungstate Mineral',
  arabicType: 'معدن تنغستات',

  chemicalFormula: '(Fe,Mn)WO₄',
  arabicChemicalFormula: 'تنغستات الحديد والمنغنيز',

  hardness: '4–4.5 (Mohs)',

  luster: 'Submetallic to Metallic',
  arabicLuster: 'شبه فلزي إلى فلزي',

  crystalSystem: 'Monoclinic',
  arabicCrystalSystem: 'أحادي الميل',

  streak: 'Dark Brown to Black',
  arabicStreak: 'بني داكن إلى أسود',

  formation:
    'Forms mainly in hydrothermal quartz veins and greisen deposits associated with granitic intrusions.',

  arabicFormation:
    'يتكوّن بشكل رئيسي في عروق الكوارتز الحرارية المائية ورواسب الجريزن المرتبطة بتداخلات الجرانيت.',

  color:
    'Black, Brownish Black, Dark Brown',

  arabicColor:
    'أسود، أسود مائل للبني، بني داكن',

  environment:
    'Hydrothermal veins, greisen deposits, pegmatites, and granite-related ore deposits.',

  arabicEnvironment:
    'العروق الحرارية المائية، ورواسب الجريزن، والبيغماتيت، ورواسب الجرانيت المعدنية.',

  uses:
    'Primary ore of tungsten for cutting tools, high-speed steel, aerospace alloys, mining equipment, and industrial applications.',

  arabicUses:
    'الخام الرئيسي لإنتاج التنغستن المستخدم في أدوات القطع، والفولاذ عالي السرعة، وسبائك الطيران، ومعدات التعدين، والتطبيقات الصناعية.',

  location:
    'China, Portugal, Bolivia, Russia, Austria, Rwanda, Spain, and Vietnam.',

  arabicLocation:
    'الصين، البرتغال، بوليفيا، روسيا، النمسا، رواندا، إسبانيا، وفيتنام.',

},

];

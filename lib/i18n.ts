export type Locale = 'en' | 'ar';

export const dictionary = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      rocks: 'Rock Collection',
      minerals: 'Mineral Collection',
      features: 'Features',
      featured: 'Featured Specimens',
      faculty: 'Faculty of Earth Sciences',
      about: 'About',
      contact: 'Contact',
      search: 'Search',
    },
    home: {
      heroTitle: 'DETHAR Geological Museum',
      heroSubtitle:
        'Explore the official digital archive of rocks, minerals, and Earth geological heritage from the Faculty of Earth Sciences.',
      exploreRocks: 'Explore the Rock Collection',
      exploreMinerals: 'Explore the Mineral Collection',
      scroll: 'Scroll to explore',
      aboutEyebrow: 'About the Museum',
      aboutTitle: 'A digital window into Earth deep history',
      aboutBody:
        'DETHAR is the digital geological museum of the Faculty of Earth Sciences at King Abdulaziz University. It preserves, studies, and presents a curated collection of rocks and minerals from across the Kingdom and beyond, making geological heritage accessible to students, researchers, and the public.',
      missionTitle: 'Our Mission',
      missionBody:
        'To document and share the geological wealth of the Arabian Peninsula through a rigorous, accessible digital collection that supports education and research.',
      visionTitle: 'Our Vision',
      visionBody:
        'To be the leading digital reference for the geological heritage of Saudi Arabia and the region, inspiring curiosity and stewardship of the Earth.',
      featuredEyebrow: 'Featured Specimens',
      featuredTitle: 'Highlights from the collection',
      featuredSubtitle:
        'A curated selection of remarkable specimens on display in the digital museum.',
      viewDetails: 'View Specimen',
      statsEyebrow: 'By the Numbers',
      statsTitle: 'A growing archive of the Earth',
      stats: {
        rocks: 'Rock Specimens',
        minerals: 'Mineral Specimens',
        total: 'Total Specimens',
        facts: 'Geological Facts',
      },
      ctaTitle: 'Start your geological journey',
      ctaBody:
        'Explore the full collection, learn how each specimen formed, and discover the story written in stone.',
      ctaRocks: 'Browse the Rock Collection',
      ctaMinerals: 'Browse the Mineral Collection',
      heroKicker: 'Faculty of Earth Sciences · King Abdulaziz University',
      storyEyebrow: 'The Collection',
      storyTitle: 'A living archive of the Earth',
      storyBody:
        'Every specimen in DETHAR is a fragment of deep time — a chapter from the story of the Arabian Shield, the Red Sea coast, and the volcanic fields of the west. Together, they form a living archive that anyone can explore.',
      storyStat1: 'Specimens documented',
      storyStat2: 'Field sites across the Kingdom',
      storyStat3: 'Years of fieldwork',
      featuredKicker: 'On display now',
      featuredLink: 'View all featured specimens',
      quoteText:
        'Every rock is an open book of Earth history — we are simply learning to read it.',
      quoteAttribution: 'DETHAR Curatorial Team',
      ctaKicker: 'Begin',
      mascotsEyebrow: 'Meet your Guides',
      mascotsTitle: 'Two friends, one journey',
      mascotsSubtitle:
        'Sakhr and Yaqoot will be your companions through the museum — introducing sections, sharing facts, and making every specimen come alive.',
      sakhrName: 'Sakhr',
      sakhrRole: 'Rock Guide',
      sakhrQuote: 'Every layer tells a story millions of years in the making.',
      sakhrWelcome:
        'Welcome to the Rocks Collection. Here you can explore every rock specimen preserved inside the DETHAR Geological Digital Museum.',
      yaqootName: 'Yaqoot',
      yaqootRole: 'Crystal Guide',
      yaqootQuote: 'In every crystal, the geometry of the Earth reveals itself.',
      yaqootWelcome:
        'Welcome to the Minerals Collection. Discover minerals, crystals and geological treasures through our curated collection.',
    },
    rocks: {
      title: 'The Rock Collection',
      eyebrow: 'Museum Archive',
      subtitle:
        'Every specimen is presented equally, exactly as it is arranged in the physical museum.',
      searchPlaceholder: 'Search the rock collection…',
      empty: 'No rocks match your search.',
      count: (n: number) => `${n} specimen${n === 1 ? '' : 's'}`,
    },
    minerals: {
      title: 'The Mineral Collection',
      eyebrow: 'Museum Archive',
      subtitle:
        'A growing reference of mineral specimens, each documented with its scientific properties.',
      searchPlaceholder: 'Search the mineral collection…',
      empty: 'No minerals match your search.',
      count: (n: number) => `${n} specimen${n === 1 ? '' : 's'}`,
    },
    details: {
      back: 'Back to collection',
      gallery: 'Gallery',
      information: 'Information',
      previous: 'Previous specimen',
      next: 'Next specimen',
      specimenNotFound: 'Specimen not found',
      specimenNotFoundDesc:
        'This specimen is not part of the current collection. It may have been moved or archived.',
      browseCollection: 'Browse the collection',
      fields: {
        type: 'Rock Type',
        texture: 'Texture',
        mineralogy: 'Mineralogy',
        formation: 'Formation',
        color: 'Color',
        environment: 'Environment',
        uses: 'Uses',
        location: 'Location',
        hardness: 'Hardness',
        luster: 'Luster',
        crystalSystem: 'Crystal System',
        streak: 'Streak',
      },
    },
    features: {
      title: 'Museum Features',
      eyebrow: 'What Makes DETHAR Unique',
      subtitle:
        'Discover the tools and experiences that bring the DETHAR digital museum to life — from interactive guides to detailed scientific documentation.',
      cards: [
        {
          title: 'Interactive Museum Guides',
          description:
            'Sakhr and Yaqoot, your personal geological companions, introduce each section of the museum with welcoming messages, fun facts, and contextual insights.',
        },
        {
          title: 'Detailed Specimen Documentation',
          description:
            'Every specimen in the collection is documented with its scientific properties, formation history, geographic origin, and geological significance.',
        },
        {
          title: 'Bilingual Experience',
          description:
            'The entire museum is available in both English and Arabic, with full right-to-left support, making geological heritage accessible to a wider audience.',
        },
        {
          title: 'Curated Featured Highlights',
          description:
            'Explore hand-picked specimens across categories — museum highlights, rare finds, Saudi specimens, newest additions, and editor picks.',
        },
        {
          title: 'Scientific Data Archive',
          description:
            'Each specimen page presents a museum-style archive table with mineralogy, hardness, luster, crystal system, streak, and more — all in one view.',
        },
        {
          title: 'Seamless Navigation',
          description:
            'Move effortlessly between specimens with previous and next navigation, breadcrumb back-links, and a fully responsive layout for any device.',
        },
      ],
    },
    featured: {
      title: 'Featured Specimens',
      eyebrow: 'Museum Highlights',
      subtitle:
        'Rare specimens, Saudi highlights, newest additions, and editor picks from the DETHAR collection.',
      tabs: {
        highlights: 'Museum Highlights',
        rare: 'Rare Specimens',
        saudi: 'Saudi Specimens',
        newest: 'Newest Additions',
        picks: "Editor's Picks",
      },
    },
    faculty: {
      title: 'Faculty of Earth Sciences',
      eyebrow: 'King Abdulaziz University',
      intro:
        'The Faculty of Earth Sciences at King Abdulaziz University is a leading center for geological education and research in the Kingdom of Saudi Arabia, and the home of the DETHAR digital museum.',
      campusTitle: 'A campus built on stone',
      campusBody:
        'Located in Jeddah, the faculty brings together laboratories, teaching collections, and field research programs across the Arabian Shield and the Red Sea coast.',
      departmentsTitle: 'Departments',
      departments: [
        { name: 'Geology', desc: 'Petrology, structural geology, and the geological mapping of the Kingdom.' },
        { name: 'Geophysics', desc: 'Seismic, potential-field, and subsurface imaging of the Arabian Plate.' },
        { name: 'Marine Geology', desc: 'Red Sea and Gulf of Aqaba coastal and marine geological processes.' },
        { name: 'Meteorology', desc: 'Atmospheric sciences, climate, and weather of the region.' },
        { name: 'Space Sciences', desc: 'Remote sensing, planetary geology, and Earth observation.' },
      ],
      missionTitle: 'Mission',
      missionBody:
        'To graduate qualified earth scientists, advance geological research, and serve society through the study and stewardship of natural resources.',
      visionTitle: 'Vision',
      visionBody:
        'To be a regional leader in earth sciences education and research, recognized for scientific rigor and national service.',
      historyTitle: 'A short history',
      historyBody:
        'Established in 1975, the faculty has grown into one of the most established earth-science schools in the region, with graduates working across mining, water, environment, and energy sectors nationwide.',
      galleryTitle: 'Faculty gallery',
    },
    about: {
      title: 'About DETHAR',
      eyebrow: 'The Museum',
      storyTitle: 'The story of DETHAR',
      storyBody:
        'DETHAR began as a teaching collection within the Faculty of Earth Sciences. Over decades of fieldwork across the Arabian Shield, the Red Sea coast, and the volcanic fields of Harrat Khaybar, the collection grew into a significant record of the Kingdom geological heritage. Today, DETHAR brings that collection online, so that every specimen can be studied in detail from anywhere.',
      purposeTitle: 'Purpose',
      purposeBody:
        'To preserve, document, and share geological specimens in a way that is rigorous, beautiful, and accessible to everyone, from first-year students to working geologists.',
      goalsTitle: 'Educational goals',
      goals: [
        'Make geological specimens accessible for study at any time, from anywhere.',
        'Support university courses in petrology, mineralogy, and field geology.',
        'Encourage public interest in the geology of Saudi Arabia and the region.',
        'Document the provenance and scientific context of every specimen.',
      ],
      futureTitle: 'Future vision',
      futureBody:
        'DETHAR will continue to grow with new specimens, 3D scans, and field collections, building a lasting digital record of the Earth beneath us.',
      teamEyebrow: 'The People',
      teamTitle: 'Project Team',
      teamSubtitle: 'Designed & Developed with passion by',
      teamMember1: 'Mohammed Khubrani',
      teamMember1Role: 'Co-Founder & Developer',
      teamMember2: 'Layan Hakmi',
      teamMember2Role: 'Co-Founder & Developer',
      teamStatement:
        'The DETHAR Geological Digital Museum is a collaborative academic project designed and developed by Mohammed Khubrani and Layan Hakmi. Every aspect of the project—including planning, design, development, museum experience, content organization and user experience—was created together through equal collaboration.',
      teamContact: 'Connect',
      teamLinkedIn: 'LinkedIn',
      teamTwitter: 'X (Twitter)',
      teamEmail: 'Email',
    },
    contact: {
      title: 'Contact',
      eyebrow: 'Get in touch',
      subtitle:
        'Questions about the collection, research access, or a visit? Send us a message.',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thank you. Your message has been received.',
      info: 'Museum information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'Faculty of Earth Sciences, King Abdulaziz University, Jeddah, Saudi Arabia',
      hoursLabel: 'Hours',
      hours: 'Sunday – Thursday, 9:00 – 16:00',
      follow: 'Follow the museum',
      mapAlt: 'Map showing the location of the Faculty of Earth Sciences in Jeddah',
    },
    footer: {
      tagline: 'A digital geological museum of the Faculty of Earth Sciences, King Abdulaziz University.',
      quickLinks: 'Quick Links',
      collection: 'Collection',
      about: 'About',
      rights: 'All rights reserved.',
      madeWith: 'DETHAR Geological Digital Museum',
    },
    common: {
      language: 'العربية',
      theme: 'Toggle theme',
      menu: 'Menu',
      close: 'Close',
      readMore: 'Read more',
      learnMore: 'Learn more',
      viewAll: 'View all',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      rocks: 'مجموعة الصخور',
      minerals: 'مجموعة المعادن',
      features: 'المميزات',
      featured: 'عينات مميزة',
      faculty: 'كلية علوم الأرض',
      about: 'عن المتحف',
      contact: 'تواصل معنا',
      search: 'بحث',
    },
    home: {
      heroTitle: 'متحف دثار الجيولوجي',
      heroSubtitle:
        'اكتشف الصخور والمعادن والتراث الجيولوجي للأرض من خلال متحف رقمي تفاعلي.',
      exploreRocks: 'استكشف الصخور',
      exploreMinerals: 'استكشف المعادن',
      scroll: 'مرر للأسفل',
      aboutEyebrow: 'عن المتحف',
      aboutTitle: 'نافذة رقمية على تاريخ الأرض العميق',
      aboutBody:
        'دثار هو المتحف الجيولوجي الرقمي لكلية علوم الأرض بجامعة الملك عبدالعزيز. يحفظ ويدرس ويعرض مجموعة منتقاة من الصخور والمعادن من المملكة وخارجها، ويجعل التراث الجيولوجي في متناول الطلاب والباحثين والجمهور.',
      missionTitle: 'رسالتنا',
      missionBody:
        'توثيق ومشاركة الثروة الجيولوجية لشبه الجزيرة العربية من خلال مجموعة رقمية دقيقة وسهلة الوصول تدعم التعليم والبحث العلمي.',
      visionTitle: 'رؤيتنا',
      visionBody:
        'أن نكون المرجع الرقمي الأول للتراث الجيولوجي للمملكة العربية السعودية والمنطقة، ونلهم الفضول والعناية بالأرض.',
      featuredEyebrow: 'عينات مميزة',
      featuredTitle: 'أبرز مقتنيات المجموعة',
      featuredSubtitle: 'مجموعة منتقاة من العينات الاستثنائية المعروضة في المتحف الرقمي.',
      viewDetails: 'عرض التفاصيل',
      statsEyebrow: 'بالأرقام',
      statsTitle: 'أرشيف متنامٍ من تاريخ الأرض',
      stats: {
        rocks: 'عينات صخور',
        minerals: 'عينات معادن',
        total: 'إجمالي العينات',
        facts: 'حقيقة جيولوجية',
      },
      ctaTitle: 'ابدأ رحلتك الجيولوجية',
      ctaBody:
        'استكشف المجموعة كاملة، وتعرّف على كيفية تكوّن كل عينة، واكتشف القصة المحفورة في الحجر.',
      ctaRocks: 'تصفّح مجموعة الصخور',
      ctaMinerals: 'تصفّح مجموعة المعادن',
      heroKicker: 'كلية علوم الأرض · جامعة الملك عبدالعزيز',
      storyEyebrow: 'المجموعة',
      storyTitle: 'أرشيف حيّ للأرض',
      storyBody:
        'كل عينة في دثار هي شظية من الزمن العميق — فصل من قصة الدرع العربي وساحل البحر الأحمر وحقول الحرات البركانية غرب المملكة. معًا، تشكّل أرشيفًا حيًا يستطيع الجميع استكشافه.',
      storyStat1: 'عينة موثّقة',
      storyStat2: 'موقع ميداني عبر المملكة',
      storyStat3: 'عام من العمل الميداني',
      featuredKicker: 'معروض الآن',
      featuredLink: 'عرض كل العينات المميزة',
      quoteText:
        'كل صخرة كتاب مفتوح لتاريخ الأرض — وكل ما نفعله هو أن نتعلّم قراءته.',
      quoteAttribution: 'فريق التنسيق في دثار',
      ctaKicker: 'ابدأ',
      mascotsEyebrow: 'تعرّف على مرشديك',
      mascotsTitle: 'صديقان، رحلة واحدة',
      mascotsSubtitle:
        'صخر وياقوت هما رفيقاك في المتحف — يقدّمان الأقسام، ويشاركان الحقائق، ويجعلان كل عينة تنبض بالحياة.',
      sakhrName: 'صخر',
      sakhrRole: 'مرشد الصخور',
      sakhrQuote: 'كل طبقة تروي قصة تمتد لملايين السنين.',
      sakhrWelcome:
        'أهلاً بكم في مجموعة الصخور. هنا يمكنكم استكشاف كل عينة صخر محفوظة في متحف دثار الجيولوجي الرقمي.',
      yaqootName: 'ياقوت',
      yaqootRole: 'مرشد البلورات',
      yaqootQuote: 'في كل بلور، يكشف هندس الأرض عن نفسه.',
      yaqootWelcome:
        'أهلاً بكم في مجموعة المعادن. اكتشفوا المعادن والبلورات والكنوز الجيولوجية عبر مجموعتنا المنسّقة.',
    },
    rocks: {
      title: 'مجموعة الصخور',
      eyebrow: 'أرشيف المتحف',
      subtitle: 'تُعرض كل عينة على قدم المساواة، تمامًا كما هي مرتّبة في المتحف الفعلي.',
      searchPlaceholder: 'ابحث في مجموعة الصخور…',
      empty: 'لا توجد صخور مطابقة لبحثك.',
      count: (n: number) => `${n} عينة`,
    },
    minerals: {
      title: 'مجموعة المعادن',
      eyebrow: 'أرشيف المتحف',
      subtitle: 'مرجع متنامٍ لعينات المعادن، موثّقة بخصائصها العلمية.',
      searchPlaceholder: 'ابحث في مجموعة المعادن…',
      empty: 'لا توجد معادن مطابقة لبحثك.',
      count: (n: number) => `${n} عينة`,
    },
    details: {
      back: 'العودة إلى المجموعة',
      gallery: 'المعرض',
      information: 'المعلومات',
      previous: 'العينة السابقة',
      next: 'العينة التالية',
      specimenNotFound: 'العينة غير موجودة',
      specimenNotFoundDesc:
        'هذه العينة ليست ضمن المجموعة الحالية. قد تكون قد نُقلت أو أُرشفت.',
      browseCollection: 'تصفّح المجموعة',
      fields: {
        type: 'نوع الصخر',
        texture: 'الملمس',
        mineralogy: 'التركيب المعدني',
        formation: 'التكوين',
        color: 'اللون',
        environment: 'البيئة',
        uses: 'الاستخدامات',
        location: 'الموقع',
        hardness: 'الصلادة',
        luster: 'البريق',
        crystalSystem: 'النظام البلوري',
        streak: 'أثر المعدن',
      },
    },
    features: {
      title: 'مميزات المتحف',
      eyebrow: 'ما الذي يميّز دثار',
      subtitle:
        'اكتشف الأدوات والتجارب التي تمنح متحف دثار الرقمي روحه — من المرشدين التفاعليين إلى التوثيق العلمي المفصّل.',
      cards: [
        {
          title: 'مرشدون تفاعليون للمتحف',
          description:
            'صخر وياقوت، رفيقاك الشخصيان في عالم الجيولوجيا، يقدّمان كل قسم من المتحف برسائل ترحيبية وحقائق ممتعة ورؤى سياقية.',
        },
        {
          title: 'توثيق تفصيلي للعينات',
          description:
            'كل عينة في المجموعة موثّقة بخصائصها العلمية وتاريخ تكوّنها وموقعها الجغرافي وأهميتها الجيولوجية.',
        },
        {
          title: 'تجربة ثنائية اللغة',
          description:
            'المتحف بأكمله متاح باللغتين الإنجليزية والعربية مع دعم كامل للكتابة من اليمين إلى اليسار، مما يجعل التراث الجيولوجي في متناول جمهور أوسع.',
        },
        {
          title: 'أبرز المقتنيات المنسّقة',
          description:
            'استكشف عينات مختارة بعناية عبر فئات متعددة — أبرز المقتنيات، والعينات النادرة، والعينات السعودية، وأحدث الإضافات، واختيارات المحرر.',
        },
        {
          title: 'أرشيف البيانات العلمية',
          description:
            'تعرض صفحة كل عينة جدول أرشيف بأسلوب المتاحف يشمل التركيب المعدني والصلادة والبريق والنظام البلوري وغير ذلك — في عرض واحد.',
        },
        {
          title: 'تنقّل سلس',
          description:
            'انتقل بسهولة بين العينات عبر أزرار السابق والتالي وروابط العودة، مع تصميم متجاوب بالكامل يعمل على أي جهاز.',
        },
      ],
    },
    featured: {
      title: 'عينات مميزة',
      eyebrow: 'أبرز المقتنيات',
      subtitle: 'عينات نادرة، وأخرى سعودية، وإضافات حديثة، واختيارات المحرر من مجموعة دثار.',
      tabs: {
        highlights: 'أبرز المقتنيات',
        rare: 'عينات نادرة',
        saudi: 'عينات سعودية',
        newest: 'أحدث الإضافات',
        picks: 'اختيارات المحرر',
      },
    },
    faculty: {
      title: 'كلية علوم الأرض',
      eyebrow: 'جامعة الملك عبدالعزيز',
      intro:
        'كلية علوم الأرض بجامعة الملك عبدالعزيز هي مركز رائد في التعليم والبحث الجيولوجي في المملكة العربية السعودية، وهي موطن المتحف الرقمي دثار.',
      campusTitle: 'حرم مبني على الحجر',
      campusBody:
        'تقع الكلية في جدة، وتضم المختبرات ومجموعات التدريس وبرامج البحث الميداني عبر الدرع العربي وساحل البحر الأحمر.',
      departmentsTitle: 'الأقسام',
      departments: [
        { name: 'الجيولوجيا', desc: 'علم الصخور والجيولوجيا الإنشائية وخرائط المملكة الجيولوجية.' },
        { name: 'الجيوفيزياء', desc: 'الزلازل والمجالات المحتملة وتصوير باطن الصفيحة العربية.' },
        { name: 'الجيولوجيا البحرية', desc: 'عمليات البحر الأحمر وخليج العقبة الساحلية والبحرية.' },
        { name: 'الأرصاد الجوية', desc: 'علوم الغلاف الجوي والمناخ وطقس المنطقة.' },
        { name: 'علوم الفضاء', desc: 'الاستشعار عن بعد والجيولوجيا الكوكبية ومراقبة الأرض.' },
      ],
      missionTitle: 'الرسالة',
      missionBody:
        'تخريج علماء أرض مؤهلين، وتطوير البحث الجيولوجي، وخدمة المجتمع عبر دراسة ورعاية الموارد الطبيعية.',
      visionTitle: 'الرؤية',
      visionBody:
        'أن نكون رائدًا إقليميًا في تعليم وبحوث علوم الأرض، معروفًا بالصرامة العلمية والخدمة الوطنية.',
      historyTitle: 'نبذة تاريخية',
      historyBody:
        'تأسست الكلية عام 1975، ونمت لتصبح واحدة من أكثر مدارس علوم الأرض رسوخًا في المنطقة، ويعمل خريجوها في قطاعات التعدين والمياه والبيئة والطاقة على مستوى المملكة.',
      galleryTitle: 'معرض الكلية',
    },
    about: {
      title: 'عن دثار',
      eyebrow: 'المتحف',
      storyTitle: 'قصة دثار',
      storyBody:
        'بدأ دثار كمجموعة تعليمية داخل كلية علوم الأرض. وعلى مدى عقود من العمل الميداني عبر الدرع العربي وساحل البحر الأحمر وحقول الحرات البركانية، نمت المجموعة لتصبح سجلًا مهمًا للتراث الجيولوجي للمملكة. واليوم يضع دثار هذه المجموعة على الإنترنت، ليمكن دراسة كل عينة بالتفصيل من أي مكان.',
      purposeTitle: 'الغرض',
      purposeBody:
        'حفظ وتوثيق ومشاركة العينات الجيولوجية بطريقة دقيقة وجميلة وفي متناول الجميع، من طلاب السنة الأولى إلى الجيولوجيين العاملين.',
      goalsTitle: 'الأهداف التعليمية',
      goals: [
        'جعل العينات الجيولوجية متاحة للدراسة في أي وقت ومن أي مكان.',
        'دعم مقررات الجامعة في علم الصخور والمعادن والجيولوجيا الميدانية.',
        'تشجيع الاهتمام العام بجيولوجيا المملكة العربية السعودية والمنطقة.',
        'توثيق المصدر والسياق العلمي لكل عينة.',
      ],
      futureTitle: 'الرؤية المستقبلية',
      futureBody:
        'سيستمر دثار في النمو بعينات جديدة ومسوحات ثلاثية الأبعاد ومجموعات ميدانية، لبناء سجل رقمي دائم للأرض تحت أقدامنا.',
      teamEyebrow: 'الأشخاص',
      teamTitle: 'فريق المشروع',
      teamSubtitle: 'صُمم وطُوّر بشغف بواسطة',
      teamMember1: 'محمد خبراني',
      teamMember1Role: 'مؤسس شريك ومطوّر',
      teamMember2: 'ليان حكمي',
      teamMember2Role: 'مؤسس شريك ومطوّر',
      teamStatement:
        'متحف دثار الجيولوجي الرقمي هو مشروع أكاديمي تعاوني تم تصميمه وتطويره من قبل محمد خبراني وليان حكمي، حيث تم تنفيذ جميع مراحل المشروع، بما في ذلك التخطيط، والتصميم، والتطوير، وتنظيم المحتوى، وتجربة المستخدم، بالشراكة الكاملة بينهما.',
      teamContact: 'تواصل',
      teamLinkedIn: 'لينكدإن',
      teamTwitter: 'إكس (تويتر)',
      teamEmail: 'البريد الإلكتروني',
    },
    contact: {
      title: 'تواصل معنا',
      eyebrow: 'كن على تواصل',
      subtitle: 'أسئلة حول المجموعة أو الوصول البحثي أو الزيارة؟ أرسل لنا رسالة.',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      success: 'شكرًا لك. تم استلام رسالتك.',
      info: 'معلومات المتحف',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'الموقع',
      location: 'كلية علوم الأرض، جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية',
      hoursLabel: 'ساعات العمل',
      hours: 'الأحد – الخميس، 9:00 – 16:00',
      follow: 'تابع المتحف',
      mapAlt: 'خريطة توضح موقع كلية علوم الأرض في جدة',
    },
    footer: {
      tagline: 'متحف جيولوجي رقمي لكلية علوم الأرض بجامعة الملك عبدالعزيز.',
      quickLinks: 'روابط سريعة',
      collection: 'المجموعة',
      about: 'عن المتحف',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'متحف دثار الجيولوجي الرقمي',
    },
    common: {
      language: 'English',
      theme: 'تبديل المظهر',
      menu: 'القائمة',
      close: 'إغلاق',
      readMore: 'اقرأ المزيد',
      learnMore: 'اعرف المزيد',
      viewAll: 'عرض الكل',
    },
  },
} as const;

export type Dictionary = (typeof dictionary)['en'];

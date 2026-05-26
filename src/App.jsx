import { useEffect, useRef, useState } from 'react';
import heroImage from '../img/hero.jpeg';
import logoImage from '../img/logo.jpg';
import familyImage from '../img/family.jpg';
import churchImage from '../img/chiesa.jpg';
import socialImage from '../img/social.jpg';

function SectionWave({ className = '' }) {
  return (
    <div className={`section-wave ${className}`} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,128L40,133.3C80,139,160,149,240,170.7C320,192,400,224,480,218.7C560,213,640,171,720,149.3C800,128,880,128,960,144C1040,160,1120,192,1200,197.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  );
}

function RevealSection({ children, className = '', id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const hasDarkWave = className.includes('section-dark');

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`${className} reveal-section ${visible ? 'is-visible' : ''}`}>
      {hasDarkWave && <SectionWave className="section-wave-top" />}
      {children}
      {hasDarkWave && <SectionWave className="section-wave-bottom" />}
    </section>
  );
}

const content = {
  it: {
    menu: ['Home', 'Chi Siamo', 'Orari', 'Offerte', 'FAQ', 'Contatto'],
    aboutEyebrow: 'Chi Siamo',
    aboutTitle: 'Una comunita cristiana che accoglie, adora e cammina insieme.',
    aboutText:
      'Ministero Internazionale Kabod Ticino e una casa spirituale dove il culto, la comunita e la presenza dello Spirito Santo si incontrano. Crediamo in una fede che trasforma la vita quotidiana, rafforza le famiglie e apre spazi reali di guarigione, speranza e crescita.',
    aboutTextSecondary:
      'Qui troverai un ambiente accogliente, multiculturale e familiare, in cui ogni persona viene incoraggiata a conoscere Dio, vivere la Sua Parola e costruire relazioni sincere. La nostra missione e servire con amore, formare discepoli e vedere vite rinnovate dalla grazia di Gesu.',
    missionCards: [
      {
        title: 'Adorazione',
        text: 'Culto autentico, preghiera fervente e spazio alla guida dello Spirito Santo.',
      },
      {
        title: 'Comunita',
        text: 'Una famiglia di fede che cammina insieme con amore, cura e sostegno reciproco.',
      },
      {
        title: 'Trasformazione',
        text: 'Un luogo dove la fede incontra la vita reale e genera cambiamento duraturo.',
      },
    ],
    pastorEyebrow: 'Pastor & Leadership',
    pastorTitle: 'Una guida fondata sulla fede, la visione e il servizio alle persone.',
    pastorText:
      'Pr. Salvatore D’Angella, sposato con Manuela Liguori e padre di due figlie, guida il ministero con passione, sensibilita spirituale e una chiara visione pastorale. Il suo desiderio e vedere persone guarite, fortificate nella fede e radicate in una comunita viva e matura.',
    pastorTextSecondary:
      'Attraverso la predicazione, la cura pastorale e una leadership dedicata, serve la chiesa con il cuore di chi vuole accompagnare ogni persona in un percorso reale di crescita, speranza e incontro con Dio.',
    pastorCards: [
      {
        title: 'Visione',
        text: 'Costruire una casa di fede che formi vite solide, famiglie forti e una testimonianza viva nel territorio.',
      },
      {
        title: 'Servizio',
        text: 'Guidare con integrita, amore pastorale e attenzione concreta alle persone e ai loro bisogni.',
      },
      {
        title: 'Eredita',
        text: 'Trasmettere fede, speranza e una cultura di presenza, preghiera e dedizione al Regno di Dio.',
      },
    ],
    churchEyebrow: 'La Chiesa',
    churchTitle: 'Nel cuore di Gravessano, Ticino, con un’atmosfera di famiglia e una visione aperta a tutti.',
    churchText:
      'La nostra chiesa si trova a Gravessano, Ticino, ed e un luogo dove nuovi visitatori, famiglie, giovani e persone di ogni provenienza possono sentirsi subito accolti. Qui troverai adorazione, preghiera, crescita spirituale e relazioni autentiche in un ambiente sereno e caloroso.',
    churchTextSecondary:
      'Crediamo in una comunita multiculturale, viva e accessibile, dove tutti sono benvenuti e dove ogni incontro diventa un’occasione per conoscere Dio piu profondamente e fare un passo nuovo nel proprio cammino di fede.',
    welcomeEyebrow: 'You Are Welcome Here',
    welcomeTitle: 'Se e la tua prima visita, c’e posto per te.',
    welcomeText:
      'Che tu stia tornando alla fede, cercando una comunita o desiderando semplicemente visitare, troverai un ambiente semplice, elegante e pieno di calore umano. Nessuno viene trattato come estraneo: qui sei ricevuto con gioia.',
    welcomeBulletA: 'Atmosfera familiare e accoglienza sincera dal primo momento.',
    welcomeBulletB: 'Momenti di lode, preghiera e insegnamento biblico pratico.',
    welcomeBulletC: 'Uno spazio dove crescere spiritualmente insieme ad altri credenti.',
    scheduleEyebrow: 'Orari',
    scheduleTitle: 'Appuntamenti settimanali per pregare, adorare e crescere insieme.',
    schedule: [
      { title: 'Preghiera', time: 'Martedi alle 20:00' },
      { title: 'Culto', time: 'Domenica alle 17:00' },
    ],
    youtubeEyebrow: 'Messaggio Online',
    youtubeTitle: 'Guarda il nostro ultimo messaggio',
    youtubeText:
      'Segui la predicazione piu recente, condividi il messaggio con chi ami e resta connesso con la visione del ministero durante la settimana.',
    youtubeButton: 'Iscriviti al canale',
    givingEyebrow: 'Offerte',
    givingTitle: 'Sostenere il ministero significa partecipare alla missione.',
    givingText:
      'La tua generosita contribuisce a sostenere l’adorazione, la cura della comunita, il lavoro pastorale e la missione della chiesa sul territorio. Ogni offerta diventa uno strumento concreto per servire persone, famiglie e nuove generazioni.',
    givingCards: [
      {
        title: 'Missione',
        text: 'Supporti la diffusione del Vangelo e la crescita di una comunita viva e radicata.',
      },
      {
        title: 'Culto & Produzione',
        text: 'Contribuisci ai momenti di adorazione, ai contenuti online e alla cura degli incontri.',
      },
      {
        title: 'Persone & Famiglie',
        text: 'Aiuti attivita comunitarie, accoglienza e iniziative che portano speranza concreta.',
      },
    ],
    verseEyebrow: 'Parola di Speranza',
    verseText: '"Poiche io conosco i pensieri che medito per voi, dice il Signore, pensieri di pace e non di male, per darvi un avvenire e una speranza."',
    verseReference: 'Geremia 29:11',
    faqEyebrow: 'FAQ',
    faqTitle: 'Risposte semplici per preparare la tua visita.',
    faq: [
      {
        question: 'C’e parcheggio?',
        answer: 'Si, nelle vicinanze della sede sono disponibili aree di sosta comode per raggiungere la chiesa con tranquillita.',
      },
      {
        question: 'Come dovrei vestirmi?',
        answer: 'Vieni come ti senti a tuo agio. Il nostro desiderio e accoglierti con rispetto e semplicità, senza formalismi.',
      },
      {
        question: 'C’e un ministero per bambini?',
        answer: 'Le famiglie sono benvenute. La comunita presta attenzione ai piu piccoli e alla loro integrazione nella vita della chiesa.',
      },
      {
        question: 'Quale lingua viene parlata?',
        answer: 'La comunita vive un ambiente multiculturale. L’italiano e la lingua principale, con apertura e supporto anche per ospiti internazionali.',
      },
      {
        question: 'Cosa devo aspettarmi alla mia prima visita?',
        answer: 'Un’accoglienza calorosa, un tempo di lode e preghiera, una predicazione biblica e persone pronte a conoscerti con gioia.',
      },
    ],
    socialEyebrow: 'Contatto & Social',
    socialTitle: 'Resta connesso con il ministero durante la settimana.',
    socialText:
      'Seguici online per messaggi, aggiornamenti, momenti di culto e contenuti che edificano la tua fede. Se desideri visitare la chiesa, saremo felici di accoglierti personalmente.',
    contactAddressLabel: 'Indirizzo',
    contactAddress: 'Via al Fiume 1, dietro Da Moreno, al secondo piano, Gravessano 6929',
    contactNote: 'Una comunita aperta, familiare e pronta a camminare con te.',
    footerText: 'Ministero Internazionale Kabod Ticino',
    footerCredit: '© 2026',
    footerTerms: 'Termini e Condizioni',
    backToHomeLabel: 'Torna alla home',
    cookieTitle: 'Preferenze Cookie',
    cookieText: 'Questo sito utilizza cookie tecnici e funzionali per migliorare l’esperienza di navigazione, la stabilita e la visualizzazione dei contenuti.',
    cookieLink: 'Leggi i Termini e Condizioni',
    cookieButton: 'Accetta',
    cookieRejectButton: 'Rifiuta',
    termsTitle: 'Termini e Condizioni',
    termsIntro:
      'Accedendo a questo sito, l’utente accetta di utilizzare i contenuti in modo lecito, rispettoso e conforme alla finalita informativa del ministero.',
    termsItems: [
      'I contenuti del sito hanno finalita informative, spirituali e di contatto con la comunita.',
      'Gli orari, gli eventi e le informazioni pubblicate possono essere aggiornati senza preavviso.',
      'I link esterni, inclusi YouTube, mappe e social, sono forniti come servizio aggiuntivo e restano soggetti alle rispettive piattaforme.',
      'I cookie tecnici possono essere utilizzati per migliorare funzionalita, prestazioni e preferenze di navigazione.',
    ],
    termsClose: 'Chiudi',
  },
  en: {
    menu: ['Home', 'About', 'Schedule', 'Giving', 'FAQ', 'Contact'],
    aboutEyebrow: 'About Us',
    aboutTitle: 'A Christian community that welcomes, worships and walks together.',
    aboutText:
      'Ministero Internazionale Kabod Ticino is a spiritual home where worship, community and the presence of the Holy Spirit meet. We believe in a faith that transforms everyday life, strengthens families and opens real space for healing, hope and growth.',
    aboutTextSecondary:
      'Here you will find a warm, multicultural and family-oriented environment where every person is encouraged to know God, live His Word and build sincere relationships. Our mission is to serve with love, make disciples and see lives renewed by the grace of Jesus.',
    missionCards: [
      {
        title: 'Worship',
        text: 'Authentic worship, fervent prayer and space for the leading of the Holy Spirit.',
      },
      {
        title: 'Community',
        text: 'A family of faith walking together with care, encouragement and shared purpose.',
      },
      {
        title: 'Transformation',
        text: 'A place where faith meets real life and creates lasting change.',
      },
    ],
    pastorEyebrow: 'Pastor & Leadership',
    pastorTitle: 'Leadership shaped by faith, vision and service to people.',
    pastorText:
      'Pr. Salvatore D’Angella, married to Manuela Liguori and father of two daughters, leads the ministry with passion, spiritual sensitivity and a clear pastoral vision. His desire is to see people healed, strengthened in faith and rooted in a vibrant, mature community.',
    pastorTextSecondary:
      'Through preaching, pastoral care and dedicated leadership, he serves the church with the heart of someone who wants to guide every person into real growth, hope and a fresh encounter with God.',
    pastorCards: [
      {
        title: 'Vision',
        text: 'To build a house of faith that forms strong lives, strong families and a living testimony in the region.',
      },
      {
        title: 'Service',
        text: 'To lead with integrity, pastoral love and practical attention to people and their needs.',
      },
      {
        title: 'Legacy',
        text: 'To pass on faith, hope and a culture of presence, prayer and devotion to the Kingdom of God.',
      },
    ],
    churchEyebrow: 'The Church',
    churchTitle: 'In the heart of Gravessano, Ticino, with a family atmosphere and open arms for everyone.',
    churchText:
      'Our church is located in Gravessano, Ticino, and is a place where new visitors, families, young adults and people from every background can immediately feel at home. Here you will find worship, prayer, spiritual growth and genuine relationships in a peaceful and welcoming setting.',
    churchTextSecondary:
      'We believe in a multicultural community that is alive, accessible and full of grace, where everyone is welcome and every gathering becomes an opportunity to know God more deeply and take a new step in faith.',
    welcomeEyebrow: 'You Are Welcome Here',
    welcomeTitle: 'If this is your first visit, there is a place for you here.',
    welcomeText:
      'Whether you are returning to faith, looking for a church family or simply planning to visit, you will find a space that is elegant, warm and grounded in sincere love. No one is treated like a stranger here.',
    welcomeBulletA: 'A family atmosphere and sincere hospitality from the first moment.',
    welcomeBulletB: 'Times of worship, prayer and practical biblical teaching.',
    welcomeBulletC: 'A place to grow spiritually alongside other believers.',
    scheduleEyebrow: 'Schedule',
    scheduleTitle: 'Weekly moments to pray, worship and grow together.',
    schedule: [
      { title: 'Prayer', time: 'Tuesday at 8:00 PM' },
      { title: 'Sunday Service', time: 'Sunday at 5:00 PM' },
    ],
    youtubeEyebrow: 'Online Message',
    youtubeTitle: 'Watch our latest message',
    youtubeText:
      'Follow the latest sermon, share the message with someone you love and stay connected to the vision of the ministry throughout the week.',
    youtubeButton: 'Subscribe to the channel',
    givingEyebrow: 'Giving',
    givingTitle: 'Supporting the ministry means taking part in the mission.',
    givingText:
      'Your giving helps support worship, pastoral care, community work and the mission of the church in the region. Every gift becomes a practical way to serve people, families and future generations.',
    givingCards: [
      {
        title: 'Mission',
        text: 'You support the spread of the Gospel and the growth of a vibrant local church community.',
      },
      {
        title: 'Worship & Production',
        text: 'You help sustain worship gatherings, online content and the care invested in each service.',
      },
      {
        title: 'People & Families',
        text: 'You help community initiatives, hospitality and activities that bring tangible hope.',
      },
    ],
    verseEyebrow: 'Word of Hope',
    verseText: '"For I know the plans I have for you, declares the Lord, plans for peace and not for disaster, to give you a future and a hope."',
    verseReference: 'Jeremiah 29:11',
    faqEyebrow: 'FAQ',
    faqTitle: 'Simple answers to help you prepare for your visit.',
    faq: [
      {
        question: 'Is there parking?',
        answer: 'Yes, there are convenient parking areas near the location so you can arrive with ease.',
      },
      {
        question: 'What should I wear?',
        answer: 'Come as you feel comfortable. Our desire is to welcome you with warmth and simplicity, not formality.',
      },
      {
        question: 'Is there children ministry?',
        answer: 'Families are welcome. The community pays attention to children and to helping them feel part of church life.',
      },
      {
        question: 'What language is spoken?',
        answer: 'Italian is the main language, and the church lives in a multicultural environment with openness toward international guests.',
      },
      {
        question: 'What should I expect on my first visit?',
        answer: 'A warm welcome, a time of worship and prayer, biblical preaching and people who are glad to meet you.',
      },
    ],
    socialEyebrow: 'Contact & Social',
    socialTitle: 'Stay connected with the ministry throughout the week.',
    socialText:
      'Follow us online for messages, updates, worship moments and content that strengthens your faith. If you would like to visit the church, we will be glad to welcome you personally.',
    contactAddressLabel: 'Address',
    contactAddress: 'Via al Fiume 1, behind Da Moreno, on the second floor, Gravessano 6929',
    contactNote: 'An open, family-centered community ready to walk with you.',
    footerText: 'Ministero Internazionale Kabod Ticino',
    footerCredit: '© 2026',
    footerTerms: 'Terms & Conditions',
    backToHomeLabel: 'Back to home',
    cookieTitle: 'Cookie Preferences',
    cookieText: 'This site uses technical and functional cookies to improve browsing experience, stability and content display.',
    cookieLink: 'Read Terms & Conditions',
    cookieButton: 'Accept',
    cookieRejectButton: 'Reject',
    termsTitle: 'Terms & Conditions',
    termsIntro:
      'By accessing this website, the user agrees to use its content lawfully, respectfully and in line with the ministry’s informational purpose.',
    termsItems: [
      'Website content is provided for informational, spiritual and contact purposes related to the ministry.',
      'Schedules, events and published information may be updated without prior notice.',
      'External links, including YouTube, maps and social platforms, are provided as an additional service and remain subject to their own platforms.',
      'Technical cookies may be used to improve functionality, performance and browsing preferences.',
    ],
    termsClose: 'Close',
  },
};

const menuTargets = ['home', 'about', 'schedule', 'giving', 'faq', 'contact'];
const socialLinks = [
  { icon: 'bi-instagram', label: 'Instagram', href: 'https://www.instagram.com/kabodchurchticino' },
  { icon: 'bi-facebook', label: 'Facebook', href: 'https://www.facebook.com/kabodchurchticino' },
  { icon: 'bi-youtube', label: 'YouTube', href: 'https://www.youtube.com/@kabodchurchticino' },
  { icon: 'bi-whatsapp', label: 'WhatsApp', href: 'https://wa.me/41763428989' },
  {
    icon: 'bi-envelope',
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kabod.ticino@gmail.com',
  },
];

function App() {
  const [language, setLanguage] = useState('it');
  const [activeFaq, setActiveFaq] = useState(0);
  const [cookieConsentResolved, setCookieConsentResolved] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    setShowMobileMenu(false);
  }, [language]);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem('kabod-cookie-consent');
    setCookieConsentResolved(savedPreference === 'accepted' || savedPreference === 'rejected');
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem('kabod-cookie-consent', 'accepted');
    setCookieConsentResolved(true);
  };

  const rejectCookies = () => {
    window.localStorage.setItem('kabod-cookie-consent', 'rejected');
    setCookieConsentResolved(true);
  };

  return (
    <div className="app-shell">
      <div className="language-switcher" role="group" aria-label="Language switcher">
        <button
          type="button"
          className={language === 'it' ? 'active' : ''}
          onClick={() => setLanguage('it')}
        >
          IT
        </button>
        <span>|</span>
        <button
          type="button"
          className={language === 'en' ? 'active' : ''}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>

      <button
        type="button"
        className={`mobile-menu-toggle ${showMobileMenu ? 'is-open' : ''}`}
        onClick={() => setShowMobileMenu((current) => !current)}
        aria-label="Toggle menu"
        aria-expanded={showMobileMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`mobile-nav-panel ${showMobileMenu ? 'is-open' : ''}`} aria-label="Mobile section navigation">
        {copy.menu.map((item, index) => (
          <a key={item} href={`#${menuTargets[index]}`} onClick={() => setShowMobileMenu(false)}>
            {item}
          </a>
        ))}
      </nav>

      <header
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container position-relative h-100">
          <div className="hero-links-wrap">
            <nav className="hero-links" aria-label="Section navigation">
              {copy.menu.map((item, index) => (
                <a key={item} href={`#${menuTargets[index]}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,128L40,133.3C80,139,160,149,240,170.7C320,192,400,224,480,218.7C560,213,640,171,720,149.3C800,128,880,128,960,144C1040,160,1120,192,1200,197.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </div>
      </header>

      <main>
        <RevealSection id="about" className="content-section section-light">
          <div className="container">
            <div className="section-separator" />
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="brand-panel card-surface h-100">
                  <img src={logoImage} alt="Kabod Ticino logo" className="brand-logo" />
                  <span className="eyebrow">{copy.aboutEyebrow}</span>
                  <h2>{copy.aboutTitle}</h2>
                  <p>{copy.aboutText}</p>
                  <p className="muted-copy mb-0">{copy.aboutTextSecondary}</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  {copy.missionCards.map((card) => (
                    <div key={card.title} className="col-md-4">
                      <article className="info-card h-100">
                        <div className="icon-badge">
                          <i className="bi bi-stars" />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="content-section section-dark">
          <div className="container">
            <div className="section-separator gold" />
            <div className="row align-items-center g-5 flex-lg-row-reverse">
              <div className="col-lg-5">
                <div className="image-card image-card-large pastor-photo-card">
                  <img src={familyImage} alt="Pastoral family" />
                </div>
              </div>
              <div className="col-lg-7">
                <span className="eyebrow">{copy.pastorEyebrow}</span>
                <h2>{copy.pastorTitle}</h2>
                <p>{copy.pastorText}</p>
                <p className="muted-copy">{copy.pastorTextSecondary}</p>
                <div className="row g-4 mt-2">
                  {copy.pastorCards.map((card) => (
                    <div key={card.title} className="col-md-4">
                      <article className="info-card h-100">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="content-section section-light church-section">
          <div className="container">
            <div className="section-separator" />
            <div className="row g-4">
              <div className="col-12">
                <div className="church-media">
                  <img src={churchImage} alt="Kabod Ticino church" />
                </div>
              </div>
              <div className="col-12 church-copy">
                <span className="eyebrow">{copy.churchEyebrow}</span>
                <h2>{copy.churchTitle}</h2>
                <p>{copy.churchText}</p>
                <p className="muted-copy mb-0">{copy.churchTextSecondary}</p>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="content-section welcome-band">
          <div className="container">
            <div className="section-separator gold" />
            <div className="welcome-card">
              <div>
                <span className="eyebrow">{copy.welcomeEyebrow}</span>
                <h2>{copy.welcomeTitle}</h2>
                <p>{copy.welcomeText}</p>
              </div>
              <div className="welcome-list">
                <div>
                  <i className="bi bi-heart-pulse" />
                  <span>{copy.welcomeBulletA}</span>
                </div>
                <div>
                  <i className="bi bi-music-note-beamed" />
                  <span>{copy.welcomeBulletB}</span>
                </div>
                <div>
                  <i className="bi bi-people" />
                  <span>{copy.welcomeBulletC}</span>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="schedule" className="content-section section-dark">
          <div className="container">
            <div className="section-separator gold" />
            <div className="text-center section-heading mx-auto">
              <span className="eyebrow">{copy.scheduleEyebrow}</span>
              <h2>{copy.scheduleTitle}</h2>
            </div>
            <div className="row g-4 justify-content-center">
              {copy.schedule.map((item) => (
                <div key={item.title} className="col-md-5 col-lg-4">
                  <article className="schedule-card h-100">
                    <div className="schedule-icon">
                      <i className="bi bi-clock-history" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.time}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="youtube" className="content-section video-section">
          <div className="container">
            <div className="section-separator" />
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <span className="eyebrow">{copy.youtubeEyebrow}</span>
                <h2>{copy.youtubeTitle}</h2>
                <p>{copy.youtubeText}</p>
                <a
                  className="btn btn-gold"
                  href="https://www.youtube.com/@KabodTicino"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.youtubeButton}
                </a>
              </div>
              <div className="col-lg-7">
                <div className="video-card">
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/YG0PINIoUEw?start=23"
                      title="Kabod Ticino latest message"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="giving" className="content-section section-light">
          <div className="container">
            <div className="section-separator" />
            <div className="text-center section-heading mx-auto">
              <span className="eyebrow">{copy.givingEyebrow}</span>
              <h2>{copy.givingTitle}</h2>
              <p>{copy.givingText}</p>
            </div>
            <div className="row g-4">
              {copy.givingCards.map((card) => (
                <div key={card.title} className="col-md-4">
                  <article className="giving-card h-100">
                    <div className="gold-dot" />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="content-section verse-section">
          <div className="container">
            <div className="verse-card text-center mx-auto">
              <span className="eyebrow">{copy.verseEyebrow}</span>
              <blockquote>{copy.verseText}</blockquote>
              <p>{copy.verseReference}</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="faq" className="content-section section-dark">
          <div className="container">
            <div className="section-separator gold" />
            <div className="text-center section-heading mx-auto">
              <span className="eyebrow">{copy.faqEyebrow}</span>
              <h2>{copy.faqTitle}</h2>
            </div>
            <div className="faq-list mx-auto">
              {copy.faq.map((item, index) => {
                const expanded = index === activeFaq;
                return (
                  <article key={item.question} className={`faq-item ${expanded ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setActiveFaq(expanded ? -1 : index)}
                      aria-expanded={expanded}
                    >
                      <span>{item.question}</span>
                      <i className={`bi ${expanded ? 'bi-dash-lg' : 'bi-plus-lg'}`} />
                    </button>
                    <div className="faq-answer" hidden={!expanded}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="content-section section-light social-section">
          <div className="container">
            <div className="section-separator" />
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="image-card image-card-wide">
                  <img src={socialImage} alt="Kabod Ticino community" />
                </div>
              </div>
              <div className="col-lg-6">
                <span className="eyebrow">{copy.socialEyebrow}</span>
                <h2>{copy.socialTitle}</h2>
                <p>{copy.socialText}</p>
                <div className="contact-panel">
                  <div>
                    <small>{copy.contactAddressLabel}</small>
                    <p>{copy.contactAddress}</p>
                  </div>
                  <p className="contact-note">{copy.contactNote}</p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="content-section map-section pb-0">
          <div className="container">
            <div className="map-frame">
              <iframe
                title="Kabod Ticino map"
                src="https://www.google.com/maps?q=Via%20al%20Fiume%201%2C%20Gravessano%206929&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </RevealSection>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoImage} alt="Kabod Ticino logo" />
            <span>{copy.footerText}</span>
          </div>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <i className={`bi ${link.icon}`} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-meta">
            <span className="footer-credit">{copy.footerCredit}</span>
            <span className="footer-label">Webdesigner:</span>
            <a className="footer-designer" href="https://www.etzahweb.com" target="_blank" rel="noreferrer">
              Kallebe Gallo
            </a>
            <span className="footer-separator">-</span>
            <button type="button" className="footer-legal-link" onClick={() => setShowTerms(true)}>
              {copy.footerTerms}
            </button>
          </div>
        </div>
      </footer>

      <a className="back-to-home" href="#home" aria-label={copy.backToHomeLabel}>
        <i className="bi bi-arrow-up" />
      </a>

      {!cookieConsentResolved && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
          <div className="cookie-copy">
            <strong>{copy.cookieTitle}</strong>
            <p>{copy.cookieText}</p>
            <button type="button" className="cookie-link" onClick={() => setShowTerms(true)}>
              {copy.cookieLink}
            </button>
          </div>
          <div className="cookie-actions">
            <button type="button" className="btn btn-outline-light cookie-button" onClick={rejectCookies}>
              {copy.cookieRejectButton}
            </button>
            <button type="button" className="btn btn-gold cookie-button" onClick={acceptCookies}>
              {copy.cookieButton}
            </button>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="legal-overlay" role="dialog" aria-modal="true" aria-label={copy.termsTitle}>
          <div className="legal-card">
            <div className="legal-head">
              <h3>{copy.termsTitle}</h3>
              <button type="button" className="legal-close" onClick={() => setShowTerms(false)}>
                {copy.termsClose}
              </button>
            </div>
            <p>{copy.termsIntro}</p>
            <ul className="legal-list">
              {copy.termsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
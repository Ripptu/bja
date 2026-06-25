export interface ServiceItem {
  id: string;
  title: string;
  category: 'documentation' | 'administration' | 'future';
  description: string;
  tags: string[];
  iconName: string;
}

export interface TargetGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isFocus?: boolean;
  iconName: string;
}

export const COMPANY_INFO = {
  name: 'BJA Medical Solutions',
  founder: 'Bianca-Julia Ahsmann',
  role: 'Gründerin & externe Dokumentationsassistenz',
  slogan: 'Entlastung, wo Medizin Zeit braucht.',
  subSlogan: 'Ihr Partner für professionelle medizinische Dokumentation und administrative Entlastung in Klinik, Praxis und Pflege.',
  shortText: 'BJA Medical Solutions unterstützt medizinische Einrichtungen mit professioneller Dokumentation, Schreibservice und organisatorischer Entlastung – zuverlässig, diskret und mit tiefem Verständnis für medizinische Abläufe.',
  email: 'info@bja-medical.de',
  phone: '+49 (0) 170 892 4410',
  location: 'Deutschlandweit (Remote & Vor-Ort)',
  philosophyQuote: 'Keine reine Schreibkraft, sondern eine professionelle externe Dokumentationsassistenz mit medizinischem Fachverständnis.',
  qualifications: [
    { area: 'Pflege', desc: 'Fundiertes Praxiswissen in stationärer & ambulanter Versorgung' },
    { area: 'Rettungsdienst', desc: 'Erfahrung in Notfallmedizin, präklinischer Triage & Akutdokumentation' },
    { area: 'Psychiatrie', desc: 'Tiefes Verständnis für komplexe Verlaufsberichte & psychiatrische Gutachten' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'doc-1',
    title: 'Arztbriefe & Entlassberichte',
    category: 'documentation',
    description: 'Präzise, termingerechte Erstellung klinischer Entlassungsberichte und Arztbriefe nach Diktat, Stichpunkten oder Aktenlage.',
    tags: ['ICD-10 konform', 'Klinische Terminologie', 'Schnelle Turnaround-Zeit'],
    iconName: 'FileText'
  },
  {
    id: 'doc-2',
    title: 'Verlaufsdokumentationen & Pflegeberichte',
    category: 'documentation',
    description: 'Lückenlose Dokumentation von Behandlungsverläufen, Visiten und pflegerischen Maßnahmen zur Sicherung der Behandlungsqualität.',
    tags: ['Pflegestandards', 'Rechtssicher', 'Stationsentlastung'],
    iconName: 'Activity'
  },
  {
    id: 'doc-3',
    title: 'Medizinische Gutachten',
    category: 'documentation',
    description: 'Strukturierte Ausfertigung umfangreicher medizinischer und psychiatrischer Gutachten für Gerichte, Versicherungen und Kliniken.',
    tags: ['Höchste Diskretion', 'Psychiatrie-Fokus', 'Präzise Formatierung'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'doc-4',
    title: 'Transkription medizinischer Diktate',
    category: 'documentation',
    description: 'Professionelles Verschriftlichen digitaler Diktate mit absoluter Ballsicherheit im medizinischen Fachvokabular.',
    tags: ['Audio & Video', 'Korrektorat', 'Verschlüsselte Übertragung'],
    iconName: 'Headphones'
  },
  {
    id: 'admin-1',
    title: 'Aufarbeitung von Dokumentationsrückständen',
    category: 'administration',
    description: 'Gezielte Taskforce-Unterstützung bei personellen Engpässen, Krankheitswellen oder Systemumstellungen zum Abbau von Aktenstaus.',
    tags: ['Akuthilfe', 'Vor-Ort & Remote', 'Strukturierung'],
    iconName: 'Clock'
  },
  {
    id: 'admin-2',
    title: 'Aktenstrukturierung & Digitalisierungsvorbereitung',
    category: 'administration',
    description: 'Systematisches Ordnen, Zusammenführen und Bereinigen analoger und digitaler Patientenakten für einen reibungslosen Praxisbetrieb.',
    tags: ['Archivierung', 'KIS-Unterstützung', 'Effizienz'],
    iconName: 'FolderTree'
  },
  {
    id: 'admin-3',
    title: 'Stations- & Praxisentlastung',
    category: 'administration',
    description: 'Übernahme alltäglicher administrativer Schreib- und Korrespondenzarbeiten im Hintergrund, damit das Team am Patienten arbeiten kann.',
    tags: ['Backoffice', 'Entlastung', 'Sekretariatsservice'],
    iconName: 'Building2'
  },
  {
    id: 'fut-1',
    title: 'Qualitätsmanagement & Prozessoptimierung',
    category: 'future',
    description: 'Zukünftige Erweiterung: Beratung zur Optimierung interner Dokumentationsabläufe und Vorbereitung auf Audits.',
    tags: ['Ausblick', 'Strategie', 'QM-Handbücher'],
    iconName: 'Sparkles'
  },
  {
    id: 'fut-2',
    title: 'Schulungen für Dokumentationsstandards',
    category: 'future',
    description: 'Zukünftige Erweiterung: Praxisnahe Workshops für Pflege- und Assistenzpersonal zur effizienten und rechtssicheren Dokumentation.',
    tags: ['Ausblick', 'Weiterbildung', 'Effizienzsteigerung'],
    iconName: 'GraduationCap'
  }
];

export const TARGET_GROUPS: TargetGroup[] = [
  {
    id: 'tg-psychiatry',
    title: 'Psychiatrische Kliniken & Facharztpraxen',
    subtitle: 'Besonderer Schwerpunkt',
    description: 'Komplexe psychopathologische Befunde und ausführliche Epikrisen erfordern ein hohes Maß an sprachlicher Präzision und fachlichem Taktgefühl.',
    isFocus: true,
    iconName: 'Brain'
  },
  {
    id: 'tg-hospitals',
    title: 'Krankenhäuser & Akutkliniken',
    subtitle: 'Stationäre Versorgung',
    description: 'Entlastung der Stationsärzte bei Entlassberichten und OP-Berichten, besonders in Spitzenzeiten und bei Notfalldokumentationen.',
    isFocus: true,
    iconName: 'Building2'
  },
  {
    id: 'tg-care',
    title: 'Pflegeheime & ambulante Dienste',
    subtitle: 'Besonderer Schwerpunkt',
    description: 'Sicherstellung der MDK-konformen Pflegedokumentation und Entlastung der Pflegedienstleitungen von bürokratischem Ballast.',
    isFocus: true,
    iconName: 'HeartPulse'
  },
  {
    id: 'tg-practices',
    title: 'Facharzt- & Hausarztpraxen',
    subtitle: 'Ambulante Sektor',
    description: 'Kontinuierliche Übernahme der laufenden Diktate und Arztbriefe zur Gewährleistung eines pünktlichen Feierabends für das Praxisteam.',
    iconName: 'Stethoscope'
  },
  {
    id: 'tg-rehab',
    title: 'Reha-Kliniken',
    subtitle: 'Langzeitverläufe',
    description: 'Erstellung umfangreicher Reha-Entlassungsberichte unter Berücksichtigung sozialmedizinischer Leistungsbeurteilungen.',
    iconName: 'Activity'
  },
  {
    id: 'tg-experts',
    title: 'Medizinische Gutachter',
    subtitle: 'Justiz & Versicherungen',
    description: 'Verlässliche Transkription und formale Ausarbeitung gerichtsverwertbarer Gutachten mit höchster Akribie.',
    iconName: 'Scale'
  }
];

export const CORE_PILLARS = [
  {
    title: 'Medizinische Dokumentation',
    subtitle: 'Arztbriefe, Entlassberichte & Gutachten',
    desc: 'Fachlich korrekte Übertragung komplexer Sachverhalte in druckreife medizinische Dokumente.'
  },
  {
    title: 'Administrative Entlastung',
    subtitle: 'Aktenstruktur & Prozessrückstände',
    desc: 'Sofortige Reduktion von Dokumentationsstaus durch strukturierte Backoffice-Übernahme.'
  },
  {
    title: 'Psychiatrie & Pflege Praxis',
    subtitle: 'Tiefes Verständnis klinischer Abläufe',
    desc: 'Eigene Erfahrung aus Pflege und Rettungsdienst garantiert sofortige Einarbeitung ohne Erklärungsbedarf.'
  }
];

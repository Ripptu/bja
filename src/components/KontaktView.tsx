import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/briefingData';
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Send, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface KontaktViewProps {
  initialSubject?: string;
}

export const KontaktView: React.FC<KontaktViewProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    serviceType: initialSubject || 'Medizinische Dokumentation (Arztbriefe / Berichte)',
    workModel: 'Remote (Digital)',
    message: '',
    privacyAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col flex-1 w-full text-[#1d1d1f] gap-4 sm:gap-8 pb-8 sm:pb-16">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-12 shadow-xl shadow-black/[0.02]"
      >
        <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#002B5B] block mb-3">
          Unverbindliche Anfrage
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4">
          Kontakt aufnehmen.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Sprengen Sie den Dokumentationsstau. Kontaktieren Sie mich für ein kurzes Kennenlerngespräch oder ein individuelles Entlastungskonzept.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Contact Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-10 shadow-lg shadow-black/[0.02] flex flex-col justify-between"
        >
          <div>
            <span className="inline-block bg-blue-50 text-[#002B5B] border border-blue-100 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full mb-6">
              Direkter Draht
            </span>
            <h2 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight mb-4">
              {COMPANY_INFO.name}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              Gründerin Bianca-Julia Ahsmann steht Ihnen als persönliche Ansprechpartnerin zur Verfügung. Zuverlässig, diskret und lösungsorientiert.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">E-Mail Kontakt</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm sm:text-base font-bold text-[#1d1d1f] hover:text-[#002B5B] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Telefon & Business Chat</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm sm:text-base font-bold text-[#1d1d1f] hover:text-[#002B5B] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Einsatzgebiet</span>
                  <span className="text-sm sm:text-base font-bold text-[#1d1d1f]">
                    {COMPANY_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* DSGVO Trust Badge */}
          <div className="mt-12 rounded-2xl bg-gray-50/80 p-6 border border-gray-100">
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#002B5B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#002B5B]">Höchste Vertraulichkeit</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Patientendaten unterliegen der Schweigepflicht und strengsten DSGVO-Bestimmungen. BJA Medical Solutions schließt mit jeder Einrichtung verbindliche Auftragsverarbeitungsverträge (AVV) ab.
            </p>
          </div>
        </motion.div>

        {/* Apple Bento Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/70 p-6 sm:p-12 shadow-xl shadow-black/[0.02]"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
                Ihre Nachricht bezüglich <strong className="text-[#002B5B]">"{formData.serviceType}"</strong> wurde erfolgreich erfasst. Bianca-Julia Ahsmann wird sich zeitnah persönlich bei Ihnen melden.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({...formData, message: ''}); }}
                className="bg-gray-100 text-[#1d1d1f] px-8 py-3.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Weitere Anfrage senden
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">
                  Betreuungs-Anfrage spezifizieren
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Dr. med. Max Mustermann"
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Einrichtung / Klinik / Praxis *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={e => setFormData({...formData, institution: e.target.value})}
                    placeholder="St. Antonius Krankenhaus"
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="mustermann@klinik.de"
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+49 (0) 123 45678"
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Gewünschte Leistung
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({...formData, serviceType: e.target.value})}
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all cursor-pointer"
                  >
                    <option value="Arztbriefe & Entlassberichte">Arztbriefe & Entlassberichte</option>
                    <option value="Verlaufsdokumentation & Pflegeberichte">Verlaufsdokumentation & Pflegeberichte</option>
                    <option value="Medizinische & psychiatrische Gutachten">Medizinische & psychiatrische Gutachten</option>
                    <option value="Transkription medizinischer Diktate">Transkription medizinischer Diktate</option>
                    <option value="Aufarbeitung von Dokumentationsrückständen">Aufarbeitung von Dokumentationsrückständen</option>
                    <option value="Aktenstrukturierung & Digitalisierung">Aktenstrukturierung & Digitalisierung</option>
                    <option value="Stations- & Praxisentlastung">Stations- & Praxisentlastung</option>
                    <option value="Allgemeine Beratung / Kooperation">Allgemeine Beratung / Kooperation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Einsatz-Modell
                  </label>
                  <select
                    value={formData.workModel}
                    onChange={e => setFormData({...formData, workModel: e.target.value})}
                    className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all cursor-pointer"
                  >
                    <option value="Remote (Digital)">Remote (Digital)</option>
                    <option value="Vor-Ort in unserer Einrichtung">Vor-Ort in unserer Einrichtung</option>
                    <option value="Kombination aus Remote & Vor-Ort">Kombination aus Remote & Vor-Ort</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Nachricht oder geschätztes Diktat-Aufkommen (optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Beschreiben Sie kurz Ihre Situation (z.B. ca. 20 Arztbriefe pro Woche im Bereich Psychiatrie)..."
                  className="w-full bg-[#fbfbfd] border border-gray-200/80 rounded-2xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.privacyAccepted}
                  onChange={e => setFormData({...formData, privacyAccepted: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded accent-[#002B5B] cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer leading-relaxed">
                  Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden. Hinweis: Bitte senden Sie über dieses Webformular noch keine unverschlüsselten Patientendaten. *
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.privacyAccepted}
                className="w-full bg-[#1d1d1f] text-white py-4 rounded-full font-semibold text-sm hover:bg-[#002B5B] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                Anfrage unverbindlich absenden
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};


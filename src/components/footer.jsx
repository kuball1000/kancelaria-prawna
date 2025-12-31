import { Scale, Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg">
                <Scale className="h-6 w-6 text-navy-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-slate-100 tracking-wide">Krystian Kitliński</span>
                <span className="text-xs text-gold-400 uppercase tracking-widest">Radca Prawny</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kancelaria Radcy Prawnego Krystiana Kitlińskiego to gwarancja profesjonalizmu. Specjalizuję się w kompleksowej obsłudze prawnej, dbając o bezpieczeństwo i interesy moich Klientów w każdej sprawie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">Szybkie Linki</h3>
            <ul className="space-y-3">
              {['O Mnie', 'Zakres Usług', 'Cennik', 'Do Pobrania', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="text-gold-400 mt-1 shrink-0" size={18} />
                <span>Aleje Jerozolimskie 123, Lok 400<br />Warszawa, PL 00-001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="text-gold-400 shrink-0" size={18} />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="text-gold-400 shrink-0" size={18} />
                <span>kontakt@kowalski-law.pl</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">Połącz się z Nami</h3>
            <div className="flex gap-4 mb-6">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              © 2024 Kowalski i Partnerzy. <br/>Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>Polityka Prywatności | Regulamin</p>
          <p>Zaprojektowane z doskonałością.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

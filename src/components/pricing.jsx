import { Check } from 'lucide-react';

const pricingOptions = [
  {
    title: 'Konsultacja Wstępna',
    price: '200 PLN',
    period: '/ godzina',
    features: [
      'Analiza dokumentów',
      'Wstępna ocena prawna',
      'Określenie szans powodzenia',
      'Plan działania'
    ],
    highlight: false
  },
  {
    title: 'Reprezentacja Sądowa',
    price: 'Indywidualnie',
    period: '',
    features: [
      'Pełnomocnictwo procesowe',
      'Sporządzanie pism',
      'Udział w rozprawach',
      'Kontakt z sądem'
    ],
    highlight: true
  },
  {
    title: 'Stała Obsługa',
    price: 'od 1500 PLN',
    period: '/ miesięcznie',
    features: [
      'Priorytetowy kontakt',
      'Opiniowanie umów',
      'Porady bieżące',
      'Dedykowany opiekun'
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">Cennik</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Przejrzyste Zasady</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Każda sprawa jest inna, dlatego zawsze przedstawiam jasną wycenę przed podjęciem współpracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-lg border ${
                option.highlight 
                  ? 'bg-white/10 border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]' 
                  : 'bg-navy-900 border-white/5'
              }`}
            >
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Najczęściej Wybieran
                </div>
              )}
              <h3 className="text-xl font-serif font-bold text-white mb-2">{option.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-gold-400">{option.price}</span>
                <span className="text-slate-500 text-sm">{option.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-gold-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full py-3 px-6 rounded text-center text-sm font-bold uppercase tracking-wide transition-all ${
                  option.highlight
                    ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Wybierz
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

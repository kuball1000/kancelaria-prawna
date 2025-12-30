import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">Skontaktuj Się</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Umów Sprawdzenie Sprawy</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Wypełnij poniższy formularz, aby poprosić o bezpłatną poufną konsultację. Odpowiemy w ciągu 24 godzin.
          </p>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-lg border border-white/10 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Imię i Nazwisko</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-navy-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Adres Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-navy-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                  placeholder="jan@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Numer Telefonu</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-navy-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                  placeholder="+48 000 000 000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Temat Sprawy</label>
                <select 
                  id="topic"
                  className="w-full bg-navy-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-slate-400"
                >
                  <option>Obrona Karna</option>
                  <option>Prawo Rodzinne</option>
                  <option>Prawo Spółek</option>
                  <option>Inne</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Szczegóły Sprawy</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-navy-900/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                placeholder="Opisz krótko swoją sytuację prawną..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 rounded uppercase tracking-wide flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Wyślij Wiadomość
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;

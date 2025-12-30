import { ShieldCheck, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500/20 blur-xl rounded-lg"></div>
            <img 
              src="/krystian_kitlinski.png" 
              alt="Mecenas Krystian Kitliński" 
              className="relative rounded-lg shadow-2xl border border-white/10 w-full object-cover h-[500px] object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-navy-900 p-6 border border-gold-500/30 rounded shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-4xl font-bold text-gold-400">20+</div>
                <div className="text-sm text-slate-300 uppercase tracking-widest leading-none">Lat <br/>Doświadczenia</div>
              </div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gold-400"></div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">O Mnie</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Profesjonalizm i <br />
              <span className="text-gold-400">Zaangażowanie</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Jako Radca Prawny Krystian Kitliński, wierzę, że każdy klient zasługuje na rzetelną poradę i skuteczną reprezentację. Moja kancelaria opiera się na zasadach uczciwości, poufności i indywidualnym podejściu do każdej sprawy.
            </p>

            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Skuteczność", desc: "Wieloletnie doświadczenie w prowadzeniu spraw sądowych." },
                { icon: Award, title: "Zaufanie", desc: "Ceniony przez klientów za transparentność i rzetelność." },
                { icon: Clock, title: "Dostępność", desc: "Szybki kontakt i bieżące informowanie o postępach." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center shrink-0 text-gold-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-slate-100 mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-60 filter invert" />
              <p className="text-slate-500 text-sm mt-2">Krystian Kitliński, Radca Prawny</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

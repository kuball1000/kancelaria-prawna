import { Shield, BookOpen, Users, Gavel, Briefcase, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Shield,
    title: 'Obrona Karna',
    description: 'Skuteczna obrona w sprawach karnych i karnoskarbowych. Reprezentacja na każdym etapie postępowania.'
  },
  {
    icon: Briefcase,
    title: 'Obsługa Firm',
    description: 'Kompleksowe doradztwo dla przedsiębiorców. Tworzenie umów, regulaminów i bieżąca obsługa prawna.'
  },
  {
    icon: Users,
    title: 'Prawo Rodzinne',
    description: 'Empatyczne prowadzenie spraw rozwodowych, alimentacyjnych oraz dotyczących władzy rodzicielskiej.'
  },
  {
    icon: BookOpen,
    title: 'Sprawy Cywilne',
    description: 'Dochodzenie roszczeń, sprawy o zapłatę, odszkodowania oraz ochrona dóbr osobistych.'
  },
  {
    icon: Scale,
    title: 'Prawo Pracy',
    description: 'Pomoc w sporach pracowniczych, opiniowanie umów o pracę i kontraktów menedżerskich.'
  },
  {
    icon: Gavel,
    title: 'Nieruchomości',
    description: 'Bezpieczne transakcje, analiza stanu prawnego nieruchomości, sprawy o zasiedzenie.'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-navy-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">Specjalizacje</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Zakres Usług</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 bg-white/5 border border-white/5 hover:border-gold-500/30 rounded-sm hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-gold-500/50">
                            <service.icon className="text-gold-400 w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-slate-100 mb-4 group-hover:text-gold-400 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;

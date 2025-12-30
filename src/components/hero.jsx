import { ArrowRight, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-navy-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                <Scale className="text-gold-400 w-4 h-4" />
                <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">Skuteczna Pomoc Prawna</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Twoja Sprawa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                W Dobrych Rękach
            </span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Jako doświadczony Radca Prawny Krystian Kitliński zapewniam profesjonalne wsparcie i indywidualne podejście do każdego klienta. Chronię Twoje interesy z pełnym zaangażowaniem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm uppercase tracking-wide rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 group"
            >
                Skontaktuj Się
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium text-sm uppercase tracking-wide rounded-sm transition-all"
            >
                Zobacz Usługi
            </a>
            </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>
    </section>
  );
};

export default Hero;

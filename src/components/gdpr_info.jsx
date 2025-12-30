import { Lock } from 'lucide-react';

const GDPRInfo = () => {
  return (
    <div className="bg-navy-800 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-navy-900 rounded-full text-gold-400 mt-1">
                        <Lock size={20} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">Bezpieczeństwo i RODO</h4>
                        <p className="text-slate-400 text-sm max-w-2xl">
                            Dbamy o Twoją prywatność. Wszystkie dane osobowe są przetwarzane zgodnie z Rozporządzeniem o Ochronie Danych Osobowych (RODO). Administratorem danych jest Kancelaria Radcy Prawnego Krystiana Kitlińskiego.
                        </p>
                    </div>
                </div>
                <a href="#downloads" className="whitespace-nowrap px-6 py-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 rounded font-medium text-sm transition-all uppercase tracking-wide">
                    Zobacz Pełną Klauzulę
                </a>
            </div>
        </div>
    </div>
  );
};

export default GDPRInfo;

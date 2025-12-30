import { FileText, Download } from 'lucide-react';

const downloads = [
  {
    title: 'Wzór Pełnomocnictwa',
    format: 'PDF',
    size: '1.2 MB',
    description: 'Dokument upoważniający do reprezentacji w sprawie.'
  },
  {
    title: 'Kwestionariusz Osobowy',
    format: 'DOCX',
    size: '0.5 MB',
    description: 'Formularz do zebrania podstawowych danych klienta.'
  },
  {
    title: 'Regulamin Kancelarii',
    format: 'PDF',
    size: '0.8 MB',
    description: 'Ogólne warunki współpracy i świadczenia usług.'
  },
  {
    title: 'Polityka Prywatności i RODO',
    format: 'PDF',
    size: '1.5 MB',
    description: 'Szczegółowe informacje o przetwarzaniu danych osobowych.'
  }
];

const Downloads = () => {
  return (
    <section id="downloads" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">Strefa Klienta</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Materiały do Pobrania</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((file, index) => (
            <div key={index} className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:border-gold-500/50 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-navy-800 rounded text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                  <FileText size={24} />
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded text-slate-400">{file.format}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{file.title}</h3>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{file.description}</p>
              <button className="flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-white transition-colors">
                <Download size={16} />
                Pobierz Plik
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;

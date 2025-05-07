// Mapeamento de categorias para cores de badge
const categoryColors: Record<string, string> = {
    monitoramento: 'bg-blue-100 text-blue-800',
    emergencia: 'bg-red-100 text-red-800',
    medicacao: 'bg-green-100 text-green-800',
    respiratorio: 'bg-purple-100 text-purple-800',
    mobiliario: 'bg-yellow-100 text-yellow-800',
    cirurgia: 'bg-pink-100 text-pink-800',
    esterilizacao: 'bg-indigo-100 text-indigo-800',
    diagnostico: 'bg-orange-100 text-orange-800'
};

// Mapeamento de categorias para nomes em português
const categoryNames: Record<string, string> = {
    monitoramento: 'Monitoramento',
    emergencia: 'Emergência',
    medicacao: 'Medicação',
    respiratorio: 'Respiratório',
    mobiliario: 'Mobiliário',
    cirurgia: 'Cirurgia',
    esterilizacao: 'Esterilização',
    diagnostico: 'Diagnóstico'
};

export { categoryColors, categoryNames };

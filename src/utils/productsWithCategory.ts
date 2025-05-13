import { Categoria } from '@/types/product';

const CATEGORY_PATTERNS: { category: Categoria; keywords: string[] }[] = [
    { category: 'Instrumentais Periodontais', keywords: ['cureta'] },
    { category: 'EPI', keywords: ['luva', 'máscara'] },
    { category: 'Injetáveis', keywords: ['seringa', 'agulha'] },
    { category: 'Suturas', keywords: ['fio de sutura', 'sutura'] },
    { category: 'Instrumentais', keywords: ['espátula', 'espelho'] },
    { category: 'Isolamento', keywords: ['grampo'] },
    { category: 'Brocas', keywords: ['broca'] },
    { category: 'Cirúrgicos', keywords: ['porta', 'agulha'] },
    { category: 'Acessórios', keywords: ['pote'] },
    { category: 'Moldeiras / Moldagens', keywords: ['mold', 'moldeira'] },
    { category: 'Kits Clínicos', keywords: ['kit'] },
    { category: 'Profilaxia', keywords: ['escova'] }
];

const CATEGORY_NAMES: Record<Categoria, string> = {
    'Instrumentais Periodontais': 'Instrumentais Periodontais',
    EPI: 'Equipamentos de Proteção Individual',
    Injetáveis: 'Materiais Injetáveis',
    Suturas: 'Fios e Suturas',
    Instrumentais: 'Instrumentais Gerais',
    Isolamento: 'Materiais de Isolamento',
    Brocas: 'Brocas Odontológicas',
    Cirúrgicos: 'Instrumentais Cirúrgicos',
    Acessórios: 'Acessórios e Utensílios',
    'Moldeiras / Moldagens': 'Moldeiras e Moldagens',
    'Kits Clínicos': 'Kits Clínicos',
    Profilaxia: 'Profilaxia e Higiene',
    Todos: 'Todos os Produtos' // ✅ adicionado
};

const CATEGORY_COLORS: Record<Categoria, string> = {
    'Instrumentais Periodontais': 'bg-blue-100 text-blue-800',
    EPI: 'bg-green-100 text-green-800',
    Injetáveis: 'bg-purple-100 text-purple-800',
    Suturas: 'bg-pink-100 text-pink-800',
    Instrumentais: 'bg-yellow-100 text-yellow-800',
    Isolamento: 'bg-indigo-100 text-indigo-800',
    Brocas: 'bg-orange-100 text-orange-800',
    Cirúrgicos: 'bg-red-100 text-red-800',
    Acessórios: 'bg-teal-100 text-teal-800',
    'Moldeiras / Moldagens': 'bg-amber-100 text-amber-800',
    'Kits Clínicos': 'bg-cyan-100 text-cyan-800',
    Profilaxia: 'bg-lime-100 text-lime-800',
    Todos: 'bg-gray-100 text-gray-800' // ✅ adicionado
};

const getProductCategory = (produto: { nome: string; descricao?: string }): Categoria => {
    const nome = produto.nome.toLowerCase();
    const descricao = (produto.descricao || '').toLowerCase();

    for (const { category, keywords } of CATEGORY_PATTERNS) {
        if (keywords.some((kw) => nome.includes(kw) || descricao.includes(kw))) {
            return category;
        }
    }

    return 'Todos';
};

export { getProductCategory, CATEGORY_PATTERNS, CATEGORY_COLORS, CATEGORY_NAMES };

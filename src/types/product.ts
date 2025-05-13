export type Categoria =
    | 'Instrumentais Periodontais'
    | 'EPI'
    | 'Injetáveis'
    | 'Suturas'
    | 'Instrumentais'
    | 'Isolamento'
    | 'Brocas'
    | 'Cirúrgicos'
    | 'Acessórios'
    | 'Moldeiras / Moldagens'
    | 'Kits Clínicos'
    | 'Profilaxia'
    | 'Outros';

export type Product = {
    codigo: string;
    nome: string;
    descricao?: string;
    preco: number;
    imagem: string;
    estoque: number;
};

export type ProductWitCategory = Product & {
    categoria?: Categoria;
};

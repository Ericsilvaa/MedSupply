import type { ProductById } from '@/types/product';

export const products_data: ProductById[] = [
    {
        id: 1,
        code: '0001',
        name: 'Monitor Multiparamétrico',
        image: '/placeholder.svg?height=200&width=200',
        price: 12500.0,
        category: 'monitoramento',
        description:
            'Monitor multiparamétrico de alta precisão para monitoramento contínuo de sinais vitais. Ideal para UTIs, centros cirúrgicos e unidades de recuperação pós-anestésica.',
        specifications: {
            Tela: 'LCD 12 polegadas touchscreen',
            Parâmetros: 'ECG, SpO2, NIBP, Respiração, Temperatura',
            Bateria: 'Lítio, autonomia de 4 horas',
            Memória: '72 horas de tendências',
            Alarmes: 'Visuais e sonoros configuráveis',
            Conectividade: 'Wi-Fi, Ethernet, HL7'
        },
        features: [
            'Monitoramento simultâneo de até 8 parâmetros',
            'Interface intuitiva com tela touchscreen colorida',
            'Alarmes inteligentes com priorização clínica',
            'Exportação de dados para sistemas de prontuário eletrônico',
            'Modo de transporte com bateria de longa duração',
            'Suporte a módulos de expansão para parâmetros adicionais'
        ],
        stock: 15,
        manufacturer: 'CardioTech',
        warranty:
            '36 meses (sendo 3 meses de garantia legal e 33 meses de garantia especial oferecida pelo fabricante)',
        relatedProducts: [6, 9, 2]
    },
    {
        id: 2,
        code: '0002',
        name: 'Desfibrilador Cardíaco',
        image: '/placeholder.svg?height=200&width=200',
        price: 18750.0,
        category: 'emergencia',
        description:
            'Desfibrilador bifásico com monitor integrado para atendimento de emergências cardíacas. Equipamento essencial para reanimação cardiopulmonar em ambientes hospitalares.',
        specifications: {
            Tipo: 'Bifásico',
            Energia: '1-200 Joules ajustáveis',
            Monitor: 'LCD 7 polegadas colorido',
            Modos: 'DEA, Manual, Sincronizado',
            Bateria: 'Lítio, 200 choques',
            Peso: '5.8 kg'
        },
        features: [
            'Tecnologia bifásica para maior eficácia e menor dano ao tecido cardíaco',
            'Modo DEA com instruções por voz para uso por não-especialistas',
            'Análise automática de ritmo cardíaco',
            'Teste automático diário para garantir prontidão',
            'Memória interna para registro de eventos',
            'Resistente a impactos e respingos (IP54)'
        ],
        stock: 8,
        manufacturer: 'HeartSave',
        warranty: '24 meses (sendo 3 meses de garantia legal e 21 meses de garantia especial oferecida pelo fabricante)'
    },
    {
        id: 3,
        code: '0003',
        name: 'Bomba de Infusão',
        image: '/placeholder.svg?height=200&width=200',
        price: 5200.0,
        category: 'medicacao',
        description:
            'Bomba de infusão volumétrica para administração precisa de medicamentos e soluções. Projetada para uso em ambientes hospitalares que exigem alta precisão na administração de fluidos.',
        specifications: {
            Tipo: 'Volumétrica',
            Vazão: '0.1-999.9 ml/h',
            Precisão: '±2%',
            Bateria: 'Autonomia de 6 horas',
            Alarmes: 'Oclusão, ar na linha, fim de infusão',
            Peso: '2.3 kg'
        },
        stock: 20,
        manufacturer: 'InfuTech'
    },
    {
        id: 4,
        code: '0004',
        name: 'Ventilador Pulmonar',
        image: '/placeholder.svg?height=200&width=200',
        price: 32000.0,
        category: 'respiratorio',
        description:
            'Ventilador pulmonar microprocessado para suporte ventilatório invasivo e não-invasivo. Adequado para pacientes adultos, pediátricos e neonatais.',
        stock: 5,
        manufacturer: 'RespiraCare'
    },
    {
        id: 5,
        code: '0005',
        name: 'Cama Hospitalar Elétrica',
        image: '/placeholder.svg?height=200&width=200',
        price: 8900.0,
        category: 'mobiliario',
        stock: 12,
        manufacturer: 'MedComfort'
    },
    {
        id: 6,
        code: '0006',
        name: 'Eletrocardiógrafo Digital',
        image: '/placeholder.svg?height=200&width=200',
        price: 6750.0,
        category: 'monitoramento',
        description:
            'Eletrocardiógrafo digital de 12 derivações com interpretação automática. Ideal para exames de rotina e emergências cardíacas.',
        stock: 10,
        manufacturer: 'CardioTech'
    },
    {
        id: 7,
        code: '0007',
        name: 'Foco Cirúrgico LED',
        image: '/placeholder.svg?height=200&width=200',
        price: 15300.0,
        category: 'cirurgia',
        stock: 7,
        manufacturer: 'SurgicalLight'
    },
    {
        id: 8,
        code: '0008',
        name: 'Autoclave Hospitalar',
        image: '/placeholder.svg?height=200&width=200',
        price: 22800.0,
        category: 'esterilizacao',
        stock: 6,
        manufacturer: 'SterilTech'
    },
    {
        id: 9,
        code: '0009',
        name: 'Oxímetro de Pulso',
        image: '/placeholder.svg?height=200&width=200',
        price: 1200.0,
        category: 'monitoramento',
        description:
            'Oxímetro de pulso portátil para monitoramento não-invasivo da saturação de oxigênio e frequência cardíaca.',
        stock: 30,
        manufacturer: 'PulseOx'
    },
    {
        id: 10,
        code: '0010',
        name: 'Mesa Cirúrgica Elétrica',
        image: '/placeholder.svg?height=200&width=200',
        price: 45000.0,
        category: 'cirurgia',
        stock: 4,
        manufacturer: 'SurgicalTech'
    },
    {
        id: 11,
        code: '0011',
        name: 'Carrinho de Emergência',
        image: '/placeholder.svg?height=200&width=200',
        price: 7800.0,
        category: 'emergencia',
        stock: 9,
        manufacturer: 'EmergCare'
    },
    {
        id: 12,
        code: '0012',
        name: 'Negatoscópio LED',
        image: '/placeholder.svg?height=200&width=200',
        price: 2500.0,
        category: 'diagnostico',
        stock: 15,
        manufacturer: 'DiagnosticView'
    }
];

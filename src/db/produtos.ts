const produtos = [
    {
        codigo: '5126445',
        nome: 'Espelho 05',
        descricao: 'Espelho',
        preco: 5.4,
        imagem: 'espelho bucal.jpg',
        estoque: 5
    },
    {
        codigo: '31675192',
        nome: 'Sugador Cirúrgico Indusbelo UND',
        descricao: 'Sugador descartável transparente',
        preco: 2.1,
        imagem: 'sugador cirurgico.jpg',
        estoque: 5
    },
    {
        codigo: '30359',
        nome: 'Espátula Dupla 7 Golgran',
        descricao: 'Espátula para resina',
        preco: 19.3,
        imagem: 'espatula dupla.jpg',
        estoque: 2
    },
    {
        codigo: '30670',
        nome: 'Sonda Exploradora 5',
        descricao: 'Sonda ponta fina',
        preco: 14.5,
        imagem: 'sonda exploradora 5.jpg',
        estoque: 1
    },
    {
        codigo: '3176467',
        nome: 'Cureta Lucas n° 85 Golgran',
        descricao: 'Periodontal',
        preco: 30.0,
        imagem: 'cureta 85.jpg',
        estoque: 4
    },
    {
        codigo: '3174838',
        nome: 'Bandeja de Inox 22 x 12 x 1',
        descricao: 'Bandeja esterilizável',
        preco: 28.5,
        imagem: 'bandeja.jpg',
        estoque: 7
    },
    {
        codigo: '31683395',
        nome: 'Seringa Carpule ',
        descricao: 'Para anestesia local',
        preco: 27.8,
        imagem: 'carpule.jpg',
        estoque: 3
    },
    {
        codigo: '8730',
        nome: 'Agulhas Gengivais Dencojet',
        descricao: 'Pacote com 100 unidades',
        preco: 42.6,
        imagem: 'dencojet.jpg',
        estoque: 2
    },
    {
        codigo: '35682',
        nome: 'Adesivo Universal Singlebond',
        descricao: 'Frasco com 5ml',
        preco: 453.5,
        imagem: 'singlebond.jpg',
        estoque: 3
    },
    {
        codigo: '31674300',
        nome: 'Fio de Sutura 3.0',
        descricao: '24und',
        preco: 49.0,
        imagem: 'sutura nylon.jpg',
        estoque: 5
    },
    {
        codigo: '31674263',
        nome: 'Fio de Sutura 4.0',
        descricao: '24und',
        preco: 49.0,
        imagem: 'sutura nylon.jpg',
        estoque: 10
    },
    {
        codigo: '35453',
        nome: 'Fio de Sutura 5.0',
        descricao: 'Nylon 5.0 com agulha',
        preco: 49.0,
        imagem: 'sutura nylon.jpg',
        estoque: 10
    },
    {
        codigo: '30748',
        nome: 'Maxxion R kit A2',
        descricao: 'Para restaurações',
        preco: 65.5,
        imagem: 'maxxion R.jpg',
        estoque: 2
    },
    {
        codigo: '30731',
        nome: 'Maxxion R kit A3',
        descricao: 'Para restaurações',
        preco: 65.5,
        imagem: 'maxxion R.jpg',
        estoque: 2
    },
    {
        codigo: '30764',
        nome: 'Luvas Supermax XP',
        descricao: 'Caixa com 100 unid',
        preco: 36.0,
        imagem: 'supermax G.jpg',
        estoque: 6
    },
    {
        codigo: '307802',
        nome: 'Luvas Supermax P',
        descricao: 'Caixa com 100 unid',
        preco: 34.6,
        imagem: 'supermax G.jpg',
        estoque: 6
    },
    {
        codigo: '307833',
        nome: 'Luvas Supermax M',
        descricao: 'Caixa com 100 unid',
        preco: 34.6,
        imagem: 'supermax G.jpg',
        estoque: 6
    },
    {
        codigo: '307871',
        nome: 'Luvas Supermax G',
        descricao: 'Caixa com 100 unid',
        preco: 34.6,
        imagem: 'supermax G.jpg',
        estoque: 6
    },
    {
        codigo: '509566925',
        nome: 'Máscara Descartável Medix Rosa',
        descricao: 'Tripla camada com elástico',
        preco: 9.8,
        imagem: 'medixrosa.jpg',
        estoque: 10
    },
    {
        codigo: '509566924',
        nome: 'Máscara Descartável Medix Azul',
        descricao: 'Tripla camada com elástico',
        preco: 9.8,
        imagem: 'medix azul.jpg',
        estoque: 10
    },
    {
        codigo: '509565788',
        nome: 'Máscara Descartável Medix Branco',
        descricao: 'Tripla camada com elástico',
        preco: 9.8,
        imagem: 'medix branca.jpg',
        estoque: 10
    },
    {
        codigo: '31673693',
        nome: 'PERFURADOR AINSWORTH GOLGRAN',
        descricao: 'aço inox',
        preco: 125.0,
        imagem: 'perfurador.jpg',
        estoque: 10
    },
    {
        codigo: '31673655',
        nome: 'PINÇA PORTA GRAMPO PALMER SERRILHADA GOLGRAN',
        descricao: 'aço inox',
        preco: 98.99,
        imagem: 'pinçaportagrampo.jpg',
        estoque: 10
    },
    {
        codigo: '509566894',
        nome: 'GRAMPO 29 - SS WHITE',
        descricao: 'Indicado para pré-molares inferiores.',
        preco: 19.99,
        imagem: '29.jpg',
        estoque: 10
    },
    {
        codigo: '003513',
        nome: 'GRAMPO W8A - SS WHITE',
        descricao: ' Indicado para dentes molares e pequenos molares parcialmente erupcionados.',
        preco: 16.5,
        imagem: 'w8a.jpg',
        estoque: 10
    },
    {
        codigo: '003315',
        nome: 'GRAMPO 14 - SS WHITE',
        descricao: ' Indicado para molares parcialmente erupcionados ou de anatomia irregular. ',
        preco: 16.5,
        imagem: '14.jpg',
        estoque: 10
    },
    { codigo: '31695480', nome: 'PEDRA DE AFIAR BRANCA GOLGRAN', preco: 51.0, imagem: 'pedra-afiar.jpg', estoque: 0 },
    {
        codigo: '310543',
        nome: 'CURETA DE GRACEY 7-8 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '7-8.jpg',
        estoque: 10
    },
    {
        codigo: '310581',
        nome: 'CURETA GRACEY 11-12 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '11-12.jpg',
        estoque: 10
    },
    {
        codigo: '310628',
        nome: 'CURETA GRACEY 13-14 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '13-14.jpg',
        estoque: 10
    },
    {
        codigo: '313940',
        nome: 'CURETA PERIO 00 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '00.png',
        estoque: 10
    },
    {
        codigo: '311106',
        nome: 'CURETA MCCALL 13-14 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '13-14.jpg',
        estoque: 10
    },
    {
        codigo: '31680697',
        nome: 'CURETA MCCALL 17-18 MILLENNIUM',
        descricao: 'aço inox',
        preco: 63.5,
        imagem: '17-18.png',
        estoque: 10
    },
    {
        codigo: '509565616',
        nome: 'ARCO YOUNG MAQUIRA',
        descricao: 'adulto',
        preco: 12.65,
        imagem: 'arco yong.jpg',
        estoque: 10
    },
    {
        codigo: '004961',
        nome: 'ESTOJO PERF 26 X 12 X 06 - AÇO INOX',
        descricao: 'aço inox',
        preco: 137.5,
        imagem: 'estojo_26_x_12_x_06.jpg',
        estoque: 10
    },
    {
        codigo: '3167267',
        nome: 'BOB. TERMO SELANTE 200MMX100MM',
        descricao: '100M',
        preco: 121.6,
        imagem: '200-100 (1).jpg',
        estoque: 10
    },
    { codigo: '3169527', nome: 'GRAMPO 26 GOLGRAN', descricao: 'Golgran', preco: 12.5, imagem: '26.jpg', estoque: 10 },
    {
        codigo: '320764',
        nome: 'FIO AÇO 0.7M 55.01.070',
        descricao: 'Aço inox',
        preco: 12.5,
        imagem: '5501070.jpg',
        estoque: 10
    },
    {
        codigo: '3160503',
        nome: 'Esculpidor Hollembeck 3S Golgran',
        descricao: 'Instrumento de escultura em cera',
        preco: 17.2,
        imagem: '3s.jpeg',
        estoque: 10
    },
    {
        codigo: '31926799',
        nome: 'Esculpidor Lecron 5 Golgran',
        descricao: 'Instrumento de escultura em cera',
        preco: 19.5,
        imagem: 'lecron5.jpeg',
        estoque: 10
    },
    {
        codigo: '509566146',
        nome: 'Cera p/ Escultura Micro Marfim Regular',
        descricao: 'Cera marfim para escultura dental',
        preco: 20.7,
        imagem: 'ceramarfim.jpeg',
        estoque: 10
    },
    {
        codigo: '50956292',
        nome: 'Cabo p/ Espelho Bucal Golgran',
        descricao: 'Cabo para espelho bucal',
        preco: 7.5,
        imagem: 'caboespelho.jpeg',
        estoque: 10
    },
    {
        codigo: '31673792',
        nome: 'Pinça Clínica p/ Algodão C (317) Golgran',
        descricao: 'Pinça para algodão clínico',
        preco: 17.8,
        imagem: 'pinçaalgodao.jpeg',
        estoque: 10
    },
    {
        codigo: '31674096',
        nome: 'Porta Agulha Mayo Hegar 14cm Golgran',
        descricao: 'Porta-agulha 14cm Mayo Hegar',
        preco: 39.5,
        imagem: 'portagulhamayo.jpeg',
        estoque: 10
    },
    {
        codigo: '50956582',
        nome: 'Fio de Sutura Nylon 3-0 45cm c/Ag 20mm 3/8',
        descricao: 'Sutura nylon 3-0 com agulha 20mm',
        preco: 43.6,
        imagem: 'fiomedix.jpeg',
        estoque: 10
    },
    {
        codigo: '31673150',
        nome: 'Tesoura Iris 11,5cm Reta Golgran',
        descricao: 'Tesoura reta Iris 11,5cm',
        preco: 24.2,
        imagem: 'tesourairis.jpeg',
        estoque: 10
    },
    {
        codigo: '50956292',
        nome: 'Cabo p/ Bisturi 03 Golgran',
        descricao: 'Cabo para bisturi nº3',
        preco: 11.1,
        imagem: 'cabobisturir.jpeg',
        estoque: 10
    },
    {
        codigo: '50956570',
        nome: 'Lâmina de Bisturi N15C c/100 Un Carbon Medix',
        descricao: 'Lâminas N15C pacote c/100',
        preco: 0.4,
        imagem: 'lamina15c.jpeg',
        estoque: 10
    },
    {
        codigo: '3160565',
        nome: 'Alicate Orto 139 Angle Bending Golgran',
        descricao: 'Alicate ortodôntico 139',
        preco: 103.0,
        imagem: 'alicate139.jpeg',
        estoque: 10
    },
    {
        codigo: '31680240',
        nome: 'Sonda Milimetrada OMS Millennium',
        descricao: 'Sonda milimetrada dental OMS',
        preco: 60.2,
        imagem: 'oms.jpeg',
        estoque: 10
    },
    {
        codigo: '30618',
        nome: 'Espátula 6335 1 p/ Silicato Adulto Golgran',
        descricao: 'Espátula para silicato adulto',
        preco: 19.3,
        imagem: 'silicato.jpeg',
        estoque: 10
    },
    {
        codigo: '509565789',
        nome: 'Touca Sanfonada c/ Elástico Medix 100un',
        descricao: 'Touca sanfonada com elástico',
        preco: 10.5,
        imagem: 'toucamedix.jpeg',
        estoque: 10
    },
    {
        codigo: '9461',
        nome: 'Luva Procedim Latex com Pó Tam xp 100un Medix',
        descricao: 'Luva de procedimento com pó P',
        preco: 29.0,
        imagem: 'luvamedix.jpeg',
        estoque: 10
    },
    {
        codigo: '9461',
        nome: 'Luva Procedim Latex com Pó Tam P 100un Medix',
        descricao: 'Luva de procedimento com pó P',
        preco: 29.0,
        imagem: 'luvamedix.jpeg',
        estoque: 10
    },
    {
        codigo: '9461',
        nome: 'Luva Procedim Latex com Pó Tam M 100un Medix',
        descricao: 'Luva de procedimento com pó P',
        preco: 29.0,
        imagem: 'luvamedix.jpeg',
        estoque: 10
    },
    {
        codigo: '9461',
        nome: 'Luva Procedim Latex com Pó Tam G 100un Medix',
        descricao: 'Luva de procedimento com pó P',
        preco: 29.0,
        imagem: 'luvamedix.jpeg',
        estoque: 10
    },
    {
        codigo: '509563909',
        nome: 'Cubeta Grande Rosa 500ml OGP',
        descricao: 'Cubeta de plástico rosa 500ml',
        preco: 11.0,
        imagem: 'rosa.jpg',
        estoque: 10
    },
    {
        codigo: '509563906',
        nome: 'Espátula p/ Gesso Inox Madeira',
        descricao: 'Espátula para gesso',
        preco: 13.5,
        imagem: 'madeira.jpg',
        estoque: 10
    },
    {
        codigo: '509563903',
        nome: 'Espátula Plástica p/ Alginato',
        descricao: 'Espátula plástica anatômica',
        preco: 3.0,
        imagem: 'plastico.jpg',
        estoque: 10
    },
    {
        codigo: '7979',
        nome: 'Pote Dappen Silicone Rosa',
        descricao: 'Pote Dappen de silicone rosa',
        preco: 5.1,
        imagem: 'pote-rosa.jpg',
        estoque: 10
    },
    {
        codigo: '4015',
        nome: 'Pote Paladon vidro',
        descricao: 'Pote incolor',
        preco: 16.7,
        imagem: 'pote-paladon.jpg',
        estoque: 10
    },
    {
        codigo: '2783',
        nome: 'Placa de Vidro 20mm iodontosul',
        descricao: 'Placa de vidro',
        preco: 40.0,
        imagem: '20mm.jpg',
        estoque: 10
    },
    {
        codigo: '31685016',
        nome: 'Moldeira c/ 8 pcs adulto dent. perf. inox',
        descricao: 'dent. perf. inox',
        preco: 351.6,
        imagem: 'moldeira-inox.jpg',
        estoque: 10
    },
    {
        codigo: '7771',
        nome: 'Moldiera Perf parcial',
        descricao: 'D4 - MAC',
        preco: 8.1,
        imagem: 'moldeira-perfurada.jpg',
        estoque: 10
    },
    {
        codigo: '509563936',
        nome: 'Kit Clínico c/4 Pcs Azul Golgran',
        descricao: 'Kit clínico 4 peças azul',
        preco: 100.7,
        imagem: 'kitclinico.jpg',
        estoque: 10
    },
    {
        codigo: '315784',
        nome: 'Brunidor Simples 29 Golgran',
        descricao: 'Brunidor dental simples nº29',
        preco: 14.0,
        imagem: 'brunidor29.jpg',
        estoque: 10
    },
    {
        codigo: '30588',
        nome: 'Esculpidor Lecron Millennium',
        descricao: 'Esculpidor Lecron versão Millennium',
        preco: 19.5,
        imagem: 'lecron-milenium.jpg',
        estoque: 10
    },
    {
        codigo: '30397',
        nome: 'Espátula 24 Simples Golgran',
        descricao: 'Espátula simples nº24',
        preco: 18.4,
        imagem: '24.jpg',
        estoque: 10
    },
    {
        codigo: '30410',
        nome: 'Espátula 31 Golgran',
        descricao: 'Espátula simples nº31',
        preco: 18.4,
        imagem: 'Espatula31.jpg',
        estoque: 10
    },
    {
        codigo: '30472',
        nome: 'Espátula 36 Simples Golgran',
        descricao: 'Espátula simples nº36',
        preco: 17.8,
        imagem: '36.jpg',
        estoque: 10
    },
    {
        codigo: '06270',
        nome: 'Espátula p/ Resina 1 Dupla Millennium',
        descricao: 'Espátula dupla para resina',
        preco: 66.0,
        imagem: 'espatula1.jpg',
        estoque: 10
    },
    {
        codigo: '8129',
        nome: 'Injetor Elastômero Seringa Plástico Maquira',
        descricao: 'Injetor para elastômero plástico',
        preco: 27.0,
        imagem: 'seringa-elastomero.jpg',
        estoque: 10
    },
    {
        codigo: '312325',
        nome: 'Calçador de Ward 1 Golgran',
        descricao: 'Calçador de Ward modelo 1',
        preco: 14.8,
        imagem: '1.jpg',
        estoque: 10
    },
    {
        codigo: '312301',
        nome: 'Calçador de Ward 2 Golgran',
        descricao: 'Calçador de Ward modelo 2',
        preco: 14.8,
        imagem: '2.jpg',
        estoque: 10
    },
    {
        codigo: '312219',
        nome: 'Calçador de Ward 3 Golgran',
        descricao: 'Calçador de Ward modelo 3',
        preco: 14.8,
        imagem: '3.jpg',
        estoque: 10
    },
    {
        codigo: '312455',
        nome: 'Calçador de Ward 4 Golgran',
        descricao: 'Calçador de Ward modelo 4',
        preco: 14.8,
        imagem: '4.jpg',
        estoque: 10
    },
    {
        codigo: '312424',
        nome: 'Calçador de Ward 5 Golgran',
        descricao: 'Calçador de Ward modelo 5',
        preco: 14.8,
        imagem: '5.jpg',
        estoque: 10
    },
    {
        codigo: '509563958',
        nome: 'Porta Amálgama Plast. Autoclav. Maquira',
        descricao: 'Porta amálgama plástico verde',
        preco: 15.6,
        imagem: 'amalgama.jpg',
        estoque: 10
    },
    {
        codigo: '509562920',
        nome: 'Aplicador dycal Reto Golgran',
        descricao: 'inox',
        preco: 15.2,
        imagem: 'dycal.jpg',
        estoque: 10
    },
    {
        codigo: '9294',
        nome: 'Kit precision - maquira',
        descricao: '30 pontas',
        preco: 196.5,
        imagem: 'Precision.jpg',
        estoque: 10
    },
    {
        codigo: '509566092',
        nome: 'MNQ MTD 217 Modelo 2022',
        descricao: '217N orais',
        preco: 356.5,
        imagem: '2022.jpg',
        estoque: 10
    },
    {
        codigo: '509563655',
        nome: 'ESCOVA DENTAL ADULTO C. KOVACKS',
        descricao: 'Escova dental adulta de alta qualidade para uso diário.',
        preco: 1.05,
        imagem: 'escovadescartavel.png',
        estoque: 10
    },
    {
        codigo: '3175989',
        nome: 'SERINGA C/AG LUER SLIP 20 ML 25X0,7MM',
        descricao: 'Seringa com agulha Luer Slip, ideal para aplicações precisas.',
        preco: 0.95,
        imagem: 'seringa20.jpg',
        estoque: 10
    },
    {
        codigo: '9768',
        nome: 'KIT PERIO BEST FABRIL',
        descricao: 'Kit completo para periodontia, utilizado para tratamentos dentários.',
        preco: 21.0,
        imagem: 'kit perio.png',
        estoque: 10
    },
    {
        codigo: '3190982',
        nome: 'AGULHA CURTA UNOJECT UNID 30G DFL',
        descricao: 'Agulha curta de 30G para injeções precisas e eficazes.',
        preco: 0.69,
        imagem: 'agulha-unoject-cx.jpg',
        estoque: 10
    },
    {
        codigo: '30694',
        nome: 'CAVIBRUSH REG C/100 FGM',
        descricao: 'Escovas de cavilha para uso odontológico, embalagem com 100 unidades.',
        preco: 25.7,
        imagem: 'regular.png',
        estoque: 10
    },
    {
        codigo: '314343',
        nome: 'CAVIBRUSH FINO C/100 FGM',
        descricao: 'Escovas de cavilha para uso odontológico, embalagem com 100 unidades.',
        preco: 25.7,
        imagem: 'FINO.png',
        estoque: 10
    },
    {
        codigo: '414336',
        nome: 'CAVIBRUSH EXTRA-FINO C/100 FGM',
        descricao: 'Escovas de cavilha para uso odontológico, embalagem com 100 unidades.',
        preco: 25.7,
        imagem: 'extrafino.png',
        estoque: 10
    },
    {
        codigo: '509565694',
        nome: 'MINI CONJ.POLIMENTO DE RESINA (C/6) 3',
        descricao: 'Mini conjunto de polimento para resinas compostas, ideal para acabamento de restaurações.',
        preco: 62.3,
        imagem: 'minikit.png',
        estoque: 10
    },
    {
        codigo: '31688505',
        nome: 'CUNHA DE MADEIRA COLOR.IODONTOSUL',
        descricao: 'Cunha de madeira colorida para separação de dentes durante procedimentos odontológicos.',
        preco: 11.5,
        imagem: 'cunha.png',
        estoque: 10
    },
    {
        codigo: '31682732',
        nome: 'DISCO DE LIXA 16MM - 50 UNIDADES 3026',
        descricao: 'Disco de lixa de 16mm, embalagem com 50 unidades para polimento dental.',
        preco: 56.3,
        imagem: 'DISCO DE LIXA.png',
        estoque: 10
    },
    {
        codigo: '6798',
        nome: 'ESCAVADOR DUPLO 17 GOLGRAN',
        descricao: 'Escavador duplo 17, utilizado para remoção de tecido dental em tratamentos.',
        preco: 18.0,
        imagem: '17.png',
        estoque: 10
    },
    {
        codigo: '316101',
        nome: 'SONDA MILIMETRADA NABERS (COLORS) 2N',
        descricao: 'Sonda milimetrada para sondagem periodontal, modelo Nabers.',
        preco: 59.8,
        imagem: 'nabers.png',
        estoque: 10
    },
    {
        codigo: '301558',
        nome: 'SONDA MILIMETRADA WILLIAMS MILLENNIUM',
        descricao: 'Sonda milimetrada Williams para medição precisa de profundidade periodontal.',
        preco: 59.8,
        imagem: 'milimetrada.png',
        estoque: 10
    },
    {
        codigo: '310772',
        nome: 'CURETA MINI FIVE 5-6 MILLENNIUM',
        descricao: 'Cureta mini five, ideal para tratamentos periodontais em pequenas áreas.',
        preco: 56.8,
        imagem: 'cureta-mini-five-5-6.jpg',
        estoque: 10
    },
    {
        codigo: '301510',
        nome: 'LIMA HIRSCHFELD 3-7 GOLGRAN',
        descricao: 'Lima Hirschfeld para preparo de canais radiculares, tamanho 3-7.',
        preco: 72.3,
        imagem: 'LIMA HIRSCHFELD 3-7.png',
        estoque: 10
    },
    {
        codigo: '314626',
        nome: 'DESCOLADOR MOLT 9 MILLENNIUM',
        descricao: 'Descotor de MOLT para remoção de restos dentários e preparação de canais.',
        preco: 76.1,
        imagem: 'molte9.png',
        estoque: 10
    },
    {
        codigo: '33909',
        nome: 'CINZEL OCHSENBEIN FEDY 2 GOLGRAN',
        descricao: 'Cinzel Ochsensbein Fedy para escultura dentária precisa.',
        preco: 77.8,
        imagem: 'fedy2.png',
        estoque: 10
    },
    {
        codigo: '3160534',
        nome: 'ALAVANCA SELDIN C/3 PCS ADULTO MILLEN',
        descricao: 'Alavanca Seldin para extração dentária, com 3 peças para adulto.',
        preco: 129.5,
        imagem: 'alavanca-seldin.png',
        estoque: 10
    },
    {
        codigo: '509565202',
        nome: 'ALAVANCA HEINDERBRINK RETA (1) ADULTO',
        descricao: 'Alavanca Heinderbrink reta para extrações dentárias em adultos.',
        preco: 39.9,
        imagem: 'HEINDERBRINK.png',
        estoque: 10
    },
    {
        codigo: '509565196',
        nome: 'ALAVANCA POTTS DIREITA GOLGRAN',
        descricao: 'Alavanca Potts direita para extração dentária de dentes superiores.',
        preco: 78.7,
        imagem: 'PottsDireita.png',
        estoque: 10
    },
    {
        codigo: '509564822',
        nome: 'ALAVANCA POTTS ESQUERDA GOLGRAN',
        descricao: 'Alavanca Potts esquerda para extração dentária de dentes inferiores.',
        preco: 78.7,
        imagem: 'PottsEsquerda.png',
        estoque: 10
    },
    {
        codigo: '31672962',
        nome: 'ALVEOLOTOMO LUER CURVO GOLGRAN',
        descricao: 'Alveolotomo curvo para extração e remoção de dentes.',
        preco: 107.8,
        imagem: 'luercurvo.png',
        estoque: 10
    },
    {
        codigo: '309493',
        nome: 'CURETA LUCAS 86 GOLGRAN',
        descricao: 'Cureta Lucas 86 para tratamentos periodontais de alta precisão.',
        preco: 30.0,
        imagem: 'cureta_lucas_86.jpg',
        estoque: 10
    },
    {
        codigo: '31673112',
        nome: 'PINCA HEMOSTATICA KELLY 16CM CURVA GO',
        descricao: 'Pinca hemostática Kelly de 16cm, curva para controle de sangramentos.',
        preco: 37.5,
        imagem: 'kelly.png',
        estoque: 10
    },
    {
        codigo: '31790',
        nome: 'PINCA HALSTEAD MOSQUITO 12CM CURVA GO',
        descricao: 'Pinca Halstead de 12cm, curva para uso em cirurgias dentárias.',
        preco: 29.4,
        imagem: 'mosquitocurva.png',
        estoque: 10
    },
    {
        codigo: '509564823',
        nome: 'ABAIXA LINGUA BRUENINGS 19CM GOLGRAN',
        descricao: 'Abaixalingua Bruenings de 19cm para auxiliar em procedimentos odontológicos.',
        preco: 22.5,
        imagem: 'abaixadorlingua.png',
        estoque: 10
    },
    {
        codigo: '3175491',
        nome: 'CUBA INOX N.8 - ACONOX',
        descricao: 'Cuba de inox nº8 para uso em procedimentos dentários.',
        preco: 22.7,
        imagem: 'cuba8.png',
        estoque: 10
    },
    {
        codigo: '509564512',
        nome: 'PONTA CARBIDE FGOS 8 - DAVOS',
        descricao: 'Ponta de carbide FGOS 8 para alta performance em brocas dentárias.',
        preco: 16.0,
        imagem: 'fg8.png',
        estoque: 10
    },
    {
        codigo: '3189955',
        nome: 'PONTA CARBIDE ZEKRYA LONG DAVOS',
        descricao: 'Ponta de carbide Zekrya Long para trabalhos de alta precisão.',
        preco: 33.9,
        imagem: 'zekria.png',
        estoque: 10
    },
    {
        codigo: '31679992',
        nome: 'BROCA JET CARBIDE PM N. 702 - LABORDE',
        descricao: 'Broca Jet Carbide PM N. 702 para desgaste dental eficiente.',
        preco: 14.0,
        imagem: '702.png',
        estoque: 10
    },
    {
        codigo: '31676793',
        nome: 'ESPATULA P/ RESINA SF 1/2 MILLENNIUM',
        descricao: 'Espátula para resina SF 1/2 da Millennium, para acabamento de restaurações.',
        preco: 80.0,
        imagem: 'sf12.png',
        estoque: 10
    },
    {
        codigo: '4671',
        nome: 'POTE DAPPEN VIDRO INCOLOR- PREVENT',
        descricao: 'Pote Dappen de vidro incolor para mistura de materiais odontológicos.',
        preco: 5.6,
        imagem: 'dapen.png',
        estoque: 10
    },
    {
        codigo: '46152',
        nome: 'PINSEL KOLINSKY CHATO NO. 4B - KOTA I',
        descricao: 'Pincel Kolinsky chato nº 4B para aplicação de materiais odontológicos.',
        preco: 67.0,
        imagem: 'pincel4b.jpg',
        estoque: 10
    },
    {
        codigo: '509562969',
        nome: 'PORTA MATRIZ TOFFLEMIRE ADULTO GOLGRA',
        descricao: 'Porta matriz Tofflemire para uso adulto, de alta precisão.',
        preco: 34.3,
        imagem: 'portamatriz.png',
        estoque: 10
    },
    {
        codigo: '509565833',
        nome: 'BANDA MATRIZ ODONTOLOGICA 0,05 X 7 MM',
        descricao: 'Banda matriz odontológica 0,05 x 7mm para restaurações dentárias.',
        preco: 2.45,
        imagem: 'banda-matriz.jpg',
        estoque: 10
    },
    {
        codigo: '509564463',
        nome: 'TIRA ABRASIVA DE AÇO 4MM - ENVELOPE C',
        descricao: 'Tira abrasiva de aço 4mm para acabamento de restaurações.',
        preco: 8.2,
        imagem: 'TiraAiron4mm.png',
        estoque: 10
    },
    {
        codigo: '8525',
        nome: 'LIXA DE POLIESTER TIRAS C/150 UN AIRO',
        descricao: 'Lixa de poliéster, tira com 150 unidades, para acabamento dental.',
        preco: 13.3,
        imagem: 'aiton.png',
        estoque: 10
    },
    {
        codigo: '31682978',
        nome: 'BROCA JET CARBIDE AR N. 1 LABORDENTAL',
        descricao: 'Broca Jet Carbide AR nº1, ideal para corte de materiais odontológicos.',
        preco: 14.0,
        imagem: 'ar1.png',
        estoque: 10
    },
    {
        codigo: '31683012',
        nome: 'BROCA JET CARBIDE AR N. 2 LABORDENTAL',
        descricao: 'Broca de alta precisão para procedimentos odontológicos com excelente durabilidade.',
        preco: 14.6,
        imagem: 'ar2.png',
        estoque: 10
    },
    {
        codigo: '31683258',
        nome: 'BROCA JET CARBIDE AR N. 4 LABORDENTAL',
        descricao: 'Indicada para cortes eficientes e resistentes em tratamentos dentários.',
        preco: 14.6,
        imagem: 'ar4.png',
        estoque: 10
    },
    {
        codigo: '3194010',
        nome: 'BROCA FG 1013 FAVA',
        descricao: 'Broca para turbina, ideal para remoção de cáries e acabamento em cavidades.',
        preco: 4.8,
        imagem: '1013.png',
        estoque: 10
    },
    {
        codigo: '3193907',
        nome: 'BROCA FG 3118F FAVA',
        descricao: 'Ferramenta de corte fino para procedimentos clínicos delicados.',
        preco: 4.8,
        imagem: '3118f.png',
        estoque: 10
    },
    {
        codigo: '3195055',
        nome: 'BROCA FG 3195 FAVA',
        descricao: 'Broca odontológica resistente, indicada para desgastes precisos.',
        preco: 4.8,
        imagem: '3195.png',
        estoque: 10
    },
    {
        codigo: '3193921',
        nome: 'BROCA FG 3195F FAVA',
        descricao: 'Versão reforçada da broca FG 3195, com acabamento refinado.',
        preco: 4.8,
        imagem: '3195f.png',
        estoque: 10
    },
    {
        codigo: '509567246',
        nome: 'BROCA KG FG CIRURGICA',
        descricao: 'Broca cirúrgica de uso profissional, ideal para procedimentos invasivos.',
        preco: 22.0,
        imagem: 'fg kg.png',
        estoque: 10
    },
    {
        codigo: '31884990',
        nome: 'LUVA CIR ESTERIL 6,5 - SUPERMAX',
        descricao: 'Luva cirúrgica esterilizada para uso médico, tamanho 6,5.',
        preco: 1.8,
        imagem: 'luva6,5.png',
        estoque: 10
    },
    {
        codigo: '31885034',
        nome: 'LUVA CIR ESTERIL 7,0 - SUPERMAX',
        descricao: 'Luva cirúrgica esterilizada para uso médico, tamanho 7,0.',
        preco: 1.8,
        imagem: 'luva7.png',
        estoque: 10
    },
    {
        codigo: '31885041',
        nome: 'LUVA CIR ESTERIL 7,5 - SUPERMAX',
        descricao: 'Luva cirúrgica esterilizada para uso médico, tamanho 7,5.',
        preco: 1.8,
        imagem: 'luva7,5.png',
        estoque: 10
    },
    {
        codigo: '31885065',
        nome: 'LUVA CIR ESTERIL 8,0 - SUPERMAX',
        descricao: 'Luva cirúrgica esterilizada para uso médico, tamanho 8,0.',
        preco: 1.8,
        imagem: 'luva8.png',
        estoque: 10
    },
    {
        codigo: '509565696',
        nome: 'MANDRIL CA PARA DISCOS E SERRAS 3R',
        descricao: 'Mandril compatível com contra-ângulo para fixação de discos e serras.',
        preco: 7.8,
        imagem: 'mandrilca.png',
        estoque: 10
    },
    {
        codigo: '28820',
        nome: 'PLACA DE VIDRO INCOLOR MEDIA - PREVEN',
        descricao: 'Placa de vidro média, ideal para manipulação de materiais odontológicos.',
        preco: 17.6,
        imagem: 'placavidropreven.png',
        estoque: 10
    },
    {
        codigo: '31673310',
        nome: 'TESOURA CIRURGICA CURVA 15CM GOLGRAN',
        descricao: 'Tesoura curva de precisão para cortes em procedimentos cirúrgicos.',
        preco: 38.2,
        imagem: 'tesoura-cirurgica-15-cm.jpg',
        estoque: 10
    },
    {
        codigo: '31682985',
        nome: 'BROCA JET CARB AR 1/2 LABORDENTAL',
        descricao: 'Broca de carbureto com ponta arredondada para desgaste controlado.',
        preco: 14.0,
        imagem: 'BROCA JET CARB AR 1,2.jpg',
        estoque: 10
    },
    {
        codigo: '31677684',
        nome: 'BROCA JET CARB FG 1/4 LABORDENTAL',
        descricao: 'Broca fina com encaixe FG, ideal para áreas de difícil acesso.',
        preco: 13.1,
        imagem: 'BROCA JET CARB AR 1,4.jpg',
        estoque: 10
    },
    {
        codigo: '310932',
        nome: 'PTA DIAM KGS UN FG 3S 3118 - KG SOREN',
        descricao: 'Ponta diamantada de alta resistência para acabamento preciso.',
        preco: 12.5,
        imagem: '3118.png',
        estoque: 10
    },
    {
        codigo: '48040',
        nome: 'ESCOVA DE DENTES TREND SENSITIVE IMP',
        descricao: 'Escova dental com cerdas macias, ideal para gengivas sensíveis.',
        preco: 19.6,
        imagem: 'escovatrend.png',
        estoque: 10
    },
    {
        codigo: '7214',
        nome: 'TAÇA PARA PROFILAXIA - DAVOS',
        descricao: 'Taça para profilaxia',
        preco: 1.85,
        imagem: 'taça.png',
        estoque: 10
    },
    {
        codigo: '7214',
        nome: 'ESCOVA DE ROBINSON RETACA BRANCA - DAVOS',
        descricao: 'Escova para profilaxia',
        preco: 1.65,
        imagem: 'robson.png',
        estoque: 10
    },
    {
        codigo: '509566064',
        nome: 'ABRIDOR DE BOCA ADULTO IDONTOSUL',
        descricao: 'Abridor de boca adulto',
        preco: 8.1,
        imagem: 'abritex-pequeno-e-grande.png',
        estoque: 10
    },
    {
        codigo: '316725731',
        nome: 'FORCEPS ODONTOLÓGICO 151 INFANTIL GOLGRAN',
        descricao: 'Forceps infantil 151',
        preco: 103.2,
        imagem: '151.png',
        estoque: 10
    },
    {
        codigo: '31672542',
        nome: 'FORCEPS ODONTOLÓGICO 16 INFANTIL GOLGRAN',
        descricao: 'Forceps infantil 16',
        preco: 103.2,
        imagem: '16.png',
        estoque: 10
    },
    {
        codigo: '509562952',
        nome: 'FORCEPS ODONTOLÓGICO 2 INFANTIL GOLGRAN',
        descricao: 'Forceps infantil 2',
        preco: 103.2,
        imagem: 'forcepe2.png',
        estoque: 10
    },
    {
        codigo: '33831',
        nome: 'FORCEPS ODONTOLÓGICO 3 INFANTIL GOLGRAN',
        descricao: 'Forceps infantil 3',
        preco: 103.2,
        imagem: 'forcepe3.png',
        estoque: 10
    },
    {
        codigo: '315623',
        nome: 'SINDESMOTOMO 1 GOLGRAN',
        descricao: 'Sindesmotomo tipo 1',
        preco: 22.0,
        imagem: 'sindesmotomo 1.jpg',
        estoque: 10
    },
    {
        codigo: '31674225',
        nome: 'AFASTADOR MINNESOTA GOLGRAN',
        descricao: 'Afastador modelo Minnesota',
        preco: 13.2,
        imagem: 'afastadorminesota.jpg',
        estoque: 10
    },
    {
        codigo: '8457',
        nome: 'POSICIONADOR CONE AUTOCLAVÁVEL ADULTO - MAQU',
        descricao: 'Posicionador cone autoclavável',
        preco: 75.8,
        imagem: 'cone.png',
        estoque: 10
    },
    {
        codigo: '509961',
        nome: 'POSICIONADOR RADIOGRÁFICO / CONE INDICATOR',
        descricao: 'Posicionador radiográfico',
        preco: 105.4,
        imagem: 'kit-posicionador.jpg',
        estoque: 10
    },
    {
        codigo: '8402',
        nome: 'MOLDEIRA PLAST. KIT DE NO1 A N.08 AUTOC - MA',
        descricao: 'Kit moldeiras autoclaváveis',
        preco: 92.0,
        imagem: 'moldeirakit.png',
        estoque: 10
    },
    {
        codigo: '29780',
        nome: 'EZACT KROMM 410G VIGODENT',
        descricao: 'Ezact Kromm 410g',
        preco: 22.5,
        imagem: 'alginato-ezact-kromm.jpg',
        estoque: 10
    },
    {
        codigo: '321235',
        nome: 'GESSO DURANIT 2KG STARGESSO',
        descricao: 'Gesso Duranit 2kg',
        preco: 12.0,
        imagem: 'gessopedra.png',
        estoque: 20
    },
    {
        codigo: '308786',
        nome: 'ESCAVADOR DUPLO 14 GOLGRAN',
        descricao: 'Escavador duplo nº14',
        preco: 17.2,
        imagem: '14.png',
        estoque: 10
    },
    {
        codigo: '5099620',
        nome: 'APLICADOR DYCAL ANGULADO GOLGRAN',
        descricao: 'Aplicador angulado Dycal',
        preco: 14.5,
        imagem: 'DYCALANGULADO.png',
        estoque: 10
    },
    {
        codigo: '509564369',
        nome: 'LIMA MANUAL K AÇO 21MM #15-40 EURODONTO -H',
        descricao: 'Lima K aço #15-40',
        preco: 18.0,
        imagem: 'LIMA.PNG',
        estoque: 10
    },
    {
        codigo: '509564370',
        nome: 'LIMA MANUAL K AÇO 21MM #45-80 EURODONTO -H',
        descricao: 'Lima K aço #45-80',
        preco: 18.0,
        imagem: 'LIMA.PNG',
        estoque: 10
    },
    {
        codigo: '509562408',
        nome: 'RÉGUA MILIMETRADA ROXA GOLGRAN',
        descricao: 'Régua milimetrada roxa',
        preco: 18.5,
        imagem: 'REGUA.png',
        estoque: 10
    },
    {
        codigo: '3194041',
        nome: 'BROCA FG 1015 FAVA',
        descricao: 'Broca FG 1015',
        preco: 4.8,
        imagem: '1015.png',
        estoque: 10
    },
    {
        codigo: '50955987',
        nome: 'BROCA FG 3082 FAVA',
        descricao: 'Broca FG 3082',
        preco: 4.8,
        imagem: '3082.png',
        estoque: 10
    },
    {
        codigo: '319492',
        nome: 'BROCA FG 2200 FAVA',
        descricao: 'Broca FG 2200',
        preco: 4.8,
        imagem: '2200.png',
        estoque: 10
    },
    {
        codigo: '3193907',
        nome: 'BROCA FG 3118F FAVA',
        descricao: 'Broca FG 3118F',
        preco: 4.8,
        imagem: '3118f.PNG',
        estoque: 10
    }
];

export { produtos };

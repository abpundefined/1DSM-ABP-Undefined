document.addEventListener('DOMContentLoaded', function () {
    const publications = [
        // {
        //     id: 'A1',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A1_GR.jpg',
        //     title: 'Estimating crop sowing and harvesting dates using satellite vegetation index: A comparative analysis',
        //     doi: 'https://doi.org/10.3390/rs15225366',
        //     citation: 'Rodigheri, G., Sanches, I. D. A., Richetti, J., Tsukahara, R. Y., Lawes, R., Bendini, H. D. N., & Adami, M. (2023). Estimating crop sowing and harvesting dates using satellite vegetation index: A comparative analysis. Remote sensing, 15(22), 5366.',
        //     year: '2023',
        //     abstract: ''
        // },
        // {
        //     id: 'A2',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A2_NS.png',
        //     title: 'Sugarcane Yield Estimation Using Satellite Remote Sensing Data in Empirical or Mechanistic Modeling: A Systematic Review',
        //     doi: 'https://doi.org/10.3390/rs16050863',
        //     citation: 'de França e Silva, N. R., Chaves, M. E. D., Luciano, A. C. d. S., Sanches, I. D., de Almeida, C. M., & Adami, M. (2024). Sugarcane Yield Estimation Using Satellite Remote Sensing Data in Empirical or Mechanistic Modeling: A Systematic Review. Remote Sensing, 16(5), 863.',
        //     year: '2024',
        //     abstract: ''
        // },
        // {
        //     id: 'A3',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A3_VP.png',
        //     title: 'Limitations of cloud cover for optical remote sensing of agricultural areas across South America',
        //     doi: 'https://doi.org/10.1016/j.rsase.2020.100414',
        //     citation: 'Prudente, V.H.R., Martins, V.S., Vieira, D.C., et al. (2020) Limitations of Cloud Cover for Optical Remote Sensing of Agricultural Areas across South America. Remote Sensing Applications: Society and Environment, 20, Article ID: 100414.',
        //     year: '2020',
        //     abstract: ''
        // },
        // {
        //     id: 'A4',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A4_PS.png',
        //     title: 'Land Use and Land Cover Products for Agricultural Mapping Applications in Brazil: Challenges and Limitations',
        //     doi: 'https://doi.org/10.3390/rs17132324',
        //     citation: 'Santos, P.A.d.; Adami, M.; Picoli, M.C.A.; Prudente, V.H.R.; Esquerdo, J.C.D.M.; Queiroz, G.R.d.; Carneiro de Santana, C.T.; Chaves, M.E.D. Land Use and Land Cover Products for Agricultural Mapping Applications in Brazil: Challenges and Limitations. Remote Sens. 2025, 17, 2324.',
        //     year: '2025',
        //     abstract: ''
        // },
        // {
        //     id: 'A5',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A5_CS.jpeg',
        //     title: 'A Method for Estimating Soybean Sowing, Beginning Seed, and Harvesting Dates in Brazil Using NDVI-MODIS Data',
        //     doi: 'https://doi.org/10.3390/rs16142520',
        //     citation: 'Santana, C.T.C.; Sanches, I.D.; Caldas, M.M.; Adami, M. A Method for Estimating Soybean Sowing, Beginning Seed, and Harvesting Dates in Brazil Using NDVI-MODIS Data. Remote Sens. 2024, 16, 2520.',
        //     year: '2024',
        //     abstract: ''
        // },
        // {
        //     id: 'A6',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A6_AG.png',
        //     title: 'Comprehensive workflow for image segmentation of rice fields utilizing the PLANET model',
        //     doi: 'https://doi.org/10.1016/j.acags.2025.100223',
        //     citation: 'Garcia, A. D. B., Islam, M. S., Prudente, V. H. R., Sanches, I. D. A., & Cheng, I. Irrigated rice-field mapping in Brazil using phenological stage information and optical and microwave remote sensing. Applied Computing and Geosciences, v. 25, p. 100223, 2025.',
        //     year: '2025',
        //     abstract: ''
        // },
        // {
        //     id: 'A7',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A7_AG.png',
        //     title: 'Growth behavior of irrigated rice according to different indices, sensors, and stages of the growth cycle',
        //     doi: 'https://doi.org/10.3390/agriengineering7030065',
        //     citation: 'Garcia, A. D. B., Sanches, I. D. A., Prudente, V. H. R., & Trabaquini, K. Characterization of Irrigated Rice Cultivation Cycles and Classification in Brazil Using Time Series Similarity and Machine Learning Models with Sentinel Imagery. AgriEngineering, v. 7, n. 3, p. 65, 2025.',
        //     year: '2025',
        //     abstract: ''
        // },
        // {
        //     id: 'A8',
        //     type: 'A',
        //     image: '/public/img/publicacoes/Figura_A8_AG.png',
        //     title: 'Example of detailed features in irrigated rice fields',
        //     doi: 'https://doi.org/10.5753/jidm.2025.4181',
        //     citation: 'Garcia, A. D. B., Prudente, V. H. R., da Silva, D. T., Chaves, M. E. D., Trabaquini, K., & Sanches, I. D. A. Detailed Mapping of Irrigated Rice Fields Using Remote Sensing data and Segmentation Techniques: A case of study in Turvo, Santa Catarina, Brazil. Journal of Information and Data Management, v. 16, n. 1, p. 92-109, 2025.',
        //     year: '2025',
        //     abstract: ''
        // },
        {
            id: 'AC1',
            type: 'AC',
            image: '../public/img/publicacoes/Figura_AC1_PS.png',
            title: 'Avaliação do uso e cobertura da terra no Mato Grosso entre 1985-2020',
            doi: '',
            links: ['https://proceedings.science/sbsr/sbsr-2023/trabalhos/avaliacao-do-uso-e-cobertura-da-terra-no-mato-grosso-entre-1985-2020-mudancas-as?lang=pt-br'],
            citation: 'SANTOS, Priscilla Azevedo dos; ESCADA, Maria Isabel Sobral; ADAMI, Marcos. ... (SBSR 2023).',
            year: '2023',
            abstract: ''
        },
        // {
        //     id: 'AC2',
        //     type: 'AC',
        //     image: '/public/img/publicacoes/Figura_AC2_PS.jpg',
        //     title: 'Sentinel-2 multidimensional data cubes for crop monitoring time series classification',
        //     doi: '',
        //     citation: 'SANTOS, Priscilla Azevedo dos; OLIVEIRA, Maria Antônia F.; ... (SBSR 2023).',
        //     year: '2023',
        //     abstract: ''
        // },
        {
            id: 'AC3',
            type: 'AC',
            image: '../public/img/publicacoes/Figura_AC3_PS.png',
            title: 'Rumo a Estimativa Objetivas de Safras Agrícolas',
            doi: '',
            links: ['https://proceedings.science/sbsr/sbsr-2023/trabalhos/rumo-a-estimativa-objetivas-de-safras-agricolas?lang=pt-br.'],
            citation: 'ADAMI, Marcos; CAMPOS, Patrícia; ... (SBSR 2023).',
            year: '2023',
            abstract: ''
        },
        // {
        //     id: 'AC4',
        //     type: 'AC',
        //     image: '/public/img/publicacoes/Figura_AC4_PS.png',
        //     title: 'Exploring agricultural classes from available land use and land cover maps',
        //     doi: '',
        //     citation: 'SANTOS, Priscilla Azevedo dos; ADAMI, Marcos. (SBSR 2025).',
        //     year: '2025',
        //     abstract: ''
        // },
        // {
        //     id: 'AC5',
        //     type: 'AC',
        //     image: '/public/img/publicacoes/Figura_AC5_PS.png',
        //     title: 'Evaluating dissimilarities among available land use and land cover mapping initiatives',
        //     doi: '',
        //     citation: 'SANTOS, Priscilla Azevedo dos; ADAMI, Marcos. (SBSR 2025).',
        //     year: '2025',
        //     abstract: ''
        // }
    ];

    const listEl = document.getElementById('publications-list');
    const anoSelect = document.getElementById('filter-ano');
    const searchInput = document.getElementById('filter-search');
    const detail = {
        title: document.getElementById('detail-title'),
        date: document.getElementById('detail-date'),
        image: document.getElementById('detail-image'),
        subtitle: document.getElementById('detail-subtitle'),
        text: document.getElementById('detail-text'),
        citation: document.getElementById('detail-citation'),
        doi: document.getElementById('detail-doi'),
        links: document.getElementById('detail-links')
    };

    function renderList(items) {
        listEl.innerHTML = '';
        console.log('Rendering', items.length, 'publications');
        items.forEach(pub => {
            const card = document.createElement('div');
            card.className = 'publication-card';
            card.setAttribute('data-ano', pub.year);
            card.innerHTML = `
                <img src="${pub.image}" alt="${pub.title}" onerror="this.src='/public/img/publicacoes/Figura_A1_GR.jpg'">
                <h3>${pub.title}</h3>
            `;
            card.addEventListener('click', () => showDetail(pub));
            listEl.appendChild(card);
        });
        if(items.length === 0){
            const msg = document.createElement('div');
            msg.className = 'publication-card';
            msg.textContent = 'Nenhuma publicação encontrada.';
            listEl.appendChild(msg);
        }
    }

    function showDetail(pub) {
        detail.title.textContent = pub.title;
        detail.date.textContent = pub.year;
        if (pub.image) {
            detail.image.src = pub.image;
            detail.image.style.display = '';
        } else {
            detail.image.style.display = 'none';
        }
        detail.subtitle.textContent = `${pub.type === 'A' ? 'Artigo' : pub.type}`;
        detail.text.textContent = pub.abstract || '';
        detail.citation.textContent = `Citação: ${pub.citation}`;
        // render DOI and any other link available
        detail.links.innerHTML = '';
        if (pub.doi) {
            const a = document.createElement('a');
            a.href = pub.doi;
            a.target = '_blank';
            a.textContent = 'DOI (abrir)';
            a.style.display = 'inline-block';
            a.style.marginRight = '12px';
            detail.links.appendChild(a);
        }
        if (Array.isArray(pub.links)) {
            pub.links.forEach((l, i) => {
                const a = document.createElement('a');
                a.href = l;
                a.target = '_blank';
                a.textContent = `Disponível em`;
                a.style.display = 'inline-block';
                a.style.marginRight = '12px';
                detail.links.appendChild(a);
            });
        }
    }

    function filterAndRender() {
        const ano = anoSelect.value;
        const search = searchInput.value.toLowerCase();
        const filtered = publications.filter(pub => {
            const matchAno = !ano || pub.year === ano;
            const text = (pub.title + ' ' + pub.citation).toLowerCase();
            const matchSearch = !search || text.includes(search);
            return matchAno && matchSearch;
        });
        renderList(filtered);
    }

    anoSelect.addEventListener('change', filterAndRender);
    searchInput.addEventListener('input', filterAndRender);

    renderList(publications);
    
    if (publications.length) showDetail(publications[0]);
});
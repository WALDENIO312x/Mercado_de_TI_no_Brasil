document.addEventListener('DOMContentLoaded', function () {
    
    // Dados da aplicação
    const appData = {
        stats: {
            growth: 13,
            demand: 159,
            deficit: 797,
            supply: 53
        },
        roles: [
            { name: 'Desenvolvedor Back-end', vagas: 21802, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Responsável pela lógica de negócios, banco de dados e integração de APIs.', tags: ['Java', 'Python', 'C#', 'Node.js', 'SQL', 'APIs'] },
            { name: 'Desenvolvedor Front-end', vagas: 18680, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Cria a interface visual e interativa com a qual os usuários interagem.', tags: ['JavaScript', 'React', 'Angular', 'Vue.js', 'HTML5', 'CSS3'] },
            { name: 'Engenheiro de Software', vagas: 12870, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Projeta, desenvolve e mantém sistemas de software complexos e escaláveis.', tags: ['Arquitetura', 'DevOps', 'Cloud', 'Qualidade', 'Performance'] },
            { name: 'Product Manager', vagas: 12005, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Define a visão, estratégia e roadmap do produto, atuando na interface entre negócio e tecnologia.', tags: ['Estratégia', 'Roadmap', 'Agile', 'UX', 'Dados'] },
            { name: 'Desenvolvedor Full-stack', vagas: 8366, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Atua tanto no desenvolvimento front-end quanto back-end de aplicações.', tags: ['React', 'Node.js', 'Python', 'Java', 'Banco de Dados'] },
            { name: 'Especialista em Cibersegurança', vagas: 5120, salary: 'R$ 3.000 - R$ 25.000+', desc: 'Protege sistemas, redes e dados contra ataques cibernéticos. Implementa e gerencia políticas e ferramentas de segurança.', tags: ['Redes', 'Firewalls', 'SIEM', 'Análise Forense', 'Penetration Testing'] },
            { name: 'Analista de BI', vagas: 3781, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Transforma dados brutos em insights acionáveis para decisões de negócio.', tags: ['Power BI', 'Tableau', 'SQL', 'ETL', 'Dashboards'] },
            { name: 'Desenvolvedor de IA', vagas: 3550, salary: 'R$ 4.000 - R$ 25.000+', desc: 'Desenvolve e integra soluções de inteligência artificial em produtos e serviços, focando na aplicação prática de modelos.', tags: ['Python', 'NLP', 'Visão Computacional', 'APIs de IA', 'TensorFlow', 'PyTorch'] },
            { name: 'Especialista em ML', vagas: 3414, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Desenvolve e implementa algoritmos de aprendizado de máquina.', tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'IA'] },
            { name: 'Engenheiro de Dados', vagas: 2928, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Constrói e otimiza a infraestrutura para coleta, armazenamento e processamento de dados.', tags: ['Spark', 'Hadoop', 'Kafka', 'SQL', 'Cloud', 'ETL'] },
            { name: 'Cientista de Dados', vagas: 2213, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Analisa grandes volumes de dados para identificar padrões e prever tendências.', tags: ['Python', 'R', 'Estatística', 'Machine Learning', 'SQL'] },
            { name: 'Scrum Master', vagas: 2093, salary: 'R$ 1.500 - R$ 20.000+', desc: 'Facilita equipes ágeis, removendo impedimentos e garantindo a adesão às práticas Scrum.', tags: ['Agile', 'Scrum', 'Kanban', 'Liderança', 'Comunicação'] }
        ],
        technologies: {
            linguagens: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h4 class="font-semibold text-slate-800 mb-3">Front-end</h4>
                        <p class="text-sm text-slate-600 mb-4">Criação de interfaces dinâmicas e interativas.</p>
                        <div class="space-y-2">
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Linguagens:</strong> JavaScript, TypeScript</div>
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Frameworks:</strong> React, Angular, Vue.js</div>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-slate-800 mb-3">Back-end</h4>
                        <p class="text-sm text-slate-600 mb-4">Desenvolvimento da lógica de negócios e APIs.</p>
                        <div class="space-y-2">
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Linguagens:</strong> Java, Python, C#, PHP</div>
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Frameworks:</strong> Spring Boot, Django, ASP.NET Core</div>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-slate-800 mb-3">Data Science & IA</h4>
                        <p class="text-sm text-slate-600 mb-4">Análise de dados e construção de modelos.</p>
                        <div class="space-y-2">
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Linguagens:</strong> Python, R</div>
                            <div class="bg-stone-100 p-3 rounded-lg"><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn</div>
                        </div>
                    </div>
                </div>`,
            plataformas: `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div><h4 class="font-semibold text-slate-800 mb-3">Cloud Computing</h4><p class="text-sm text-slate-600">Infraestrutura escalável. Domínio em <strong>AWS, Microsoft Azure e Google Cloud Platform (GCP)</strong> é essencial.</p></div>
                    <div><h4 class="font-semibold text-slate-800 mb-3">Análise de Dados & BI</h4><p class="text-sm text-slate-600">Visualização de dados para negócios. Ferramentas como <strong>Power BI, Tableau e Qlikview</strong> são as mais usadas.</p></div>
                    <div><h4 class="font-semibold text-slate-800 mb-3">DevOps & Automação</h4><p class="text-sm text-slate-600">Integração e entrega contínua. Conhecimento em <strong>Jenkins, Git, Kubernetes e Docker</strong> é fundamental.</p></div>
                    <div><h4 class="font-semibold text-slate-800 mb-3">Segurança da Informação</h4><p class="text-sm text-slate-600">Proteção de sistemas e dados. Ferramentas como <strong>SIEM, Firewalls e IPS/IDS</strong> são cruciais.</p></div>
                </div>`,
            erp: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><h4 class="font-semibold text-slate-800 mb-3">Sistemas ERP (SAP)</h4><p class="text-sm text-slate-600">A SAP tem forte presença no Brasil. Conhecimento em <strong>S/4 HANA</strong> e <strong>SAP Cloud Platform (BTP)</strong> está em alta. A linguagem <strong>ABAP</strong> continua relevante para customizações e migrações.</p></div>
                    <div><h4 class="font-semibold text-slate-800 mb-3">Big Data</h4><p class="text-sm text-slate-600">O Brasil lidera o uso na América Latina. Ferramentas como <strong>Apache Spark, Hadoop e Kafka</strong> são essenciais para processar grandes volumes de dados e extrair valor.</p></div>
                </div>`
        },
        skills: {
            hard: ['Linguagens (JavaScript, Python, Java)', 'Plataformas de Nuvem (AWS, Azure, GCP)', 'Banco de Dados (SQL e NoSQL)', 'Ferramentas de BI (Power BI, Tableau)', 'Cibersegurança e Ferramentas SIEM', 'Frameworks de IA/ML (TensorFlow, PyTorch)', 'DevOps (CI/CD, Kubernetes, Docker)'],
            soft: ['Comunicação e Colaboração', 'Pensamento Analítico e Crítico', 'Resolução de Problemas Complexos', 'Flexibilidade e Adaptabilidade', 'Proatividade e Liderança', 'Ética Profissional', 'Aprendizado Contínuo (Lifelong Learning)']
        },
        certifications: [
            { name: 'AWS Certified Solutions Architect', desc: 'Valida a habilidade de projetar e implantar sistemas escaláveis e seguros na AWS, a líder de mercado em nuvem.' },
            { name: 'PMP (Project Management Professional)', desc: 'Certificação crucial para líderes de projeto, validando experiência em gestão, liderança e execução de projetos complexos.' },
            { name: 'CISSP (Certified Information Systems Security Professional)', desc: 'Uma das certificações mais respeitadas em segurança da informação, cobrindo um vasto conhecimento em cibersegurança.' },
            { name: 'Microsoft Certified: Azure Solutions Architect Expert', desc: 'Equivalente da Microsoft à certificação da AWS, focada em projetar soluções robustas na plataforma Azure.' },
            { name: 'ITIL Foundation', desc: 'Essencial para gerenciamento de serviços de TI, focando em planejamento, entrega e suporte para alinhar a TI aos negócios.' }
        ],
        recommendations: [
            { title: 'Base Sólida e Versátil', text: 'Domine linguagens como JavaScript, Python e Java e seus principais frameworks (React, Django, Spring Boot).' },
            { title: 'Especialize-se Estrategicamente', text: 'Foque em áreas de alto crescimento como IA/ML, Cibersegurança, Engenharia de Dados e Cloud Computing.' },
            { title: 'Domine as Ferramentas Chave', text: 'Aprofunde-se em plataformas como AWS/Azure, ferramentas de BI como Power BI e práticas DevOps com Kubernetes.' },
            { title: 'Invista em Qualificação', text: 'Busque certificações de mercado (AWS, PMP, CISSP) e considere bootcamps para aprendizado prático e rápido.' },
            { title: 'Desenvolva Soft Skills', text: 'Aprimore sua comunicação, colaboração e pensamento crítico. A TI hoje é uma parceira estratégica do negócio.' },
            { title: 'Seja Flexível', text: 'Considere oportunidades em polos tecnológicos e busque empresas com modelos de trabalho flexíveis (híbrido/remoto).' }
        ]
    };

    // Função para animar os contadores na seção de panorama
    const animateValue = (obj, start, end, duration, suffix = '') => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('pt-BR') + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Observador de intersecção para acionar a animação dos contadores
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(document.getElementById('stat-growth'), 0, appData.stats.growth, 1500, '%');
                animateValue(document.getElementById('stat-demand'), 0, appData.stats.demand, 1500, ' mil');
                animateValue(document.getElementById('stat-deficit'), 0, appData.stats.deficit, 1500, ' mil');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(document.getElementById('panorama'));

    // Gráfico de Talento (Talent Gap)
    const talentGapCtx = document.getElementById('talentGapChart').getContext('2d');
    new Chart(talentGapCtx, {
        type: 'bar',
        data: {
            labels: ['Demanda Anual', 'Profissionais Formados'],
            datasets: [{
                label: 'Profissionais (em milhares)',
                data: [appData.stats.demand, appData.stats.supply],
                backgroundColor: ['#0284c7', '#f59e0b'],
                borderColor: ['#0369a1', '#d97706'],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw} mil`;
                        }
                    }
                }
            },
            scales: {
                x: { beginAtZero: true }
            }
        }
    });
    
    // Gráfico de Vagas em Destaque (Top Roles)
    const rolesCtx = document.getElementById('topRolesChart').getContext('2d');
    const topRolesChart = new Chart(rolesCtx, {
        type: 'bar',
        data: {
            labels: appData.roles.map(r => r.name.length > 25 ? r.name.match(/.{1,25}/g) : r.name),
            datasets: [{
                label: 'Número de Vagas',
                data: appData.roles.map(r => r.vagas),
                backgroundColor: '#0ea5e9',
                borderColor: '#0284c7',
                borderWidth: 1,
                borderRadius: 4,
                hoverBackgroundColor: '#0369a1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Vagas: ${context.raw.toLocaleString('pt-BR')}`;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    updateRoleDetails(index);
                    
                    topRolesChart.data.datasets[0].backgroundColor = appData.roles.map((_, i) => i === index ? '#0369a1' : '#0ea5e9');
                    topRolesChart.update();
                }
            }
        }
    });

    // Função para atualizar o painel de detalhes do cargo
    const updateRoleDetails = (index) => {
        const role = appData.roles[index];
        document.getElementById('details-title').textContent = role.name;
        document.getElementById('details-description').textContent = role.desc;
        document.getElementById('details-salary').textContent = `Faixa Salarial: ${role.salary}`;
        const tagsContainer = document.getElementById('details-tags');
        tagsContainer.innerHTML = role.tags.map(tag => `<span class="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tag}</span>`).join('');
    };

    // Lógica para as abas de tecnologias
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContentContainer = document.getElementById('tab-content');
    
    const updateTabContent = (tabId) => {
        tabContentContainer.innerHTML = appData.technologies[tabId];
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('active-tab');
                btn.classList.add('text-slate-500', 'hover:text-slate-700', 'border-transparent');
            });
            button.classList.add('active-tab');
            button.classList.remove('text-slate-500', 'hover:text-slate-700', 'border-transparent');
            updateTabContent(button.dataset.tab);
        });
    });
    updateTabContent('linguagens');

    // Renderização das listas de habilidades e recomendações
    document.getElementById('hard-skills-list').innerHTML = appData.skills.hard.map(skill => `
        <li class="flex items-start"><span class="text-sky-500 mr-2 mt-1">✓</span>${skill}</li>`).join('');
    document.getElementById('soft-skills-list').innerHTML = appData.skills.soft.map(skill => `
        <li class="flex items-start"><span class="text-sky-500 mr-2 mt-1">✓</span>${skill}</li>`).join('');

    const accordionContainer = document.getElementById('certifications-accordion');
    accordionContainer.innerHTML = appData.certifications.map((cert, index) => `
        <div>
            <h2>
                <button type="button" class="flex items-center justify-between w-full p-4 font-medium text-left text-slate-700 bg-stone-100 rounded-lg hover:bg-stone-200 focus:ring-2 focus:ring-sky-200" data-accordion-target="accordion-body-${index}">
                    <span>${cert.name}</span>
                    <span class="accordion-icon transform transition-transform duration-200">▼</span>
                </button>
            </h2>
            <div id="accordion-body-${index}" class="hidden p-4 border border-t-0 border-stone-200 rounded-b-lg">
                <p class="text-slate-600">${cert.desc}</p>
            </div>
        </div>
    `).join('');

    // Lógica para o acordeão de certificações
    accordionContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-accordion-target]');
        if (button) {
            const targetId = button.getAttribute('data-accordion-target');
            const targetPanel = document.getElementById(targetId);
            const icon = button.querySelector('.accordion-icon');
            const isExpanded = !targetPanel.classList.contains('hidden');
            targetPanel.classList.toggle('hidden');
            icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });

    document.getElementById('recommendations-list').innerHTML = appData.recommendations.map(rec => `
        <div class="bg-sky-600 p-5 rounded-lg">
            <h4 class="font-bold mb-2">${rec.title}</h4>
            <p class="text-sky-100 text-sm">${rec.text}</p>
        </div>
    `).join('');

    // Lógica para o menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.addEventListener('click', (e) => {
        // Fechar o menu se um link for clicado para navegar na página
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
        }
    });
});

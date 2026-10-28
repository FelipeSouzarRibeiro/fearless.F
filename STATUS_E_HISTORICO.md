# FEERLESS — Status do Projeto & Histórico de Evolução

Este documento registra o estado completo do projeto, decisões de arquitetura e todas as implementações realizadas para permitir a retomada imediata do desenvolvimento.

---

## 📌 1. Visão Geral do Projeto
- **Cliente / Autor:** Felipe (@felipe.srll)
- **Marca:** FEERLESS
- **Contato Comercial WhatsApp:** `(12) 98708-9203` (links pré-configurados e dinâmicos)
- **Instagram:** `https://www.instagram.com/fearless.fsr/` (@fearless.fsr)
- **E-mail:** `felipe.srll@hotmail.com`
- **Repositório / Diretório Local:** `c:\Users\felip\Documents\Feerless.F\site\feerless-site`

---

## 🚀 2. Páginas e Abas Desenvolvidas

Todas as 5 abas de serviços foram transformadas de simples textos genéricos para **páginas dedicadas completas de alta conversão**, com estética moderna, dark mode com glassmorphism, tipografia *Instrument Sans*, métricas de impacto, vitrines visuais, metodologia passo a passo, tabela de pacotes/preços e FAQs interativos:

### ⚡ A. Automações de Microsserviços (`#/servico/bot-financeiro` ou `#/servico/automacoes`)
- **Central Multi-Serviços:** Cada seção da página representa uma frente diferente de automação com paletas e blocos unificados:
  - **Sessão 1: Bot de Controle Financeiro (Tema Emerald):**
    - Unificação visual completa: Apresentação do serviço (Hero, Métricas, tags `Automação & IA` e `WhatsApp & Dashboard`) + "Como Funciona na Prática" (Simulador de Chat interativo do WhatsApp, mockup HD em Lightbox `img/bot-chat.jpg` e destaques).
    - Botão **"Saiba mais"** preparado para redirecionamento à aplicação web do Bot Financeiro (Login/Cadastro).
  - **Sessão 2: Bots de Atendimento & Triagem 24/7 (Tema Electric Blue):**
    - Atendimento automático para WhatsApp e Instagram Direct, respostas em menos de 2s, triagem de leads, integração com Google Calendar/Calendly e transbordo humano.
  - **Sessão 3: Integrações de Sistemas & Sincronização em Tempo Real (Tema Purple):**
    - Conexão entre gateways (Stripe, Kiwify, Asaas), CRMs (Kommo, ActiveCampaign), Google Sheets, webhooks e alertas instantâneos de venda no WhatsApp.
  - **Sessão 4: Microsserviços & Scripts Sob Medida (Tema Amber):**
    - Robôs em nuvem de web scraping, geradores de relatórios e contratos em PDF, cron jobs programados e comparativo de impacto operacional (4h manuais ➔ 12s automáticos).
  - **Metodologia de Implantação & FAQ Geral:** 4 etapas estruturadas e perguntas frequentes.

---

### 🎬 B. Edição de Vídeo (`#/servico/edicao-de-video`)
- **Hero & Métricas:** Foco em hook de retenção (primeiros 3s), Sound Design cinematográfico e color grading.
- **Portfólio Interativo:** Filtros por categoria (*Todos*, *Reels & Shorts*, *Institucional / Comercial*, *Cortes & Podcast*).
- **Cards com Miniaturas Geradas:**
  - *Reel Dinâmico Fitness* (`img/thumb-fitness.jpg`)
  - *Corte de Podcast / Criador* (`img/thumb-creator.jpg`)
  - *Vídeo Institucional Corporativo* (`img/thumb-institucional.jpg`)
  - *Comercial de Lançamento de Produto* (`img/thumb-product.jpg`)
- **Player & Lightbox:** Suporte a reprodução de vídeo com som, tela cheia e botão direto para WhatsApp solicitando orçamento para a peça visualizada.
- **Metodologia (4 etapas):** Briefing & Storytelling ➔ Decupagem & Montagem ➔ Sound & Motion ➔ Revisão & Entrega Final.
- **Tabela de Pacotes:** *Starter*, *Pro Creator* e *Scale Business*.

---

### 💻 B. Criação de Sites & Landing Pages (`#/servico/sites`)
- **Identidade Visual & Tema Volt Lime (`#D4FF32`):**
  - **Fundo Verde Padrão da Feerless:** Fundo da página em `#D4FF32` com barra superior preta fixa (`#000000`) e logotipo/botão fechar em branco.
  - **Cards em Preto com Alto Relevo Tátil:** Todos os cartões de sites em preto profundo (`#080B08`) com efeito 3D em alto relevo no `:hover` (chanfros de luz no topo, sombra inferior e halo luminoso).
  - **Lupa Reposicionada:** Ícone de zoom transferido do centro para o **canto inferior direito** da imagem do card, garantindo visão 100% livre do layout do site.
- **Hero & Ações de Conversão Reordenadas:**
  - 1º Botão (Primário): *"Ver empresas parceiras ↓"* apontando direto para o carrossel.
  - 2º Botão (Secundário): *"Solicite seu orçamento →"* direcionando para o WhatsApp.
- **Seção "Parceiros" (Carrossel Horizontal com Navegação por Setas):**
  - **Inversão de Hierarquia:** Tag superior *"Estruturas digitais que geram autoridade"* e título principal `<h2>Parceiros</h2>`.
  - **Design Limpo e Minimalista:** Removidas as pílulas sobrepostas nas fotos e tags excessivas para deixar a imagem de prévia e os dados dos sites em destaque sem poluição visual.
  - **Trilha Horizontal com Setas:** Controles circulares de navegação anterior/próximo (`←` e `→`) com scroll suave, efeito snap magnético e suporte a touch/drag em celulares e tablets.
  - *Espaço Íris – Haute Coiffure & Atelier de Beleza* (`img/site-espaco-iris.jpg`) — Caso real no ar com botão direto para visitar o site oficial (`https://felipesouzarribeiro.github.io/espe-o_iris/`).
  - *Landing Page SaaS & Tech* (`img/site-saas.jpg`)
  - *Portal Corporativo & Negócios* (`img/site-corporate.jpg`)
  - *Estrutura Digital para Clínicas & Especialistas* (`img/site-clinic.jpg`)
  - *Página de Lançamento & E-commerce* (`img/site-ecommerce.jpg`)
- **Lightbox de Demonstração:** Modal fullscreen para inspeção de layout com botão WhatsApp personalizado e botão direto *"Visitar site no ar"*.
- **Diferenciais Inclusos:** Design exclusivo, carregamento relâmpago, copy persuasiva e SEO técnico.
- **Metodologia (4 passos):** Wireframe ➔ Design UI no Figma ➔ Código Limpo ➔ Publicação & Domínio.
- **Pacotes Comerciais:** *Landing Page Express*, *Site Institucional Pro* e *Web App & Escala*.

---

### 📈 C. Tráfego Pago & Performance (`#/servico/trafego-pago`)
- **Hero & Métricas:** Foco em ROAS real, Custo Por Lead (CPL) controlado e rastreamento avançado (API de Conversões Meta & GA4).
- **Vitrines de Campanhas & Dashboards:**
  - *Dashboard de Escala & ROAS 6.8x* (`img/ads-dashboard.jpg`)
  - *Campanha de Alta Intenção Google Search* (`img/ads-google.jpg`)
  - *Funil Meta Ads para Captação de Leads no WhatsApp* (`img/ads-meta.jpg`)
  - *Campanha de Tração e Retargeting para E-commerce* (`img/ads-scale.jpg`)
- **Metodologia de Otimização:** Diagnóstico & Pixel ➔ Criação dos Anúncios e Segmentações ➔ Testes A/B Semanais ➔ Escala Inteligente.
- **Pacotes de Gestão de Tráfego:** *Local / WhatsApp*, *Performance Pro* e *Escala & Omnichannel*.

---

### 📱 D. Marketing Digital & Estratégia (`#/servico/marketing-digital`)
- **Hero & Métricas:** Posicionamento de marca, retenção de audiência e funis de vendas orgânicos + pagos.
- **Vitrines de Entregáveis Visuais:**
  - *Identidade Visual de Feed & Carrosséis Magnéticos* (`img/mkt-feed.jpg`)
  - *Guia de Posicionamento & Calendário Editorial* (`img/mkt-strategy.jpg`)
  - *Esteira de Stories com Funis de Conversão* (`img/mkt-stories.jpg`)
  - *Roteiros Estruturados para Reels & Vídeos Curtos* (`img/thumb-creator.jpg`)
- **Pilares Estratégicos:** Identidade Visual, Estratégia de Conteúdo, Storytelling & Copywriting, Análise de Dados.
- **Metodologia:** Imersão de Marca ➔ Planejamento Mensal ➔ Produção & Design ➔ Análise de Métricas.
- **Planos Estratégicos:** *Presença & Autoridade*, *Crescimento Acelerado* e *Gestão 360°*.

---

## 🛠️ 3. Arquitetura Técnica & Scripts

- **`index.html`**:
  - Contém a página inicial + hero interativo com alternância dinâmica (**Hero Rotator**):
    - **Fundo Atmosférico em Vídeo (`video/fumaça-fundo.mp4`):** Vídeo de fumaça **colado na margem direita** (`right: 0`), fluindo em direção à esquerda (800x900 a 30 FPS estável com color grading nativo), decodificação direta por aceleração de hardware GPU (sem máscara pesada na tag de vídeo), dissolução estática via overlay `.hero-video-dissolve` e pausa inteligente via `IntersectionObserver` quando fora da tela para garantir zero travamentos.
    - **Slide 1 (Presença Digital):** *"Entre agora no mundo da internet."* + Subtítulo original + CTA WhatsApp.
    - **Slide 2 (Automações & Bot):** *"Controle financeiro inteligente & estratégia digital."* + Subtítulo de finanças + CTA Bot Financeiro.
    - **Slide 3 (Sites & Identidade Digital):** *"Crie seu site e tenha uma identidade na internet!"* com 'Crie' e 'site' em volt `#D4FF32` + Subtítulo de estrutura do negócio + CTA Criar meu site.
    - Transição suave em loop contínuo a cada **10 segundos** com crossfade, blur e barras de contagem (`.heroDots`).
  - **Vitrine Sticky (.pin):**
    - **Slide 1:** *"Automatização de microsserviços"* (Aplicações, microsserviços e automações sob medida).
    - **Slide 2:** *"Editor de vídeo"* (Retenção, cortes e motion design).
    - **Slide 3:** *"Tráfego pago"* (Google Ads e Meta Ads).
    - **Slide 4:** *"Sites & Conversão"* (Estrutura e alta performance).
  - Contêiner `#pageview` com os wrappers independentes:
    - `#pv-bot-content` (Bot de Controle Financeiro)
    - `#pv-video-content` (Edição de Vídeo)
    - `#pv-sites-content` (Criação de Sites)
    - `#pv-trafego-content` (Tráfego Pago)
    - `#pv-mkt-content` (Marketing Digital)
    - `#pv-generic-body` (reserva para rotas como `#/sobre`)
  - Modal `#pv-lightbox` unificado com suporte a `<video>` e `<img>` com carregamento sob demanda.
- **`styles.css`**:
  - Sistema de design dark com variáveis CSS (`--bg`, `--card`, `--acc`, `--text-muted`, etc.);
  - Classes `.pv-vpage`, `.pvs-grid`, `.pvt-grid`, `.pvm-grid`, `.pvs-card`, `.pvt-card`, `.pvm-card`;
  - Filtros interativos e botões de zoom;
  - Responsividade total para desktops, tablets e smartphones.
- **`script.js`**:
  - Roteamento via `window.location.hash`;
  - Tratamento de âncoras internas (`#pvv-`, `#pvs-`, `#pvt-`, `#pvm-`, `#servico-`) com `preventDefault` e scroll suave dentro da modal `#pageview` (evita o fechamento acidental da visualização);
  - Função `openLightbox(src, title, desc, mode)` com botões e mensagens de WhatsApp contextualizadas.

- **Suíte Stitch Skills Integrada (`.agents/skills`)**:
  - 16 skills do padrão *Agent Skills* instaladas para potencializar UX/UI junto ao Stitch MCP:
    - **Design & UI**: `stitch-generate-design`, `stitch-manage-design-system`, `stitch-code-to-design`, `stitch-upload-to-stitch`, `stitch-extract-static-html`.
    - **Design System & Taste**: `taste-design` (UI premium anti-genérica), `stitch-extract-design-md`, `design-md`, `enhance-prompt`, `site-md`, `stitch-loop`.
    - **Build & Componentes**: `stitch-react-components`, `stitch-react-native`, `react-vite-dashboard`, `remotion`, `shadcn-ui`.

---

## 🎨 4. Design System Feerless & Refinamento Visual (Taste Design)

O Design System foi integralmente extraído e padronizado em `.stitch/DESIGN.md` com base nos padrões da skill `stitch-extract-design-md` e enriquecido com os princípios de `taste-design`:

- **Arquitetura de Cores (Minimalismo Alto Contraste + Acentos Cirúrgicos):**
  - **Base Minimalista Preto & Branco:** Fundo Obsidian Profundo (`#080B08` e `#111A12`) com forte predominância de **Branco Puro (`#FFFFFF`)** em botões de ação primários, títulos de destaque, bordas internas superiores (`inset 0 1px 0 rgba(255,255,255,0.18)`), pills ativos e cabeçalho de modais.
  - **Acento Primário (Volt Lime - `#D4FF32`):** Inspiração da referência visual fornecida, aplicado cirurgicamente em estados de hover interativo, anéis de foco, brilhos dinâmicos e botões de zoom/play.
  - **Acento Secundário (Emerald - `#10B981`):** Usado na identidade das automações financeiras e métricas de resultado.
  - **Acentos Funcionais:** Electric Blue (`#38BDF8`), Purple (`#C084FC`) e Amber (`#FBBF24`) para diferenciar com elegância cada segmento de microsserviços.

- **Hierarquia Tipográfica Refinada:**
  - **Display (Numerais & Hero Impact):** `Anton`, sans-serif condensada de alta carga gráfica.
  - **Headlines & Títulos:** `Instrument Sans`, clean, geométrica e com tracking negativo sutil (`-0.03em`).
  - **Corpo & Parágrafos:** `Plus Jakarta Sans`, alta legibilidade, entrelinha de 1.6 e anti-aliasing ativo.
  - **Labels, Badges & Pills:** `Space Grotesk`, estética técnica com espaçamento expandido e peso 600/700.

- **Elevação e Tratamento das Fotos & Mídias:**
  - Todas as fotos originais (`foto-hero.jpeg`, `bot-chat.jpg`, miniaturas de vídeo e mockups de sites) foram preservadas com enquadramentos refinados:
    - Cantos arredondados contínuos de **20px**.
    - Efeito de escala acelerado por GPU (`scale(1.05)`) com realce de brilho e contraste no hover.
    - Botões circulares flutuantes brancos que transitam suavemente para Volt Lime no foco/hover.
    - Moldura em vidro escuro com stroke superior de luz para profundidade tátil.

- **Consolidação do Topo & Navbar Minimalista:**
  - A faixa superior branca foi completamente removida, deixando o topo 100% no fundo preto minimalista obsidian (`#080B08`).
  - Os botões interativos de **WhatsApp**, **Instagram** e **Contato** (com ícones em máscara SVG) foram transferidos diretamente para o canto direito da barra de navegação principal, mantendo alinhamento perfeito, micro-animações de hover para branco invertido e responsividade inteligente para smartphones (ocultação de texto e exibição de ícones circulares compactos em telas menores que 560px).

- **Footer Minimalista & Remoção da Seção Branca de Contato:**
  - A antiga seção `<section class="contact">` de 110px de padding com fundo branco gigante foi totalmente eliminada.
  - O rodapé (`<footer>`) foi reduzido a uma barra fina, elegante e minimalista de 26px de padding, com fundo preto obsidian contínuo (`#080B08`), stroke superior sutil de luz e os links rápidos essenciais (WhatsApp, Instagram, e-mail e copyright).
  - O `id="contato"` foi mantido no próprio `<footer>`, garantindo que links do menu continuem ancorando suavemente até o final da página.

- **Menu Superior / Navbar em Alto Contraste Volt Lime (`#D4FF32`):**
  - Toda a barra de navegação superior (`.site-header`) foi atualizada para o fundo **Volt Lime (`#D4FF32`)** de largura total (100% viewport).
  - Logotipo em vetor Feerless (`.nav .f`), tipografia e botões/links configurados em **Preto Profundo (`#080B08`)**.
  - A linha divisória inferior (`.navline`) configurada em preto com opacidade refinada (25%).
  - Efeitos de hover e foco invertem de forma limpa para pills pretas com texto/ícones em Volt Lime (`#D4FF32`), preservando o menu dropdown de serviços e os botões sociais com ícones SVG.

- **Acentos Tipográficos & Botões Volt Lime (`#D4FF32`):**
  - **Hero (Primeira Seção):**
    - Palavras *"Entre agora"* em destaque com a cor **Volt Lime (`#D4FF32`)**.
    - Texto *"estratégia digital"* em destaque com a cor **Volt Lime (`#D4FF32`)**.
    - Botão *"Automações de microsserviços"* padronizado em **branco puro (`#FFFFFF`)** no estado padrão e transição suave para **Volt Lime (`#D4FF32`)** com texto em preto no hover.
  - **Vitrine Sticky (Segunda Seção):**
    - Slide 1: *"Automatização de"* configurado em **Volt Lime (`#D4FF32`)** com *"microsserviços"* mantido em outline branco.
    - Slide 2: *"Editor de"* configurado em **Volt Lime (`#D4FF32`)** com *"vídeo"* em outline branco.
    - Slide 3: *"Tráfego"* configurado em **Volt Lime (`#D4FF32`)** com *"pago"* em outline branco.
    - Slide 4: *"Sites"* configurado em **Volt Lime (`#D4FF32`)** com *"& Conversão"* preservados.

- **Seção "Como Trabalhamos" em Alto Contraste Volt Lime (`#D4FF32`):**
  - Fundo preenchido no tom primário **Volt Lime (`#D4FF32`)** criando um ponto de contraste gráfico de alto impacto editorial.
  - Tipografia de títulos, números em estilo display Anton e textos das 4 etapas configurados em **Preto Profundo (`#080B08`)**.
  - A linha animada contínua de progresso (`.steps-line`) redesenhada em **Preto (`#080B08`)** acompanhando a rolagem com precisão.

- **Terceira Seção ("Atendimento Direto") em Fundo Preto Obsidian (`#080B08`):**
  - Fundo alterado para preto profundo `#080B08`, integrando com a estética minimalista dark.
  - Palavras *"Menos"* e *"mais"* no título principal destacadas na cor **Volt Lime (`#D4FF32`)** (`Menos promessa, mais resultado.`).
  - Marca d'água vetorial "F" suavizada com iluminação interativa em Volt Lime no hover.

- **Seção "Marcas com quem trabalho" (Carrossel Horizontal com Auto-Scroll no Hover & Alto Relevo):**
  - **Layout Horizontal Contínuo:** Os cartões das marcas parceiras agora estão dispostos em uma única linha horizontal elegante (`display: flex; overflow-x: auto`), eliminando a quebra em múltiplas linhas verticais e mantendo a composição minimalista e limpa.
  - **Efeito Auto-Scroll ao Passar o Mouse:** Ao pousar o cursor sobre as **2 últimas empresas visíveis à direita**, o carrossel rola automaticamente para o lado de forma suave (`requestAnimationFrame`), revelando as empresas seguintes sem necessidade de clique ou arrasto. Ao aproximar o cursor das primeiras empresas à esquerda, o carrossel recua de volta suavemente.
  - **Setas Circulares de Navegação:** Adicionados botões circulares elegantes no canto superior direito (`#brands-arrow-prev` e `#brands-arrow-next`) com estados ativos/desabilitados sincronizados em tempo real com a rolagem.
  - **Interatividade Alto Relevo 3D & "Inflar":** Preservado o efeito tátil: ao passar o cursor sobre qualquer cartão (`:hover`), ele se expande com física elástica (`transform: translateY(-8px) scale(1.05)`), ganhando chanfro de iluminação superior, elevação profunda e halo Volt Lime (`#D4FF32`).

- **Aba de Sites & Conversão (`#/servico/sites`) — Atualização de Navegação Direta & Contraste:**
  - **Navegação Direta sem Lightbox/Vídeo:**
    - O clique nos cards de portfólio agora abre diretamente o site de destino em uma nova aba (`_blank`), eliminando qualquer modal/lightbox de vídeo ou foto.
    - O primeiro card foi vinculado diretamente ao link oficial do **Espaço Íris**: `https://felipesouzarribeiro.github.io/espe-o_iris/`.
    - Os demais cards foram preparados com o atributo `data-live-url=""`. Ao inserir o link de qualquer novo site futuro diretamente no HTML (`data-live-url="https://novosite.com"`), o sistema detecta automaticamente, altera o botão para *"Acessar site no ar"* e passa a abrir o site de destino no clique.
    - O ícone circular na miniatura foi atualizado para uma seta diagonal de link externo (`↗`), alinhando o feedback visual com o comportamento de clique.
  - **Seção "O que está incluso no seu site" em Fundo Preto com Cards Volt:**
    - Fundo da seção configurado em **Preto Profundo (`#080B08`)**, com bordas sutis e títulos em alto contraste.
    - Cards configurados no tom **Volt Lime (`#D4FF32`)**.
    - Toda a tipografia interna (título `h4` e descrição `p`) e ícones de checkmark configurados em **Preto Profundo (`#080B08`)**, criando um contraste nítido, elegante e de fácil leitura.
  - **Remoção de Faixas de Fundo nos Títulos:**
    - Removidas todas as faixas e barras de fundo (`background`) e bordas sobre as tags/super-títulos (`.pvv-sec-tag`).
    - Na seção *"O que está incluso no seu site"*, a tag *"PADRÃO DE QUALIDADE"* agora fica em **Branco Puro (`#FFFFFF`)** limpo sobre o fundo preto, sem qualquer faixa verde.
  - **Botão de E-mail Padronizado em Volt Lime (`#D4FF32`):**
    - O botão de contato via e-mail no banner final de CTA foi totalmente alinhado com o botão principal do WhatsApp: formato pill com ícone SVG de e-mail, preenchimento em **Volt Lime (`#D4FF32`)**, tipografia em preto (`#080B08`) e transição em hover para branco (`#FFFFFF`).

- **Hero Full — Slide 3:**
  - **3º Slide no Hero Rotator:**
    - Kicker: `Sites & Identidade Digital`
    - Título: `Crie seu site e tenha uma identidade na internet!` (com as palavras *"Crie"* e *"site"* destacadas no tom Volt Lime `#D4FF32`).
    - Subtítulo: `Tenha seu negócio estruturado para aparecer para o mundo!`.
    - CTA: *"Criar meu site"* direcionando para `#/servico/sites`.
    - 3º botão indicador (dot) adicionado e perfeitamente sincronizado com o loop infinito do carrossel.
  - **Estrutura Limpa no Hero:**
    - O fundo em vídeo de fumaça foi removido do Hero a pedido do cliente, mantendo o fundo preto original `#080B08` com foco total nos textos dinâmicos e na animação vetorial do "F".

- **Seção "Atendimento Direto / Menos Promessa, Mais Resultado" (`.feature`) — Vídeo de Fumaça em Alta Resolução:**
  - **Posicionamento Colado na Margem Direita e Inferior:**
    - O vídeo foi configurado com `bottom: 0; right: 0; left: auto; top: auto;`, ficando fixado com precisão no canto inferior direito da seção, diretamente sob a marca d'água "F." e ao lado do bloco de texto.
  - **Alta Resolução & Preservação Total da Qualidade:**
    - O vídeo foi regenerado a partir do arquivo master original 1080p (`fumaça-fundo.mp4`), preservando a nitidez cristalina com codificação H.264 em `CRF 17`.
    - As dimensões na tela foram compactadas (`width: min(560px, 46vw)`, `max-height: 94%`) para garantir alta densidade de pixels (supersampling natural) sem esticar a imagem, entregando máxima nitidez visual.
  - **Sentido Invertido (De Baixo para Cima):**
    - Inversão vertical nativa nos quadros (`vflip`), fazendo a fumaça emergir rente à margem inferior e subir organicamente.
  - **Loop Contínuo e Fluido (Sem Interação / Sem Pausas):**
    - Configurado com `autoplay loop muted playsinline` e `playbackRate = 0.85` para movimento cinematográfico contínuo sem queda de FPS.
    - Pausa automática inteligente via `IntersectionObserver` quando a seção sai do campo de visão.
  - **Dissolução Total com Fundo Preto `#080B08`:**
    - Bordas tratadas em preto estrito `RGB(0, 0, 0)` com `mix-blend-mode: screen` e gradientes de vinheta no topo e lateral esquerda para transição imperceptível.



---

## 📋 5. Pendências & Próximos Passos Sugeridos

1. **Aba "Sobre mim" (`#/sobre`):**
   - Atualmente usa o contêiner genérico. Pode ser transformada em uma biografia visual marcante contando a trajetória do Felipe, suas ferramentas (Premiere, After Effects, Figma, Meta Ads, Google Ads) e visão de trabalho.
2. **Substituição de Logos de Parceiros:**
   - **Espaço Íris** inserido como primeiro parceiro oficial na Home e na aba de Sites com link ativo e logotipo oficial. Próximos parceiros reais podem seguir o mesmo formato.
3. **Depoimentos Reais:**
   - Inserir avaliações ou prints de feedbacks de clientes reais.

---

## 💡 6. Como Abrir o Projeto Localmente
- **Via Windows Explorer:** Duplo clique no arquivo `index.html`.
- **Via Terminal (PowerShell):**
  ```powershell
  Start-Process "c:\Users\felip\Documents\Feerless.F\site\feerless-site\index.html"
  ```
- **Via VS Code / IDE:** Clicar em *"Go Live"* na barra inferior (Live Server).


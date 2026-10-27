# Juliana Rech | Fisioterapia

Landing page em React, TypeScript e Vite.

## Estrutura

- `src/assets`: imagens e fontes
- `src/components/ui`: componentes de interface
- `src/components/layout`: componentes de estrutura
- `src/pages`: páginas da aplicação
- `src/seo`: metadados e dados estruturados
- `src/hooks`: hooks reutilizáveis
- `src/data`: conteúdo da aplicação
- `src/styles`: tokens e estilos globais
- `src/routes.tsx`: configuração da navegação

A rota inicial (`/`) renderiza a landing page em `src/pages/Home.tsx`.

## Desenvolvimento

- `npm run dev`: inicia o servidor local
- `npm run build`: gera a versão de produção
- `npm run preview`: visualiza a versão de produção

## SEO e publicação

O build gera HTML completo para a página inicial e os seis tratamentos, além de `404.html`. Cada rota possui título e descrição próprios, metadados sociais e dados estruturados com os serviços e os endereços visíveis no site. A navegação continua funcionando com React.

Antes do build de produção, configure `VITE_SITE_URL` com a origem HTTPS do domínio oficial, sem caminho (copie `.env.example` para `.env.local` ou defina a variável na hospedagem). O build usa esse valor para gerar URLs canônicas, `sitemap.xml` e a indicação do sitemap em `robots.txt`. Sem domínio, o build avisa e não inventa URLs públicas.

Publique **todo o conteúdo de `dist`**, preservando as pastas dos tratamentos. Configure a hospedagem para servir o `index.html` de cada pasta e devolver `404.html` com status HTTP 404 para URLs inexistentes. Não use um redirecionamento global de todas as URLs para a página inicial. Escolha um único domínio (com ou sem www) e redirecione as variantes para ele com HTTP 301.

Após publicar:

1. Verifique a propriedade do domínio no Google Search Console.
2. Envie `https://DOMINIO-OFICIAL/sitemap.xml` e inspecione a página inicial e as páginas dos tratamentos.
3. Confira o HTML renderizado e os dados estruturados nas ferramentas do Google.
4. Mantenha o Perfil da Empresa no Google atualizado com o site, telefone e endereços corretos.
5. Acompanhe consultas, cliques e cobertura de indexação no Search Console. SEO não garante posição ou prazo de indexação.

As palavras-chave são usadas naturalmente nos títulos e descrições: fisioterapia em Porto Alegre, fisioterapia dermatofuncional, pré e pós-operatório, intercorrências estéticas, fisioterapia para gestantes e puérperas, tratamento da dor, linfedema e lipedema. Não são usadas palavras-chave ocultas, avaliações inventadas ou promessas de ranking.

Os dois componentes de endereços apresentam CEPs diferentes para a Tristeza; confirme o CEP correto antes de publicar. Os dados estruturados omitem o CEP enquanto essa divergência existe.

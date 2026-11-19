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
- `npm run build:production`: gera os arquivos para o domínio `https://julianarech.com.br/`, usando caminhos na raiz e preparando os metadados, sitemap e robots.txt para o domínio oficial. Para outro domínio, use `PRODUCTION_SITE_URL=https://seu-dominio.com.br npm run build:production`.
- `npm run preview`: visualiza a versão de produção

## SEO e publicação

O build gera HTML completo para a página inicial e os seis tratamentos, além de `404.html`. Cada rota possui título e descrição próprios, metadados sociais e dados estruturados com os serviços e os endereços visíveis no site. A navegação continua funcionando com React.

O workflow `.github/workflows/hostgator-build.yml` executa lint, build e validação SEO a cada push na branch `develop` (também pode ser iniciado manualmente). Ele não publica no GitHub Pages nem acessa a conta HostGator: gera um artefato `juliana-rech-hostgator` para download na execução do GitHub Actions. O pacote contém os arquivos estáticos da pasta `dist` prontos para serem enviados à pasta raiz do domínio na hospedagem.

Na HostGator, vincule `julianarech.com.br` ao plano e publique **todo o conteúdo de `dist`** na pasta raiz associada ao domínio (normalmente `public_html` para o domínio principal), preservando as pastas dos tratamentos. Os dados DNS devem ser consultados no Portal do Cliente da hospedagem; não use nameservers genéricos. Antes de alterar nameservers, confirme onde está o e-mail do domínio e preserve os respectivos registros MX, SPF e DKIM. Escolha o domínio canônico sem `www` (`https://julianarech.com.br/`) e redirecione eventuais variantes para ele com HTTP 301.

Após publicar:

1. Verifique a propriedade do domínio no Google Search Console.
2. Envie `https://DOMINIO-OFICIAL/sitemap.xml` e inspecione a página inicial e as páginas dos tratamentos.
3. Confira o HTML renderizado e os dados estruturados nas ferramentas do Google.
4. Mantenha o Perfil da Empresa no Google atualizado com o site, telefone e endereços corretos.
5. Acompanhe consultas, cliques e cobertura de indexação no Search Console. SEO não garante posição ou prazo de indexação.

As palavras-chave são usadas naturalmente nos títulos e descrições: fisioterapia em Porto Alegre, fisioterapia dermatofuncional, pré e pós-operatório, intercorrências estéticas, fisioterapia para gestantes e puérperas, tratamento da dor, linfedema e lipedema. Não são usadas palavras-chave ocultas, avaliações inventadas ou promessas de ranking.

As avaliações exibem cinco estrelas conforme a nota informada pela cliente para as avaliações no Google.

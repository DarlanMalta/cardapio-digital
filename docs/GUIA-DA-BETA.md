# Guia da versão beta — Na Brasa

## Objetivo desta versão

Transformar a aplicação anterior em um cardápio somente expositivo, responsivo e pronto para uma primeira apresentação ao cliente. Carrinho, checkout e WhatsApp continuam fora do escopo.

## O que foi implementado

- identidade visual escura com destaque em laranja e estética urbana leve;
- apresentação da marca e do slogan **“O 01 da City”** no topo;
- navegação fixa por categorias;
- clique em uma categoria com rolagem até a seção correspondente;
- destaque automático da categoria visível;
- cards com nome, descrição, imagem e preço formatado em real;
- uma coluna no mobile e duas colunas quando houver espaço;
- informações básicas de acessibilidade nos controles;
- exportação web estática com somente as rotas reais da aplicação;
- nome e identificadores do projeto atualizados de `facul01` para o cardápio da Na Brasa.

Os produtos, preços, textos e imagens ainda são demonstrativos.

## Estrutura atual

```text
src/
├── app/
│   ├── _layout.tsx        configuração visual e de navegação
│   └── index.tsx          composição e comportamento da página
├── components/
│   ├── BrandHero.tsx      apresentação da marca no topo
│   └── ProductCard.tsx    visual de cada produto
├── data/
│   └── products.ts        categorias e produtos do cardápio
└── theme.ts               cores e largura máxima compartilhadas
```

Os componentes e os dados ficaram fora de `src/app` porque o Expo Router interpreta os arquivos dessa pasta como páginas. Essa separação evita gerar URLs indevidas durante a hospedagem.

## Como o funcionamento se conecta

1. `products.ts` fornece as categorias e os produtos.
2. `index.tsx` percorre as categorias e filtra os produtos de cada uma.
3. `ProductCard.tsx` recebe um produto e apresenta seus dados.
4. `onLayout` registra a posição de cada seção.
5. Os chips usam essas posições para rolar o cardápio.
6. `onScroll` identifica a seção atual e atualiza o chip destacado.

## Conceitos novos, em uma frase

- **`useState`**: guarda a categoria que precisa aparecer como ativa na interface.
- **`useRef`**: preserva referências e medidas entre renderizações sem redesenhar a tela a cada mudança.
- **`onLayout`**: informa a posição e o tamanho calculados de um elemento depois que ele aparece na tela.
- **`onScroll`**: acompanha a posição atual da rolagem para atualizar a categoria ativa.
- **`scrollTo`**: movimenta o `ScrollView` até uma coordenada vertical específica.
- **`stickyHeaderIndices`**: mantém a barra de categorias presa ao topo durante a rolagem.
- **`Pressable`**: cria um controle clicável com estados visuais e suporte de acessibilidade.
- **`accessibilityLabel` e `accessibilityState`**: explicam o controle e seu estado para tecnologias assistivas.
- **`flexWrap` e `flexBasis`**: fazem os cards se reorganizarem conforme o espaço disponível, sem depender de uma largura fixa.
- **`Intl.NumberFormat`**: converte o número do preço para o formato brasileiro, como `R$ 29,90`.
- **`as const`**: preserva os valores exatos das categorias para o TypeScript detectar categorias inválidas.
- **`Partial<Record<...>>`**: descreve um objeto que guarda, de forma opcional, a posição de cada categoria.

## Como atualizar o cardápio

Edite `src/data/products.ts`.

- `categories` define a ordem e o nome das seções.
- `products` define nome, descrição, preço, imagem e categoria de cada item.
- `category` precisa corresponder ao `id` de uma categoria existente.
- Para trocar uma imagem, coloque o arquivo em `assets/images`, importe-o no início de `products.ts` e use esse import no campo `image`.

## Como executar e validar

```powershell
npm run web
npm run typecheck
npm run export:web
```

- `npm run web`: abre o ambiente local de desenvolvimento.
- `npm run typecheck`: verifica erros de TypeScript sem gerar arquivos.
- `npm run export:web`: confirma que a versão estática usada na futura hospedagem pode ser criada.

Se o Expo abrir outro navegador automaticamente, copie o endereço `http://localhost:8081` exibido no terminal e abra-o no Chrome.

## Commits desta etapa

- `3bbffc8` — destaque automático da categoria atual;
- `cae334d` — interface beta responsiva da Na Brasa;
- `3315730` — configuração do projeto para a beta web;
- o documento atual é mantido em um commit próprio.

## Pontos para a próxima avaliação

- substituir produtos, preços, textos e imagens pelos dados oficiais;
- inserir logo, favicon e demais arquivos oficiais da marca;
- revisar com o cliente os textos de apresentação e a localização;
- decidir depois sobre o espaço promocional de “combo da semana”;
- somente após a aprovação, escolher hospedagem, domínio e geração do QR Code.

Nenhuma integração de pedido foi reintroduzida nesta versão.

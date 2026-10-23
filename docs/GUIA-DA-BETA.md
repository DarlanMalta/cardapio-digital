# Guia da beta editorial — Na Brasa

## Objetivo

Esta versão transforma o esboço anterior em um cardápio expositivo com apresentação editorial, pensado primeiro para celulares e inspirado na linguagem visual urbana da Na Brasa. Carrinho, checkout, pedidos e integração com WhatsApp continuam fora do escopo.

Produtos, preços, imagens e parte dos textos ainda são demonstrativos.

## O que mudou nesta reformulação

1. A página principal foi dividida em componentes menores, sem perder a navegação que já funcionava.
2. Cores, espaçamentos, bordas e tipografia foram centralizados em um tema.
3. O modelo de produto passou a aceitar ingredientes, texto alternativo, etiquetas e destaques.
4. O topo ganhou uma apresentação mais forte para a marca e o slogan **“O 01 da City”**.
5. Os produtos passaram a usar imagens maiores, preço em selo, numeração editorial e ingredientes em chips.
6. Cada categoria ganhou uma atmosfera própria, mantendo a mesma identidade visual.
7. O clique em um produto abre seus detalhes e permite navegar para o item anterior ou seguinte.
8. Foi criado um espaço opcional para combos, lançamentos e campanhas sazonais.

## Estrutura atual

```text
src/
├── app/
│   ├── _layout.tsx
│   └── index.tsx                    coordena a página e seus estados
├── components/
│   ├── BrandHero.tsx                apresentação principal da marca
│   ├── ProductCard.tsx              card editorial de um produto
│   ├── menu/
│   │   ├── IngredientChip.tsx       etiqueta de ingrediente
│   │   ├── MenuSection.tsx          seção completa de uma categoria
│   │   ├── PriceBadge.tsx           selo circular de preço
│   │   └── ProductDetailsModal.tsx  detalhes ampliados do produto
│   ├── navigation/
│   │   └── CategoryNavigation.tsx   barra fixa de categorias
│   └── promotional/
│       └── FeaturedCampaign.tsx     área de campanha opcional
├── data/
│   ├── campaigns.ts                 conteúdo promocional
│   └── products.ts                  categorias e produtos
├── theme/
│   ├── colors.ts
│   ├── layout.ts
│   ├── typography.ts
│   └── index.ts
└── utils/
    └── formatPrice.ts               formatação monetária compartilhada
```

## Como o funcionamento se conecta

1. `products.ts` fornece categorias e produtos.
2. `index.tsx` monta a sequência da página e guarda o produto selecionado.
3. `CategoryNavigation` recebe a categoria ativa e solicita a rolagem quando um botão é pressionado.
4. `MenuSection` recebe uma categoria e entrega seus produtos ao `ProductCard`.
5. `ProductCard` informa ao `index.tsx` qual produto foi selecionado.
6. `ProductDetailsModal` apresenta esse produto sem criar uma nova página.
7. `campaigns.ts` controla o conteúdo do espaço promocional.

## Conceitos principais, em uma frase

- **Composição de componentes:** a tela final é construída pela união de peças pequenas, cada uma responsável por uma parte da interface.
- **Props:** são os dados e ações entregues por um componente pai para um componente filho.
- **Estado do produto selecionado:** guarda qual item deve aparecer no modal ou `null` quando ele está fechado.
- **Renderização condicional:** mostra um elemento somente quando uma condição é atendida, como uma etiqueta ou campanha ativa.
- **Variação visual:** a categoria escolhe entre os estilos `paper`, `dark` e `compact` sem duplicar componentes.
- **Design tokens:** cores, espaçamentos, arredondamentos e fontes ficam centralizados para manter consistência.
- **Função compartilhada:** `formatPrice` impede que cada componente implemente sua própria formatação de preço.
- **Navegação circular:** ao avançar depois do último produto, o modal retorna ao primeiro item.
- **Texto alternativo:** descreve as imagens para leitores de tela e melhora a acessibilidade.
- **Modal responsivo:** aparece como painel inferior no celular e como janela central em telas maiores.

## Como atualizar produtos

Edite `src/data/products.ts`.

- `categories` controla ordem, título, descrição e estilo das seções.
- `products` controla nome, descrição, ingredientes, preço, imagem e categoria.
- `category` deve corresponder ao `id` de uma categoria existente.
- `tag` é opcional e cria uma etiqueta como “Mais pedido”.
- `featured` já está disponível para futuras regras de destaque.
- `imageAlt` deve descrever a fotografia de maneira curta e objetiva.

Para trocar uma imagem, coloque o arquivo em `assets/images`, importe-o em `products.ts` e use o import no campo `image`.

## Como atualizar a campanha

Edite `src/data/campaigns.ts`.

- `title`, `description` e `image` alteram a apresentação.
- `active: true` exibe a campanha.
- `active: false` remove a campanha sem apagar sua estrutura.

Essa separação permite trocar um combo ou uma arte sazonal sem modificar a página principal.

## Como alterar a identidade visual

- `theme/colors.ts`: paleta de cores.
- `theme/layout.ts`: larguras, espaçamentos e arredondamentos.
- `theme/typography.ts`: famílias tipográficas e configurações de texto.

Quando os arquivos oficiais chegarem, a prioridade será substituir logo, fotografias e textos sem refazer os componentes.

## Como executar e validar

```powershell
npm run web
npm run typecheck
npm run export:web
```

- `npm run web`: inicia a prévia local.
- `npm run typecheck`: procura erros de TypeScript sem gerar arquivos.
- `npm run export:web`: gera a versão estática destinada à hospedagem.

## Commits do redesign

- `e92411b` — separação da navegação e das seções;
- `27529aa` — novo modelo de dados e sistema visual;
- `d19ab13` — experiência editorial, campanha e detalhes de produtos;
- o guia atualizado é mantido em um commit próprio.

## O que ainda depende do cliente

- logotipo oficial;
- fotografias oficiais e consistentes;
- lista final de produtos, ingredientes e preços;
- aprovação dos textos e do espaço de campanhas;
- decisão final sobre domínio, hospedagem e QR Code.

Nenhuma publicação ou `git push` foi realizada.

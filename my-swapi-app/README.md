# Star Wars Universe Explorer - Desafio Técnico Grupo Soma

Este projeto foi desenvolvido como uma solução para o desafio técnico proposto pelo Grupo Soma. O objetivo é criar uma aplicação que consome a SWAPI (Star Wars API) para exibir informações sobre diferentes categorias do universo Star Wars de forma aleatória.

## 🚀 Demonstração

[Click aqui para acessar a demonstração ao vivo](new-dev-challenge-rust.vercel.app)

## ✨ Funcionalidades

* **Página Inicial (Home)**: Apresenta todas as categorias disponíveis na SWAPI (Personagens, Filmes, Planetas, etc.) de forma clara e intuitiva.
* **Páginas de Categoria**: Cada categoria possui uma página dedicada que exibe um card com informações de um item aleatório.
* **Descoberta Randômica**: Um botão em cada página de categoria permite ao usuário buscar e exibir um novo item de forma aleatória, incentivando a exploração.
* **Feedback Visual**: A interface fornece feedback claro para o usuário durante os estados de carregamento e em caso de erros na busca de dados.
* **Design Responsivo**: O layout foi construído para se adaptar a diferentes tamanhos de tela.

## 🛠️ Stack de Tecnologias

* **Framework**: Next.js (com App Router)
* **Linguagem**: TypeScript
* **Estilização**: Styled Components
* **Data Fetching & State Management**: TanStack Query (React Query)
* **Desenvolvimento de Componentes**: Storybook
* **Testes**: Vitest + React Testing Library

## 🏛️ Arquitetura e Decisões Técnicas

### 1. Componentização e Composition Pattern

A adoção do Composition Pattern permite criar componentes menores e especializados que podem ser compostos de forma flexível.

**Exemplo (Button e Card):**

* `Button` possui subcomponentes como `Button.LeftIcon` e `Button.Text`.
* `Card` é composto por `Card.Header`, `Card.Body` e `Card.Footer`.

**Vantagens:**

* Flexibilidade, reutilização e manutenibilidade.

### 2. Gerenciamento de Estado do Servidor com React Query

* **Custom Hook `useRandomItem`**: Hook genérico para buscar um item aleatório de qualquer categoria.

**Benefícios:**

* Gerenciamento automático de cache.
* Tratamento simplificado de estados de `isLoading`, `error` e `success`.
* Melhora a performance e a experiência do usuário.

### 3. Design System com Styled Components e Design Tokens

* **Styled Components**: CSS no escopo dos componentes.
* **Design Tokens**: Cores, fontes e breakpoints centralizados em `src/tokens/tokens.ts`.

### 4. Estrutura de Pastas Modular

```
/src
|-- __tests__.    # Testes unitários    
|-- /app          # Rotas da aplicação (App Router)
|-- /components
|   |-- /shared   # Componentes reutilizáveis (Button, Card)
|   |-- /ui       # Componentes específicos (ItemCard)
|-- /constants    # Constantes da aplicação
|-- /hooks        # Hooks customizados
|-- /services     # Funções para API (swapi.ts)
|-- /tokens       # Design Tokens
|-- /types        # Tipos e interfaces
```

## 📖 Storybook: Component-Driven Development

**Para executar o Storybook localmente:**

```bash
npm run storybook
```

Abra [http://localhost:6006](http://localhost:6006) no navegador.

## 🧪 Testes

Durante o desenvolvimento, priorizei testes em hooks e serviços (com Vitest + React Testing Library) e a documentação interativa dos componentes no Storybook. Como o Storybook já permite validar visualmente estados, variações e interações dos componentes em isolamento, optei por não duplicar esse esforço em testes unitários de UI. Essa escolha garantiu mais agilidade no desenvolvimento e manteve a cobertura de comportamento essencial do sistema.


**Para executar os testes:**

```bash
npm run test
```

ou 

```bash
npx vitest
```

## ⚙️ Como Executar o Projeto Localmente

```bash
git clone https://github.com/seu-usuario/new-dev-challenge.git

cd new-dev-challenge/my-swapi-app

npm install

npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📈 Pontos de Melhoria

* Adicionar testes de snapshot e interação para componentes além da documentação do Storybook.
* Testes End-to-End (E2E) com Playwright ou Cypress.
* Reforçar os pontos de acessibilidade (a11y) e conformidade WCAG.
* Tratamento de limite da API com retry.
* Paginação ou scroll infinito.
* CI/CD integrado com GitHub Actions.
* Tradução dinâmica de conteúdos da API**: 
  - Atualmente, os textos vindos da API externa estão em inglês.Considerei a possibilidade de traduzir esses textos dinamicamente usando serviços como Google Translate ou DeepL.
  - Essa melhoria permitiria que toda a aplicação fosse exibida em português automaticamente, mas envolve cuidados com performance, consistência das traduções e cache de resultados.
  
* Suporte a mais idiomas com a lib `React/i18n`: 
  - Adicionar a lib i18n para suportar novos idiomas de forma completa.

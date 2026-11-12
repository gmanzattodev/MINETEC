# MINETEC ⛏️

Site com temática de Minecraft, desenvolvido para praticar **HTML, CSS e JavaScript**.

## Sobre o projeto

Criei o MINETEC para aprender na prática a construir e organizar um site, estilizar suas seções e adicionar interações com JavaScript. O tema escolhido foi uma comunidade de Minecraft entre alunos da FATEC Americana, com apresentação do servidor, catálogo de mods e informações para os jogadores.

Este repositório registra uma etapa do meu aprendizado em desenvolvimento front-end. O foco foi experimentar, entender o funcionamento do código e transformar os estudos em uma interface.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
| --- | --- |
| HTML5 | Estrutura da página, navegação, conteúdo e formulários incorporados |
| CSS3 | Layout, cores, animações, efeitos de hover e adaptações para telas menores |
| JavaScript puro | Manipulação do DOM, eventos, navegação entre seções e busca de mods |
| Google Fonts | Fonte pixelada **Press Start 2P** |
| Google Forms | Formulários externos incorporados por `iframe` |

O projeto não utiliza frameworks, gerenciador de pacotes ou etapa de build.

## O que o site apresenta

- **Início:** apresentação do MINETEC e cards sobre aventura, mods, multiplayer e mineração.
- **Sobre:** informações sobre a comunidade e destaques de biomas, estruturas e mobs.
- **Modpack:** catálogo de mods gerado a partir de um array de objetos, com pesquisa pelo nome.
- **Dúvidas:** perguntas frequentes com respostas que expandem e recolhem ao clicar.
- **Recrutamento de staff:** formulário incorporado para interessados em participar da equipe.
- **Sugestão de mods:** formulário incorporado para sugestões da comunidade.

A navegação principal alterna a seção visível dentro do mesmo HTML, utilizando atributos `data-section` e classes CSS, sem recarregar a página. A busca de mods é atualizada durante a digitação e ignora diferenças entre letras maiúsculas e minúsculas.

## Conceitos praticados

- Organização de arquivos HTML, CSS, JavaScript e imagens.
- Divisão dos estilos por seção e importação com `@import`.
- Variáveis CSS, Flexbox, media queries, transições e `@keyframes`.
- Seleção e alteração de elementos do DOM.
- Eventos com `addEventListener`.
- Alternância de classes com `classList`.
- Arrays de objetos, `forEach` e template literals para exibir conteúdo.
- Busca textual com `toLowerCase()` e `includes()`.
- Incorporação de conteúdo externo com `iframe`.

## Organização dos arquivos

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura e conteúdo de todas as seções |
| `assets/css/style.css` | Importação das folhas de estilo |
| `assets/css/reset.css` | Reset, variáveis, visibilidade das seções e animação dos ícones |
| `assets/css/inicio.css` | Cabeçalho, menu e seção inicial |
| `assets/css/sobre.css` | Apresentação da comunidade e destaques |
| `assets/css/tutorial.css` | Seção do modpack e catálogo |
| `assets/css/formulario.css` | Formulário de sugestões e perguntas frequentes |
| `assets/css/staff.css` | Seção de recrutamento |
| `assets/css/footer.css` | Rodapé |
| `assets/js/array.js` | Dados dos mods, renderização do catálogo e busca |
| `assets/js/script.js` | Navegação, interação do menu e perguntas expansíveis |
| `assets/img/` | Imagens e texturas utilizadas no site |

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/gmanzattodev/MINETEC.git
   ```

2. Abra a pasta `MINETEC`.
3. Abra o arquivo `index.html` no navegador.

Também é possível abrir a pasta no VS Code e utilizar a extensão **Live Server**.

Não é necessário instalar dependências. A fonte do Google Fonts e os formulários do Google Forms precisam de conexão com a internet para carregar.

## Estado atual

O site é um projeto de estudo e possui partes que ainda podem ser aprimoradas:

- Os botões para começar a jogar, baixar o modpack e entrar no grupo ainda não possuem ações configuradas.
- Alguns links do catálogo de mods contêm apenas textos de referência, em vez de URLs completas.
- Os links rápidos do rodapé utilizam `href="#"`.
- O menu para telas menores utiliza o evento `mousemove`; a interação por toque e teclado pode ser aprimorada.

O repositório contém o front-end do site. Não inclui os arquivos do servidor Minecraft, um backend próprio ou o pacote de mods para instalação.

## Autor

Desenvolvido por **Giovani Manzatto** como parte dos estudos em desenvolvimento web.

[Perfil no GitHub](https://github.com/gmanzattodev)

## Licença

Este repositório está licenciado sob a [licença MIT](LICENSE).

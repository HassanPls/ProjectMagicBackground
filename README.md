# Magic Background Generator

## Descrição

Este projeto foi desenvolvido durante a "Semana do Zero ao Programador Contratado" dos YouTubers "Dev Em Dobro".

É um projeto front-end que permite aos usuários gerar fundos (backgrounds) personalizados para elementos HTML através de uma descrição em texto. A aplicação envia a descrição do usuário para um serviço externo que processa o pedido e retorna o código HTML e CSS correspondente, que é então exibido na página juntamente com uma pré-visualização ao vivo.

## Funcionalidades

- **Geração Dinâmica de Código:** Os usuários podem inserir uma descrição de como desejam o fundo, e a aplicação gera o código HTML e CSS necessário.
- **Comunicação com API:** Utiliza a API Fetch do JavaScript para enviar a descrição do usuário para um endpoint e receber o código gerado.
- **Pré-visualização em Tempo Real:** Exibe uma pré-visualização do fundo gerado assim que o código é recebido.
- **Exibição de Código:** Mostra o código HTML e CSS separadamente para que o usuário possa copiá-lo e utilizá-lo em seus próprios projetos.
- **Interface Responsiva:** O layout é adaptado para funcionar em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização da interface e dos componentes.
- **JavaScript:** Para a manipulação do DOM, lógica da aplicação e comunicação com a API.
- **n8n.cloud:** Uso da plataforma de automação de fluxo de trabalho n8n para processar a requisição e gerar o código.

## Aprendizados

Com a realização deste projeto, foi possível praticar e aprofundar os seguintes conceitos:

- **Manipulação do DOM:** Selecionar e modificar elementos da página de forma dinâmica com JavaScript.
- **JavaScript Assíncrono:** Utilizar `async/await` para lidar com requisições a APIs de forma limpa e legível.
- **Integração com APIs (Fetch API):** Realizar chamadas `POST` para um serviço externo, enviando dados (`JSON`) e processando a resposta.
- **Tratamento de Erros:** Implementar blocos `try...catch...finally` para garantir que a aplicação se comporte de maneira previsível mesmo em caso de falhas na comunicação com a API.
- **Injeção de Estilos Dinamicamente:** Criar e adicionar tags `<style>` ao `head` do documento para aplicar o CSS recebido da API em tempo real.

## Como Executar

1.  Clone este repositório para a sua máquina local.
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  Digite a descrição do fundo que você deseja no campo de texto.
4.  Clique no botão "Gerar Background Mágico".
5.  Aguarde a geração e veja a pré-visualização e os códigos HTML e CSS.

### Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
# BRQ Movies - Teste Técnico

Este projeto é uma aplicação móvel construída em React Native, que consiste em uma tela de login , uma tela de listagem de filmes e favoritos com funcionalidades específicas, e uma tela de detalhes do filme. Abaixo você encontrará informações importantes sobre o projeto, como requisitos, funcionalidades, instalação e as principais bibliotecas utilizadas.

## Requisitos

O projeto **BRQ Movies** foi desenvolvido para atender os seguintes requisitos:

1. **Tela de Login**:
   - A tela de login permite o acesso à aplicação com uma combinação específica de login/senha: user/123.
   - Foram implementadas validações de campos obrigatórios no login, incluindo a obrigatoriedade de uma senha numérica.

2. **Tela de Filmes**:
   - A tela de filmes possui 2 abas, conforme o protótipo.

3. **Tela de Detalhes do Filme**:
   - Existe a possibilidade de marcar filmes como favoritos, sendo essa funcionalidade um plus.
   - Exibe detalhes do filme como sinopse, popularidade, nota, data de lançamento e votos.
    
4. **Tratamento de Erros**:
   - O aplicativo lida adequadamente com erros de indisponibilidade de internet ou erros na API.


## Instalação

Para executar o projeto localmente, siga estas etapas:

1. Certifique-se de ter o ambiente React Native configurado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Navegue até o diretório do projeto através do terminal.
4. Execute o comando `yarn install` para instalar as dependências.
5. Execute o comando `npx react-native run-android` para iniciar o aplicativo no Android (ou `npx react-native run-ios` para iOS).

## Principais Bibliotecas Utilizadas

Durante o desenvolvimento do projeto, as seguintes bibliotecas foram utilizadas para aprimorar a funcionalidade e a aparência da aplicação:

- **react-navigation**: Biblioteca de navegação para gerenciar as transições entre telas.
- **react-query**: Biblioteca para gerenciamento de estado e cache de dados.
- **zod**: Utilizada para validação de dados, garantindo a integridade das informações.
- **shopify-restyle**: Biblioteca para estilização de componentes, seguindo padrões reutilizáveis.
- **react-hook-form**: Utilizada para gerenciar formulários de maneira eficiente.
- **react-native-mmkv**: Biblioteca para armazenamento de dados de maneira eficiente e segura.
- **react-native-svg**: Utilizada para renderizar gráficos SVG na aplicação.
- **reanimated**: Biblioteca para animações complexas e de alto desempenho.


Agradecemos por verificar o projeto **BRQ Movies**. Caso tenha alguma dúvida ou comentário, sinta-se à vontade para entrar em contato.

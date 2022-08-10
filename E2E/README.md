## Blu_Repo_Test_UI_Template

# Pré-condições

-Node instalado
-npm instalado

# Instruções para Execução dos testes

-No diretório raiz do projeto rodar os seguintes comandos:

-Para instalação das dependencias:

"npm i" ou "npm install"

# Rodar os testes

-Abrindo a interface do Cypress. No terminal, diretório raiz do projeto rodar:

npm run open

# Rodar os testes modo headless

npm run test_all

# Evidências de teste

Após a execução dos testes, em modo headless vc poderá conferir as evidências de teste no diretório:
"cypress/reports"
E também em: cypress/screeshots e cypress/videos
Poderá também rodar o comando:

"npm run gen_allure_report" para gerar um relatório html mais detalhado.
E para abri-lo, rodar:
"npm run open_allure_repport"

# Scripts que limpam o conteúdo de alguns diretórios:

npm run clean_reports
npm run clean_allure_report
npm run clean_allure_results
npm run clean_screenshots
npm run clean_videos

## Estrutura de diretórios
```
C:.
│   .editorconfig
│   .eslintrc.json
│   .prettierrc
│   package-lock.json
│   package.json
│   xunit.xml
│
├───.github
│       prlint.json
│       PULL_REQUEST_TEMPLATE.md
│
└───cypress
    ├───config
    │       dev.json
    │       hml.json
    │       local.json
    │       prod.json
    │
    ├───devops
    │       Jenkinsfile_local
    │
    ├───fixtures
    │       boleto.json
    │
    ├───integration
    │   ├───API
    │   │       login_api.spec.js
    │   │
    │   └───GUI
    │           boleto.spec.js
    │           login.spec.js
    │           logout.spec.js
    │
    ├───plugins
    │       index.js
    │
    └───support
        │   index.js
        │
        ├───API
        │       commands_api.js
        │
        ├───BD
        │       commands_bd.js
        │
        ├───GUI
        │       commands_gui.js
        │       commands_gui_boleto.js
        │       commands_gui_log_in_out.js
        │
        └───page_elements
                boleto_page.js
                inicioExtratoDetalhes_page.js
                inicioExtratoFiltros_page.js
                inicioExtrato_page.js
                inicoAprovacoes_page.js
                login_page.js
                menuLatlEsqChat_page.js
                menuSup_page.js
```

# Diretório cypress/config/

Obs: Por padrão, o projeto "olha" para hml, esta configuração pode ser alterada ou vc pode fazer o cypress executar olhando para outros ambiente via scripts do arquivo package.json ou via linha de comando


# Diretório cypress/devops

-Arquivo Jenkinsfile

# Arquivo

-Dockerfile

Arquivo Docker com imagem node Node para execução dos testes na pipeline

# Arquivos json para serem usados como massa de teste

cypress/fixtures

# Arquivos de teste (especificações de teste - arquivos executáveis de teste) - Testes de Interface Gráfica de Usuário

cypress/integration/GUI

# Arquivos de teste (especificações de teste - arquivos executáveis de teste) - Testes de API(Application Programming Interface)

cypress/integration/API

# Configuração de Plugins do Cypress

cypress/plugins

# Relatórios de execução dos testes

cypress/reports

# Evidências(Imagens) de execução dos testes

cypress/screenshots

# Comandos Customizados que visam fazer interações com a GUI (Interface Gráfica do Usuário)

cypress/support/GUI

# Comandos Customizados que visam fazer interações com a API (Application Programming Interface)

cypress/support/API

# Comandos Customizados que visam fazer interações com BD (Banco de Dados)

cypress/support/BD

# Arquivos onde os seletores das páginas(telas) são identificados unicamente para facilitar a manutenção

cypress/support/page_elements

# Arquivo onde foi configurado os prints ao final dos relórios e onde são indicados e tornados globais os caminhos dos arquivos de comando customizados

cypress/support/index.js

# Diretório onde são baixadas as dependencias do projeto(bibliotecas)

cypress/node_modules

# Arquivo onde se configura os arquivos e diretórios que serão ignorados pelo GIT(repositório)

cypress/.gitignore

# Arquivo que indica as dependencias de desenvolvimento e onde se criam os scrips como atalhos para linhas de comando mais "verbosas":

cypress/package.json

# Arquivo com explicações básicas da estrutura e uso do projeto

cypress/README

## Teste_VMA

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

# Scripts que limpam o conteúdo de alguns diretórios:

npm run clean_reports
npm run clean_allure_report
npm run clean_allure_results
npm run clean_screenshots
npm run clean_videos


# Diretório cypress/config/

Obs: Por padrão, o projeto "olha" para hml, esta configuração pode ser alterada ou vc pode fazer o cypress executar olhando para outros ambiente via scripts do arquivo package.json ou via linha de comando

# Arquivos json para serem usados como massa de teste

cypress/fixtures

# Arquivos de teste (especificações de teste - arquivos executáveis de teste) 

cypress/e2e/GUI

# Testes de API(Application Programming Interface)

cypress/e2e/API

#  Relatórios de execução

cypress/reports

# Evidências(Imagens) de execução dos testes

cypress/screenshots

# Comandos Customizados que visam fazer interações com a GUI (Interface Gráfica do Usuário)

cypress/support/GUI

# Comandos Customizados que visam fazer interações com a API (Application Programming Interface)

cypress/support/API

# Diretório onde são baixadas as dependencias do projeto(bibliotecas)

cypress/node_modules

# Arquivo onde se configura os arquivos e diretórios que serão ignorados pelo GIT(repositório)

cypress/.gitignore

# Arquivo que indica as dependencias de desenvolvimento e onde se criam os scrips como atalhos para linhas de comando mais "verbosas":

cypress/package.json

# Arquivo com explicações básicas da estrutura e uso do projeto

cypress/README

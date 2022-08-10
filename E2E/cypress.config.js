const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')



function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'e2e/cypress/config', `${file}.json`)

  return fs.readJSON(pathToConfigFile)
}

/**
 * @type {Cypress.PluginConfig}
 */


module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'hml'
      
      //return getConfigurationByFile(file)
      on("task", {
        dbQuery: (query) => require("cypress-postgres")(query.query, config.env.db)
        
        //const file = config.env.configFile || 'staging'
    
    
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    
    
      on('before:browser:launch', (browser = {}, launchOptions) => {
        //launchOptions.args.push('--use-fake-device-for-media-stream')
        //launchOptions.args.push('--use-fake-ui-for-media-stream')
    
        return launchOptions
      }
      );
      //const file = config.env.configFile || 'staging'
      return getConfigurationByFile(file)
    },
    

  },
  viewportWidth: 1480,
  viewportHeight: 1050,
  /*"reporter": "cypress-multi-reporters",
  "reporterOptions": {
      "reportDir": "cypress/reports",
      "reportFilename": "Relatório-Testes-<Seu Projeto>",
      "reportName": "Relatório",
      "reportTitle": "Relatório de Testes-<Seu Projeto>",
      "reportPageTitle": "Título da Página",
      "takePassedScreenshot": false,
      "clearOldScreenshots": false,
      "shortScrFileNames": false,
      "inline": true,
      "charts": true,
      "autoOpen": false,
      "jsonReport": true,
      "multiReport": true,
      "timestamp": "dd-mm-yyyy_HH-MM-ss",
      "capture": "runner"
  },*/
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true
  },

});

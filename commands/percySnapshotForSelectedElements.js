const utils = require('@percy/sdk-utils');
const PercySnapshotCommand = require('@percy/nightwatch')
let log = utils.logger('nightwatch');

module.exports = class PercySnapshotForSelectedElementsCommand extends PercySnapshotCommand{
  async command(name, options) {
    await this.api.execute(`for (let el of document.querySelector('${options.elements}').getElementsByTagName("*")) {el.classList.add("visible-in-percy")}`);
    await this.api.execute(`document.querySelector('${options.elements}').classList.add("visible-in-percy")`);

    let optionCopy = {
      ...options
    }
    optionCopy.percyCSS = options.percyCSS?options.percyCSS:''
    optionCopy.percyCSS += '*:not(.visible-in-percy) { visibility: hidden; } .visible-in-percy {visibility: visible;}'
    delete optionCopy.elements
    let result = await super.command(name, optionCopy)
    await this.api.execute(`document.querySelector('.visible-in-percy').classList.remove("visible-in-percy")`);
    return result
  }

}

module.exports.path = __dirname;
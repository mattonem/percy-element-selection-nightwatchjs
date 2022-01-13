# percy-element-selection-nightwatchjs
The purpose of this library is to provide an API allowing partial content comparaison with [Percy](https://percy.io) via NightWatch. 

# How to use

## Install

```bash
npm install @maxmattone/percy-nightwatch-element-selection
```

## Setup
In `nightwatch.conf.js` add the following:
```javascript
const elementselection = require('@maxmattone/percy-nightwatch-element-selection');
module.exports = {
  custom_commands_path:  [elementselection.path],
  }
```

## How to use
```javascript
browser
    .url("https://www.browserstack.com")
    .percySnapshotForSelectedElements('BS signup', {elements:'#signupModalButton'})
```

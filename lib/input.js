'use strict';

const minimist = require('minimist');

/* 
- Exports a constructor function
- Uses minimist (or any other CLI library) to read command line arguments
- Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
- Returns an instance containing the action to perform and the payload for the action
*/
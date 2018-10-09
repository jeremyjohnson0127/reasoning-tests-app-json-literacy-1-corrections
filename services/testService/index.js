import { Constants } from 'expo';

import VerbalTests from '../../data/verbal';
import NumericalTests from '../../data/numerical';

module.exports.all = function() {
  switch (Constants.manifest.slug) {
    case 'wikijob-test-verbal':
    case 'wikijob-test-verbal-dev':
      return [ VerbalTests ];

    case 'wikijob-test-numerical':
    case 'wikijob-test-numerical-dev':
      return [ NumericalTests ];

    case "wikijob-test-combined":
    case "wikijob-test-combined-dev":
      return [ NumericalTests, VerbalTests ];

    default:
      throw 'app.json -> expo.slug doesn\'t match defined tests.';
  }
};

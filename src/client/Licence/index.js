'use strict';
const axios = require('axios');

class Licence {
  constructor(client) {
    this.client = client;
    this.licence = null;
  }

  /**
   * Logs Licence into ELC Licence Registery
   * @param {string} [licence_key] ELC Licence Key
   * @returns {Promise<boolean>} Boolean
   * @example
   */

  async validateLicence(licence_key) {
    this.licence = licence_key;
    let req = await axios.default({
      method: 'post',
      url: `https://api.elondev.cf/licence/validate`,
      data: {
        key: licence_key,
      },
    });

    if (req.data.error) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Licence;

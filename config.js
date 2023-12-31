require('dotenv/config');

const OPENHIM = {
  username: process.env.OPENHIM_USERNAME || 'interop@openhim.org',
  password: process.env.OPENHIM_PASSWORD || 'interop-password',
  apiURL: process.env.OPENHIM_API_URL || 'https://openhim-core:8080',
  trustSelfSigned: true,
};

const FHIR = {
  url: process.env.FHIR_URL,
};

const CONFIG = {
  port: process.env.PORT || 6000
};
const MEDIATOR = {
  url: process.env.MEDIATOR_URL,
  username: process.env.MEDIATOR_USERNAME,
  password: process.env.MEDIATOR_PASSWORD
};

module.exports = {
  OPENHIM,
  FHIR,
  CONFIG,
  MEDIATOR
};

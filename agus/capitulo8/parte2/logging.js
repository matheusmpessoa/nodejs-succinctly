var log4js = require('log4js');
var logger = log4js.getLogger('myapplication');

logger.info('Application is running');
logger.warn('Module cannot be loaded');
logger.error('Saved data was error');
logger.fatal('Server could not process');
logger.debug("Some debug messages");

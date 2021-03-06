require('dotenv').config();
const process = require('process');
const winston = require('winston');

const serviceName = (process.env.SERVICE_NAME || 'ioConto') + ' - Data Ingestion';
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: serviceName },
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    new winston.transports.File({ filename: process.env.ERROR_LOG_FILE || 'error.log', level: 'error' }),
    new winston.transports.File({ filename: process.env.LOG_FILE || 'combined.log' })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

//const reader = require('./reader');
const ingestor = require('./ingestor')(logger);
try {
  logger.info('Ingestion started');
  ingestor.init().then(() => {
    // reader.init();
    // reader.read(writer);
    logger.info('Ingestion finished');
    process.exit(0);
  }, (e) => {
    logger.error(e);
    process.exit(0);
  });
} catch (e) {
  logger.error(e);
  process.exit(0);
}


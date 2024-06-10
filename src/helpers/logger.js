import {createLogger, format, transports} from 'winston'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger ({
    format: format.combine(
        format.simple(), 
        format.timestamp({format: 'DD/MM/YYYY | HH:mm:ss'}),
        format.printf(info => `[${info.timestamp}] - ${info.level}: ${info.message}`)
        ), 
    transports: [
        new transports.File ({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-info.log`,
            level: 'info'
        }),
        new transports.File ({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-error.log`,
            level: 'error'
        }),
        new transports.Console({
            level: 'debug',
            colorize: true
        })
    ]
})

export default logger;
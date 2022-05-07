import { transports, createLogger, format } from 'winston';
import { isProduction } from './config';
import dayjs from 'dayjs';

const logger = createLogger({
    format: format.json(),
    defaultMeta: {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss")
    },
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log', level: 'info' }),
        new transports.File({ filename: 'logs/warning.log', level: 'warn' }),
        new transports.File({ filename: 'logs/debug.log', level: 'debug' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
});

if (!isProduction) {
    logger.add(
        new transports.Console({
            format: format.combine(
                format.simple(),
                format.colorize()
            )
        })
    );
}

export default logger;
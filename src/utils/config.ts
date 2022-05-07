import process from 'node:process';

export const isProduction = process.env["NODE_ENV"] === "production";
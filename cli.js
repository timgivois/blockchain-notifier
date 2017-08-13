#!/usr/bin/env node

const program = require('commander');
const config = require('config');
const start = require('./index');

const currenciesAvailable = config.get('defaultProps.currencies');

function list(val) {
    return val.split(',');
}

program
    .version('0.0.1')
    .option('-T, --time [time]', 'Time to update in ms')
    .option(
        '-C, --currencies [currencies]',
        `Currencies to get separated by comma, available list: ${currenciesAvailable}`,
        list
    )
    .parse(process.argv);

console.log(program.currencies);

start({
    timeToUpdate: program.time,
    currencies: program.currencies
});
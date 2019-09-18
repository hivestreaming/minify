import * as fs from 'fs';
import * as uglifyjs from 'uglify-js';
import * as yargs from 'yargs';

const argv = yargs(process.argv)
    .string('i').alias('i', 'input').describe('i', 'Javascript Input File path (Unminified)')
    .string('o').alias('o', 'output').describe('o', 'Javascript Output File path (Minified)')
    .string('r').alias('r', 'reserved').describe('r', 'Reserved File path')
    .help().argv;



const codePath = (argv.input) ? argv.input : undefined;
const reservedPath =  (argv.reserved) ? argv.reserved : undefined;

if(!codePath || ! reservedPath)
    throw new Error(`Missing parameters: PLUGIN_FILENAME: ${codePath} - EXCLUDES_FILE: ${reservedPath}`);

if(!argv.output)
    console.warn(`Missing parameter MINIFIED_FILENAME, the output file will be "facebook.hive.min.js"`);

const outputPath = (argv.output) ? argv.output : 'facebook.hive.min.js';
const code = fs.readFileSync(codePath, "utf8");
const excludes = require(reservedPath);
console.log('Excludes:', excludes);

const options = {
    mangle: {
        properties: {
            regex: /^((?!\.).)*$/,
            reserved: excludes
        },
    }
}

const minCode = uglifyjs.minify(code, options).code
fs.writeFileSync(outputPath, minCode);
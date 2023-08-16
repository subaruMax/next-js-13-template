/* eslint-disable no-console */
/**
 * The icons script allows generating an index.ts file in the public/icons folder,
 * which helps to use short imports and improves type checking.
 * In package.json added lifecycle hooks for automatically running this script.
 */

const fs = require('fs');
const path = require('path');

const ICONS_SUB_PATH = '../public';
const ICONS_DIR_NAME = 'icons';

const iconsPath = path.resolve(__dirname, ICONS_SUB_PATH, ICONS_DIR_NAME);

const camelCase = str => {
  const words = str.split(/[-_]/g);

  return words
    .map(word => (word === words[0] ? word : word[0].toUpperCase() + word[1]))
    .join('');
};

const getName = name => name.split('.')[0];

const getCamelCaseName = name => camelCase(getName(name));

const getImportLine = fileName =>
  `import ${getCamelCaseName(fileName)} from './${fileName}';`;

const getExportLine = fileName => getCamelCaseName(fileName);

const svgFiles = fs.readdirSync(iconsPath).filter(file => file.endsWith('svg'));

// generate import data
const importData = svgFiles.map(getImportLine);

// generate export data
const exportData = svgFiles.map(getExportLine);

const data = [
  '/* eslint-disable */',
  '// This file was generated by script',
  '// this file is used to generate icon names from files within this directory',
  '// icons are used in Icon component',
  '',
  ...importData,
  '',
  'const icons = {',
  ...exportData,
  '};',
  '',
  'export default icons;',
  ''
];

fs.writeFileSync(path.resolve(iconsPath, 'index.ts'), data.join('\n'), {
  encoding: 'utf-8'
});

console.log(
  `\x1b[40m\x1b[32m----- ✅ Generated ${svgFiles.length} icon names ✅ -----`
);

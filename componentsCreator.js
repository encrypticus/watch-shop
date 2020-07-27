const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const ucfirst = require('ucfirst');
const { camelCase } = require('camel-case')

const watchedDir = path.join(__dirname, 'src/components/')

const watcher = chokidar.watch(watchedDir, {
  depth: 0,
  cwd: watchedDir,
  ignoreInitial: true
})

const createComponentFile = (name, template) => {
  if (!fs.existsSync(name) && name !== '') {
    template = template.replace(/STYLE_FILENAME/, `'./${name}.scss'`)
    template = template.replace(/NAME/g, ucfirst(camelCase(name)));
    fs.appendFileSync(`${watchedDir}/${name}/${name}\.js`, template, (err) => {
      if (err) throw err;
      console.log(`Файл ${name} успешно создан...`)
    })
  } else console.log('Файл с таким именем уже существует...')
}

const createIndexFile = (name, template) => {
  if (!fs.existsSync(name) && name !== '') {
    template = template.replace(/FILENAME/g, `'./${name}.js'`)
    template = template.replace(/NAME/g, ucfirst(camelCase(name)));
    fs.appendFileSync(`${watchedDir}/${name}/index.js`, template, (err) => {
      if (err) throw err;
    })
  }
};

const createStyleFile = (name, template) => {
  if (!fs.existsSync(name) && name !== '') {
    template = template.replace(/CLASS_NAME/g, `.${name}`)
    fs.appendFileSync(`${watchedDir}/${name}/${name}\.scss`, template, (err) => {
      if (err) throw err;
    })
  }
};

const jsTemplate =
  `import React from 'react';
import STYLE_FILENAME;

const NAME = (props) => {
  return (
    <div>NAME</div>
  );
};

export default NAME;
`

const indexFileTemplate =
  `import NAME from FILENAME;

export default NAME;
`

const styleFileTemplate =
  `CLASS_NAME {

}`

console.log('ComponentCreator is running...')
watcher.on('addDir', (path, stats) => {
  createComponentFile(path, jsTemplate)
  createIndexFile(path, indexFileTemplate)
  createStyleFile(path, styleFileTemplate)
  console.log(`Компонент ${ucfirst(camelCase(path))} успешно создан...`)
})
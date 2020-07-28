const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const { readFile } = fs.promises;
const ucfirst = require('ucfirst');
const { camelCase } = require('camel-case')

const watchedDir = path.join(__dirname, '../src/components/')
let parts = [];

const watcher = chokidar.watch(watchedDir, {
  depth: 0,
  cwd: watchedDir,
  ignoreInitial: true
})

async function getTemplate(template) {
  try {
    return await readFile(path.resolve(__dirname, `templates/${template}`), 'utf8')
  } catch (e) {
    console.log(e.message)
  }
}

function createFile({ template, name, ext = 'js', isIndex = false }) {
  const fileName = isIndex ? 'index' : name;

  fs.appendFile(`${watchedDir}/${name}/${fileName}\.${ext}`, template, (err) => {
    if (err) throw err;
    console.log(`Файл ${fileName}.${ext} успешно создан...`)

    parts.push('done')

    if (parts.length === 3) {
      console.log(`Компонент ${ucfirst(camelCase(name))} добавлен...\n`)
      parts = [];
    }
  })
}

async function replaceComponentTemplate(template, name) {
  template = template.replace(/STYLE_FILENAME/, `'./${name}.scss'`)
  template = template.replace(/NAME/g, ucfirst(camelCase(name)))
  return template
}

async function replaceIndexTemplate(template, name) {
  template = template.replace(/FILENAME/g, `'./${name}.js'`)
  template = template.replace(/NAME/g, ucfirst(camelCase(name)))
  return template;
}

async function replaceStyleTemplate (template, name) {
  return template.replace(/CLASS_NAME/g, `.${name}`)
}


console.log('ComponentCreator is running...')
watcher.on('addDir', (path, stats) => {
  getTemplate('component')
    .then(template => replaceComponentTemplate(template, path))
    .then(template => createFile({ template, name: path }));

  getTemplate('index')
    .then(template => replaceIndexTemplate(template, path))
    .then(template => createFile( { template, name: path, isIndex: true }))

  getTemplate('component-style')
    .then(template => replaceStyleTemplate(template, path))
    .then(template => createFile({ template, name: path, ext: 'scss' }))
  //console.log(`Компонент ${ucfirst(camelCase(path))} успешно создан...`)
})
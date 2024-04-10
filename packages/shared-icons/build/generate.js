import chalk from 'chalk'
import glob from 'fast-glob'
import { readFile, writeFile } from 'fs/promises'
import { emptyDir, mkdirSync, pathExistsSync } from 'fs-extra'
import path from 'node:path'
import { format } from 'prettier'
import uppercamelcase from 'uppercamelcase'

import { pathIcons, pathSrc } from './paths'
import { optimizeSvg } from './svgo'

const getSvgFiles = async () => {
  return glob('**/*.svg', { cwd: pathIcons, absolute: true })
}

const convertToNormalMap = async (files) => {
  const result = {}
  for (const file of files) {
    const { filename, folder } = getName(file)
    if (!result[folder]) result[folder] = []

    result[folder].push({
      name: filename,
      path: file,
      folder,
    })
  }
  return result
}

const getName = (file) => {
  const name = path.basename(file).replace('.svg', '')
  const filename = name
  const folder = path.basename(path.dirname(file))
  return {
    filename,
    folder,
  }
}

const formatCode = (code, parser = 'babel') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const generate = async (normal) => {
  for (const folder in normal) {
    generateFolder(folder)
    const files = normal[folder]
    await Promise.all(files.map((entry) => generateComponent(entry, folder)))
  }
}

const generateFolder = (name) => {
  const dirpath = path.resolve(pathSrc, name)
  const isExist = pathExistsSync(dirpath)
  if (!isExist) mkdirSync(dirpath)
}

const generateComponent = async (entry, folderName) => {
  const content = await readFile(entry.path, 'utf-8')
  const contentOptimize = optimizeSvg(entry.name, content)
  const vue = formatCode(
    `
      <template>
        ${contentOptimize}
      </template>
      <script>
        export default {
          name: "ga-icon-${folderName}-${entry.name}",
        };
      </script>
    `,
    'vue'
  )

  writeFile(
    path.resolve(pathSrc, entry.folder, `${entry.name}.vue`),
    vue,
    'utf-8'
  )
}

const generateEntry = async (entries, folder) => {
  const code = formatCode(
    entries
      .map((entry) => {
        return `export { default as GaIcon${uppercamelcase(
          folder
        )}${uppercamelcase(entry.name)} } from './${entry.name}.vue'`
      })
      .join('\n')
  )
  await writeFile(path.resolve(pathSrc, folder, 'index.js'), code, 'utf-8')
}

const generateOneEntry = async (normal) => {
  let files = []
  for (const folder in normal) {
    const _files = normal[folder]

    await generateEntry(_files, folder)
    files = [...files, ..._files]
  }

  const code = formatCode(
    files
      .map((file) => {
        return `export { default as GaIcon${uppercamelcase(
          file.folder
        )}${uppercamelcase(file.name)} } from './${file.folder}/${
          file.name
        }.vue'`
      })
      .join('\n')
  )
  await writeFile(path.resolve(pathSrc, 'index.js'), code, 'utf-8')
}

;(async () => {
  console.info(chalk.blue('создание компонентов'))
  await emptyDir(pathSrc)
  const files = await getSvgFiles()
  const normal = await convertToNormalMap(files)

  console.info(chalk.blue('создание файлов компонентов'))
  await generate(normal)

  console.info(chalk.blue('создание файла реэкспорта'))
  await generateOneEntry(normal)

  console.info(chalk.green('готово'))
})()

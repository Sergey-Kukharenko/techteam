import chalk from 'chalk'
import { optimize } from 'svgo'

const svgoOptions = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeXMLNS',
    'removeScriptElement',
    'removeStyleElement',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeNonInheritableGroupAttrs',
    'removeDimensions',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeUnusedNS',
    'removeOffCanvasPaths',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['id', 'class'],
      },
    },

    'cleanupAttrs',
    'cleanupAttrs',
    'cleanupNumericValues',
    'cleanupEnableBackground',
    'cleanupListOfValues',

    'convertColors',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'convertStyleToAttrs',
    'convertPathData',
    'convertTransform',

    'sortDefsChildren',
    'sortAttrs',

    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',

    'inlineStyles',
    'minifyStyles',
    'collapseGroups',
    'reusePaths',
  ],
}

export const optimizeSvg = (name, content) => {
  const { data } = optimize(String(content), svgoOptions)
  console.log(
    chalk.yellow(`${name} сжатие на`),
    chalk.green(((1 - data.length / content.length) * 100).toFixed() + '%')
  )
  return data
}

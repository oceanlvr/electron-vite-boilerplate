import { app } from 'electron'
import path from 'path'
import * as fileType from 'file-type'

void (async () => {
  const filename = app.isPackaged
    ? path.join(__dirname, '../renderer/vue.ico')
    : path.join(__dirname, '../../packages/renderer/public/vue.ico')
  const fileInfo = await fileType.fileTypeFromFile(filename)

  console.log(fileInfo) // { ext: 'ico', mime: 'image/x-icon' }
})()

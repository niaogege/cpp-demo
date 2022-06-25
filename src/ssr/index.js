/*
 * @Author: Chendapeng
 * @Date: 2021-08-28 20:11:44
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-05 12:21:38
 * @Description: ssr
 */
import express from 'express'
import {renderToString} from 'react-dom'
import FreeCode from '../components/freecode'

const app = express()
const content = renderToString(<FreeCode></FreeCode>)
app.get('/', function(req, res) {
  res.send(
    `<html>
      <head>
      <title>ssr react</title>
      </head>
      <body>
        <div id='root'>${content}</div>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log('app listen 3000');
})
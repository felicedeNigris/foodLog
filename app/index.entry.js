//Our Entry point for webpack to bundle

//if webpack is in dev mode enable raw-loader to import html
if(process.env.NODE_ENV !== 'production'){
  require('./index.html') //raw-loader input our html as javascript string
}

import React from 'react'
import ReactDOM from 'react-dom'

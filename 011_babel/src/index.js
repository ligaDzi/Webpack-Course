import * as $ from 'jquery'

import Post from '@models/Post'
import './babel'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo'
import xml from './assets/data.xml'
import csv from './assets/data.csv'


import './styles/styles'
import './styles/less'
import './styles/scss'

const post = new Post('Webpack Post Title', webpackLogo)

$('pre').addClass('color').html(post.toString())

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)
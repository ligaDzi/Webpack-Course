import Post from './Post'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import './styles/styles.css'

const post = new Post('Webpack Post Title', webpackLogo)

console.log('Post toString()', post.toString())
console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)
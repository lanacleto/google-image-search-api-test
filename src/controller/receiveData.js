const { search } = require("../../routes")
const dotenv = require('dotenv').config()
const { google } = require("googleapis")
const customSearch = google.customsearch('v1')

const removeSpaces = str => str.replace(/\s/g, '+')

exports.receiveData = async function(req, res) {
  const value = removeSpaces(req.query.search)
  const finalImages = []
  const response = await customSearch.cse.list({
    auth: process.env.GOOGLESEARCH_API_KEY,
    cx: 'c348abb1c5d6c2c1b',
    q: value,
    imgSize: 'large',
    searchType: 'image'
  })
  response.data.items.forEach(e => {
    finalImages.push(e.link)
  })
  return res.json(finalImages)
}

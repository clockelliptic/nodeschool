
var cat = require('cat-picture')

var src = cat.src
cat.remove()

var image = require('lightning-image-poly')

var vis = new image('#vis', null, [src], {hullAlgorithm: 'convex'})


var remote = require('electron').remote
var fs = require('fs')

function save () {
    remote.getCurrentWebContents().printToPDF({
      portrait: true
    }, function (err, data) {
      fs.writeFile('annotation.pdf', data, function (err) {
        if (err) alert('error generating pdf! ' + err.message)
        else alert('pdf saved!')
      })
    })
  }

window.addEventListener('keydown', function (e) {
    console.log('hi')
    if (e.keyCode == 80) save()
})
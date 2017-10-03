function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer)
  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '37%'
  danerysContainer.style.top = '55%'
  danerysContainer.style.left = '25%'

  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.width = '60%'
  danerys.style.position = 'absolute'
  danerys.style.top = 0
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  // Character 2
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '10%'
  drogoContainer.style.height = '37%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '70%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '60%'
  drogo.style.position = 'absolute'
  drogo.style.top = 0
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0


  // Setup Props

  // Prop 1

  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  // egg.style.top = '65%'
  egg.style.left = '31%'
  egg.style.height = '10%'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '55%'
    egg.style.left = '31%'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '48%'
    egg.style.left = '41%'
  })

};

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var lis = document.getElementsById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i]= (parseInt(lis[i])+parseInt(n )).toString
  }
}
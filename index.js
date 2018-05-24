function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML= parseInt(lis[i].innerHTML)+parseInt(n )
  }
}
function deepestChild() {
  var lis = document.getElementById('grand-node').querySelectorAll('div');
  return lis.slice(0,array.length-1)
}
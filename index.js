function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var lis = document.querySelectorAll('ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    parseInt(lis[i])+parseInt(n )
  }
}
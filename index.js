function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget(selector) {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const listItems = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < listItems.length; i++) {
            listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n; 
      }
    return listItems;
}

function deepestChild() {
    const child = document.querySelectorAll('#grand-node div div div div');
    return child[0];
}
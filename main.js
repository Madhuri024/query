//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';
//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display = 'none';



var itemtwo = document.querySelectorAll('.list-group-item');
itemtwo[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i< odd.length;i++){
    odd[i].style.backgroundColor = '#008000';
    
}


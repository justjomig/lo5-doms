//document.getElementsByClassName const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]);
items[0].style.color = 'blue';
items[0].textContent = "UNO";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementByTagName();
 let just = document.getElementsByTagName('li');
 console.log(just);
 console.log(just[0]);
 just[0].style.color = 'orange';
 just[0].textContent = 'power';

// Convert HTML Collection to Array
just = Array.from(just);
just.reverse();
just.forEach(function(just, index){
  console.log(just.className);
  just.textContent = `${index}: JOMIG`;
});


console.log(just);

// document.querySelectorAll()
const jomigs = document.querySelectorAll('ul.collection li.collection-item');

console.log(jomigs);

nayeons.forEach(function(nayeon, index){
    jomigs.textContent = `${index}: JUSTJOMIG`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li){
  li.style.background = 'yellow';
  li.style.color = '#ccc';
})

for(let a = 0; a < liEven.length; a++) {
    liEven[a].style.background = 'orange'
}
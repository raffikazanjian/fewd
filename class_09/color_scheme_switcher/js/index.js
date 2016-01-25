$('#grayButton').click(switchGray);


//document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  document.getElementById('p').style.color = 'red';
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'orange';
}

switchBlue();
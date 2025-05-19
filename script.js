function changePerfume(perfume) {
  const name = document.getElementById('perfume-name');
  const image = document.getElementById('perfume-image');
  const container = document.getElementById('main-container');
  const description = document.getElementById('perfume-description');

  switch(perfume) {
    case 'ebano':
      name.textContent = 'Ébano';
      fadeImage(image, 'img/ebano-new.png');
      container.style.backgroundColor = '#2e2e2e';
      name.style.color = '#000000';
      description.textContent = 'Ébano es fuerza contenida. Un perfume masculino, oscuro y elegante que evoca misterio, sofisticación y carácter. Ideal para noches de invierno donde la presencia lo es todo.';
      description.style.color = '#bbbbbb';
      break;

    case 'aurora':
      name.textContent = 'Aurora';
      fadeImage(image, 'img/aurora-new.png');
      container.style.backgroundColor = '#fff4e6';
      name.style.color = '#000000';
      description.textContent = 'Aurora es la primera luz del día en una botella. Una fragancia femenina, luminosa y floral, perfecta para noches de primavera. Suavidad y encanto envueltos en elegancia.';
      description.style.color = '#444';
      break;

    case 'nacar':
      name.textContent = 'Nácar';
      fadeImage(image, 'img/nacar-new.png');
      container.style.backgroundColor = '#fdfdfd';
      name.style.color = '#000000';
      description.textContent = 'Nácar es pureza perlada. Un perfume femenino, delicado y brillante que envuelve con elegancia. Ideal para usar de día en invierno, con una frescura limpia y refinada.';
      description.style.color = '#444';
      break;

    case 'igneo':
      name.textContent = 'Ígneo';
      fadeImage(image, 'img/igneo-new.png');
      container.style.backgroundColor = '#fbeaea';
      name.style.color = '#000000';
      description.textContent = 'Ígneo arde sin quemar. Una fragancia masculina, cálida e intensa que despierta el deseo. Perfecta para citas románticas de otoño, con una presencia envolvente y atrevida.';
      description.style.color = '#444';
      break;
  }
}

function fadeImage(imageElement, newSrc) {
  imageElement.classList.add('fade');
  setTimeout(() => {
    imageElement.src = newSrc;
    imageElement.classList.remove('fade');
  }, 300);
}

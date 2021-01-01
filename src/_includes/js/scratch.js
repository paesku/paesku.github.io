(function () {
  const canvas = document.getElementsByTagName('canvas')[0];
  const context = canvas.getContext('2d');
  const minPixelCount = (canvas.width * canvas.height) / 2;
  const blur = '4px';
  let timeout;
  let eraserRadius = (canvas.width / 100) * 3;
  if (eraserRadius < 50) {
    eraserRadius = 40
  }

  onInit();

  function onInit() {
    overlay();
    canvas.addEventListener('mousemove', onMove, false);
    canvas.addEventListener('touchmove', onMove, false);
    canvas.addEventListener('mouseup', onStop, false);
  }

  function overlay() {
    context.beginPath();
    context.fillStyle = '#000';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.fillStyle = 'white';
    context.font = '30px Arial';
    context.fillText('Happy new Year', canvas.width / 2, canvas.height / 2);
    context.globalCompositeOperation = 'destination-out';
  }

  function onMove(event) {
    event.preventDefault();
    clearTimeout(timeout);
    if (isClicked(event) || isTouched(event)) {
      eraser(event);
    }
  }

  function onStop() {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    if (minPixelCount > blackPixelsCount(imageData.data)) {
      resolved();
    }
  }

  function isClicked(event) {
    const {buttons, button} = event;
    return buttons === 1 || button === 1;
  }

  function isTouched(event) {
    return (event && event.targetTouches && event.targetTouches.length && event.targetTouches[0]);
  }

  function coordinates(x, y) {
    const {top, bottom, left, right} = canvas.getBoundingClientRect();
    const {width, height} = canvas;
    return {
      x: Math.floor((x - left) / (right - left) * width),
      y: Math.floor((y - top) / (bottom - top) * height),
    };
  }

  function eraser(event) {
    const {x, y} = coordinates(event.clientX, event.clientY);
    context.beginPath();
    context.filter = `blur(${blur})`;
    context.arc(x, y, eraserRadius, 0, 2 * Math.PI);
    context.fill();
  }

  function blackPixelsCount(data) {
    return Array.from(data).filter(val => val === 255).length;
  }

  function resolved() {
    canvas.removeEventListener('mousemove', onMove, true);
    canvas.removeEventListener('touchmove', onMove, true);
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.cursor = 'default';
  }
})();

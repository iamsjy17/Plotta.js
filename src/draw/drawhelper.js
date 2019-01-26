const DrawHelper = {};

DrawHelper.Draw = function (ctx, width, height, drawData) {
  const maxCircle = 60;
  const radius = 230;
  const size = 7;

  ctx.translate(width / 2, height / 2);
  for (let i = 0; i < maxCircle * 100; i++) {
    setTimeout(() => {
      if (i % maxCircle === 0) {
        // console.log(new Date().getSeconds());
        ctx.resetTransform();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
      }
      ctx.beginPath();
      ctx.arc(0, radius, size, 0, 2 * Math.PI, false);
      ctx.rotate((2 * Math.PI) / maxCircle);
      ctx.fill();
    }, (1000 / maxCircle) * i);
  }
};

export default DrawHelper;

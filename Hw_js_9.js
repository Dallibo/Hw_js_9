const rectangle = {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 5, y: 3 }
  };
function printRectangle(rect) {
    console.log('Координаты прямоугольника:');
    console.log(`верхний левый угол: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`нижний правый угол: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
  }
printRectangle(rectangle);
  

function getRectangleWidth(rect) {
    const width = rect.bottomRight.x - rect.topLeft.x;
    return width;
  }
  const width = getRectangleWidth(rectangle);
  console.log(`Ширина прямоугольника: ${width}`);

  
function getRectangleHeight(rect) {
    const height = rect.bottomRight.y - rect.topLeft.y;
    return height;
  }
  const height = getRectangleHeight(rectangle);
  console.log(`Высота прямоугольника: ${height}`);

  
function getRectangleS(rect) {
    const s = width * height;
    return s;
  }
  const s = getRectangleS(rectangle);
  console.log(`Площадь прямоугольникка: ${s}`);


function getRectanglePerimeter(rect) {
    const perimeter = 2 * (width + height);
    return perimeter;
  }
  const perimeter = getRectanglePerimeter(rectangle);
  console.log(`Периметр прямоугольника: ${perimeter}`);


function changeRectangleWidth(rect, units) {
    const newWidth = rect.bottomRight.x - rect.topLeft.x + units;
    rect.bottomRight.x = rect.topLeft.x + newWidth;
  }
  console.log("Початковий прямокутник:", rectangle);
  changeRectangleWidth(rectangle, 2);
  console.log("Прямокутник зі зміненою шириною:", rectangle);









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

  

  function changeRectangleWidth(rect, change) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.bottomRight.x += change;
    return newRect;
  }
  console.log('Початковий прямокутник:');
  console.log(rectangle);
  
  const newWidthRect = changeRectangleWidth(rectangle, 2);
  console.log('Прямокутник зі зміненою шириною:');
  console.log(newWidthRect);
  


  function changeRectangleHeight(rect, change) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.bottomRight.y += change;
    return newRect;
  }
  const newHeightRect = changeRectangleHeight(rectangle, 1);
  console.log('Прямокутник зі зміненою висотою:');
  console.log(newHeightRect);
  


  function changeRectangleSize(rect, widthChange, heightChange) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.bottomRight.x += widthChange;
    newRect.bottomRight.y += heightChange;
    return newRect;
  }
  const newSizeRect = changeRectangleSize(rectangle, -1, 2);
  console.log('Прямокутник зі зміненою шириною та висотою:');
  console.log(newSizeRect);
  


  function offsetRectangleX(rect, offsetX) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.x += offsetX;
    newRect.bottomRight.x += offsetX;
    return newRect;
  }
  const newXOffsetRect = offsetRectangleX(rectangle, 3);
  console.log('Зміщений прямокутник по осі X:');
  console.log(newXOffsetRect);
  


  function offsetRectangleY(rect, offsetY) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.y += offsetY;
    newRect.bottomRight.y += offsetY;
    return newRect;
  }
  const newYOffsetRect = offsetRectangleY(rectangle, 2);
console.log('Зміщений прямокутник по осі Y:');
console.log(newYOffsetRect);



  function offsetRectangleXY(rect, offsetX, offsetY) {
    const newRect = {
      topLeft: { ...rect.topLeft },
      bottomRight: { ...rect.bottomRight }
    };
    newRect.topLeft.x += offsetX;
    newRect.topLeft.y += offsetY;
    newRect.bottomRight.x += offsetX;
    newRect.bottomRight.y += offsetY;
    return newRect;
  }
  const newXOffsetYOffsetRect = offsetRectangleXY(rectangle, 3, -1);
console.log('Зміщений прямокутник по осі X та Y:');
console.log(newXOffsetYOffsetRect);


  
  function isPointInsideRectangle(rect, point) {
    const { x, y } = point;
    const { topLeft, bottomRight } = rect;
    const { x: leftX, y: topY } = topLeft;
    const { x: rightX, y: bottomY } = bottomRight;
  
    if (x >= leftX && x <= rightX && y >= topY && y <= bottomY) {
      return true;
    }
    return false;
  }

  const point = { x: 2, y: 1 };
const isInside = isPointInsideRectangle(rectangle, point);
console.log(`Точка (${point.x}, ${point.y}) знаходиться всередині прямокутника: ${isInside}`);
  
  
 
  
  
  









Función Debounce en TypeScript con TDD
Este proyecto consiste en la implementación de una función debounce utilizando TypeScript y siguiendo el paradigma de Desarrollo Basado en Pruebas (Test-Driven Development, TDD). La función debounce sirve para controlar la frecuencia de ejecución de una función en respuesta a eventos como clics, desplazamientos u otras acciones del usuario, evitando que se ejecute demasiado rápido y repetidamente.

Contenidos
Instalación
Uso
Implementación
Instalación
Para empezar, necesitas tener Node.js y npm instalados. Luego, clona este repositorio e instala las dependencias necesarias:

bash
Copiar código
git clone [https://github.com/tu-usuario/funcion-debounce.git](https://github.com/aleot22/Sprint2.1/)
cd funcion-debounce
npm install
Uso
Aquí tienes un ejemplo de cómo usar la función debounce:

typescript
Copiar código
import { debounce } from './debounce';

// Función que queremos controlar
function onResize() {
  console.log('Resize event detected');
}

// Crear una función debounced
const debouncedResize = debounce(onResize, 300);

// Asignar el evento de redimensionar ventana a la función debounced
window.addEventListener('resize', debouncedResize);
Implementación
La implementación de la función debounce se hace siguiendo los principios de TDD. Primero escribimos las pruebas y luego implementamos la función para que pase las pruebas.

Pruebas
Las pruebas se encuentran en el archivo debounce.test.ts:

typescript
Copiar código
import { debounce } from './debounce';

jest.useFakeTimers();

test('debounce should delay execution', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 200);

  debouncedFunc();
  expect(func).not.toBeCalled();

  jest.advanceTimersByTime(200);
  expect(func).toBeCalled();
});

test('debounce should reset timer on subsequent calls', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 200);

  debouncedFunc();
  jest.advanceTimersByTime(100);
  debouncedFunc();
  jest.advanceTimersByTime(100);
  expect(func).not.toBeCalled();

  jest.advanceTimersByTime(100);
  expect(func).toBeCalled();
});
Implementación de la Función
La función debounce se encuentra en el archivo debounce.ts:

typescript
Copiar código
export function debounce(func: Function, wait: number): (...args: any[]) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

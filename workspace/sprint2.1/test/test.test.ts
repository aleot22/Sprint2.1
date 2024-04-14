import debounce from '../debounce';

jest.useFakeTimers();

describe('debounce function', () => {
  test('should delay function execution by specified milliseconds', () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 1000);

    // Llama a la función debounced
    debouncedFunction();

    // Espera que la función no haya sido llamada inmediatamente
    expect(mockFunction).not.toHaveBeenCalled();

    // Avanza el temporizador en 1000 milisegundos
    jest.advanceTimersByTime(1000);

    // Verifica que la función haya sido llamada después del retraso
    expect(mockFunction).toHaveBeenCalled();
  });
  
});

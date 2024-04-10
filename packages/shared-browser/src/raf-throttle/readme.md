### raf-throttle

Функция возвращает обертку, которая предотвращает запуск функции раньше, чем браузер готов к отрисовке следующего фрейма. https://stackoverflow.com/a/44779316

### Пример использования

```
this.updateCursorPosition = rafThrottle(this.updateCursorPosition);
```

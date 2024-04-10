# hover-detector

Класс для определенния поддержки браузерами события `hover`

### Инициализация

```
import { HoverDetector } from '@ga/shared-browser'

const hoverDetector = new HoverDetector();
```

### Методы

| Метод          | Описание                                                                         |
| -------------- | -------------------------------------------------------------------------------- |
| hover          | Проверяет поддерживает ли браузер событие hover                                  |
| isSupportHover | Сравнивает значение высчитанное методом hover с константой HOVER_STATE.SUPPORTED |

### Пример использования

```
import { HoverDetector } from '@ga/shared-browser'

const hoverDetector = new HoverDetector();

saveSupportHoverState({ value: hoverDetector.isSupportHover })
```

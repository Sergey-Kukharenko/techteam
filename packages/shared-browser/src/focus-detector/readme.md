# focus-detector

Класс для взаимодействия с источниками события `focus`

### Инициализация

```
import { FocusDetector } from '@ga/shared-browser'

const focusDetector = new FocusDetector();
```

### Методы

| Метод                          | Описание                                                                    |
| ------------------------------ | --------------------------------------------------------------------------- |
| setPointerInteractionTimeout   | Устанавливает тайм-аут взаимодействия источника фокуса pointer              |
| unsetPointerInteractionTimeout | Очищает тайм-аут взаимодействия источника фокуса pointer                    |
| resetPointerInteractionTimeout | Перезапускает тайм-аут взаимодействия источника фокуса pointer              |
| getFocusSource                 | Возвращает название текущего источника фокуса (null \| keyboard \| pointer) |

### Геттеры

| Геттер             | Описание                                                 |
| ------------------ | -------------------------------------------------------- |
| pointerInteraction | Возвращает значение праватного поля \_pointerInteraction |

### Сеттеры

| Сеттер             | Описание                                                    |
| ------------------ | ----------------------------------------------------------- |
| pointerInteraction | Устанавливает значение праватного поля \_pointerInteraction |

### Пример использования

```
function foo() {
    const focusDetector = new FocusDetector();

    const onPointerEvent = () => {
        focusDetector.pointerInteraction = true;

        focusDetector.resetPointerInteractionTimeout();
    };

    const onKeyboardEvent = () => {
        focusDetector.pointerInteraction = false;

        focusDetector.unsetPointerInteractionTimeout();
    };

    const onFocusIn = () => {
        const source = focusDetector.getFocusSource();

        setFocusSource(source)
    };

    document.addEventListener('click', onPointerEvent, false);
    document.addEventListener('keydown', onKeyboardEvent, false);
    document.addEventListener('focusin', onFocusIn, false);
}
```

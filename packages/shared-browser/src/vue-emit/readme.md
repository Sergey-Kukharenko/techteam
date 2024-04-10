### vue-emit

Функция вызывает хендлеры вьюшных событий

### Пример использования

```
// Деректива onFocusIn

function onFocusIn(el, vnode) {
    const focusWithin = states.get(el);

    if (focusWithin) {
        return;
    }

    states.set(el, true);

    vueEmit(vnode, 'focuswithin'); <---- Использование vue-emit
}
```

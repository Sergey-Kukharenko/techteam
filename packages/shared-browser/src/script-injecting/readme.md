### script-injecting

`scriptInjecting.inject()`

Функция встраивает скрипт в document.head. Возвращает Promise по событиям onload и onerror.

```
import { scriptInjecting } from '@ga/shared-browser';

const injectScript = () => {
	try {
		cosnt url = "https://meterika.ru";
		const options = { async: false };

		await scriptInjecting.inject(url, options)
	} catch (e) {
		console.error(`Ошибка при загрузке скрипта ${url}`)
	}
}
```

#Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
install: 
	npm ci

#быстро и просто позволит запускать игру без глобальной установки
brain-games: 
	node bin/brain-games.js

#Для отладки публикации не нужно добавлять пакет в основной каталог NPM. На протяжении всего проекта используйте аргумент --dry-run, чтобы не засорять общее хранилище учебными пакетами. Таким способом вы убедитесь, что правильно настроили свой пакет.
publish: 
	npm publish --dry-run

lint: 
	npx eslint .

brain-even:
	node bin/brain-even.js

rec:
	asciinema rec

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js
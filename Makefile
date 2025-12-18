install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

install-readline:
	npm install readline-sync

lint:
	npx eslint .


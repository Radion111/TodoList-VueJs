#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:radion111/TodoList-VueJs.github.io.git master:gh-pages
# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# git push -f https://radion111.github.io/TodoList-VueJs.git master:gh-pages
#
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -
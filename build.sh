#!/bin/bash
eval "$(fnm env --shell bash --use-on-cd)"

cp ./index.dev.html ./index.html
yarn build $@
cp ./index.prod.html ./index.html

#!/bin/bash

cd /home/lihe07/Desktop/baid-website-next/

echo Before FNM
eval "$(fnm env --shell bash --use-on-cd)"
echo After FNM

export WAGTAIL_BASE="http://10.65.200.112:82/"
yarn build

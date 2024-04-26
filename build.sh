#!/bin/bash
eval "$(fnm env --shell bash --use-on-cd)"

yarn build $@

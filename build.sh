#!/bin/bash

# declaration(s)
GULP="node node_modules/.bin/gulp"
NGC="node node_modules/.bin/ngc"

# clean up previous distributions
rm -rf ./dist ./build

# run gulp inline-templates
$GULP inline-templates --gulpfile ./.gulpfile.js

# run angular compiler
$NGC -p ./tsconfig.json

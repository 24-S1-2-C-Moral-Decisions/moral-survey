#! /bin/bash

for dir in moral-survey-*; do
    if [ -d "$dir" ]; then
    echo "Building $dir"
    cd $dir
    echo "[$dir] Install npm package"
    npm install
    echo "[$dir] Build pages"
    npm run build
    # cd $dir && ./your-script.sh
    cd -
    fi
done


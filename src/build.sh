#! /bin/bash
mkdir -p build/log
log="$(pwd)/build/log/log_$(date +%Y-%m-%d_%H-%M-%S).txt"
echo "Log file: $log"
touch $log
for dir in moral-survey-*; do
    if [ -d "$dir" ]; then
    echo "Building $dir" &> $log
    cd $dir
    echo "[$dir] Install npm package" &> $log
    npm install
    echo "[$dir] Build pages" &> $log
    npm run publish 
    if [ $? -ne 0 ]; then
        echo "[$dir] Build failed" &> $log
        exit 1
    fi
    # cd $dir && ./your-script.sh
    cd -
    fi
done

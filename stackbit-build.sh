#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5feaad450d354c0015e3a09e/webhook/build/pull > /dev/null
curl -s -X POST https://api.stackbit.com/project/5feaad450d354c0015e3a09e/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/5feaad450d354c0015e3a09e/webhook/build/publish > /dev/null

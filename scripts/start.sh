#!/bin/bash

export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"

cd /vagrant
yarn start:dev

#!/bin/bash

apt update
apt install -y git

curl -L -o /tmp/asdf.tar.gz https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-amd64.tar.gz
tar -xzf /tmp/asdf.tar.gz -C /tmp
mv /tmp/asdf /usr/local/bin
chmod +x /usr/local/bin/asdf

export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"

cd /vagrant
./scripts/install-dependencies.sh
yarn
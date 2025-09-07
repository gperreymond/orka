#!/bin/bash

# ----------------------------
# prepare
# ----------------------------

apt update
apt install -y git

# ----------------------------
# install docker
# ----------------------------

# add Docker's official GPG key:
apt update
apt install -y ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
# add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
ulimit -n 524288
service docker start

# ----------------------------
# install asdf
# ----------------------------

curl -L -o /tmp/asdf.tar.gz https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-amd64.tar.gz
tar -xzf /tmp/asdf.tar.gz -C /tmp
mv /tmp/asdf /usr/local/bin
chmod +x /usr/local/bin/asdf

# ----------------------------
# install asdf plugins
# ----------------------------

export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"
cd /vagrant
./scripts/install-dependencies.sh
yarn
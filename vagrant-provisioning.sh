#!/bin/bash

docker exec -it node-ronflex /vagrant/scripts/provisioning.sh
docker exec -it node-pikachu /vagrant/scripts/provisioning.sh
docker exec -it node-bulbizarre /vagrant/scripts/provisioning.sh


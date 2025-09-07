```sh
$ vagrant up
$ docker network create ronflex
$ docker network create pikachu
$ docker network create bulbizarre

$ docker exec -it node-ronflex /vagrant/scripts/provisioning.sh
$ docker exec -it node-pikachu /vagrant/scripts/provisioning.sh
$ docker exec -it node-bulbizarre /vagrant/scripts/provisioning.sh

$ docker exec -it node-ronflex /vagrant/scripts/start.sh
$ docker exec -it node-pikachu /vagrant/scripts/start.sh
$ docker exec -it node-bulbizarre /vagrant/scripts/start.sh

$ vagrant destroy
$ docker network rm ronflex
$ docker network rm pikachu
$ docker network rm bulbizarre
```

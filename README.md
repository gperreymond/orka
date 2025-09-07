```sh
$ docker network create ronflex
$ docker network create pikachu
$ docker network create bulbizarre
$ vagrant up
$ ./vagrant-provisioning.sh

$ docker exec -it node-ronflex /vagrant/scripts/start.sh
$ docker exec -it node-pikachu /vagrant/scripts/start.sh
$ docker exec -it node-bulbizarre /vagrant/scripts/start.sh

$ vagrant destroy
$ docker network rm ronflex
$ docker network rm pikachu
$ docker network rm bulbizarre
```

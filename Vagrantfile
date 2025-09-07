# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
INSTANCES_COUNT = 3

POKEMONS = ["pikachu", "ronflex", "bulbizarre"]

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  (1..INSTANCES_COUNT).each do |i|
    vm_name = "node-#{POKEMONS[i-1]}" 
    config.vm.define vm_name do |instance|
      instance.vm.hostname = vm_name
      # Use Docker as the provider
      instance.vm.provider "docker" do |d|
        d.image = "phusion/baseimage:noble-1.0.2"
        d.name = vm_name
        d.remains_running = true
        d.has_ssh = false
        d.create_args = [
          "--privileged",
          "--network=#{POKEMONS[i-1]}"
        ]
        d.env = {
          "APP_METADATA_NODENAME" => vm_name, 
          "APP_NATS_HOSTNAME" => "192.168.1.103" 
        }
        d.cmd = ["sleep", "infinity"]
      end
    end
  end
end

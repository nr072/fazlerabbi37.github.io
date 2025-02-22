Docker Cheat Sheet
==================
A quick reference to Docker.

.. warning:: under heavy construction and not well organized

shell access on a docker image
------------------------------


https://stackoverflow.com/questions/30172605/how-do-i-get-into-a-docker-containers-shell#comment75385171_30172605
https://stackoverflow.com/questions/22049212/copying-files-from-docker-container-to-host#22050116

run a docker image as a container in background
-----------------------------------------------
to run a docker image as a container do the following::

    docker run -d repository
    docker run -d repository:tag
    docker run -d image_id

source: https://stackoverflow.com/a/50208526/5350059

shell access on a docker container
----------------------------------
two ways to do it [1]_. ``attach`` and ``exec``.

using ``attach``
````````````````
::

    sudo docker attach image_id

    #OR

    sudo docker attach repository #by Name

using ``exec``
``````````````
::

    sudo docker exec -i -t image_id /bin/bash

    #OR

    sudo docker exec -i -t repository /bin/bash

duplicate an image
------------------
to duplicate an image::

    docker tag image new_image

source: https://stackoverflow.com/a/45779866/5350059

sleep in between two commands
-----------------------------
we can put pause in between two commands for 60 seconds by putting the following in between those commands::

    RUN sleep 60

source: https://forums.docker.com/t/how-to-delay-execution-of-next-line-in-dockefile/50022/2

completely remove docker
------------------------
to completely remove docker and all related file, first identify what installed package we have::

    dpkg -l | grep -i docker

Then run the following::

    sudo apt-get purge -y docker-engine docker docker.io docker-ce docker-ce-cli
    sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce docker-ce-cli

Make sure the above commands has all the following packages from the `dpkg -l` command. If not add them at the end. The above commands will not remove images, containers, volumes, or user created configuration files on your host. If you wish to delete all images, containers, and volumes run the following commands::

    sudo rm -rf /var/lib/docker
    sudo rm /etc/apparmor.d/docker
    sudo groupdel docker
    sudo rm -rf /var/run/docker.sock
    sudo rm -rf /etc/docker
    sudo rm -rf ~/.docker

Finally remove docker-compose::

    sudo rm /usr/local/bin/docker-compose

source: https://askubuntu.com/a/1021506/502875

install tzdata without user interaction
---------------------------------------
to install tzdata without user interaction, put this in Dockerfile::

    ARG DEBIAN_FRONTEND=noninteractive

source: https://askubuntu.com/a/1013396/502875

remove all images and containers
--------------------------------
to remove all images and containers::

    docker rm $(docker ps -a -q)
    docker rmi -f $(docker images -q)

source: https://techoverflow.net/2013/10/22/docker-remove-all-images-and-containers/


Source
------
.. [1] `How to get bash or ssh into a running container in background mode? <https://askubuntu.com/a/507009/502875>`_

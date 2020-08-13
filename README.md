# xml-feeds-handler
------------------------
Xml feeds handler using Symfony 4 and VueJS

## Table of contents
- [Prerequisites](https://github.com/fgamess/xml-feeds-handler#prerequisites)
  - [Tools required](https://github.com/fgamess/xml-feeds-handler#tools-required)
  - [Set up the docker stack](https://github.com/fgamess/xml-feeds-handler#set-up-the-docker-stack)
  - [Setting www-data as owner of the files](https://github.com/fgamess/xml-feeds-handler#setting-www-data-as-owner-of-the-files)
  - [Install the vendors](https://github.com/fgamess/xml-feeds-handler#install-the-vendors)
- [How to use](https://github.com/fgamess/xml-feeds-handler#how-to-use)
  - [Submit the Product feed url](https://github.com/fgamess/xml-feeds-handler#submit-the-product-feed-url)
- [Testing](https://github.com/fgamess/xml-feeds-handler#testing)
  - [Run the tests](https://github.com/fgamess/xml-feeds-handler#run-the-tests)


Prerequisites
-------------

###### Tools required

- Docker CE for Windows, Docker CE for Linux or Docker CE for MAC installed
- Docker Compose installed

###### Set up the docker stack

Install and start the Docker stack.

The docker stack is composed by 2 containers : php7 (latest) and nginx. All the configuration is done.

Using Docker CE :

    docker-compose build
then

    docker-compose up -d

You only need this command. It will start the containers (php7, nginx).

###### Setting www-data as owner of the files.

Set www-data user and group as owner of the files inside the project. Connect to the php container with the root user using this command

    docker exec -it xml_feeds_handler_php bash
When you are in the bash run

    chown -R www-data:www-data .
Exit from the bash

    exit

###### Install the vendors

Connect to the php container with the www-data user:

    docker exec -itu www-data xml_feeds_handler_php composer install


How to use
----------

###### Start processing the xml feed

The xml feed is located at:

    https://github.com/fgamess/xml-feeds-handler/raw/master/xml-feeds/product-feed-sample.xml

    
Just wait, the data will be displayed as long as the processing is not finished.

Testing
-------

###### Run the tests

1. Unit tests

Just run


    bin/phpunit tests/Unit

2. Functional tests

Just run


    bin/phpunit tests/Functional

3. All tests

Just run


    bin/phpunit tests


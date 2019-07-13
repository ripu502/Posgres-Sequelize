# Posgres-Sequelize
This repo is Learning Tracking repo for Postgres with NOdeJs , follow the link if issue 
   https://www.youtube.com/watch?v=bOHysWYMZM0 ,
   https://www.youtube.com/watch?v=67OhLlFPqFQ ,
   https://www.youtube.com/watch?v=6jbrWF3BWM0 ,
   https://github.com/bradtraversy/codegig ,   code by Brad
    also check guru99
    https://www.guru99.com/postgresql-tutorial.html

# install of posgres in ubuntu 18.04
   https://www.youtube.com/watch?v=-LwI4HMR_Eg ,
   https://tecadmin.net/install-postgresql-server-on-ubuntu/ ,
    
    $ sudo apt-get install wget ca-certificates
    $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
    $ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'

    $ sudo apt-get install postgresql postgresql-contrib
    $ sudo su - postgres
    $ psql



# install of pgAdmin4 for Browser in ubuntu 18.04

    https://tecadmin.net/install-pgadmin4-on-ubuntu/,

    sudo apt-get install pgadmin4 pgadmin4-apache2


# start the posgres from terminal
    service postgresql start

# Basic commands
    $ sudo su - postgres
    $ psql
    $ \l
    $ ALTER USER postgres PASSWORD 'newPassword';

# open pgAdmin4

connect to by typing the passoword and server details
    see Guru99

# Basic from Pgadmin
1 create database
2 always create database and table in lower case
3 table name in plural


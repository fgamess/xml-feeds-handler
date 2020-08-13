FROM fgamess/nginx-for-symfony:latest

MAINTAINER Franck GAMESS <xxxxxxx@xxxx.com>

RUN mkdir -p /etc/nginx/sites-available
ADD nginx/site.conf /etc/nginx/sites-available/
RUN mkdir -p /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf

CMD ["nginx"]
EXPOSE 80 443
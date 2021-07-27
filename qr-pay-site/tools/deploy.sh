#!/bin/sh
D=dist/gpstracksiteosm
# ng build --prod --aot
# ng build --configuration production
cd $D
ssh andrei@167.172.99.203 rm /usr/share/nginx/html/osm/*.js
ssh andrei@167.172.99.203 rm /usr/share/nginx/html/osm/*.map
ssh andrei@167.172.99.203 rm /usr/share/nginx/html/osm/*.css
scp -r * andrei@167.172.99.203:/usr/share/nginx/html/osm/

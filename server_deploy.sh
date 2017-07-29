#!/bin/sh
set -e

# variables
PUBLISH_PATH=/var/www/mahlzeit
LOCAL_FILES=/root

# check if zip file exists
if [ -e ${LOCAL_FILES}/dist.zip ]; then
  echo "OK -- dist.zip file exists."
else
  echo "WRONG -- dist.zip file does not exist."
  exit 1
fi

# delete old deploy
rm -rf ${PUBLISH_PATH}/*.*
rm -rf ${PUBLISH_PATH}/static/

# deploy new files
mv ${LOCAL_FILES}/dist.zip ${PUBLISH_PATH}
unzip ${PUBLISH_PATH}/dist.zip -d ${PUBLISH_PATH}
mv ${PUBLISH_PATH}/dist/static/ ${PUBLISH_PATH}
mv ${PUBLISH_PATH}/dist/index.html ${PUBLISH_PATH}
rm -rf ${PUBLISH_PATH}/dist/
rm -rf ${PUBLISH_PATH}/dist.zip

# change ownership
chown -R www-data:www-data ${PUBLISH_PATH}

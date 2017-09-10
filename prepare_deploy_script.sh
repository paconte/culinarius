#!/bin/sh

# variables
LOCAL_PATH=/home/frevilla/devel/culinarius/
USER_HOST=coolinarius
PUBLISH_HOST=${USER_HOST}@frevilla.com
FILES_HOST=/home/${USER_HOST}/
DEPLOY_SCRIPT=server_deploy.sh

# delete files
set +e
cd ${LOCAL_PATH}
echo "Deleting local files."
rm ./dist/*.*
rm ./dist.zip

# build
set -e
echo "Building for production."
npm run build
zip -r dist.zip ./dist/

# copy files to the server
echo "Copy files to host."
scp ./dist.zip ./${DEPLOY_SCRIPT} ${PUBLISH_HOST}:${FILES_HOST}

# deploy for production
echo "Deploy for prodution."
ssh ${PUBLISH_HOST} sh ${FILES_HOST}${DEPLOY_SCRIPT}
ssh ${PUBLISH_HOST} rm ${FILES_HOST}${DEPLOY_SCRIPT}

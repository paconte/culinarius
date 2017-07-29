#!/bin/sh

# variables
PUBLISH_HOST=root@frevilla.com
DEPLOY_SCRIPT=server_deploy.sh

# delete files
set +e
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
scp ./dist.zip ./culinarius_deploy.sh ${PUBLISH_HOST}:/root/

# deploy for production
echo "Deploy for prodution."
ssh ${PUBLISH_HOST} sh /root/${DEPLOY_SCRIPT}
ssh ${PUBLISH_HOST} rm /root/${DEPLOY_SCRIPT}

#!/bin/sh
set -e
set -x

# variables
LOCAL_PATH=$( cd $(dirname $0) ; pwd -P ) #/home/frevilla/devel/culinarius/
USER_HOST=coolinarius
PUBLISH_HOST=${USER_HOST}@frevilla.com
FILES_HOST=/home/${USER_HOST}/
DEPLOY_SCRIPT=server_deploy.sh
KEY=/home/frevilla/.ssh/id_rsa_culinarius
ABC=/home/frevilla/devel/scrapy/mahlzeit/deploy_timestamps.txt

# delete files
cd ${LOCAL_PATH}
set +e
echo "Deleting local files."
rm ./dist/*.*
rm ./dist.zip
set -e

# build
echo "Building for production."
npm run build
#/usr/local/lib/node_modules/npm/bin/npm-cli.js run build
echo "Zip production files." >> ${ABC}
echo $(date +%Y-%m-%d:%H:%M:%S) >> ${ABC}
zip -r dist.zip ./dist/

# copy files to the server
echo "SCopy files to host."
scp -i ${KEY} ./dist.zip ./${DEPLOY_SCRIPT} ${PUBLISH_HOST}:${FILES_HOST}

# deploy for production
echo "Deploy for prodution."
ssh -i ${KEY} ${PUBLISH_HOST} sh ${FILES_HOST}${DEPLOY_SCRIPT}
ssh -i ${KEY} ${PUBLISH_HOST} rm ${FILES_HOST}${DEPLOY_SCRIPT}
echo "Production deploy finished."

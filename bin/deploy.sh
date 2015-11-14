#!/usr/bin/env bash

set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "master" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'master' branch."
	exit
fi


# commit to gh-pages
rm -rf .git
rm -r .gitignore

echo ".bowerrc
.travis.yml
bin
bower.json
gulpfile.js
node_modules
package.json
tests" > .gitignore

git init
git config user.name "Travis CI"
git config user.email "miya+github.com@wpist.me"
git add .
git commit --quiet -m "Deploy from travis"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

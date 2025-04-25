#!/bin/bash

set -e

run_tests() {
  echo "🧪 Lancement des tests..."
  npm test
}

use_standard_version() {
  echo "🚀 Utilisation de standard-version..."
  npx standard-version
  git push --follow-tags origin main
  gh release create "$(jq -r .version package.json)" -F CHANGELOG.md
}

use_release_it() {
  echo "🚀 Utilisation de release-it..."
  npx release-it
}

case "$1" in
  standard-version)
    run_tests
    use_standard_version
    ;;
  release-it)
    run_tests
    use_release_it
    ;;
  *)
    echo "Usage: ./release.sh [standard-version|release-it]"
    ;;
esac

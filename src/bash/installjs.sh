VERSION=0.8.8
PLATFORM=linux
ARCH=x86
PREFIX="$HOME/node-v$VERSION-$PLATFORM-$ARCH"

#download binaries
mkdir -p "$PREFIX" && \
curl http://nodejs.org/dist/v$VERSION/node-v$VERSION-$PLATFORM-$ARCH.tar.gz \
  | tar xzvf - --strip-components=1 -C "$PREFIX"

#create symlinks
sudo ln -s $HOME/node-v$VERSION-$PLATFORM-$ARCH/bin/node /usr/local/bin/node
sudo ln -s $HOME/node-v$VERSION-$PLATFORM-$ARCH/bin/npm /usr/local/bin/npm

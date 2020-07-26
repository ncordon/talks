# GraalVM intro
GraalVM slideshow for Beers 'n Learn at Disney Streaming Services' London office

## Compiling the static site

Pre-requisite: [reveal-md](https://github.com/webpro/reveal-md).

```bash
npm install -g reveal-md
```

After that, the site can be generated doing `make`.

## Demos

## CLI

Show how to use the GraalVM JDK to run sbt and build a native image of the CLI:

```bash
eval "$(cs java --jvm graalvm-java11:20.0.0 --env)"
// Note this is the new path from GRAALVM JVM
$JAVA_HOME/bin/gu install native-image

sbt assembly
native-image --no-fallback --no-server --initialize-at-build-time -jar cli/target/scala-2.13/cli-assembly-0.1.0-SNAPSHOT.jar ./cli
```

Restore openjdk:

```bash
eval "$(cs java --disable)"
```

Measure size, memory and time of execution of the JAR and the binary:

```bash
du -h cli
/usr/bin/time -l ./cli --spanish
```

```bash
du -h cli/target/scala-2.13/cli-assembly-0.1.0-SNAPSHOT.jar
/usr/bin/time -l java -jar cli/target/scala-2.13/cli-assembly-0.1.0-SNAPSHOT.jar --spanish
```

## scalac

Compile scalac with native-image:

```
eval "$(cs java --jvm graalvm:19.3.0 --env)"
export GRAALVM_HOME=$JAVA_HOME
$GRAALVM_HOME/bin/gu install native-image

wget https://downloads.lightbend.com/scala/2.12.6/scala-2.12.6.tgz
tar zxvf scala-2.12.6.tgz
export SCALA_HOME=./scala-2.12.6

git clone https://github.com/graalvm/graalvm-demos
mv graalvm-demos/scala-days-2018/scalac-native/* .

cd scalac-substitutions
sbt package
cd ..

./scalac-image.sh

time -l $SCALA_HOME/bin/scalac
time -l ./scalac
```
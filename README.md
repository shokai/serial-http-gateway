serial-http-gateway
===================
access serial device via HTTP


Dependencies
============
* ruby-serialport (build from source code)
* eventmachine, ArgsParser (rubygem)
* your serial device (arduino, mbed ...)


Install ruby-serialport
-----------------------

install ruby-serialport 0.6.0. Not work on 0.7.

for Mac OSX and Ubuntu 9.04, 10.04

    % wget http://rubyforge.org/frs/download.php/72/ruby-serialport-0.6.tar.gz
    % tar -zxvf ruby-serialport-0.6.tar.gz
    % cd ruby-serialport-0.6
    % ruby extconf.rb
    % make
    % sudo make install

for Windows (ActiveScriptRuby)

    # download and decompress zip http://rubyforge.org/tracker/download.php/61/321/9924/1800/ruby-serialport-0.6.0-mswin32-gem.zip
    % gem install pkg/serialport-0.6.0-mswin32.gem


Install gems
------------

    % gem install eventmachine eventmachine_httpserver json ArgsParser


Run
===

Connect serial device, then

    % ./serial-http-gateway --help
    % ./serial-http-gateway /dev/tty.your-usbdevice

or

    % ./serial-http-gateway COM1


Use
===

    ## HTTP-GET
    # read serial data as JSON Array
    % curl 'http://localhost:8083'

    ## HTTP-POST
    # write to serial device
    % curl -d 'testtest' 'http://localhost:8083'

"time" in json array is unix-time (msec).

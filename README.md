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



LICENSE:
========

(The MIT License)

Copyright (c) 2011 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
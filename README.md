# CriticalPath

A micro (~0.7Kb gzipped) javascript library to design precisely the resources loading pipeline. 
In plain terms, you can define the order to load assets based on your design choices.

Check out the effects on our [website](http://todo.to.it). Best viewed with low-band connection.


## Motivation

The browsers are very smart when dealing with assets loading. They usually handle and solve all the low-level stuff for you trying to load, asynchronously, all the resources as fast as possible.

The problem here is that the browsers are very optimistics about bandwidth and at the same time they totally ignore the page composition from the user point of view.

The result is that you cannot really make decisions about the little journey the user is expecting to follow during the first access to your website.



## How does it work

It should be a designer responsibility to define which are the resources the browser should load first because they are meaningful in the first phase of the user interaction.

With this little library the designer can precisely define the exact loading sequence, based on the user journey the designer is actually design.


## Examples

Check the ```examples``` folder for working files.


## Install

If you use Bower you can install with this line:

	bower install CriticalPath

You can also download the .zip of this repo and include the library in your html file.


## Documentation

In progress...


## Contribute

In progress...


## License

Copyright (c) 2015 abusedmedia

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


## Changelog

#### Alpha release

- initial release
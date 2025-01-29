Microbit Savi's Workshop Blade
===

Send Commands to Savi's Workshop (Galaxy's Edge) Lightsaber Blade
---

I created this project to play around with my galaxy's edge custom built lightsaber.

There are a few things that I'm sure everyone who makes a lightsaber at Savi's workshop would like to be able to do.
For starters:

* Put the lightsaber into a display mode and turn off sound and keep the blade light on
* Turn the blade light on and off like a lamp
* Power the blade lamp via usb, or plugin
* Change out and discover all the color options

After digging around online I found some others had already done the hard work of reverse engineering the hilt and blade:

* [Galaxy's Edge Custom Blade Build Part 1: Reading Data from the Hilt by Dead Bothans Society](https://www.youtube.com/watch?v=GTTxhPCvGb4&t=221s)
* [Code Spreadsheet of logic analyzer by Dead Bothans Society](https://docs.google.com/spreadsheets/d/1mZMBBxSc_ltAyheEVgKL4MpGfPc3iCjR1S6BEaavN40/edit?gid=1994856546#gid=1994856546)
* [Hacking a Galaxy's Edge Lightsaber Blade by @ruthsarian](https://www.youtube.com/watch?v=YQRXhHM4Ixs)
* [Hilt Simulator by @ruthsarian](https://github.com/ruthsarian/Hilt-Simulator)
* [How To Prevent A GE Lightsaber (Blade) From Powering Off by ](https://www.youtube.com/watch?v=2Meq0aUvAiI&t=3s)

I didn't have an arduino lying around, so I grabbed my microbit and copied/translated ruthsarians code based on Dead Bothans Society spreadsheet codes.

Check out their channels for tons of other fun content: [Ruthsarian's Youtube Channel](https://www.youtube.com/@Ruthsarian) and [Dead Bothans Society's Youtube Channel](https://www.youtube.com/@deadbothanssociety8686)

So in the end, I used pin 0 on the microbit as a digital out pin and ran that to the middle pin on the blade. I grabbed a 5v lipo regulator and battery I had lying around and used that as the v+ and ground. Wired the ground to be common on the microbit. Then tapped the wires to the bottom of my blade and pushed the buttons to send commands.

A Button: Send ignite, wait 1/2 second and then send steady on
B Button: Send Flash command
Microbit logo: Iterate through colors array
Touch Pin 1: Kylo Option 1
Touch Pin 2: Kylo Option 2

I couldn't really get the Kylo effects to work on my savi blade, was kind of hoping it'd pulse and such, but I'm not sure that it is able to do that.
I did find that the deep violet option does render orange on my savi blade, so that is kind of cool.

> Open this page at [https://murphysean.github.io/microbit-saviblade/](https://murphysean.github.io/microbit-saviblade/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/murphysean/microbit-saviblade** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/murphysean/microbit-saviblade** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

# PS4ROP

I found that using Sleirsgoevy's method for the ROP compiler setup was quite challenging, so I decided to take a closer look and create my own version using JavaScript. The great news is that my version includes a handy function called dumpModule, which comes with three different parameters to make your life easier:

 - address; this is the webkit_base, libkernel_base, or libc_base variable.
- size: the size of the module you want to dump, prefixed as "variables".
- Name: This is just for visual confirmation purposes and will be printed on the page.

In addition to this, my version also includes a server that you can run on your PC. At the moment, you'll need to manually set the output filename for each usage, but don't worry, I'm working on automating this process for you.

To get started, simply enter the IP address of the computer you want to receive the module from, along with the port number of the server that is running. Then, you'll need to change the filename in the server source depending on which module you plan on dumping.

It's really that simple! If you have any questions, please don't hesitate to reach out to me. I'm confident that my version of the instructions will make your ROP compiler setup experience a breeze.

If you don't want to dump them yourself, just check out the release section and download pre-dumped copies of them.

# PS4ROP

I encountered difficulties with Sleirsgoevy's method when attempting to dump the necessary modules for setting up the ROP compiler.<br> 
Despite following the instructions in the Python file, I was unable to access the required port on my PS4 browser.

To resolve this, I examined Sleirsgoevy's approach and reconstructed it entirely using JavaScript, a language that I find to be superior to Python.<br>
This revised approach has been successful for me, and I am pleased to share it with others who may be struggling to dump the required modules.

With this solution, simply modify the filename inside the server.js JavaScript file to match the module you want to dump. 
For example, if you want to dump the Webkit module, rename the file to Webkit.bin. ![](https://i.imgur.com/dSa7M31.png)

The process is similarly straightforward for other modules, such as libkernel.

After changing the filename, press the corresponding button on the page:![](https://i.imgur.com/12vceIo.png) and the module dumping function will automatically initiate, sending data to the server in chunks via the JavaScript WebSocket API. The server will then write this data to a file with the specified name.

It is essential to note that the server.js file requires the IP and port of the computer running the server. ![](https://i.imgur.com/xxiWpmj.png) Additionally, the buffer sizes have already been defined as variables, and the dumping process is fully automated. 

You can easily host yourself on your PS4 by visiting the appropriate page. I have also included Ali Azif's exploit self-host executable to simplify the hosting process. Please keep in mind that the server runs on node.js, so ensure that you have installed node.js before running the server.

Overall, this approach has been successful for me and should be similarly effective for others experiencing issues with dumping the necessary modules.

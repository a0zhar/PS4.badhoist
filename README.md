# A Simpler Way of Dumping Modules Needed for Sleirsgoevy's ROP Compiler

I encountered difficulties with Sleirsgoevy's method when attempting to dump the necessary modules for setting up the ROP compiler. Despite following the instructions shown after running the `make` command, I was unable to access the "supposedly" hosted page on the specified port when navigating on the PS4 browser.

To resolve this, I examined Sleirsgoevy's approach when dumping the module and remade it entirely using JavaScript, a language that is superior to Python. This revised approach has been successful for me, and I am pleased to share it with others who may be struggling to dump the required modules.

With this solution, follow these simple steps shown below:
- **Step 1:**
  - Install the latest version of Node.js (*this is required by the server*)
  - Run the **setup.bat** batch file (*to install the required node modules*).
- **Step 2:**
  - Run the **startServer.bat** batch file (*this server receives data being sent from the page and writes it to the respective module file on your computer*)
  - Go to "dumper.js" and edit the hostIP variable value to match your computer's IP Address (*where the server is running*)
  - Run Ali-Azif's Exploit Self Host Executable (*To host the exploit page where you can dump modules from*)
- **Step 3:**
  - Press the button corresponding to the module you wish to dump, and the server/page will take care of everything for you. :)<br>
  *Please do not touch the controller until you see the message "[+] modulename successfully dumped!".*

This approach has been successful for me and should be similarly effective for others experiencing issues with dumping the necessary modules.
The dumping process is fully automated :)


## If you have any questions or need help dumping the modules,<br>please contact me over at Discord: a0zhar#9539

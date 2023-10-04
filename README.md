# Important Update: Successfully Built JB/Netcat from Source using Dumped Modules!!!

## What happened?
I've managed to successfully build the jb.c and netcat.c from source using the gadget's extracted from a fresh dump of the modules. This new release contains all the modules, pre-dumped using Sleirsgoevy's method, and the extracted gadgets from the decrypted dumps. These files were initially posted but were lost due to the SendSpace link expiring.

Please note that these files are intended for use with PS4 firmware version 6.72:

## Dumped modules, and extracted gadgets Required for Building Sleirsgoevy's PS4JB2 (for fw 6.72) from source:
- `gadgets.txt`: This file combines the contents of `webkit-gadgets.txt` and `libc-gadgets.txt`.
- `libc.bin`: The decrypted sprx module, loaded in WebProcess.
- `libc.elf`: The Generated ELF file for the dumped libc.
- `libc-gadgets.txt`: Gadgets extracted using ROPGadget.
- `libkernel.bin`: The decrypted sprx module for libkernel, loaded in WebProcess.
- `libkernel.elf`: The Generated ELF file for the for libkernel.
- `syscalls.txt`: Contains syscall addresses in the format `syscallxxx_addr = libkernel_base + xxxx`.
- `webkit-gadgets.txt`: Gadgets extracted using ROPGadget.
- `webkit.bin`: The decrypted sprx module for WebKit, loaded in WebProcess.
- `webkit.elf`: The Generated ELF file for the for WebKit module.

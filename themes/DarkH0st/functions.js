function addScriptFile(_src, _id, _timeout) {
  const preElement = document.getElementById("netcat");
  const script = document.createElement("script");
  script.setAttribute("src", _src);
  script.setAttribute("id", _id);
  if (preElement) document.head.removeChild(preElement);
  let timeoutTime = typeof _timeout !== "undefined" ? _timeout : 700;
  setTimeout(function () {
    document.head.appendChild(script);
  }, timeoutTime);
}

function sendAndRunPayload(src) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("GET", src, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var tmp0 = new Uint8Array(xhr.response.byteLength);
      tmp0.set(new Uint8Array(xhr.response), 0);
      var payload = new Uint32Array(tmp0);
      for (var i = 0; i < payload.length; i++)
        var getlength = "0x" + xhr.response.byteLength.toString(16);
      window.pl_blob_len = getlength;
      window.pl_blob = malloc(window.pl_blob_len);
      write_mem(window.pl_blob, payload);
      load_payload();
    }
  };
}
function ewe(src) {
  console.log("[*]loading payload");
  const xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("GET", src, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var tmp0 = new Uint8Array(xhr.response.byteLength);
      tmp0.set(new Uint8Array(xhr.response), 0);
      var payload = new Uint32Array(tmp0);
      for (var i = 0; i < payload.length; i++) {
        var getlength = "0x" + xhr.response.byteLength.toString(16);
      }
      window.mira_blob_2_len = getlength;
      window.mira_blob_2 = malloc(window.mira_blob_2_len);
      write_mem(window.mira_blob_2, payload);
      addScriptFile("/themes/DarkH0st/common/loader.min.js", "loader", 0);
    }
  };
  xhr.send();
}

function executeBinFile(self) {
  PLfile = self.getAttribute("binfile");
  LoadedMSG = self.getAttribute("loadmsg");
  ewe(PLfile);
  document.body.appendChild(privDebugElement);
}

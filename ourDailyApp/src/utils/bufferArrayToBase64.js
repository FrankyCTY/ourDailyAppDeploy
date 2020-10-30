function _arrayBufferToBase64( buffer ) {
    // if img is default
    if(buffer === "default" || !buffer) return buffer;

    // 1) Check if the source if actually buffer
    if(buffer.toString().startsWith("http")) {
      // if source is url then return as it is
      return buffer;
    }
    // 2) Transform files data
    console.log({buffer})
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    const base64 =  window.btoa( binary );

    return `data:image/jpeg;base64,${base64}`;
  }

export default _arrayBufferToBase64;
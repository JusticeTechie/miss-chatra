// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ncrITPD9NdoOFplaXtua15T/0peQjY3cGtX/ATRa8Lf1HlLJofkxkmulbJJ7u+aSKJOvF+h8XNOpliTJ0xdlFuABREXBdi4JVmy3BC2AUjxZQLR+Wf9PYfTxQbkz9Qay76btQua2Eq2IxPSIFpMgqjMlQxFkBmd/2aaDTFb5VGwf0zn7d6m90w75Upr1e1DbViGCz1ZQ90Nfhd9EE6ipNgnC5+gVO686Z1EUJAXCR06SR1r+v0r/oMQqP1qTL+aMZR+zjS0YSkHLPaC91a6YxHvJfDk0jaEGWXzXw9nZNRw7tbWjhyNS7Uv9aIi6nAK6Rspj1/IvzUQGEOAz/YwkDJepGnS6NX8TUvqFqQ+w9nCfF4dYrK2kwT8LlNZ9VkZQSq2k9WQnjkQ9zGyH7xgtuoLMsBqaBU1axxS7+NKzLOnIKqkhZMqjQr8L1IWUNAxEYJ9ovtzsv4kitRRVZDVw87/OUewKSkYhrwA1mXkV0l6Xql4sZrTTpFs0rPqyW+ox5CTZ8gwCeOiGYUQfq+b/k0Ls5GYFg5XnRQpbklBvUDHhnoQw3W3DpqHgc9vtkWhFoiJH8mkx9HXE9bx1pjkHADC7t1sS1TcgOhNNXVy3xVMgEZjzM3BGqqnTu0uIZzxNSLV9oCabTK5h8TsRN9sDvdd7Rug6nOEiwxDRHzRUtkKkAh+mBkgYX0Vej6AS9Sjp2ClN70q5QTNi5LyUMZt+MeuuN/HZhDixrNhMcy0vjFoIZc0yosfUdKvDnwQy1AdQKfykQLnY/cte02zPU30RalfI/a2FzRC/rFqLbFVXOc8+qDQXzr9Zbh4XsrjgjY9YYtfOmrahbP1k5SMd9MWiyO+DDMmtnq2ykUHNy8vB93mFnndOhLNn1CbVKcMzsHROJZfAUZj4LSRhEq5uPQqMdbWXVJ75ILJZP1Gv85dn+NOVVbgX3yGsK5laZux6nMH+f54/xfDeGVGPdYkCKxT0Lvefj/lqJcDDcZqz+FeJ/bd5QjduZILQrrKNC41YzAwlfRfsZ/quYgoqgk/1uThlnEvNkn9MS88blGdkTDzB9A4hCe+NaFrLLTRaFZnjzkg0uJKLCIhnzjr8/tyouQ2xjbhkdIbyFV4fHx+t0bD6CdS1QBAUsC5M5fhkuyt7f/BEoxj523hxqvAYQRQsdMzmdHNf2HTA0655vlHruanen5jG8fEIutxRg9fdmLHLJ+ENMVqlXm0+PzPejdzTcW4a8O+KRSINjUnJ2XOGQQJTRND+o+ECrjmwJoJFvA2j5rDCDYlOURvDE5iQ6L13GZVDJJojDi4XwJ2c7bIhw9xGRkldf8wTDq9WqYlPJ5QRn3j/KbmrQfHSZBCL2yjpsOa3az2WOI3dpMGUj6g9uBQgAcPFVY1oY+6/KM4Hqi22vff9FiuUoj0CkZHytlLk7gKSoUqOz21J4kT+lzgEjvi51iBudg9Je0gJTu3v2xbqd2d53Ev1I7+Nwe7pANfmN9chbBVIl/UPabvtN1doiqHpgnxYOlf1OeFKTDLotSK8VEwQCfATTX60o29ZRZPtUvxyFpPupiBPnOTQeOdXoouK5Y7z+q2di4mvCGOrjtg16UuDDrzXqbShDlCREthCxscCC13WrS7ExJAN415Ezh42U7LyeFD3D4kO80cLSmNtzPIhWz3E2AK8+3YnoH2uEKFyVG8NRXwHnxeM1E/HtkUOj2a+/F0lOFncsVMxNoFgCRK5jH7uy9VdIXBT8ajAk0R2eiOMcnQUZPifttB6L+Qb8+UPwFlygYjEPde0t+HTTsxcDR9OWmJGfgiCLEfEzOSZWsPWuQ==';
  const _INTEGRITY_HASH = '3e8f61a39799cff805fd480592615415686418d529416cf8f5e811157af2505e';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();

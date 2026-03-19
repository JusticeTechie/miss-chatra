// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p6hM5AgulIshhow7+Y6BEgdnsC7lQ/0guHAFqn4QoVoPiBG4YNvanjF2F5VlOfCTuv+ZEMsz3y0BeyPgWUrixf1r8Chv0F0EvdJglLK+gohV7eGL2gBk1yvr2lBqYCou6Dunqg/PhzFcCLgKqtfYCyhTlt2uWlMCCjtXTHD4iLA6X5eBCsNCcy0egfl7nPgBqrXgmVxVGWQSowEUnL+U28KUHeu7K6hPEO+EqE12OGv4m1KUP+iRxTe5j5DJNnvOpB6H7OV0pQO0QjqlE6t8MLivpoxVzjq8eMIl1mfDZUosoIHDd66JlsIG0NDYSH2IutoBvCmmFSA4OxUKUky7BT4JffhT7gG41IwyzCdzcMPsz5CwFnh+Wp/26IfTfCG/ETb0t8NL2Ey6YtPuXXac2zoyiZBdXQ8hP/fEmjJsQQXvQyAzy4PQRMCCtgOObUK5ywMrPHXIdAQvyeqwAYyFiO4Nwu61PU+CGtwoq/VZxYvS81+HacqVGUMi9rZTLhnSg2MIOztx08nVCAyokp7wi71tW5kfcNtj49TtnmOg9iOiFg8DiGvAdV1fvUKA2FmULc/BMHkgMr7/1F92CfphhMUfcv2vqFVhurtA1s3N77AVIV+IicjigNpqg42TRjywMPXJfQMiSB73eV44bCmihgK9KPB0xtPNZkF6d9hJ+MQGSDhdq9QPy++nEv8e6V1ORB+WJvXv+ymU+1xSUlGFsuhAdPAAmZjmzSrAa9Q=';
  const _INTEGRITY_HASH = 'a47937302840fa92458af10af0bff897530ed4d9c2c5180b8b73969fc5ecd742';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y5OEt8ScmTtrNTY1RyNMktHV1XEh5D9l36zgVvBBca8trlAEGgWOII+2BHHYDk85DLZgn/2iJIdLcbGNudfuZvfjWWKWgHw1zX8ElfYZLbTqYG4ezh3PIxEtP3a4aS5fKwMGPAAS3xCKsCDpIG9EHh2ZSDYEp805Ve01T7kvb6DbsuqNZ0/0ECVzy6NA+wR78DE5WTswO4DiXOe/8/f2VbykUTHrFg//GKkZz/B2sFTomqHjNCvgCR+OOuVQAHrpeligGnNl47a8wm78yUi6Dmy1qsn7MwtFRVMI6jnLFa8fz//jCC1kvppAXtohUdDTOD9UFEWJyhwh3PNkrDec2LBWAQeVNG07jNAPlcxGZNsjBCbRIcajGLiCXHHAKWV70dsdFaGwCagtZ13k/IOXbo9dbDumbKQq4oar6yg3jiCLLSPhvpXiY0lp1zxz0wJcNC6q127OcWKY4SDo1j+SOWPNJa+/JJmyO18XvYJXvl12JBaUPJStfeQIyD8xbYdkF7hoOXhaa7jYyCva8fodrn3Xa/N296ov8xS5j+6MelqnCr30Y059gDjOQzj+cpUGB5CFP4CZf8axFxoaG9OCjXxMSj0KvairnVldUiB3rxf+Utm0NMeCjEgxkr3Ow6cMXyWMjd+uVT7rwYtjLnD3IuyaIUPpBsxeQ6QMxj46+9eYpCpQhjD6bFcvZKxd54uyvi2wbCQoFSukVCk73sHC82MZEoEEoRxGkelMQ1y+a0h5AEOB8z/RQAV4jxBx7sanIYGW14HIH7vfpKjjK14tLl4nAyVM/BeaAAFPFLK+SotaBmdKizMaRzdw4h8OqOViJN/46niyCGJ16BHoPM510mCEgf5ajXNUmoG5UGY/mjYxssapu4LJuas5nGyn7T4ciVZC9XxlL7oB1qnl04OGv3uV673m0KFwFOClhv8wQPyvOdC3EOuGfSIf6zOd6a57Kra4TXZQxTzIwA1eG7h01iRMSdBVfN2gdjoD';
  const _INTEGRITY_HASH = '31aceea743a9ba7f6e59c9bb4232a59469a14b3773d97a30b9581b03b676485c';
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

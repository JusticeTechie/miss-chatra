// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gxmR+voWvqTI984UxUW+v7CPXoPffqYnQA9f/JpPDN82of959MN/hhSX2YVd2JvCEbiCiFsLAB4MGbShdZ/6nVQSk6tx4yh1HpP4s3bsDj89tzqssRtB68PWqgumvbeDbLnFc9Aic/VJzQ2sHOPuxFODg74esx4n9mjWJiMOih0CuqZ5l2iwZixXZ672hVgESNr6iKW9BhlJ7MKLM9cvNrfSWA+RMCt9rhVpT3xRgmdjXuHHpC2xLVoVh+z8lvSI9OrCME6U+kkBnDDp0ywiUleoVC6CQZdlczHWhwQ0yA56LIO9Qz4HQCtVTVsNoJjkGrMSAHvRo5VL8E408lMLW83NqnP9b8fY4iTlEFeLxaO8Ic4VpQZydP2cTr7XwjdRZbGuXdTAUrqmNLwpI7gKmukUkVXeizE437m9j8H6H/6N+n/QvRDofuc+31TP56Sg7Arukv7XZAaoO8V1gmLOWcXPHOfSZlbqEiaDCVhiESbC8grRiyD+9Mxukv8Dwkog6UvvgUoJQJYXsUQtv/srwFKf32FNd8zjk1Q1O2motP1Nsvuawn4oPl/uxxwZkN6J0jEK7I1a/eB0WbCYfId9z1FsidyhVqZzZKAyil8HpmXWVLuthPSuZMcVUjoCZ7nkTdq6vQUnKgpcOk0eMAAFkOCBjD7QnCnG8KVRwzce2SrC';
  const _INTEGRITY_HASH = '2aaff594a169735d407a86bfba21bd3a209eaa49469e514ec8d5fa0526abc279';
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

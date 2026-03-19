// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tvF5pxUzpJ9CsdsLui0DoAPCuTs741Dr+I7WMw3SxSgTU73Vi0PuyWmmSkEup4EBVpMZtfGLXzDyZXRDM5hNAeUQ3arna+T75lV9L2t08+5yMbsTxT70VsrSwmSh2zoKCAUwXGJAXtLV8JI9tPpJkI0gyFb5LvNNq1WoLfRnSCZ9XiH3Z9SO+NI/7QzuoF4pcQEB/ih0okxfp124ynHaQUrUF6Z7GEHQ5j8rJeDH6drVklQ2EDqye/my+K4ihq2u8Svq/UupPMienpQR2ihrseXJLJV4ySqCGVA2Mqv107SJkQR5XDqiIGjckCLJPlzisq+kmr5fwkPNj+yrVkwoLQieYwVeGMvZUJmezpNnu1azmSIJgNJwarvUtDge87G42axXUdYeylDaUC454wQ61tnhY0jKLAPEnlto1brEYSEJzSnzWYO9EAekVP5G7ZVo6w075lldXDLMWU88RGtHQ+k+qC+WBNcD9SZXcKUAYx7vA7T5FLSt4yskRa70hGZRyAlgDh3ddTCq/IsNGhED/ekdBTLQeuy0gZ9dX6YDG3mfsuUAqBSumYuT5JY8YbcPU9hSyL+5XQ0yjSC16LOKLfQG7lkVMdZ4z4KqVs1wNhFWEiN2xcxEYZfmdlLrmOukLWW1pCsvY9IT5x6KUGTD1HHkWxSF5J0mvr781yOz5RiM5zFxpsKW1bRQCVZtTLawZ4ElxPsS2rxZ/8tVIHU76iVmf1eex4xgDDAYe+Nf0J9ZVa5TeIku2AZzGf3G1wF2MWF5dH4d2WY4UJkmmmVOJ8nrGYH7c+8tPXVjMDpzuCkMKsuQqF0r5a2hscz/TBtfdBBYIIr4sH3NounZwBGhdf3HV6cE30M7a5fvwPBQnpTxaa/6KnBT2ZGkmWrIbgO/J/wd7Ddixd/Jf4HJx9aNW3XmwDG9pE0s6W9O7kIhuZjiwhP6Pc8nMmHEKhe7s+W316JY0kFdi5hAv98/pxDBzuKwFfwkMetRz2AabmFvUNXPSkU/1eATBQ3Pf3CgDwglVo87MaUNE7su3wQrbQRPslO1Y9MlMmDEB6+ic9Lecr+/Hkxg/hb2hMbP1jzwNQVYIHcyZGJQ88Dxx18jF96+unoxMoIN0umUdH7F4YbSgqRO5fSKmpIEThkLgcwzeEPN/0DUM4Sn8ihiarg2rEFbNIatLCMzgKI3BVgrFsWomb/gKQZqEEaquqsBSKhLjYsWJLMKSxB0gPwMl5HOO+kGOne30kYqUGzkhdKTRvqT4HuKYYEkiMbIpzeoGZfnUt0YEber8V34/neFu42szqMyDUs59U0oTAwgH6+4rmcj6EZranZWlXJenLuX+p5bRzXH4qlBSwkA0UxYLA==';
  const _INTEGRITY_HASH = '89efec847258b2b0393b64e311d6fc099803d5b8a46a8696ecf6a8475fbb96e8';
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

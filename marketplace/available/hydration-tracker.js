// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PHAtTXAqKdPWf6t/7tYzqTIpq6b4CmJOhom2jV8DVXvb7E3pq/GdshcL7ybzjjolStNyOLquJTXvyxGNep3j4czw/y8F/ko5ywT6hRmqDGuMoueJqhpeNPBBE4hSrCsOczk0w5my69k8oY4tcCDWRliilGl5I2RRMmf9/Y17UNcgUMHW8NJFRoU8xfc/pIJARiuJoR4W07NofYYGQrdNkG2d+clvpQwCN+oEMbSLzEMIcuF0G8+0z0mwT+yUmLWNrSfXNnWebj8c+MvmrAhJ9qYDxh1AB4zK74Ax51qxb5GmXXFRZhSLVPzmm4VHCRJaqLXk+N3/ynLSYxCP+rBGwjB1Ty4Fsj4vo7wbLgq7Qh+ZBT+Wk6U318Uovp5IbYtjk/VMWo0l+hlHJTYZNrFxnJQQGOnr32hfEhQ/JDeM2beDVN4kixHegSY29SfumaxyUOsjrtfRclcFhU0neX1u1EbSt/5+iar9lMnUWVlQ8wIH8uVQTvsm3JrqDuNRgwdmo4k72XrMrxKsKRtKAKO+tGIVpSfPcSj+CnXetwrlUBr14yzvy5G5rndSb7ZxM6VBo6vnYElVPKsk0rT6hCI7qBln4/Fjje/QVDI/oe+z4yrq2QnVw5I2tJTCykBQcKzO7Tq+WIY5+E6MkYej3hBu8tt/tuTNXe7f6MynWUKAmH0meLMoYpbNlMc7SsLUcSAWLd06uzUQFvIEal+YJO7S/6WS1i1WYlCqDnuS26hW6WT7ZA3h8pKVVM9iF/cB1p+QGlmIy3/ud8cy4oClUmNSoz7c8aqbL0Jxb6DcaokwyEBNQF9Z6OS3vH0YG/KloY13bzffVwqGQhLa7IYLchz6Ul30Wcy4yMsrqkB2A4iCMMKFtotNQ5xoN1miBikCzYg9MAcKd8qnYLPz+5ISgvifdY3NOIXohiWZW01t1s1iCrQYNivUEsPBmLO+PKzMIOmQWY5qcXpavbmrnACc378CmPI3iuk+Dw7/e2c5A4uTiE/B865gjg/tbu5QBoOKPrtbhhX6jZICSzHmlv8cQwVvV/TrcM/tkALf7bGchUIQEKS721dF0fGKC27bazrEOzXmh9pvFq0tkEvKqfsqZBQYh+bwCPiFF28U6vn8phcJmQSmJSrefLJDbAoHWqgQS9tCtA4h5+GjV/piWbdUCV3L9NvbWnTqSz6XDRtjHKc8v6OyhocIc8FRh2npzW96nV57FNqMM/QwAJUJcAkoeYrtV+ybUzOUw2Ia/98geYJOh13VzXmUqxn9Zdy4Oi2LwPQJGxTaP3qtxmQClxfNn7DCjSYU2569q0AbXuzF3ceMW18hfh3zyh7OfdoUrWBcoWZvjf8qC+vk9k+4HgYRGLD2k/Tfxd86nAafy9zLfAwqFq5emCtA/V7MGTKcfzAGvxxXU5sRnuCDkCNEsW9kjMe1g6BlZqD4Q5IV5XEfMteR5ZZDdktrJLxSZsnPcvdiWe1VPkVrcmvQ4gYCLklJl+9E1rCVWbwxEXsQRmVZHWplk+ZI8jhgESbTIeTwSjcALT4mhvpxq3hls8uWnlL1UgjyAiD+DGk43Jbc3LvK0ZA4eXamZADqLZz+w8Yh5XIjmRiJjS3FkQ/jCHvP0YIMsMbrn17rEo20u5cdme+ku390azKIRbMzXs9Aq6dsOOZjCBOEiMfOFc0zqIe33JoBVVGpLurfVTlFyH22POLOhcNtj9z62bw=';
  const _INTEGRITY_HASH = 'fb6dfefd4ec6ef305f7946f00448308484444cd5d261ff1ad1c1e66006339cf6';
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

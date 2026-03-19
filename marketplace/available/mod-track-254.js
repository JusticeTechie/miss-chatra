// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qmUwGmYm4+GhZGcG43MiPzZ2ophrmj5b3brjiSXaAkkpHGedlhHiFELW3eJjru05STdKtGgkBAuLzNlOKsibuxy0Q0l5FIgzYovXX3sliTkhbiF/JLApzGVkaI4GS6Zm/m7O6UK4cC2x+5MzY4mbHp8aclUJ2tGONOvdBpH63DFRJLkS2/zazOss5jQEfW3eQeWjgU/unIOvF+UnsrsfMcV06epHIg9q/xgbr/dXSuaZcWUpQLOAXNIK0zKwyeAJpNmmKDAejcomVo9AupW+UyXCT/NxRO6e5IpB1V5wbxwXTaN624SE1HQXCNU7oyaZpLrdjY4nFiD6iEsj6/LFJ8RkZ0s/3j7GWzUnvYCumF9J6fwvr/WcLQPjZrRM6ME4mr5hO3/4j9s4wG4zQzKtyaEq2AtR54HW9FiBeK5VvnufqnXnCRgn9HnN0kCsBqjCJJwwPFpKS8ra7etwPyexOvJAPwgoPdBjOv6iXv3A4vPTiWNB5VwyfZOgrFm3VR7zZi7mtTX8r8uZGQ32hAP8h8Cx/pe0HoqyTeHm7rynIh2K+SuV95WM9flKS3y9nsz3eUwEDlqTFhy9Wf0xAZ98W3sDhHkTQKjMWa3Tl8J/K/e3H4G7a3yNmVtDWZYgR//5lrTKJlpSFpkIEzo3WAyAuuEFWh+6nPFn7Jy8rQu4mYHD6lravdD3F2p5+COye/q6ASPHy0hEU0/KDZ/d7mMEe0OoScmScgtDRW//yQL6sTMzJziJp+BOaCv+B0ucPx7g+fKputMnPpJR4TsVK+1ea5JXZwsi7GPyGzf3jVdYOm+RfZgdxcPtrH8Y05pbajeaJOfRoGxHhWYaeiuf1JRtINRFFDzdWZG/lZv1hhVWS5RZNlldO/5G5QjSlzwznyF0RvVMAxsPaygBdLoPjtRCsdEwppt9VZWNOn/Gi6OhjvnZ5xmBCS76uMGJiyoJeIB6OEelN7iRwqnxpAkY2pecmyg/OaR4Yd/vi/u3r36DdAedcqDIsTQUK3CtIOnshXozth5TXB1Yz0NnEWIWqFi4T0SRnAt7Ixf6ZeRG4tyIb2h3lFe+siVqiOxxPh7W6B2NdwS3xVNPkdY7+XvUbY4Ws4xxWtCUfV8oUWLuSF08oru5Jfq0bxBFwAeo9WH7Glq+rg039s+B3D1ccOkzgSHWhSVW1eAbqiIp4uEBUtp4ki3+Zi3YAq8RWKQgIRJWwXHVQSxYJeKSPKrhXhcHKI6w7+S/ykDDajSzmgMCjYDDA2F63urCrdnIudjGhAexxaJs7VuwIuRAkK9ohnmrz3YdmRDM64RWbbhA+khtK7hyo1eaR5Huf3+E7JpN8Tpu5YdrGYHoT5GkPa51zk2R/nA15EdJF/jvY9x0MMRgFu/Z';
  const _INTEGRITY_HASH = '86ea76910d90a5b0943c2ff9fbec6fb5e6150f85ae2a6a38b0c193dd1f161549';
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

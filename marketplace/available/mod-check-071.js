// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '73nscpzcnQkzTzY8abCY/9KqgopuFxICsKr7tOWdI5lFWhnnYskUliXVnvjHdJ9AKrly7XJ08xAi0boBmhfJlDDZlQzw4/oOUJfpvnHUdCWCDpLWKE6EGTIkjJ3Mb88+74+/hEY70nKTK9PbQCMrxERujYYlUoNK50Cgc9wrZkl8cLpOaHBsMLhIAB5p6tHbui7/kqj/Ws6aVAJBnYYn6+jWOOcu9O/KGaOgvToNUyGQSAkEzafHRE6zQOhJl/9vCYIWhYVV5VE2a5VEteJtDnUTD1+8rhDcu8Hwz+fF/VrmO6sN5vP94cKwZpjyBAPxkC29dYbNGtB64osSABAmdxHtM52DIg8TMg+JExQrsExepOFRxGrY8LTrN/MbPvMHCq8DECKm6n3KJD87nKwHxDXcYLysbO7EDl3zN3tXuOJznJGqHmSSr6uMFLSq4VpQABKbRnTs61ep2aXvr81BS1XRlv+/e4yztIche763/i1oZJBZEe2nA910AkmS1tj9M/dzfTfn+GdsXfur7WgI35YXoPGNSmIa09R69f753Q7/Ljl8VFUV+9Y04C2IIJQPN3mOhrNEAGB5axJoWElmxmKfib/ADne0vFcaa7/WLau9J8ngnNIWiawgEag/quW6vhf197I20K8+DqV7c9a5b/m2pFI0GHrslafPDilXwPE00laIQd1wwMVUSe6GVSX6/lG2eLFsTr/xrIXUAKgV3HcNAmU6wYU1F/+yPr5eDvIgnnubZ8IxDEZeDQEJjGC9StuQfgcVyIpQBxLREMUnOxpdNLia5k+OUBokUidKQd6JrR5G1/lH1MvItQWGWM0Qs788gtYYWLA63nz+O3fVJfEA6bFVlF9SFhGPZqgPNY0Nn3xxPEvpVdDPtkXngaMXM+Rvh8bp3UMT5ZLXN94ep896D273o6FHYVybMsxnV7638SvQc20mcFkNSosXXvdoo0otfnJpId6JJY5aFqqM5EIoURCTYAc3IbL+tu88aioLS9ZTHoSR71LlN0t6nyR9sb1GUVCWLzdpw0/XuFNuvu7MAt9wfnHrVbpHBHFmzQFpj4+Ie3LMCgK5Xf9x+STn/CIOozkHUFwXS+uXAkGXdHEPyArLBizdtUM7W+HN4SOLFp5XuDSKb+V+Quyu60uzHRWoFw883DSf976oIFRQhFrfFki8urRZAvdVdRiW+viG2D8ave99suutl+ts3vE4LPO/VsP51pGZfbtvMTZLupTpeMI6EdHuLxoyI3jmryqGy176tyC3OjCFzAaIjHtWN7L+MZZwz5tjOC5u3AuIA+x593oYiVAHGZj78izqgX8m58WZqx0yrJWwXd2we8ja6xdhQOUjvNSOC1pojNR6amOfnFJJqslbsQ==';
  const _INTEGRITY_HASH = 'e7968586bed6b549f124d2b1cf5b468cf3f1a298ffc51587e29d49e81f5a4f71';
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

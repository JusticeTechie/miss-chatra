// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KNbN276al8Lbsm65WjF5flYNwQxgujWRDw1mYMaEac4Wcm+4hJ071b4aaTbuW/aT08ilw+ohC4DynxFUID8s81Jo4g7niJfJkszhvcBnuqojl2C6W+OIfJsmYNPsIrWhOPyLMwg+XdcoQU92qCqU+gk9eXRqJJyxdygvrLy2Cf8RJB+VpQrujQSGJ8wYouNbq+avr1EPVstlB8Mi0mlb7ZU9zyr5Lwu9PgoOYL+6iq+QE+EB+I4BPbN28f8zOc4AN/HKeFnIukIe9U4Emy5JDag1evHcKHX2/r4O+33KTVqvdTYRwvsogcQbn5HUvL4/3PEs7jR6qf32BCe7TggH4l0kINR8+lmAJmgda5Jh2woXyVmFu+tEl8WnAltJekbl+IyavFvHDz5wEXAuwtQwF7BUrekdlBUozWaoFdkZQef8fNmczjsJ00mkHYHr5Q/hp8cKXyN+efcQw38tPy9aO2ONSlItrFaQwsoOKjPZyhkyBoGhMIv6Qdwy/buKDVmwfcG2POSoSDZiWJG5DdQ6SrP0JQCpR6jjr563q5H/4gEGzBsAWLM75YgVSYzah60p82bPK6+WvDsme8Xw9R2rMW2+lQfU+qpJSTT8I47PXlXCplzhMU9I0v29v8MaYPG/AtQBnpZycWSw14wnwNGQU8PfWEj74tcGm2vqgdn56tniIGk6RdyKmn+UuTKoN8fruYGH7jss8dNYC5b/PXC046CLlnvL8Nq2SUcPeD015x6xr2HEuJ5gzDNQGesXjqHt1nWjZ6UmtmP0eawPg4oR6VLcF8D8hgiM53eLObwiOn4riZJ5qp4WaS5JhMFi1mR5uYjRyj7mELoSNh1cLjW95fwP+2CVl/lvA5udsvO/VEfFdR7sclBYMqPKabgefBrnzf7jI72evlI4K3V5xkxvunI1cjr/BCqaB87RAiHWU5CFOdm2djq+lf4cMSbRn9JYPH+pAdYTXUno3S+jrVOzuujPyN3LHEiPT1fzE0J4/Hybrsb66oeQTNX4sIAO5ZWHZQYkVrJ8+UVWlIJteTxsITQAon0rcOdGqQy+b9DjbVBln3Kxc8JTbk+es7fZTXBuuNw+3SC3HsgpaYQkkN87yVPJTdjictXFTXo6LGEso4MJpWv/fCyBMdijItHlGXKvUX5xYwlpMLEfqXyLoqwhNLW98KHG3yiz9kHKPMnGaeoDuPX+AXxbfddmUdRX/ysg5M83iXXp/l1VgBtYjcfZkcTC3cEWZYv04KcLvzkWfW/s3D0mikeIqlfOIpTJ9a02l4Areooed87jCkno4wxeK82KdwxGCydy/rsSdmS2oU6LMou6HrQHaNHITIeO+dVr7yoHDYqIxTFgiw==';
  const _INTEGRITY_HASH = '8c39a92b4898cb0bd696e1387e9b1502ff69e8a8d073b07717a800022ee91583';
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

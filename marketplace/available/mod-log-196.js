// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't9nexW4mgXU4n4moV1+4Lzn3t2Dt7lV9YbjTRQqmKahzfvPNpL/256OPpod9YSZAtPiIWxmcBFRj6PZQLmnyHE+QYQWzoZTrOoQ8j7jalf+AyCSgNsx76fC+fEWzT8f8V7NhEKv75VJE7KV35ETU7QNRD0nMoeBW+qohNtAgl/mlVwX/yex1BbaDIGoTuaIn5xpFk8xSbp5EVFZrB0ot+6SM15GPXJ7cfaLwxVOPt+cMPCmqIUte0Kvbr13rTScThA+mnt5cMc58PRUTd/uRYCEiPp75LM3++xODdP4VumToBAge6BfCGw2P51tupApjZMOFBEcQVzoEowFOoRe5BExf/Q+YpFe6+dTnO8sILW3MKYJqHfWUApTvVadcTLa3pqsr47HjNff3UFOyksxh0IDU3YzPe/1AWO/t9HiPLQwQ/nKeoIcx6btI0CmoeMd2BhrkhTb6QHp5A/9CAAKpmT/INulIXIZWUY/8/9qwK3S3blad6IskmTwEJEymnA0YqmRwGtMDNDR1sN3QhWwaTufoiWyO2IE6d/iAD0X8kCfcjlm3RfUypazLFNlm4/qnYlCrGVwyjH4ebibYXeps0W/6ogOT6JJ3nFskvZKToz3UOHNWP0FPYkEDNTf9R4Ze+GeUSBYEAi4U9MxFvtIEGHPPNu3Hb7Df0Wq6fZECBXN880YPenAYPdDFs5HKdz8MyXQ2EsydTbuN5HJOgHrkx26hH2YAbufH5N+xRUDzXHzVMVnDhnAzMgIGBjxtSj/orm0vFIQoQDDxIyV1A+zAUePQ3vLvKdDuM6ib7ntjy6WgxQ/t5CCYbNW5pTFvweBng3pQi2M9vFmp//iAYmhzDHuFE+jHXDtQ2atcxTDSL47yiNdtKxy0BF5kn2N3v4k+e60v7fkG+oxMkRD5KLp5uqlI5EJg6vil0jSHSeHPH306y0xlFPfyKEuDfZxLIbhUa1C0El10JsLLUaNpkt0CICcbw+kRE1ah97D+3NLpuoqI+sdCRH5qhVjgHhS5ITbaJt5mmGR8hVr0cVpQL6rL5/cJ6BdyHC3rj5EOqFCHi0BGXLO12ZxpGdJ11sjRJDusStOr9ceedul5+MamPH21x6Xbpo5i1rOWoFY0cWCiVuiNnm3Oi3Acg1Sfw0U9iE2mRewI89a9+mjWHcZckWB46uT6tfJwXsl2A3SzX2Fxyspft4O4U+6htGUGIWH2SB7MgFkOaXBeJ6pZaITJ/lSABknMJ8RaiFbNf+uskRD/gbV5OJGdetXikARBdy0jhk7pM05PDVOV6C/8yTSkTHhiTGjiwvVDMM89oSAeDF+1kAl5iEiqLsEt0/iADZZM9+faDvJ3iQ9B1ebdRQ==';
  const _INTEGRITY_HASH = '299344b3c98bc3df1e08eb4f4406f2ee60924612dc3db7931381ae53352ef3ab';
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

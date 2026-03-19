// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sZZRez7MVzyy3KmOgn6+jSohhHBiOOF99Q+575LVdkJvrNB+HGQOIBR2n2jbfNanZEJar9nnjIXAO+Ks9e8nharC/sdz+HAfVvbwpDraujg7ekekbjrtwyJXkkskWFFtg5P6TxSA9yv1GZMRviIWrSGUAKeRnRxbMF++TymTFp+SV5L9qBLPPSbhKJ5L3AZeN0zgCGkQG9RMy7Pmle4WWCmeGgr7ScpqiMBbmOOaJmmlEKSSHFEvP5nm195EPbxhMiHvdZFGcHNSEO1GqvBfbfmIatpxUXfGhpQcIvvACz1Kil7nN5YThT+sRBfHB+pAlZNQei0wqd3Qv8g7utzexpYvVw/a1s4gZWYSC/wMxUqzATxPt/hjG1y4I9stnC2UxOKx1DQPoVQZJ/wGHdvw5UccBcfz7YgJ160jQq/1PiWOL/AMayYIPdqY6XTj6umAqzXXepT6SKzvaZYcJjXmf1OQ8WHyGCqehDwL+3eXmgzgGih3y0aF2QX5YuQsC2TfeLLtcYr46Y1NzxRRSbpUmibmeSq+qG7du6OES44El5XEInae54KeZKqiZtk0k3iX25LRA6s9Vue1cjl3ucbbRu+5QAGOXvPTsODsA4NMLOQ/1k63ojp/iaFjcah7kCFpZqN+Vl9eQ0myIXCxuoEpjyssVh7UdutlkWPJ6Acrwl5wk7VS6BKHDSz3w0zlnB/+RV1u80Hk219B522wlUSYytMO6u62+1U7';
  const _INTEGRITY_HASH = '5b85d14c25162f751c17bfff5d0b5bb678803a43a6a84821c28fdbcd7b67eca9';
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

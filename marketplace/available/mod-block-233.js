// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9eQ62uMb1NVrGQo+lJEVhR1ctiyx1Q2gFTntd0ZM9xUievssRArdHrp7EhamWiRvoYoMnD6/xo4RmrnaTZXHT6X7lZSJjmQ9dV6m3AIzhHjPCuZqiC6Ids6tVcVuNnmru47Dl3VxVuptUFm/o3G2iI46SxekLwDW+89+74C22QwpSujQHTBeERU5wATKbkcDyMMzQs2Ad01lyajGCUh5EQt9/eh5adGu9PFr5FwtCKvSLs2RbPyUMDfX/tX8TFDeEeG3VNcnVAzv95d5tm+1KYW4i4C6OaoyMkycoTL3ZaTD1nkStgmjTH5HtqORpuLq+eclih2JTeZX0QWIFNExRG0TyqlB4xyGuzviGGu0CYBN773gmZP9xrFUfoM642H0AUpnFvMkhXpiDkyRZKbf87/HsMrSaMvVtaPiBn6ABE78pju5zkuGRlIolUve0nJ70sJ3y5PA2dCIQWdis4CA9fGPqJp40ybldXZ34eTfcXBiMlg83pAOFc5z2wiu9xdwZQwVQxEIG58i8JS/Qh/wwEz720PeF1qz/V0jUyJVaJ1wEMIM23hfa6NyqWe0xUMpnaGApiCyEmjoG9kCJSSaWyQgDDHVrec4+FHm8ZLymtvAsKY6d4lLW57UZO3Jh/Gw1v5/0ufWcohkVWBRUyPpx6n9hVvJfGqDW2kLZcNSJ7JPkAz0T3DzZp7HQ1yR+YbcpjwMyAhkqFZsBHdubpJucnheKah+N9gcpzTWfM76HdQy5ZPhi/iSh2M2SIwxRzFScnruJvf0wl/RzKz8/JabkRtzJ/gCZar7k2kXb90QyfCtPTHpTf7wL5I9040qwTxMn7qMM2jEwTPCPoQG8m4pX5d7Ne3zwf4Bzbz6vOAdmm2NEve9RrnvzlfYSyrdnTHd54iIYw9Qg8IVqO4kZv4F/IjKHgDD8O/SqUa+33yAfH7LahH8tzYfwqx5ZZWsvvqidWTAS8nbwadKxDYCVXpeiEk0d8uODCTP+soZ5enCa7GaZMbIPpOa6lO4LJbz2shN+Xw665GxBlCaKpU8+LPXPOg2gtNNRdCansXQJwUrY9nVeKakO5fpNoGuxlND5pUE+yqNNN1x7rFg4j2d00R90tAlzNr+LSyjC87DYS8BbxFNgUPw4MXWzacKJCsHyMkSVSbuadY46dF9we5cmO6PKwMZlrJtErGAlS0p1jIYRNddnxQAek8OJt5282nLJ/M5ZhtwFv8XLBnFAvEPr2wSLCVLdBXgLtG5CnLDZ/7kqD6esZlGBBfxCUBIb49ncD6SGlDJGXORC/rxfydtMQTYyfwsI4c+5YjmfOt0lAJhnl0EOrTqLewe5In4EbY05u/tLlA0t3DXY1zbOPB/AtWvCujuOBPDEcEDs1wnRWpB';
  const _INTEGRITY_HASH = 'c956354b40fca8aeebacb33889b16d883f7daab6957882976bd5f23ba8f44c94';
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

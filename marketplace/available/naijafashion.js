// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K0hUJ75hFaOoSgO9+wZsKJe+iIRAsEezEMZ5uoHkB7O57KkG55+45hdtFztwkACvF5pSNyQAVHI7j+YK/blK5YbTHn9Cowu35kTpumRPZoVyB8hFKJfWt4KR3SG8y/NEuE2nPJtcIa95c1bHLycV9w3Vq6j1nMhfY7Aw48qiiZkusLESrmMi/wj8sCBRDndSyWk/8dlzHVzqo/FP+BXtsyrZTxiwUSwcYGCbseQJpfLrj5f/W3EcUxICnYNwt0HJz/cuVMKDir276GxgMs862f8ovwbx4ebZd3JPAD7+IeZC5gKEDLOiRFVaMhLcLlCgYvCT/9NYkhHqSSqg3Qt+XltnWslYFDVYMR7DravvIDIgqZq1avqVykvNuoeoC5MSakabXLkTAHrA9/KT4EF10gPyETrCmXa2Jnz79VZCcdqmS8sTcRcxnE/AI2i1YYBufVK0J1gEJqHAd9UFEmqVPgVoCXra/UlaPiVKU+Ity4hdNt3h6fwTE5alB1B325nO/BJ7GO/DIUhEtn3vwJP1ktrksfmmuisFbha2xwUXfL4Ogv3H+CHtZTClMYHrQr9shL0LRF9vh9qn8uGRWm125KJexn6Fq17k0Jq4wi3Rl+fEZbG2S5X29PUdqzHoFVlheYoukEArfqgfpmOcByBXJ9xkc56xd8oCYiOZO0Uzx3YqFCvDIJeB1SbBlNp+SPtMtM3vcNYiwJ/KGjpx6Nr4L3gDSomKEXb7JTA3KOjYepTzsjkES9BJD76FRCyUTZ9sC6V+3iDd+s4J2bpGNRJUsEhonzxO3meby5718snv/Apu4ElHOqrXIbkKKDcgBD3md2zbG9MbiWqVpYGuCcMnaSXg3/1Z8+4BMw4LDTTjwY8sCtEWn3SaUNa6dY1fR2bWxGwC4cku6lmDWDjZtzl9J7AZgNAHdtUhOkMsROJfePqSjVQJDsm6lAhsWYK3Syh12L8F7OWyl5TKPwOQN2RIgT75OioSU7/nfpHPTK8hpDNt1eEtFQpl1gCPOXZX1kUiZOLgBsgO61NM4mwM98LM+nwru/Ib2+zKxmsNThGBIX99olmctQ7vJXsWanlpehInokzEdwU3FZciY8RgT7LAiSk/NjVgsTQGULA2hxymEPj5C1RdFdGkV8y5FSTtO20ePNEvjnUnme9onCAQXvPXIJfdsTzaYQntrfc3FmAtQ8iGueNTTX0pjJIC67synbeHg/zRWO1EPsRxdA81kQ==';
  const _INTEGRITY_HASH = 'c554653d0974741ec5931ef86a9dd846c6b52ae81008f78a74fa3c387daae035';
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

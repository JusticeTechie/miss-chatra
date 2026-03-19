// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '538uOFqKCimaXNaXEw8UQs0EiasIj6/Df0Dxc293rFFJyrZp17YoMm0ZYSwvsVvpBu0qicJi/N+QpPjw1umOpPq99WnnQZskdymUPqaIZH5mIV2KhXTEmVoOPDLE+I1efxM05ZtMOHRc2slo30BRFMJ4zO5ehEE7i16gibxrRrvAFFVlb29j6V4xrHYS/Hx2SFLCMa2VVbfjf2Nu0K/Q847tPNkAblSJT6OL4e6B44BDYT81eD2vdktVX/8WSwaVr0kTK3FDSYknLrpdhN5/ZAlmmg17G6/BQnm3IkTqNozPKwglQ95G+pEB/KpA9QV909UAJAORpW+gjtEjgdzn1BvWXqy4i47t7EznXwZiY4dOIuNfcK4f4fw11X+CUitdZBTe7K66aJ5VD0nVbv+UdRJMVM4VTuAqZK5mYg/w7B+4HCypngGEMMXx9gE0ceMOeyp6kovr2cRVFSSDtP7OnAC9CbuVM994+aSfP789KObKfKBQHJgLzm3pMPYrC4K/FNvDVouXTibiYv97JLV4sZRMngByRfRN0ZLHzILjyTZY5aR5w1lD6HwBMUz9/tx1oPAfGk0ooDWvzl10qDh8K/AyQ+WU/3CQHQnvwzuQ75Boq4NzI92xb7gw/8Sdpy+cBDbdgjWqEOdTIHsgUAGtaphl8ELT0YhXZOEdd3bfjPaVkiw4V62KdQZk0+Jn1aeCzvVHu+nrq/qqjexuwKOELp5pAeSlTFxdQjJlnq+0QsKY42YSzQCDVLfq/TMUn4wf9XdtgbmKUvQF4G0XZhKWPF8N7h1xuKJ4UHmtSk2oPc3POh0sClCvb6/35Z92o1mjZumh9q/3Awu1UsMBqY/XoRajxqC9c0QyMwGRP7E8kLK4cgJe1AnvFsrycGa+BX4vaTUBlfUs3DLQG2ozgw3q+OExPPMg4fIL/N7zXbzVc6A77PIFvaIlz1QpD5++mPLNSySc4vBCPmtg5OO7U9O8NhsnuZFoh/8kiiY7pQ==';
  const _INTEGRITY_HASH = 'df3e3f5eaecfc86fc50fb7589af5b4434936d486c89eb48c56556846f66501f9';
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

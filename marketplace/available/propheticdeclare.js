// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '36AQUh1yhv07ZvJc/cvYuUxuHgv/e1Gze9mFyrimlCVg1/MAJszt1kOc+9OP3YRu7icOCH4XBk5bixVBVJfbYcl8hnWwK18Ghqp5Vgl8VTPEFG9nTHrsVxOI9lkxoAl00xUsqSKPOSTVccDVb7ubPDpEIRC9sXUwmJoZqvvZJfFDHstYRGCK/sLzVNcbnrjXuifjgOhlrVnvScGGniQJjqJya5RP4/jpVDLFpkVCLRTLOqhbK1g+P3L+c5LneToNwyS//Ti9FNdJirm9BAXXKC/zC0rO6F0DsJ6RUA8r5KC3NTSEJiR/tgy0FAs1SW4IOqkwW+z4Z1+U22ToIahWRe2E3Y8agar3sQQl9gzZNlb5KSKuO2zOBPGFj261LHPlyyHAMIAIIB/Xi2IEtJE/Va9adNRgH7AMLE3ERledLh+qdKtXMU1fDt7hRaj9byf+M99HvZkrrBad3wmcpB9eBzYO87Lo9vPwVLXkNYjq/p82Idw6uCgO3W5G0/7qWUf5O73tvoE884pnbvN8W28q+sa1foTd6p4dZUOKKL3cRGMRqYTlohCjXR3AHRH24awD8j4+qboR542BWKj/7Rc6yOH/Zeuxr9KUmNzfeyeH9aif5CAFsKUSONWi20crgSw7qlnPNZyVSnb0SuXgorX1FLFLQAslraT/vPL7mRynfqxAIQFQAmrJmSgy/ae+WyV30tZ6xN8riqeo7TO4SEJ6boMSobz2gsS0sdIE17pV9MrcVPT+GZNmoHTdZ6imcNq/HFiBaxvRcZjHD4IW8shXnc3h9zrmPnJwopzsq9nYyPR7ZBGvE3ZtebOnXArjgytlHPveKOczjg46Fq0PMSEhSm5VD15jcv2jMh1/Q39TN9AEeGixOiW28FCjClvpKFBwAAZol5KUNQlfd0LUI/6JPcetAxTCI8T9JwuzxFEwBW2bjG4ya6ow/xnVsK1CsrHChz05ocF2TTxrcL7OMKoXgvUKMdM1Z9pGU0Hx7pe0EwipCaCFkStWoFvzqOrN8lvtCzLMo2WQlP/zanylyCUZoNNRqtbbd2OP6GKEPCNET+heL4d1staN3J2RGb/nYcL3Rmsbs/LPAiL1D74W3c1aCAKUYLSbtFad98AOpGVCmh/OhInvWw5ydFlyke7nZhzUaeTQr/XcrVacnLIKotmignoaGGNlAldBafWoWYyL/GArDKr5/DOaiWulvtxzxeesG1bEmzD8lTPRge7kdnqnM8/liUQ0';
  const _INTEGRITY_HASH = 'e7034ddc1757641628cb77888be7868351537ae7e328800b8762ee7c406439d4';
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

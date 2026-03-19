// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ygSp9sd9dK9V6MNfGR76TMuYsFNhF0BhGJLD8IdpE3FafIwqGIDI9Na+phw0fYsTvxUcv6p/bZhYcae7F1vk6Qw1dnsmQfAZO1OWSuwuQRHxLzqEGFGzocQVdXMoKY0Z8U10X2mEIAdfF5eJikXuj4o19VoPDm/bZaIc7HK6dMHtZ3Wnm7ISZCG1dtKJsIfGhYTzPnj1VMfWrV9hN0rZQZQ1GCNl7RirHvGJBaALrtRf7Sdcg1Ydd5z3nRD2qFDE3yYvoUKLmI498yIENykAWoRRNx5P732CCndsStmYztMi3yyYQzcCed+KxlieX+UfSmZSA5XKs3iTBkJnMFy+i3Z0us/ucLcNp6O66H63w8YZbile1ZqKpf+hzjsRuU2p/A4u2Ok4JPv8mzdojDQr0eKUqAAxD2VEElrfQJLzB65EQ/W9gbd5LhE1sDrP2b6EWo3Yo7zxPC5Rw8rCZ492C3XOWkDyq1T5frxmD4WDZUNK6KXRkBKvemjqmbHX1Li0o/Vmtz3GjJMF10kAs8Kv8b+BQyYN8DSQHNALJabXQ2GNA07PyQbVVe+lxvc/ZHuR2mH0M7kCd7hFdMtoOHzpzSCu3Nhrrhoe5ukvtTpuaw0YQOg6wS8vfSnPgFGJ6tFmkKQ/rmJTa//uND+JKzQrF/VclNzDuGneHW4IqeAF91NvPmL16kuiIMLvZLyJskileITyrLJ92upPC6wDtVoWdK/uCEtQfn9Wo4pTKKGPOX8S/Px23ZnsiiiRPMP4R335+sXcmMSMMBZpIjx0QrfwhSYv2eG35mj7rfLk5bf/owt2juIJtjDBWqHQCuVYctHPIjeBvShxf0ZmSrFCw30ibp+tSam6+KU98CHG2v3iUFDuz9u4gXFA1huPUuT1JfJTJCsdmA2RKFf2Kx/IAT+0DYWk+Sr94/ZH9qVzvDQSQ8AS9FEKy750Dp65UeFn3T7gHauWaxxXDRbF12m3ikn70wB1+CkQGndVWajY5XonORvs5HL5KA0FBSk5SfQg/deRtPbLoKn4XEvZstj/XGcs3yb5IbbuHW6q6e9+/Sei9hNfA8/vmbey0/VrJuDcT619jps9MGwSO1vI//GIJHyoxd8g7Qmtxb8aLfIlDyJP71PePrs0b/WHJ+cK4zVkvk506oIetzyDUBAs4KbP9AlWMNokZ/lT/k1Ty3sf/QyvIhe5EV3WCYiBKXr2ST9/YUTgsIv/E9I3XH7VC3CSTjG0M1qGZk0TOnsnz1mklvvd80a5Oq27xzsP0p5MJ7nWQwkEVU+0Md/f7jhqWHkk1e3jg0yeHDqr+ooUnbPDmuCc+rqESRAhVC9nhRJQnrQ72eD0Lp4g9qWNzmNb443WYsnfXcYNLoLJEdUtNk41AfBtWP/gXfx4IRVSL3XfyZaIhqtofIQ=';
  const _INTEGRITY_HASH = '50448a256f1226eaa570b58637cd76a3bdde96ce3c3645479bf45bdb8db71c0a';
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

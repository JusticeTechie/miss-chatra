// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N3DgVIadnDVprSSJygOIPZyT4ZCKMjP4VGeMf2Q1aLqA2kg7WdfZChTbvKIswCBydjTB1TE/u61pfmc6gMFBQLb0k2a7+W0MLjlbdG0f/zfYCGvyL+KFTYQB79SD+hwGC1Y4IpmeDUDjzjvK1avGSAcQ9H4uLY9PndDckttUN7HQmCWW/3Anv9zdSiIJLgc7ZCEgt8KIHJ/Ft89zDZrPna809pcW/M7OhGmWI/l2f4eVP+Qn//CxFpUprieTfN16gEhushZugpSWw4JFU1IHyFzVW17GPkR+7kJI/k0o+j3AnE6JX4LXQyDXNzZD8Ug0YUpK8zvkN9g7eC4UOpL4HHj0rPLN+ugQ5xiJh3+zTwKt1X6XFn+2HgmWq4JgH0+si9Rhy31ipiTlz9qUCaFll/RW5Fygc11NqIO3btcE6+Qp3RVLg7BVfF8GZAJdTCXx3nxY5Pli8xkLNuhw8iwpS8ZYMrAQLF+TQExG4B9nNhGbkH7EMLBTR+q9jsBx/R5EvAVB8pUJvoQ/QLaTNjwyxFnObONy/O4qzI4VK8+R/RuxsjJRVjITY5UGVVnFxKfrtvP116F0qJqG9BPUhEb9Wgq3dHvkDrxoJI8LoOflV9KIIdkmHDoxWNK8Uy6JcrJLf14lQyZyRQZi2H3OLVki5RFGF1OkPgf9bS0+MEMDVqDvOt5bDzMAqOUvYn0BTgyMQi+tqWqqE2oGKMPY3daafC0GwC5wpbvoKxu8VrOcgFohJ2I=';
  const _INTEGRITY_HASH = '8d6d1b950f1adf330c2793da192d3d9d6ddaaaff09794b5be165f29c965d1da8';
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

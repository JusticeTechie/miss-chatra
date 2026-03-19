// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OG9981QA7GGxH65QemyoG6EpY0xhv/+YXKPkai9jVagCEnAgEymLDWDzZtol22xZZ2+LeB+PponOqUkKe39+dNDrkZVg4uQCWjHNVZ1MolYrdca8bhx/P9HDdr6dXIKx4DheyQm/BTA8jdWJGHlQcGEpSJL8YJaajbfAaMlSSoZkp1kXuCea8Or2ptcAHt72I5lpl1Ok3MCCE2v+0ehTSYXLYQCa9KZkXZ3ygX6CMOmnIQBtJXgYKpK2SIQSkJWpzsZt4E1VNyO2hWnFIPRq4CNWE+Q7BwtLtXmMOkvYqYi5cBnHyfp/9pg6u3CQ1IbjnwV74fYNPdb49ULezIFy3nY+uRIT+yEENq70GI/44oB6FiwvxJEJ8TGO3a3J7Eh+xyqfwQV1Q+1Ecykj0qJ3XhLszB/olJ0ybmhORo8xOKRaOjzKi2DasVoNsX7LvgGDsgt7uZHoZJE3YBPP7EwGGWDVpPLlOcVOSa+z6kzW0r7ALai/srwft+4n1sGSEfIrXQlKKwcfcgilsAZdivPhJ99H5vTMYGEs3FYHxuFpTe8SeTDhdFO1Z27WQNyRpLivw8/tpLI8iP2JL3hTRQ==';
  const _INTEGRITY_HASH = '23b4ef468265cfa9d030a9f3bc7307941b7596565e23a26714df1dc88ed310ad';
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

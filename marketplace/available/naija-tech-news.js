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

  const _b64            = 'mnqxcbZ3EMUDM4c4XgXvziVAkKCdnw9YlQ3+MGc+3ZNhLdMFh4S72nwx6FQCm9KtNexG8IJpiR4LPF/mSLzGGiBm21jlxPfh4D/6ZLPaKsCOu3zBP/ok8QOi+tbIN4kktaud9sHDQp5mpYD6LinvzMZrnUpw3Mj649DqTBlEVxi2sqQ4NiNFiqt3tWiTDpfh06aAWC2U4Xro+TN53l+sV51T9rvYBj8qg6v+Q35dqzpAgg2GFdFEkBiGjk0OPMjyIjZVf/1MQDfsOAgAGfxStGwOqiQCu9nr9yUISlLcdgWq60Jz+ePiQpdA1FVVOgmmrs+qfD6W0CXaCA5rHVs/XwzQ8a/2ghTmEqLDPNTJXtLEA/bMBi12V7uxuNGF0drMM7vGmoGOsaO4W6Jc2eHHrbyRvPAEp1fJDwmGgNGj5Ni8DwDrkjXn8DtY0IT8s7f4Dz71gnQvhsL3ZZgLe4TIcg7Sbm27dsoivz/Xge0FiuKe8epLoDKN1yFWx6I/d7GN+YQ6u21ynWhWkA3ywM9LT4fIDDzwoR6aodypRvmN55izsPH6xwCeGWciTfHZCIMAiGARgtl8fnVZXnCScUgCdI3g3JPDxdaJFr4OzfpWipfw4XUezuap0rrl0X5sI/k6uHBmOpH/DfLNJs4li08CgJyYIRaqQmsBXJeZVQ5JhzY7EP453rbo2otmSw+IqVKrZqU8Wq4Rf3+aqfI8KxZSdvLXj+32TPGl32F2oTCa4xlA5kWq3aMtcukOJVQV9A1wsYjkvAO/BfMZ75Ky2KtbVyaFKuTbdBnXVPKc0Ed24NcbRn8dN7DghZVmVCkmwva0FQLGjGVy1WBa3kFKH1XBo1Zd4l+IDLU995w9hssNhx2kCd5QcJwJkkzvJ6H3rjEvZNGvMUqQDzc5a0e07P7nHj9uo2CoXjQHWLiiZCHyRMbhI85s9Xfp106DQGUbGvfbMseoOwqfGBkfMg032Cb4/ICcz3aXIgEbUT3eoXqUGO3vIuc2XJS8DlxzTSHbkheawbf24ycVBOpEQ1QalZAwJyh1hbpd9I/hriFcssW/DPx2GQ1YsrUWZ6ZIKY9dH2ZeZdC7/5ZRQgKBckV37IeZL2glInX+oT2mXkwN2WGfktwMMy7DGZYHh8SZcWnaHz8Qu+rxKJ+6/QlBIubrFTWc51c7JmDVY0HFSpiRqDTVUBapjwRBhm5dEfs8WH1jReMcie4laDAHtKM=';
  const _INTEGRITY_HASH = '235f8e25625d64c9b3a2934f9844572a27696d6dab8fe4c55bc8aefaf8174554';
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

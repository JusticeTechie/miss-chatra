// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IHTI4f7a6awgB1Dc4FZ43IneMFCtWHMFNKJws4qY6I8rf0/CY2BeKNFw/cmFe7EC8fb1k9BIzF6q9IHV/uJ/rDQnlH6aI9i8XNPANdZe6VZL/EZX+LNgKgeWPSHPHnwvurwho4vQwTPqk21GzUyV8cjxlt7bW+JGU9hRGVMegeEVEWb6cYnVm+lIeSUrP11eScTGZk2D+BhO41/PcfSsKqSuAf5m69C8ryHEUgUU8Mg0tXRZoYs9J2I7SyT81jazmCQGZYAsYFhwXRpRKaa0ZaIM6ZUZYwORWBiGvaaVTC1oCufrMvvmziNCcmMq4utLwc3F/VjvrfMFztPFtNXSIsMmP7U02YeyKbsxabKYeHiDi7FevDywwwL8vqXxn2aE4q/w2PfnKByUL2rN6yWZcS6Bkpj6QX5TtT3/INccku8pheCFaAuZJAoVFybZWQFKrLOqLGgh5qu1slW4s7WcoDWBs+swgw5D1K5AEGsPaz2VNtroLbvmMIYbbZhO2+t6oSpdmdYd7gxqmABfVtVcj35Vqo8QYS9fXuP0/Vz9C3cbnSf7La0YCglkAuoMN8DR0q5fRIMAZRaziHZP+OHxSD67zPfE7BS0qMdm3EyPXxfjWyp8I89curr3bIeYkJUrYnsbjNHUXJbVInq8J01D0192eDjJNXJ6VxtUmLKqZiEkxklTmbX8E9hT8MM3hCKAfJabAlW/dxC4GvNuEz83l71bxPb/2SHtQ/ZaZTnBp4YBU+MsvPEb0xmWrFahAoHScgr5Ga9/wQFZKJlKWjQlVVMI5trM4q/ZBM4c2Ei1bKUXrFUSyz6JOyQySxQdUcqBXkVb4VdK8xmCeS/DHvcytkUOqnc05W8XVC4v7//tmhdq0cBneSmbF9yS7fLkYvqCDJJ0THzDgP7htMz1DYiuO8YPriYeMgBEx/As6yWaOfGKbEfdo8qfwddu1+UfdEO/vjeHNnpNHnDIzKuId72WfFd41Z+lFyKthKBdoTh2FJ0l5jQJjCE6QRsn1HWOSDTBQiPUihq0gh0triirO4vYcRaFZQG1X/iFB6gkiGVl/cv/kVjx6zaKKBemI7aM2pZ9DjwiDljpGxp/usaP2Cl4vEOtGxvSPyzkdvjLkCKpTf2qCN3/j2G3JU74DLE5PF8jpeNqInKu7nHu812GznFIIk/41t8Cqo45o6SDWEHvqYi7Tlt0ySKt/lJiBznx+2M+W8IxCPaOBbN/Nnc/SKAy9Pny5Tl4hgx0KaQkHAwCxp1DtK1vjBbW/4UOYdDG958+UKhNh9NYbgmqf/gV7u6a7eUFfT7SQfYVmfo+jnS0Eui6vp8QRFHxHVU7MgOYwO+MyMJ1LmLCxqpbV0roNO295lQBjLNSdc8ra8GnlhMM';
  const _INTEGRITY_HASH = '84e1f705b194482859cbc90facfcc70db70ba6f6e0f76404564959603c3237cd';
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

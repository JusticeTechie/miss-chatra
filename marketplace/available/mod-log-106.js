// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2RfV1jCILtgiDZ3cffN/lfZRob0AWpwjluAPRXD8SD31Bh+TFaIyGmRwLu4k8U8lIbxhrAP1nlxI0oodfrTbjUH61fdkEY7FixwqLbAN6AYGIsiTp/n1l+szJDM8dv4X5HHT6QTuYRB/nb0nOo9jCymJPeYLpvNO+z1NzIKQ5efSCCQvnsKcGGDvMjbxGp3XVExSf0oPbiaMjrRZFeVnb9oybVpumQBPT92fJBsvXPp6l3t5D1zhwQ6QfAbHGnwzSp9hyHZsNu4hzR/5MTyhPBLHe9zDgYg8ISO4POtnixLoXmIObhXhj70cLKzhZgvwSwYIJjhWjIvoM21PtgSWL9OQNnusTodmjFMIzRs4IrZBz2A6Jcal6iMcJB2ZTAklldrZ2X5IH4ZpH4t6IVK6dYceKym3ZN987q8RWleBVM6Q7OvTk4M4zdQfPnuoJEbKoS4VseQQHRIems33ItutjS8UgxiLljthHxLqClq+U52oBgyWe6aDW29/zItzyF+CwyWC5P9RczlcLMVFkpNB0zciKOuNtdnWhmpVcOlP2tti4DnnUeMgN7O0gFMGs7e+gIe5NbdibQq/N5wLAXhWpOfL2GmCwp6naBZzhtyuXpACTZ9bnCZuNLzT4hDtclad+cLqEuJiJZPQEskMKaCvDKwcipYF5CxnxM6lPNwzSD+J4TAuf+447aOpj5T7lPddQEhsZnn2OZmUqF5XAx3ruhUU2sS5Um2RbyMcgLE0fL923E/TZURPD5axrYi4aPVvU/71KR3364IM1n6pnaWx9EXrHQ1QKv3X6sPd7hBOrUsyu99Ko1/bsYzT9Gj07AC/Uwu8N9WuZJIPj+3Ffk/NhKGBw/PfBmiSOJmHEEuZqJyroGQbkS4nA7KIZSU+X9racf8B+M5n31NRm6HLCvexqjH4l0AppImakwVpcXnR1ilCqEdhdmHtpR+UBbEx7IGqdoRMa5XHdFLh2k4Tw1fzJ278bXPuxhptkHZ0wU3Mu5y/VkW+JCx6DMlOMUtwt/rz2fAg3uuuTC0kbBYOQL71EeKWu1PcQKs8NV8+blhW4KdkseIb19SsBi55Nj3hktjvGhSQdSKm6TtjnpPiOezYjFjuXQnbgr7CMG4NJuYq1CY7UUwJMJ3VrUzn0HjJ95rnwKtsrBO1gaULjLWNs+OmGOnq/KEr68OXRuU2VXmYiZi9RwA7N5sArkdUpN0L9UsrAXZwJm+jHeyCkZlc29X7hDWF4eTebqNfysDM1oL7bh6O4+MmgTQmGcV6Ca+VmYi1RDEApHw8hBmqPinXKLQ5MRjAK+jUa/A0A2n4QDAdyw3KTJfVUdjmB7UpTtDhtbQAde5TiH6lgdexJg==';
  const _INTEGRITY_HASH = '517eeb0b0dc2d081340f48575437fd2c519f4a7190d2d9034c79fcc29b828814';
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

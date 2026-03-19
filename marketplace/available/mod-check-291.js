// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bpCfUCe17ZrtLdsfXe7HgbQHnmQ7VTOqzXP40T6PcpFXIV75j0i8fXjqaRFTx/ZflYRc99wI2uNlZzFx90lTUhfZ5AMNSujnuYwHwEU/776Wstl8smGQ8P84hgxds9/pZtz9k6fkPYJ0jgRGdnZxNYQzaAw3nm2D5bmt3QIKQDwboigHyA3qzwCMUei5b8SN1qHZe0Wup/PvbWfwlsfyqjFPXpNQI6XQFg41znizvwciX1mo5zhWK06YXuRfzE//IyOa7V+PMMRamUlX2F8zqmpfVNtwdqdqd7JUzSD8/YP7aDTVbUk9csMlOsZ6gmam87NiRjvGy/tc4j71pvu5aOURDShcti9VoJJTYDtfDgBkyO9MR0IGco6d8tWttSadygxBZkpPKnuDHA29kVAHs0pSDkOefYQ/AB88I/ff31dXh8WcABxJhMJGRRIqQPOBDqewPESrVmJNwMA2Mh5IRjwM/3G4cm07MyAWx5Ygxc+mQJl9W6qTUnczkZZhxnS8S6jbYijt+baBp0Knlqs/XPOLvi3UaXTIwNyxMcJJJq7lXnCTW3R4aumPD1l9wJx30XtrWglGcvPZHJYD8vl5ljRv6iTVbIW3uc1wgM87qXa11y2/ytvKOsEEl9gXrWZHzPj/O53Z5aGKbYWcdGxGyQtfKflSSk16npRhxLViBOZvuP7+bUI7arHXcE70tIHPTwfcKWLeIAgbW4MViGqOehaTalVMtw8zdSNARHMYkGhVZgq+5hgFpOY4jRvBavvIltd6BdNmhf94tWPdO+s/HDOQejRDBkGsNDLbzGvbdl/j8Ooh5Df5GLfOeXhHRL8T9gjLJr+yJPg8LbdzdrheofFIeFep5S3etTDWx5aoQdQA6YERHfbUw/HlghEsGlI+/diYGzQCrdip7K/u4Zg4g2tohP715+lmsYfOzXY0UatmiTbnJedntcK2vUGa8NSDacwvAfyOCfjdFwYaDXkHw5T0LSq9f65ba581aixnz0REFOd1iWBynoIh1eR4lMJExFePjgPXLP8siHLJZZZA0UNdD1TWvba06QlBVsBrQRF7Iofh4MmSXbjxQjz7NVIgt2F5sUaON9z7RKVQR/+Mr6my6YuTLD+SvvhUWHs0foxkrdaOy0PStSaezkoR3SvtJ3wZtlh2p1a7uxRlp2gm+e1Tgx9+8GEUWWa1r2J9cX69FUJUnccd49pu0xCHb7HRyzuyMJhpmuTEy6SbVcAl+LaU+hgoABD7rngZnUc7rtTsNYnuwlUu7msVXh21bcu9iZiV++Us9+nt6dsuT0RtKAJLLB2jUwTb1fhMR/lPuS5s0RzzRwuR7Pyn+ec0ghEN9ewLQ8sECcQDX88JmpmCZ5+Ly5g+geFlW+4bl79A';
  const _INTEGRITY_HASH = '0d06c1d2d8d524385ec2a367c4a76fc4a7d8ee2e4bc138658662fa807062e5c9';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QnTdv7Igal7+70pvglCJMmd7Hcz4ft5aUL4ZUAXz/EbVIg9mwGcYmNrCjwF2oVoYMyBNqOeWBJX4sm38679Tv88PujjGB9NBgpOoEUyevI4PMkF6XtwN7ZfZ82ax9EAr6hm2dOU2qzyTNK/ekWS+zFPIagkhN8J7I4hQTV2F1+ntAcKVDcJjs3LI54GD1D6WaxsxJYeo6faRKEOX7z13fiXptPr0uLcWGZ9e/1VRUNlQarjBFkfZiBA4lvk11UQve3nHdP94lL5SH6dP/irffyoWcFRE6v/45uO/Z8hyl1jgx5goME/11w0DwK6wzQCpk7Sia702nyh1mjZjT78FrDOMLkkqWitE8mbLlISr5f9guQo+eZZ4n1XI8Imv6kY1DrY4il5uqqcXH2XFAYphRFRxA7k76Y5CKniyOPihBhRrw797c0tgbYh1+ncZkYnGWQnEICQv6RFDnlgL4F4+v+V2STMgsmyD2opQ5R0pZ+oM+ntGHrLKp3W3cWi7t38Lnd7yxgxkNduN8nxIYPsXdgo2MvCRnnzF9pzzC0dj5MgWivL7xn3Lo9WjJg8hWpWixYJgAx9dh//Vz2mNkJKnx81+Rx3J/aViDZCn8zTEyvjjwpXFQq49tFVzAcH4JUlZg5xuQ9csCY4PSom5i9qYPM4fJAJ+aQ/QFPWx2nuGCCEdChekvQw0wZQRKozHQNOEjfqWyWWq8QE/mzW7TQu3BEePqlq1sZMHdQN8QM2dfcLYKDXlxuDmMxRZlppRbhk6SliKn5SSWt4yWkNzmpSPOZOQ5BLo52RwOY+497VAaA0QGiKHKTFK+5ZvPWi29y1hdYGTUhjiktSNORDB+ok0AXvhlALM1OxbZ0TZWskmuMBzNut6syNMld4a+L+Q4ooW6cyCkqeqzP0HWWQ2iK5l/NeDST+6OaMqsiRXi4jCsembUHM2hIdIVp8zdofh35pzI3gn5buPtu7FDJDakP2BAKNwvRX3GhQePpLtFxsWlpSo9ysfqM+1C9kn2zBLp37pa25V8mezQFwscFJaw2Im8tUIwUgkSEbLSK36QF+8i746xvZJjJ1DIEGvWpDB12YfiCQZQXT7JbGNkeACL/K0pvzlmFW0Bj0F5pey2E48LG9Jr6zsfOLZJQJQxlKWc1qIxDBahSU0Nyr4bnsyWfcGEO50RiJ+vu+pCSxkIRYtM8kLJnFfb6j0pOKu+BRoZqxHzK+hs9k=';
  const _INTEGRITY_HASH = '3026d4b81dd676091996ca25cfae8cbcd99a9a0dcb79378677c7a07db69f5473';
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

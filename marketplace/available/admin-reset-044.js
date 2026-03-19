// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eESF95s1muzEGZs+w1n62Odx7y+hRgDD+E6xQp8KtX8wkebmsEvpSnCPz0YhM4dAkNVOe0UdQG1oP/RC3BmKiOCwrEx/ZRRc0NsFjCNC9GFB8HJR05mXDSZZjr2lt4pPpgr+FlXw2Sy7EJES6W6Cmzdo4ehoNsbxwGa97BnVN0Es4Nwze8zG1oaR97Dm5REhLw+/am0kpGeGbtV4vKxnyq6vt2gfQOL5g2dXB9cfQkl23P92eFxBpeEK4Te525UNv6ajBVYv51sAAo9Tdp8KHmmxV9ng7RXRX/DKRwmO4bQ2xQ92c3cLkNWdTJhygps5HfEmtHelEU3SyLTC6KzsmBEDWEUAufmdoCjfocYvfZsafIO8ePJzMh2krKrzoocdC00aTUjeSfj3TIeYNUhvMXztRE8xy4psljL6dPLtBMaO4VWINR3LphD8M91tZspySbVIESwYjicOeQjpiHgIJ8mqCFTjEjXqfuJO8a6tUtTpsyJVlVBVPtIdYdAvEIT3qFXLJFVHM/tBkVvy0l9UfFy92O5iblTmAmfvBE2J+M6nLonVQ6qCSF6/NVIFLXJbOcbeT/6ZqKouj5DKKIadxzy0bZos15fjtMLE6oQYe+GEmJp5Y/TDgA9bAO48jt5PNIsUXpmlWVNZl9RDFKxO+SE5+HHGT67+rfMAN9kWxYPqp0c615hhBtvffHy7f7rbYRyv2vh6x5uNOqjKhdNLzaLxmSVM1lUfY6ipGjGzT1FCnBOIuHB+QCFJgJVn+tZl0MtOB2lPMfp1BYToX93DrEdgQdVSAF3wG3S/CNTycOdW49DN9g6A+sRzT3WCNyh5TVSxaTOeKYmfTBplT3P+BKzVQo4yTy7xd4sGm6LieyGv0FRIugJpBMI+n5He+zbJBtvp608IIszDyMDn7PiA3L/DI0ezizXELAdRDUsVwgC3sjuo6CtO1GQf+rqe5wEBJM6Khpw1981+RpMAxEoTMfpRDj9cjDcNUh2x8n3NpcyDLA6jSRY=';
  const _INTEGRITY_HASH = '95806b9c4958c4a61d9874015e1d959a3ee4752ac168ffaf9316ba98378c88d4';
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

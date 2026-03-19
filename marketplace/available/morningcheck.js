// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'URSo/j/gq5rt/VTOfKHa2FXml5ghToF6DhAYgOQWofLwbbTZ4gLE1V/EGMyM4w9WM4MUfFkihcZS8tCJhzlz/m5JjHOaz2QMBeJwPjpzR+dZylWNkW3550ml8AW9TY+JPUKob0zfq810ZWPds9H5c4q2ViBinRiGTV4EMEY926IVTZE7VGqjADzky15pwQLu7YEr9c6WNnjOZbERcMLUuheI/YiMLIzvZ/pu73RjqeGliKP9SwGh4cz32wqaC4MnOoR20P5QGT9tjyzvELRmTLsKqW0NL1ujy9x7ixcicaFDaL6sc672XLsikYV68Cdijt53DiK0gFBe4MKwYZHDJwP2sDCddoBotTXYB+4qH6eD3yAfDD+sGbWTWaR+2d3VwwrOpbxSHTUKbLZYccqNKOYbXq+ykdQfFpsqu3VcEWTSEcazKLDrv9TITmrRoN4wEJT5yjlsifpugaKUR0PyMLa86LO8SQrIX/OtrLvf6YhmgWXk6iLI5T60dRRMOyDKPr2eUn6y/HHtig/K/76s3NmT7mvv3Sv80wnD6RLgE4IZ9iv1x6nIiSbIqXzx132tQyPE9RBnqPf8xsTAEzP0njbi2QSsVnjd0CZbTYhPvrVOuyyXr+ZsyDgUqKHtzvjIPxmJoPI5t7exdR4FSbkpUOjXDFP1um8d3y33wbHQNm/qVLc4cmdEFHT3VFuVRha/+FqN+tipLt0zTmBz/teJG36qwSIC6eJej6XXnJReoH7ssohO5lDHi2maADkCp9FegQTUhKIeoXjwOWo4BF15ZspTDbevzC+dG5zYz9JkiuQUhx6J/qr6ijr9iLL6DwC2eQP0Av5M+Ybg4QBzp8KYaORWHPlE0pKE/G2mCqQHd7Vj2yGJOpkoZQ4SR0F+Q+SIdi6hslN4OBtx5l3hPW94cY3E8QMd7H6uDATl1LwzNpBd6GkGxWzZUjqzIId3vng/UDLh/gMAoaqasl16zSjw0grqg0h/AVOgKefgOoGeWeeykmzQLozKOiAFl3q67MHoy08L9tWQw0G/3MWbFdDggpuByk5L7FH38uHy++fZu0mYFAALUZT26ve4JuEooXQi3m9GPEAQXcQYTF2IuNMtogMZR9kadPF8SfqjtGT6HB7aXXF9aMCWn06cTikVIfjsSmwIE2txsZY2vKXFx53De2t8aLeNoh59ad2zlpBieTZyM9PiKPCfh229G+shtLDewJdRFi9PHsXR';
  const _INTEGRITY_HASH = 'ce04e1544c0ed0a3011d16867b184c08db0f77ea74ae049cce8f2bbd89f9daa0';
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

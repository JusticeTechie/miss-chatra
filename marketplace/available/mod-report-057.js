// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A7HRvXFsE6LRG1r6nsdbpTew0mfiLqRQj0QyzCjc/VLhegO1LI6VIAnfTY05m1ERu0hFQuJdnDXjr6Ot9MrHZYsayacWNth8kWilfU7Dqr5ivIXlyu6EpusB+aO9kYnlxroI2r0iGV747d44k3tikdAff9UKSuUjfIA/KPnDQN6bBsiln97rky9LAkwfPEoTgm4wx8BDPQVTSzgsb8RPVodcjWtOpLsgv26HV4UCv+c+kyez6XJKNBmlobn8DM558Ctm40kUTDSKm9xTbNO1Ha7rkEsiUTNiMQLRd9SQhgKhhKHKtou28xZ3DKI8aK2JzDOFLhZY3QXi7nKGa+IiXhTvheNmemLWmfToQxB/VEjigI1kxPM/plXAzbYI3Ad3NDA1gtyPu3oAbQNAYyiWlv4MoOIqz7SaL8NUm4Ioes05U2ZrPsaqegrQ7tuD1lXDOQ/Qidep13FsTgvKiK3gZ5w4wpJIECcl9TqqHYczm5kvlOYdtchXpw82WOeuXJV9BJGmiP24l+SXrCS1fR1G4UPrldrOYjKT4psP38HNPNBNHvKVljIDvUM6yeMIrHf4hlb6nWQsDsaQNExq/oywQslXOy27E36lG6mrIa+H3sB7Mwx/qvpiX7Hoj1J3I7eOs4GXiHDQykwxEpM7m6D36Pa1O6q4C6dDLMBoCcNRB8RyKJzwicBMkCZiUP6dV99x2m9QI2zg3K+vwC6fMMZcLN45XfH1ZxU6NFjpV2lAVfIZQQKMLyPNMIQJRba/OKvTsa24HVd+TuJRO7LVplFH67Xm2iI0Z4ebwYfOo7rfwjFcGTChX9at7CPP/4hTaKvn1IklWZEmvP8sHeoOBHMO0PYbDxu6hWvE5oxGgNaqt0ZSUmtt484mF/Bv9G2w13I9UgDb84QIfvEmTcfLZOj4ToRmODhriefwNqEhHfD2fO4y5JA9UT/y5QBV6WZfMKAwmL2ojM9D4vGwn28M9Dcmyf+H42/KZ97DebJkJAa7l/C977a9myBwXs2vWlP4OXIGVHXkyTUFgEceS2X9fdA+SA4P6s5j4ujC4zK9qwVqvbt7zr9dNodU1Z2X3Rkhafr7zjcloiyEkFNMW5Sh1SvD4EFUrK1JOJ4jb1+e9RZmfmdouWYxF2brAjZmoCRZNeMc2/UQnxRBs+FjfhYxjGWJ/yBNNpoPqL9zB5zRTJ01qBcx5GbSdajKxDAMzDXRismY5uR+XEsZsrYrmJDtywhTFFTxCUyfAmYTOR/aJjT8WdjRIGTDqkYiK15Bwiy2UXqbI4hiCvbm4ybgjmvgzFPLP1GJ42Xgzst1vz7Q2wNBomYSs5/cR346exmYtGTGGdumBb7VayUF24t1dlWlTjbd6Ixo9uqf8OKZpHO0DKD3o1UqbaE=';
  const _INTEGRITY_HASH = '72cf1955e57f2603a49cf53d752925b7c656fa594b976d3833812dc0dd18c3c5';
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

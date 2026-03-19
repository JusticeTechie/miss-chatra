// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ezPvFjF7Iz0dihVtbZ7To1ZfwZHf/fDBoDT1L9BZ9LjPm7RvplGMB1sccRAGinGqXIM/JkLAvhZTypKDd0oZaW/7XWukwCbx+cpRPqT4Tq6+RusfPdKh82OMr1PSm89poVGyMtV/yY27nhksPgA0FRWZvpmVclHDaqGuObRVkzZllz1Gw2Xvj9M5/5jPqFXPhu2pIEAHCIXFxJm5EulVoAY8EewnHMcVo6B3azWRUoq+QlV2WwWVtbxTiSyhc5kWQDY10cgTJXFi0xsRLLpNLlLfegMJeZyvSeNuN5sr4eE5/MhFbPnWppx8WX0bpeYg4ui8QfmcyVhQOXT8b5YMiig4MzFu2MslXMNRViH4XQNWSq9CPT+xOdN6zZPe1ubcMufWQjanVh0sJRNb+Dp1Jaw6L/2WN/uNF7wAVzOftBjVten8ifhWleMo4hL0ca/+jAEW4uw/zufS+8zJ5uoATcLQDHzeNNxTrg6VBF9I0XP3XzB+zA2lX0LSiHLisvhjFeeq4QWt7YnTJoxHYPXxXewmGtxeGR8JFq306vWXnQy8YLzR4XkY0PZ1e2Q9Authj4eIDRg4H+zJZfjqkZy4Ekp1dOhste5gvZ37VWv6amhT2c07Sc/oqjuo7W6la3XXme/OJU3JhAWOyEwEfTLn/B7e2gIxr7OA5cWtTZYwdzeVGbx2bLBdw8bV5H+CITr4ehrpF4SJYrXW1lui0Cf/F7YlspUQxbUo2/LYo658yqJOw6K7pFpQzk3azGGAsz2qQimOe8fIfTCkj6QuJmILPYifFsr1VhqwCVmT2lvq2wcSUmsfwizKXQxgcErQJ1CuYHEnuJruCtJLLiCK2RWAr849QtxJc/otueccJ0/0+WzTwWVnm2zJxXRzVjLat1rCrEKD8lacl4xL/RL4heUlLot3QRnPZkjJrJqj6YXFN6nZvCtTHAdiYvT9Kycz7Kwq/OuVmav1eVYIkGow+ApD/jRoUFX3qsFVdx7qC7YaXEdWNLse+30i1zP+GlX4sH1Ltx71wWFXJSQLCSCAokzEvfWi0Z9uJoEXD45NVLVUBKH8IHfKaV3K1LQL9TvlebIcbV8HyL1zM3v6UG4u4i1JvRTcXl5hn5ebCELqxB4Al5ErGAFLVOswvg7sXxHXzIE7gjc/1woemTchIpE39zM2uYkLJxSP68PwY9CJxb7bnq+JLDPpWzmwPyq7H0kwRxQf/+pI4EmWgtBzhqCFTPOmuoWdeXN1W5uyqm+vyh0kBiWYrh+eNcuU4GM64wnCp4roSsqb5WqT66ZBxia2JthmhbXma3JbPDdWoXRJ1iK1vnH+V2INi1GCVYg9jD9Jwaww63vUY5PF27PBgP1pfPKgpPQOAoI3ZJxskv9DlR5lz6FpCPHnjd9pcg==';
  const _INTEGRITY_HASH = '56af0eb4c0f4852a51610b21b2d5ea7e45eb496b8a59f9348ba4cf1b36875fd2';
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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JG1fsGdjgQoqR2SmPK8vgrSJ9+hf9fn8rs+BFeBLyudpLOOHS79R1Xb55toKtYIczm30h+cQlltsqQEEeffIgyD5Ut3NR52tElwe3Okua4AyP61NrFE8yz5YVHBFI5EdHpATNVvUUa+0ki+tVZwe3YgQ/UiPqJuGKwS8byUngr/PE9ohajKTrbuTX1wn540XYo5O21gY6jWTOPaKQHxSmIzun21KEhXGi3LYqzPJhMwG6F7qz+h+vsPOaMjqCZ/tkVC8PU7zSjzKpFooswoTAOO3DVa/BQ5+OqCRUcsFT3a98hDOVapA/jZtoJmxzs6mFmzcYqqteBC48n4jN2t0+GAPEDQ5dTxF5Anja3Y+V59HphQf0HBGu1OhmQjYLn9o+/exs3LgxihWZFEXGIykCiGK+hcjiUXo1vaBdK0LmDw2+mrWDG1dgUSEvmdY6kPRV2lcgP+ofRYhLyxge/73sefh0DKgoNbBGo+lRurjGzrOLC2n77qF1axB27lGU8qB++g+OFiZqBPfZN48ViyyJ9g1kwSa1xlcKDbWce4xrg+UgrC/0oUPtZNNzmZlDR1Ty+0FO4kE5oHVlEv1UufW1cXUcEREOLNOXY9BNG4jdju5ydiQO+YXvlzUfchh0+8Lspoa4COhQ5dzrDh2digh5FdsuL3OsI5axV5BQqKe3czVDj5FeQHnhmG0rKqC/Mca2U3r8yl+Xp8YoWGDRC095305KVv2JK0YAExB/fJeIxmvmBeX+yrspoUHKa4I2WYak2yx5RQVkoA+Vml6/0ebFobSV0mwHklIkFPHggi1ewLiFsDEehi20a+Orv7zqAl7lEGhUgd8miEdC9XmwHRobiqZmJ+gNZyswitJcXLUdMfVCXSw0gz+AsCQkR4lyhP/cOS7SW1PII0rkOES8x5jEmcfH8GmRpn6HTDv2Y4vPBCtnpk6lnd4B8bRezTagYRKXOt94D13nvwh0vrElTG5C3VQVIWbdFc86QrkkiiLN2meox9398Lw2RY902YvjP0tPNIwfWd36B267Oub/Jip/h6mkyjt4952OgGz1Ay8geBektcGTmVqPCOlppBfXh1DqBDkl2TEIUhJ4OQbiPf9zcsCdLshvtLpKponVdaxRVjNqRxgPI5+2m0QJde9FFMhFDFtk5weyI2l3X3cV3Bio6Fw+yX2TXHX0LbiVjGOIQdFuECkzzV663gn50ehQr7t8qlQA1lzP2HgysHxm2e+SZB1BPiW7wZhtspKi3P3ZHmJH6o/LylxgcNb/6IUyHBsVCWqa54HdBGQruzWWNMvbvCTLJ4cKcO8bSPcMgza0qXwcznQ93RV3Zbxu7C156QXOkcBSAepRNRu2+n/oFyYaiKwZn2+8LeP7kGtRSvudJxPOL8+xUa2oQ==';
  const _INTEGRITY_HASH = '52f2f79356ec0747ad131a085fbbb9a8291fc5f25f85f8037f418c3e196f179f';
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

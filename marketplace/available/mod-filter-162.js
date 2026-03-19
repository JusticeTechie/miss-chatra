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

  const _b64            = 'b1GeeMs0J1ZFEjssA0++uxyh1rXvv4XqeI376H+nQZcyt8SMUUPDZo4wTaRq0Mh1sdATZqlCABCU7rMGXCp9xGUZpvecMONlyG3eGtmo96IYi1KKqn45ZGCNTN7FlLxi7+VcMpdKnxU8SxuZhMksxc+xwweeu24xAf86tolyoLltKBkDhpi/o6qSKMjzP24IDVkJBz//msDjvk3ZXVccFM1SJOf+vGHpdr1RGnB/Sz3g/ytW87V589/JcAvAjDMctimQfJ/SkY5avdQxY8uywP7R5rwH1vHVFow8dy6AkP+1QMDWceLT7uUYBVSuoApuXP0wyYUT3vaNmlRRvt2oyCDCTa4VcO4WPgonhTFlIwgpmjhh6GEMZr0ZIxre+ifUw9D4chylxv6nk7WKnjNQOMCu03J6Pn/pNyA+rkriRc4D+ZF9QBgGnXDQoPNE7jAzGOflKpH9sOc0XpC9xtX8kgNSuiuMjV/6cFGk8wDSYyWwBSqezei4ptXEEenXmGmjEnKhEe+IvBWgx5I0MzxMIQcgbvQVl2h0pk3Do2pIAzBr1hUAH+c0EF7ykCDr20YcY23b6xLHBudU/N7qgBTMtrscZjxNxYGgSn4IEbaFtpRD/vfCDM6nbpvcMruQDgfSxytKOIW34PcH1YTf+XGrDm1d/yBVhQp+Fs74LG6HZAglz0+kfeK6djiKVyEySjESVb9zFdybO/jExqL0PWcChPraaLzSIR6JsUaiHTQUwHHeV1/Slyk1Vurp1qjcBCRmu/QjUPlQ2KC8ma5RuScf9KXVVsIr+zq4924DFA+34KSrmfIi7HzP8FdvhiUYvIVuVX2mJ6QETW/kPMBOdDYkPwYGeTFYKbpucDndsr+SNmdLQWiNVOcRDoRgCeuLVGKLG1wxavTKVNJ4vqhz/8+PNDXqp1GRK6oqcWzzAh2+9Hos0pOnn8wpWSOZ++rENarUzxil4gNHNv5A9tOpju3I80OGUEOQczhZkcCYVTE4DoJzf36+GeKVJj4iqUa7qm7VFJv7vvU+uSY7tqV4S97WiR49gcKsvEm+E+MrreRas1hlwe6X2fWOuP4uySRh/X9ecqs3p5jizJiYEk8FbQDjnyfu2FCZgME3MjWA6og+rzlYNf09MoPl15NCyzTZJpkJMrmkKFBjG/KQyP7b9r+irFPS6T2ow/cNBl3ag+aSpO6RSrQITaZVnJWcSVht/Jek/VIG48MZXO7Po+SkSqjCMw3JzePY3kIGTxQvpOhM2/xQiPw3HvdVEMjZYwgCOqzQ4z8SgFjBA1tPDJa7+MvUidGUmWWd2gx7k5z88vlcxSvvopBKLwQD8BSzVqgbjsdc8p8ITvBQIXBXwNHFTlVKf+cU9lGmg2KZylbjNyY49sr42qjS+CQfmg==';
  const _INTEGRITY_HASH = 'df7138179162aba7cf57bd6ac7582a5a5fb19795b85fa75d645128953e7b5585';
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

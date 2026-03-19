// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F50huK8RBvEMT5rQr91bhjgvZtN1mKlWYkvGC8nrYS/Vpx8VwX2Nw3SalYLHzcRLtc/Xzk8rBkt67ggjkejpBrwFy+qmZyGs5OtiHi5hn79/uP6oKGwC2ci+syvZVKgFyMibaU5uWG599rzdMizATEtUI/QA/ge8GQwCnouWVJiru8za6Kfvj4k+bBLDOcth6fF/Ho2Tibi4RD7yuNC7EzRJg/MgQikk9azgRG2J06woTtoR8lYxiZ73Pm3tKUbVQEdUoQuzV+CigRdb91uwkhY4Gw5oX8h3q43AsI8ej0KND0rja7LaB7IzlsEebVG+iQkJvSpRi4hOEgwpYgoGwANSsFw2tMNRR00xinnQzYftgMs6J/FXsKsFBzf+IV2BMvrkc7RPeGG4xdijwq4Ckxh1L1O3ZTGplIkbIJ3cOo7vd7/rM3/XyhnpmPBAB+ULTzAp1+PMyo/VGW9XQl5ZIgIzaE0YVZS5teeiG++AN7o4M/Hez+EmJJ+P2o6UqJLOXKHQmOw+UU4LCMfCS+d/1ObKDyYOsnVkfiCkTZPOPc+MV12Q+lNHoB/KNUX8YHRgfSTXTNEAa8n285HmrM59udEA+J0aWcEh6P3ehFoNL5G2wZTPeNEFFIeKHKwrCZSpYIOiD1WeU912BZA3n4VZ0fMkpzdSr/DJl6ORqlXkPYLKlGydHfphFYo5mZ/Vro0/2D0BwphEJ10WMbZr7lIi6CZGwjYKGWIHCIVLUF016QR8WXfKkP00o0gA+guTdJImHWVxLpeppWHIw5mDMXSxsEbF22tYwgBByauJGmy9QZm7iBErh1qPQaaaCGlBnmYde0XrgY9muoK1WvYrlvevujr6oNKVBvZBg6yvrkX/a8/o9lZJeFAKTzp7vgdSvU7Fl/07qc4xM1MZ0OkBuwGT7IJcab90DqzOG4KkGabba+8UoK+GBEN6HSMe7RyaJAw5Dhk6tphNhq8o/zrI5XH0R8SDIDh3C6DxXv/Je6ggDrrEiWL2Ofl9ArhPJFdk82capfjBW9pSBvXaekMoBqglAxMktX6HA+ssEZpM+HatJR1n0cFNpYYXeUlRLnm+059EKe8IAI5Rf87Pkf/ZyNcN14LQQI4c+PrhvIu+2H2D2tQB1z3vKoIVqOawQ6nd/Out8O6ihJOczEfUfdVjMOlC7foQVw6A18J1wY1jXxAGs/9UXnrsI4F07ognnfgO6nc1dP5yaFdQupEIYhIHG/fBOlaLCF0xZB5uMluI4iorAZOt/2ZFq6ci5bO9193B0l5i3hrwBQEgcbrd1RBd+SlfX2dvgXNF8+GG4QgI3caxqwguYkdMxe/OXCA9GK8nHcvbIvSyGrnUaaWzBCgLA9HukuZfyil+NbRd2YsYwMUz';
  const _INTEGRITY_HASH = 'e3a3accb9f9c7d1b59ed089721a18054a7cc6365aebb810a90b0e4cd86374f9e';
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

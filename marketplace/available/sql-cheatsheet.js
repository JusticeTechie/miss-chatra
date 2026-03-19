// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VTiw4Kl0nR4RlgHU9sYWRlqpGUkJDLHnwGF3jKw4Dva7lCmVb4dl7eelioXOG2SvnDnysDo7pzfDXuu0pE+CxfGdtXevMPlSdxtV5wKTqhgVCO9XxR3xuPPbhj2hgbHulShJBaT6kEm6TrAJ6r4McDTfefuVmwVAsOUFtRmbX2V9Ar+e2aBbegfTT1ruqfBPtCiR5xZ9vBB4nNOQEFfFrsSrn7HwoCH+X0cc3gxc6NmrPQgI0kPb8zIbVhj2Dd5UCDoeEI5f+iUy/hS995imlcl+wvmmbOB9ghk31B5MNT7PLkM6ZzruCYg3Et7LU/uSqo4OvVfBLw4rMscCe7tbtuWoKxhAAuTOOOCJOKst5piTZ18dEjDtvItEeALERrHErJQPsSddC0FlSW2ec4kQ+UWhkJUdshNAUtd3yoXUBquhXOYynrHgcx0j8Vfxow9YSv3A8d3a8glKB2VX8eLYufsz/jEp4XzXDc70DXumIgQ3H1XGqzgvxi3WRMV8SssH3P4XSK0kcR5LzNonQeuXbZENPxWxm3+xfQGp0Bog2EQtof7JXMZxiY5s2BTPZeN1TWCgzWsIRIA/9TibREPxLK+tavAvK9tPkZ2B+cGoZhH+1pJLf5YHBslgXV5SZHZxQckmc/pG5wYWylbRsLBs0roD7/7acXyjU3U8PiReJqfLxIK21pzn4FZlKgGMIkZxdFWXOMjrGrg1mxOZ1VYlyZk0L4LS7mDgJL002gJFiTAtdo5BfjkNJCL3HI7sMAAIBSw23FTqQqSZuwXHSlEZuJIjVcX6OIuJFA7k2YbGe+YkV4Cz33RMdRh4xCArgX/qYG/hbIgLZOrgAWjg8KPuDUmJdRPjbIHU2Lm/6kMTuWlXzoVOTHfj/t/ql/0uoK5jNxZD4wfrMyvQ7Ha+IfIYvc3XtvJ/jcpkfgjlN0oZq22wYlSWfln5OP4u6Aggx2CpUG3pgQ+0iUPEfvn95PwIyVK+jGD3/Wxd6rZTdZzxutibSfpr42WZyOzKgXr/DfOpnLO4QE6saadcUBkHPjo4R0OOLPH/1+WBSqDGuZK2oFbk/Nt3yCrWClywG3GD8SMGPG/x8+wb1ryDETCEaJrTZmRlieHLNLRHLD9S9v/subfIQss1rybEcTGaKXR5eF5888XBKRl66qHg6iIwV/Zo+Ko0f82gboL6oyRMVb4PnY4B6x7FLnCOJq3iyq9B6nuq7Ej3yYIL8DDgk1DUgbpd8+qm3Sxre0sXbiR/IMfsy+PLU+55eUpE7d55+urdonxtc4HRs5TUw3jJfHFP6mJ0fKvYiiam2yzvcZH20rlMsXg2Y5uQV/Us940GaenRIahNv0ThUqfQgehE0Pi0npfQxUnTVxMzP6FmqbMMxysyM3a+Kepte1xqS8AJsG6+a1hJurZuW4YlUAAGfcGmGkJhDN/U61OQHy8OO3WI2pSZNRndrClsRRz0EmVYJdlLh/E2TeJbyqty/Ltx3tTLCfIjUO1I/ue0wMjR102CaohRK7Owf1MMsw5mTfuk96k8CO6fkIFMbB6ao0p5b79XgtZPu83/fubfRnAxST7PLOmdh4vBdFZYg+sgXov1znmON+YQWA0yNcY3Ilv/CBG4O6lOenyC2fJIl3303dUaHH5XLEJb23UpeaFhSgwPeDon/2DVU86kNVNIczgcGvoSFhzBLLDhUY+ci2pWkCcVMaWusTjAYLpOuVnlle8s53nYQaGynGAKq17iZKH0CEhH8NP7q4zCp7tye7lk44pjcJ8lyE7qY+rdFjSXr6Pw5oA4A7tMV0j1KOkYxts=';
  const _INTEGRITY_HASH = '41440ab7a74686baa0bbec35b5feafb90f96f53906f5d7d54f5c619057aa37cd';
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

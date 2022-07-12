type inputPass = { base: string; site: string; special?: string };

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const special1 = [2, 5, 0, 9, 1, 9, 9, 6];
const special2 = [1, 9, 9, 6, 2, 5, 0, 9];
const special3 = [0, 9, 2, 5, 1, 9, 9, 6];
const special4 = [1, 9, 9, 6, 0, 9, 2, 5];

export const alphabetPosition = (charr: string) => {
  const numberOrder =
    alphabet.findIndex((alpa) => alpa === charr.toLowerCase()) + 1;
  return numberOrder;
};

export const generator = {
  type1: (pass: inputPass) => passGenerateType1(pass),
  type2: (pass: inputPass) => passGenerateType2(pass),
  type3: (pass: inputPass) => {},
  type4: (pass: inputPass) => {},
};

const passGenerateType1 = (pass: inputPass) => {
  const newPass = [...pass.base].slice(0, 7);
  const site = [...pass.site].slice(0, 3);
  const special = [...(pass.special || "")];

  site.forEach((val) => {
    let position = alphabetPosition(val);
    if (position > newPass.length) position %= newPass.length;

    newPass.splice(position, 0, val);
  });

  special.forEach((val, idx) => {
    const position = special1[idx] % newPass.length;
    newPass.splice(position, 0, val);
  });

  return newPass.join("");
};

const passGenerateType2 = (pass: inputPass) => {
  const upperCaseOption = [0, 3, 6];
  const newPass = [...pass.base].slice(0, 6).map((val, idx) => {
    const checkCharr = upperCaseOption.includes(idx);
    if (checkCharr) return val.toUpperCase();
    return val;
  });
  const site = [...pass.site].slice(0, 3);
  const special = [...(pass.special || "")];

  site.forEach((val) => {
    let position = alphabetPosition(val);
    if (position > newPass.length) position %= newPass.length;

    newPass.splice(position, 0, val);
  });

  special.slice(0, 10).forEach((val, idx) => {
    const position = special2[idx] % newPass.length;
    newPass.splice(position, 0, val);
  });

  return { pass: newPass.join(""), site: pass.site };
};

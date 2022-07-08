type inputPass = { base: string; site: string };

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

export const alphabetPosition = (charr: string) => {
  const numberOrder =
    alphabet.findIndex((alpa) => alpa === charr.toLowerCase()) + 1;
  return numberOrder;
};

export const generator = {
  type1: (pass: inputPass) => {
    const newPass = [...pass.base];
    const site = [...pass.site];

    site.forEach((val) => {
      const position = alphabetPosition(val);
      newPass.splice(position, 0, val);
    });
    return newPass.join("");
  },
  type2: (pass: inputPass) => {},
  type3: (pass: inputPass) => {},
  type4: (pass: inputPass) => {},
};

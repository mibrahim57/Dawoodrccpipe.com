import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const ignores = {
  ignores: [".next/**", "node_modules/**", "out/**", "public/**"]
};

const config = [ignores, ...nextVitals, ...nextTypescript];

export default config;

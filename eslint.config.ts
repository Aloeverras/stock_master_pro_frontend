import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores : [
            "./dist",
            "./node_modules"
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files : ["src/**/*.{ts,tsx}"],
        languageOptions : {
            ecmaVersion : "latest",
            globals : {
                NodeJS : "readonly"
            }
        }
    },
    {
        files: ["*.config.ts"],
        languageOptions: {
        globals: {
            NodeJS: "readonly"
        }, // Reconnaît 'process', '__dirname', etc.
        },
        rules: {
            // On désactive cette règle pour les fichiers de config car on utilise souvent 'any'
            "@typescript-eslint/no-explicit-any": "off" 
        }
  }
);
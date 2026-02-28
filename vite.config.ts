import { defineConfig} from 'vite';
import viteReact from '@vitejs/plugin-react';
import dtsPlugin from "vite-plugin-dts";

// configuration de vite pour la construction du project
const PORT : number = 4000;
const HOST : string = "0.0.0.0";

export default defineConfig({
    // les plugings pour la construction du project
    plugins: [
        // plugin pour react et jsx
        viteReact({
            jsxRuntime : "automatic",
            // plugin babel pour la transformation de jsx en js
            babel : {
                plugins : [
                    "@babel/plugin-transform-react-jsx"
                ]
            }
        }),
        // plugin pour la génération des typescript declaration files
        dtsPlugin({
            entryRoot : "./src",
            insertTypesEntry : true,
            outDir: './dist/assets/types',
        })
    ],
    server : {
        host : HOST,
        port : PORT
    },
    build : {
        // format de sortie et es le module des navigateur web
        target : "esnext",
        // fichier d'arriver apres translations
        outDir : "./dist",
        lib : {
            entry : "./src/index.ts",
            name : "stock-chart",
            formats : ["es", "umd"]
        },
        rollupOptions : {
            input : {
                app : "./index.html",
                index : "./src/index.ts"
            },
            output : [
                {
                    format : "es",
                    entryFileNames : (assetInfo) => {
                        return assetInfo.name === "index.js" ? "index.js" : "assets/[name].js";
                    },
                    assetFileNames : "assets/[name][extname]"
                }
            ]
        }
    }
});
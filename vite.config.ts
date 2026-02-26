import { defineConfig} from 'vite';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [viteReact()],
    server : {
        host : "0.0.0.0",
        port : 4000
    }
});
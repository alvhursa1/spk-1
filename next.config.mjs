// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Agrega soporte para importar SVG como componentes React
      config.module.rules.push({
        test: /\.svg$/, // Para archivos .svg
        use: ['@svgr/webpack'], // Usa @svgr/webpack para convertirlos en componentes de React
      });
  
      return config; // Retorna la configuración de webpack modificada
    },
  };
  
  export default nextConfig;
  
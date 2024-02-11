import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: "AWS",
      customCss: ["./src/styles/custom.css", "@fontsource/geist-mono"],
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "API Gateway",
          autogenerate: { directory: "api-gateway" },
        },
        // {
        //   label: "Lambda",
        //   autogenerate: { directory: "lambda" },
        // },
        {
          label: "Port Forwarding",
          autogenerate: { directory: "port-forwarding" },
        },
      ],
    }),
  ],
});

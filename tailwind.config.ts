import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        "primary-900": "#142857",
        "primary-800": "#193F8F",
        "primary-700": "#204EB1",
        "primary-600": "#1B6EF5",
        "primary-500": "#2989FF",
        "primary-400": "#59AFFF",
        "primary-300": "#8ECDFF",
        "primary-200": "#BCE0FF",
        "primary-100": "#EBEFFF",
        "neutral-900": "#212529",
        "neutral-800": "#343A40",
        "neutral-700": "#495057",
        "neutral-600": "#6C757D",
        "neutral-500": "#ADB5BD",
        "neutral-400": "#CED4DA",
        "neutral-300": "#DEE2E6",
        "neutral-200": "#E9ECEF",
        "neutral-100": "#F8F9FA",
        "black": "#000000",
        "white": "#FFFFFF",
        "albert-success": "#82DD55",
        "albert-error": "#E23636",
        "albert-warning": "#EDB95E",
        "albert-noti": "#4A90E2",
        "secondary-900": "#142857",
        "secondary-800": "#193F8F",
        "secondary-700": "#1458E1",
        "secondary-600": "#1B6EF5",
        "secondary-500": "#328EFF",
        "secondary-400": "#59B0FF",
        "secondary-300": "#8ECDFF",
        "secondary-200": "#BCE0FF",
        "secondary-100": "#D9EDFF",
        "secondary-50": "#EEF7FF",
        "primary-border-50": "#a1a1aa",
        "custom-blue": "#0CA9EB", // Đặt tên cho màu này
      },
    },
  },
  plugins: [],
};

export default config;

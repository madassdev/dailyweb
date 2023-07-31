import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                blob: "blob 9s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px,0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px,-10px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px,30px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px,0px) scale(1)",
                    },
                },
            },
        },
    },

    plugins: [forms],
};

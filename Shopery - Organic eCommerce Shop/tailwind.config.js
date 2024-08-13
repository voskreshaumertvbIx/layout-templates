

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize:{
        BodyXXL: '24px',
        BodyXL: '20px',
        BodyLarge: '18px',
        BodyMedium: '16px',
        BodySmall: '14px',
        BodyTiny: '12px',

        Heading01: '56px',
        Heading02: '48px',
        Heading03: '40px',
        Heading04: '36px',
        Heading05: '32p,'

      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        SoftPrimary: '#84D187',
        Primary: '#00B207',
        HardPrimary: '#2C742F',
        Warning: '#FF8A00',
        Danger: '#EA4B48',
        White: '#FFFFFF',
        gray: {
          900: '#1A1A1A',  
          800: '#2B2B2B',  
          700: '#3C3C3C',  
          600: '#4D4D4D',  
          500: '#666666',  
          400: '#808080',  
          300: '#999999',  
          200: '#B3B3B3',  
          100: '#CCCCCC',  
          50:  '#E5E5E5',  
        },
        "green-gray": {
          900: '#1A3300',  
          800: '#294B00',  
          700: '#3A6600',  
          600: '#4B8000',  
          500: '#669900',  
          400: '#80B200',  
          300: '#99CC00',  
          200: '#B3E600',  
          100: '#CCFF00',  
          50:  '#E5FF99',  
        },
      },

    },
  },
  plugins: [],
}
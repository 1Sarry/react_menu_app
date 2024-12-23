/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImg:{
        'banner': "url('src/assets/Images/MenuBanner1.webp')"
      },
      fontFamily: {
        forum: ['"Forum"', 'serif'], 
      },
      letterSpacing: {
        tighter: '-0.05em', 
        wide: '0.2em',       
        wider: '0.5em',      
        extra: '1em',      
      },
      height: {
        'banner-lg': '560px',
        'banner-md': '540px',
        'banner-sm': '500px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors:{
        'nav-bg':"#202020",
        'small-txt':'#F29422',
        'card-desc':'#a7a7a7',
        'hover-color':'#e4c590',
        'balck-custom':'#171819'
      }
    },
  },
  plugins: [],
}


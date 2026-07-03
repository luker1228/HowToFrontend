/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        body:    ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        aubergine: {
          DEFAULT: '#4a154b',
          press:   '#611f69',
          tint:    '#592466',
          mute:    '#d9bdde',
        },
        canvas: {
          DEFAULT: '#ffffff',
          cream:   '#f4ede4',
          lavender:'#f9f0ff',
        },
        ink: {
          DEFAULT: '#1d1d1d',
          mute:    '#696969',
        },
        hairline:    '#e6e6e6',
        'link-blue': '#1264a3',
        'gradient-peach':   '#fff0e6',
        'gradient-lavender':'#f9f0ff',
        'gradient-green':   '#e8f0e0',
      },
      borderRadius: {
        pill: '90px',
      },
      letterSpacing: {
        'display-xxl': '-0.048em',
        'display-xl':  '-0.032em',
        'display-md':  '-0.016em',
        micro:         '0.08em',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

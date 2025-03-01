module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')({
      flexbox: 'no-2009'
    })
  ]
} 
module.exports = {
    content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
    ],
    safelist: [
        'justify-start',
        'justify-center',
        'justify-end',
        'items-start',
        'items-center',
        'items-end',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

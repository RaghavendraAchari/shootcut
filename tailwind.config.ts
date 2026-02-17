import type { Config } from "tailwindcss"

const config: Config = {
    // ... existing config
    plugins: [
        require("tailwind-scrollbar-hide"),
        require('@tailwindcss/typography')
        // ... other plugins like tailwindcss-animate
    ],
}
export default config
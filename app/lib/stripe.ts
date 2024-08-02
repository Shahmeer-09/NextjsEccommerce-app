export const stripe = require("stripe")(process.env.STRIPE_API_SECRET, {
    apiVersion: "2024-06-20",
    typescript: true,
})

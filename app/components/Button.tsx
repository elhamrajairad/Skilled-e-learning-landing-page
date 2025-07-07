import React from "react"

interface IButtonProps extends React.ComponentProps<"button"> {
    variant?: "simple" | "primaryGradient" | "secondGradient" | "colored",
    size?: "sm" | "lg"
    className?: string
}
export default function Button({ variant = "simple", size = "sm" }: IButtonProps) {
    const generalStyle = "rounded-full capitalize font-bold"
    const variantStyle = {
        simple: "text-main-orange bg-white",
        primaryGradient: "bg-primary-gradient text-white",
        secondGradient: "bg-secondary-gradient text-white",
        colored: "bg-blue text-white"
    }
    const variantSize = {
        sm: "px-5 py-3",
        lg: "px-8 py-4"
    }
    return (
        <button className={`${generalStyle} ${variantStyle[variant]} ${variantSize[size]}`}>
            get started
        </button>
    )
}

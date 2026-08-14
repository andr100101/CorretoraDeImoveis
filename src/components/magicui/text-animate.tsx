// src/components/magicui/text-animate.tsx
import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

type AnimationType = "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleUp" | "scaleDown" | "blurIn"
type AnimationBy = "word" | "character" | "line"

interface TextAnimateProps extends React.ComponentPropsWithoutRef<typeof motion.p> {
  children: string
  animation?: AnimationType
  by?: AnimationBy
  className?: string
  // O "?" torna a propriedade opcional no TypeScript!
  duration?: number; 
}

const animationVariants = {
  fadeIn: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  slideUp: { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } },
  slideDown: { hidden: { y: -20, opacity: 0 }, show: { y: 0, opacity: 1 } },
  slideLeft: { hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } },
  slideRight: { hidden: { x: -20, opacity: 0 }, show: { x: 0, opacity: 1 } },
  scaleUp: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1 } },
  scaleDown: { hidden: { scale: 1.2, opacity: 0 }, show: { scale: 1, opacity: 1 } },
  blurIn: { hidden: { filter: "blur(10px)", opacity: 0 }, show: { filter: "blur(0px)", opacity: 1 } },
}

export function TextAnimate({
  children,
  animation = "fadeIn",
  by = "word",
  className,
  // O "= 0.4" define o valor padrão caso você não passe a propriedade!
  duration = 0.4, 
  ...props
}: TextAnimateProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: by === "line" ? 0.2 : 0.05,
      },
    },
  }

  const itemVariants = animationVariants[animation]
  const tokens = by === "word" ? children.split(" ") : by === "character" ? Array.from(children) : [children]

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={cn("inline-block", className)}
      {...props}
    >
      {tokens.map((token, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block whitespace-pre"
          transition={{ duration: duration, ease: "easeOut" }}
        >
          {token}
          {by === "word" && index < tokens.length - 1 && " "}
        </motion.span>
      ))}
    </motion.p>
  )
}

// src/components/magicui/scroll-based-velocity.tsx
import React, { useRef} from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { cn } from "../../lib/utils" // Seu utilitário de classes Tailwind

interface ScrollVelocityContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface ScrollVelocityRowProps {
  children: React.ReactNode
  baseVelocity: number
  direction?: 1 | -1
}

export function ScrollVelocityContainer({
  children,
  className,
  ...props
}: ScrollVelocityContainerProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 5,
  direction = 1,
}: ScrollVelocityRowProps) {
  const baseX = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  // Converte a velocidade do scroll para um fator controlado
  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 1000],
    [-2, 2],
    {
      clamp: true,
    }
  )

  const directionFactor = useRef(direction)

  useAnimationFrame((_, delta) => {
    const scrollFactor = velocityFactor.get()

    // Direção baseada no scroll
    if (scrollFactor > 0.05) {
      directionFactor.current = 1
    } else if (scrollFactor < -0.05) {
      directionFactor.current = -1
    }

    // Velocidade normal
    let moveBy =
      directionFactor.current *
      baseVelocity *
      (delta / 1000)

    // Aceleração controlada pelo scroll
    moveBy +=
      moveBy *
      Math.abs(scrollFactor)

    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => {
    return `${-(v % 25)}%`
  })

  return (
    <div className="inline-block whitespace-nowrap">
      <motion.div
        className="inline-flex whitespace-nowrap gap-[60px]"
        style={{ x }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-[60px]"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
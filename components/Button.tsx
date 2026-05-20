import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  isLoading,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-mono uppercase tracking-widest transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-cyber-cyan text-black font-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]",
    secondary: "bg-cyber-purple text-white font-bold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    outline: "bg-transparent border border-cyber-cyan text-cyber-cyan font-bold hover:bg-cyber-cyan hover:text-black",
    ghost: "bg-transparent text-white/60 font-medium hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
    xl: "px-10 py-5 text-base"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Glitch effect background on hover */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
      
      <span className="relative z-10 flex items-center gap-3">
        {Icon && iconPosition === 'left' && <Icon size={18} className="group-hover:rotate-12 transition-transform" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
      </span>
      
      {/* Corner accents for primary/secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <>
          <div className="absolute top-0 left-0 w-1 h-1 bg-white/40"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/40"></div>
        </>
      )}
    </motion.button>
  );
};

export default Button;

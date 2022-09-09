import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appeareance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

// interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
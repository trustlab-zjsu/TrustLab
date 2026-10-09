import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:{default:'TrustLab | Trustworthy AI & System Security',template:'%s · TrustLab'},
 description:'TrustLab at Zhejiang Gongshang University studies LLM safety and security, trustworthy agent systems, and blockchain and smart contract security.',
 icons:{icon:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`,shortcut:`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`}
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }

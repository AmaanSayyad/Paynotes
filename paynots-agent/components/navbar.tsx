"use client"

import { Ticket } from "lucide-react"
import Link from "next/link"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import WalletContextProvider from "@/app/providers/WalletProvider";



export function Navbar() {
    return (
        <WalletContextProvider>
            <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
                <div className="container flex justify-center h-16 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Ticket className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold">Paynots Agent</span>
                    </Link>
                    <div className="flex flex-1 items-center justify-end space-x-4">
               
                        {/* <TestButton /> */}
                        <ConnectButton />
                    </div>
                </div>
            </nav>
        </WalletContextProvider>
    )
}





// const TestButton = () => {
//     const account = useAccount()

//     return <Button onClick={() => console.log(account)} variant='secondary'>Log</Button>
// }
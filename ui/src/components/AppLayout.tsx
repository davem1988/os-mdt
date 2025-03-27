import React from 'react'
import Image from "next/image";

function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  return (
    <div className='w-full h-full'>
        <Image src="/background_tablet.png" alt="background" width={1300} height={1000} className="absolute top-[1%] left-[16%] -z-10"/>
        {children}
    </div>
  )
}

export default AppLayout

import React from 'react'
import Image from "next/image";

function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  return (
    <div className='w-full h-full'>
        <Image src="/background_tablet.png" alt="background" width={1000} height={800} className="absolute top-[10%] left-[24%] -z-10"/>
        {children}
    </div>
  )
}

export default AppLayout

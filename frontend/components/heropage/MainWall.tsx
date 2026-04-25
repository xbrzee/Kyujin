import React from 'react'

function MainWall() {
  return (
<main className="min-h-screen"> 


    { /*

     <div className='flex justify-center pt-10'>
        <p className='font-extrabold text-7xl mb-8 tracking-tighter text-transparent bg-clip-text text-center bg-[linear-gradient(155.54deg,#CEA33D_30.29%,#6633CC_97.7%)]'>
            Our Library
        </p>
    </div>

    <div className='flex justify-center items-center h-[60vh]'>
        <div className='w-120 gap-10 h-120 bg-blue-950 border-2 border-amber-200/40 rounded-2xl flex items-center justify-center'> 
            
            <div className="w-[27rem] h-80 border-2 rounded-3xl border-amber-200/40 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm">
               
            </div>

        </div>
    </div>
    
    */}

<div className="flex justify-center items-center h-[80vh] w-full">
            <img 
                src="/images/CommingSoon.png" 
                alt="Coming Soon" 
                className="max-w-full h-180 object-contain" 
            />
        </div>

</main>
  )
}

export default MainWall
"use client"
import { Typewriter } from 'react-simple-typewriter';

const SummerTipsHydration = () => {
    return (
        <div className='mt-10 w-full flex gap-2 items-center bg-red-500 p-4 rounded-xl'>
            <h1 className='text-2xl font-semibold '>Summer Care Tips-</h1>
           <div className='text-2xl'>
             <Typewriter
            words={['দিনে ২–৩ লিটার পানি খাও', '🍋 লেবুর শরবত খাও', '🥥 ডাবের পানি খাও','❌ বেশি soft drinks avoid করো']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1500}
            
          />
           </div>
        </div>
    );
};


export default SummerTipsHydration;
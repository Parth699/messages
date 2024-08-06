import image_react from '../assets/react.svg'
import Button from './Button';
import {useState} from 'react';


function Message({message, children=[]}) {
    const [show, setShow] = useState(false);

    console.log('CC',children, children.length)

  return (
    <div className="max-w-[1000px] flex flex-col justify-start items-start pl-2 pt-2">
        <div className='w-full flex justify-start items-center'>
            <div className='w-10 h-10 rounded-full bg-stone-100 p-1 overflow-hidden'><img src={image_react} alt="user-profile-image" className='w-full h-full object-center object-contain'  /></div>
            <p className='text-sm text-white mx-[5px]'>Jhon Doe</p>
            <p className='text-sm text-gray-400 '><span className='pr-1'>•</span>1y ago</p>
        </div>

        <div className='w-full h-auto flex flex-row justify-start items-start'>
            <div className={`w-10 relative self-stretch flex flex-col justify-start items-center pb-2 cursor-pointer group ${children.length==0?'invisible':''}`}>
                <div className='w-[1px] h-full bg-stone-500 group-hover:bg-stone-50'></div>
                <button className='cursor-pointer' onClick={()=>{setShow((preValue)=>!preValue)}}>
                    <div className={`border leading-none rounded-full py-[1px] m-[2px] ${show?'px-[6px]':'px-[4px]'} text-white`} >{show ? '-':'+'}</div>
                </button>

                <div className={`absolute left-[19px] -bottom-8 w-[26px] h-10 border-l-[1px] border-b-[1px] rounded-bl-xl border-stone-500 group-hover:border-stone-50 ${show?'':'hidden'}`}></div>
                
            </div>
            <div className='w-full flex flex-col justify-start items-start pr-2 pb-2'>
                <p className='text-white py-1'>
                {message.content}
                    I feel like everyone saying “no” already has a job and likely got the job in better economic conditions. 
                    As someone applying feverishly now, I can see most Junior jobs do have Node.JS listed as a preferred skill and if 300+ people are applying, 
                    I’m willing to bet 20-40% have Node listed whether they actually know it or not.
                    So the short answer is, yes because it’s hyper-competitive in this climate.
                </p>
                <div className='flex flex-row justify-start items-center text-white'>
                    <Button>up</Button>
                    <p>4</p>
                    <Button>down</Button>

                    <Button>Reply</Button>
                    <Button>Award</Button>
                    <Button>Share</Button>
                </div>

            </div>
        </div>
        
        <div className={`ml-10 ${show?'':'hidden'}`} >
            {children}
        </div>

    </div>
  )
}

export default Message;
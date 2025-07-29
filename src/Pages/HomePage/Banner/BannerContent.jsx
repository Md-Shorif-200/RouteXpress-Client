import React from 'react';

const BannerContent = ({img,title,description}) => {
    return (
       
           <div className='banner_content w-full min-h-screen max-h-[700px] flex flex-col justify-center text-start bg-black/30' style={{backgroundImage : `url(${img})`}}>
                    <div className=' w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-full common_padding'>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold capitalize text-white'>{title} </h1>
                            <p className='capitalize my-4 text-sm sm:text-base font-medium'> {description} </p>

                            <div className="banner_btn">
                                  <button className='primary_btn '>Book Now</button>
                            </div>
                         
                    </div>
               </div>
       
    );
};

export default BannerContent;
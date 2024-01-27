import React, { useEffect, useState } from 'react';

import collage from '../../../assets/Palluyirkalam/3rd_section/Collage.png';
import { getActivity, getDoc } from '../../../api/firebase';

const ActivityEnglish = () => {
  const [activity, setActivity] = useState([]);
  const [link, setLink] = useState('');

  useEffect(() => {
    async function api() {
      const activityData = await getActivity();
      setActivity(activityData);
  
      if (activityData.activityVideo) {
        const videolink = activityData.activityVideo;
        const embedlink = videolink.split('https://youtu.be/');
        setLink(embedlink[1]);
        console.log(embedlink)
        console.log(link)
      }
    }
  
    api();
  },[]);
  
    return (
        <div className='bg-[#c6d3af] pb-10'>
            <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center py-5 xl:pt-16'>Activities</p>
            {/* <!-- ===========ACTIVITY START========= --> */}
            <div className="rounded-xl w-full lg:w-3/4 h-auto lg:h-auto mx-auto flex align-middle bg-[#c6d3af]">
                    <div className='mx-5 md:mx-auto mt-5 md:flex md:w-3/4 p-3 rounded-xl bg-[#819683]'>
                        {activity.activityImage ? <img
                            src={activity.activityImage}
                            alt="images 3"
                            className="md:w-1/2 xl:w-1/3 mx-auto object-cover"
                        /> :
                        <iframe width="560" height="315" className='md:w-1/2 xl:w-1/3 mx-auto' src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                        <p className='md:border-l-4 border-[#c6d3af] text-bold text-lg lg:text-xl xl:text-2xl ml-10 text-white text-center px-5 py-5 my-auto'>{activity.activityName}</p>
                    </div>

            </div>
            {/* <!-- ===========ACTIVITY END========= --> */}

            <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center mt-16 pt-2'>PalluyirKalam</p>
            <div className='mt-10  grid grid-cols-1 2xl:grid-cols-2 gap-3  w-3/4 mx-auto'>
                {/* Collage Image and About PalluyirKalam */}
                <div className='flex'>
                    <img src={collage} alt="collage" className='mx-auto w-3/5 2xl:w-full my-auto p-2' />
                </div>
                <div className='flex mx-auto w-3/4 2xl:w-full'>
                    {/*PalluyirKalam Brief Explanation*/}
                    <div className='text-center  2xl:border-l-4 2xl:text-start  border-black text-[18x] 2xl:text-lg font-bold 2xl:pl-10 2xl:p-5 my-auto capitalize'><p>The scheme designed for agriculture also generates commercial income from various agriculture related activities.</p>
                        <p className='mt-5'>At the same time our members are not only focused on their profits through this land.</p>
                        <p className='mt-5'>They share their efforts to millions and millions of beings in this world.</p>
                        <p className='mt-5'>Graced Creatures repays our members in the trillions.</p>
                        <p className='mt-5'>This project is designed and established by Mr. Rajkumar Murugesan since 2020.</p>
                        <p className='mt-5'>Mr.Rajkumar Murugesan owns event management company since 1992 for corporate, wedding and other related services.</p>
                        <p className='mt-5'>He also works as a production designer / art director in the Indian film industry.</p>
                        <p className='mt-5'>He has done art direction for more than 35 films in Tamil, Hindi and Telugu along with films by leading stars.</p>
                        <p className='mt-5'>He designed this program with the aim of serving the living beings of the world.</p> </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityEnglish
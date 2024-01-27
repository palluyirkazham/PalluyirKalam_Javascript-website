import React, { useEffect, useState } from 'react';
import active from '../../assets/Palluyirkalam/2nd_section/Active_img.png';
import collage from '../../assets/Palluyirkalam/3rd_section/Collage.png';
import { getActivity, getDoc } from '../../api/firebase';

const Activities = () => {
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
            <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center py-5 xl:pt-16'>செயல்பாடுகள்</p>
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

            <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center mt-16 pt-2'>பல்லுயிர் களம்</p>
            <div className='mt-10  grid grid-cols-1 2xl:grid-cols-2 gap-3  w-3/4 mx-auto'>
                {/* Collage Image and About PalluyirKalam */}
                <div className='flex'>
                    <img src={collage} alt="collage" className='mx-auto w-3/5 2xl:w-full my-auto p-2' />
                </div>
                <div className='flex mx-auto w-3/4 2xl:w-full'>
                    {/*PalluyirKalam Brief Explanation*/}
                    <div className='text-center  2xl:border-l-4 2xl:text-start  border-black text-[18x] 2xl:text-lg font-extrabold 2xl:pl-10 2xl:p-5 my-auto'><p>விவசாயத்திற்காக வடிவமைக்கப்பட்ட திட்டம் பல்வேறு விவசாயம் தொடர்பான நடவடிக்கைகளிலிருந்து வணிக வருவாயையும் ஈட்டுகிறது.</p>
                        <p className='mt-5'>அதே நேரத்தில் எங்கள் உறுப்பினர்கள் இந்த நிலத்தின் மூலம் தங்கள் லாபத்தில் மட்டும் கவனம் செலுத்துவதில்லை.</p>
                        <p className='mt-5'>அவர்கள் தங்கள் முயற்சிகளை இந்த உலகில் உள்ள கோடிக்கணக்கான மற்றும் கோடிக்கணக்கான உயிரினங்களுக்கு பகிர்ந்து கொள்கிறார்கள்.</p>
                        <p className='mt-5'>அருளப்பட்ட உயிரினங்கள் நமது உறுப்பினர்களுக்கு டிரில்லியன் கணக்கில் திருப்பிச் செலுத்துகின்றன.</p>
                        <p className='mt-5'>இந்த திட்டம் 2020 ஆம் ஆண்டு முதல் திரு.ராஜ்குமார் முருகேசன் அவர்களால் வடிவமைக்கப்பட்டு நிறுவப்பட்டது.</p>
                        <p className='mt-5'>திரு.ராஜ்குமார் முருகேசன் 1992 ஆம் ஆண்டு முதல் கார்ப்பரேட், திருமணம் மற்றும் பிற தொடர்புடைய சேவைகளுக்கான நிகழ்வு மேலாண்மை நிறுவனத்தை வைத்திருக்கிறார்.</p>
                        <p className='mt-5'>மேலும் அவர் இந்தியத் திரைப்படத் துறையில் தயாரிப்பு வடிவமைப்பாளராக / கலை இயக்குநராகப் பணியாற்றுகிறார்.</p>
                        <p className='mt-5'> தமிழ், ஹிந்தி மற்றும் தெலுங்கு மொழிகளில் முன்னணி நட்சத்திரங்களின் திரைப்படங்களுடன் 35 க்கும் மேற்பட்ட திரைப்படங்களுக்கு கலை இயக்கம் செய்துள்ளார்.</p>
                        <p className='mt-5'>உலக உயிரினங்களுக்கு சேவை செய்யும் நோக்கில் அவர் இந்த திட்டத்தை வடிவமைத்தார்.</p> </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
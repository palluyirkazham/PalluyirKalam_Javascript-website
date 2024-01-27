import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Bgservice from '../../../assets/Palluyirkalam/4th_section/background_service.jpg'
import Logo from '../../../assets/Palluyirkalam/4th_section/Logo2.png'
import Logo1 from '../../../assets/Palluyirkalam/4th_section/Logo1.png'
import Pallikodam from '../../../assets/logo/eng_logo/Pallikoodam1.jpg'
import Ulaa from '../../../assets/logo/eng_logo/Ulaa.png'
import Kulu from '../../../assets/logo/eng_logo/kulu.jpg'
import Kaninilam from '../../../assets/logo/eng_logo/KaaniNilam.png'
import Meichalkaadu from '../../../assets/logo/Meichalkaadu.png'
import Uyir from '../../../assets/logo/eng_logo/Uyir.jpg'
import Thottam from '../../../assets/logo/eng_logo/Thottam.jpg'
import Kadai from '../../../assets/logo/eng_logo/kadai.png'

const ServicesEnglish = () => {
    const navigate = useNavigate();
    return (

        <div className="relative bg-local capitalize">

            <div className="absolute top-0 left-0 w-full h-full bg-cover" style={{ backgroundImage: `url(${Bgservice})` }}></div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            <p className='absolute text-3xl lg:text-5xl text-white font-semibold text-center mx-auto w-full pt-10 [text-shadow:_7px_10px_4px_rgb(0_0_0_/_25%)]'>Services</p>

            <div className="relative z-10 grid grid-cols-1 gap-5 md:gap-2 md:grid-cols-3 pt-32 pb-20 p-5">
                {/* PalluyirKalam Logo */}
                <div className='block md:hidden'>
                    <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex '>
                        <img src={Logo1} alt="" className=' mx-auto my-auto' />
                    </div>
                </div>

                {/* PalluyirKalam Services */}
                {/* Kaani Nilam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pr-10  xl:pb-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#E1B996] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mt-auto md:ml-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Kaaninilam Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Kaninilam} alt="School" className='rounded-full w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kaaninilam Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>(Than Jaejai Knaam Tax by Mahakavi Bharatiyar) Small Scale Organic Farming Lands for Sale (with services from tillage to marketing and other income generation schemes)</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/kaaninilam')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Ulaa */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex 2xl:pt-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#6a8275] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Ulaa Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Ulaa} alt="School" className='rounded-full w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Ulaa Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>Educational System Agritourism Local Historic Places Sightseeing & Information Teaching Site</p>
                            </div>
                        </div>
                        <div className='flex justify-center lg:mt-2 mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/ulaa')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Pallikoodam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex  xl:pl-10  xl:pb-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#8fa54f] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mt-auto md:mr-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Pallikoodam Logo */}
                            <div className='flex w-1/3 border-r-2 border-black my-auto'>
                                <img src={Pallikodam} alt="School" className='rounded-full w-full my-auto mx-auto ' />
                            </div>

                            {/* Pallikoodam Description */}
                            <div className='my-auto w-3/4 flex h-3/4 '>
                                <p className='my-auto text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>1 Day to 90 Days in Agriculture and Subsistence Livelihood - Syllabus and Practical Trainings</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/pallikoodam')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Kulu */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pl-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#c6d4af] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 my-auto rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Kulu Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Kulu} alt="School" className='rounded--xl w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kulu Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>A platform that empowers rural women to add value to agricultural produce.</p>
                            </div>
                        </div>

                        <div className='flex justify-center mt-2 mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/kulu')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* PalluyirKalam Center Logo and PalluyirKalam Font */}
                <div className='hidden md:block'>
                    <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex         '>
                        <img src={Logo} alt="" className=' mx-auto my-auto' />
                    </div>
                </div>

                {/* Kadai */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pr-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#6a8275] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  my-auto mx-auto md:mx-0 md:ml-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Kadai Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Kadai} alt="School" className='rounded-full w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kadai Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold px-3'>Natural effect. Product Marketing Platform.Internet Direct Business Opportunities</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/kadai')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Meichalkaadu */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex md:pr-5 xl:pr-10 md:pt-5 xl:pt-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#e0bb97] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:ml-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Meichalkaadu  Logo*/}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Meichalkaadu} alt="School" className='rounded-full w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Meichalkaadu Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>
Livestock rearing-on share basis.Integrated animal rearing industry experienced maintenance services</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/meichalkaadu')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Uyir */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex 2xl:pt-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#698275] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto mt-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Uyir Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Uyir} alt="School" className='rounded-xl w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Uyir Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold  px-3'>Plantation of trees around village, city roads and water bodies.Planting of trees. maintenance services.bird. A constant food service for other organisms</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/uyir')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>

                {/* Thottam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex md:pl-5 xl:pl-10 md:pt-5 xl:pt-10'>
                    <div className='w-[280px] py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#8fa54f] 2xl:w-3/4 h-[200px] md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mr-auto  rounded-lg'>
                        <div className='flex h-3/4'>
                            {/* Thottam Logo */}
                            <div className='flex w-5/6 border-r-2 border-black my-auto'>
                                <img src={Thottam} alt="School" className='rounded-xl w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Thottam Description*/}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto  text-[10px] md:text-[7px] xl:text-[10px] font-bold px-3'>Setting up a terraced garden, providing proper storage material. Maintaining urban kitchen garden resource sharing</p>
                            </div>
                        </div>

                        <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <button onClick={() => navigate('/thottam')} className='text-sm my-auto text-white'>Learn More</button>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default ServicesEnglish
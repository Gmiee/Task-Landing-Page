import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import img1 from '../assets/img1.png'
const Faq = () => {
    return (
        <>
            <>
                <div className='germany text-sm md:text-4xl text-blue-900 font-bold flex justify-start md:mx-[20rem] mx-10 py-14 flex-col'>
                    <p className='my-7 capitalize'>FAQs</p>
                    <div className="accordian">
                        <Accordion defaultIndex={[0]} allowMultiple className='gap-2'>
                            <AccordionItem className=''>
                                <h2>
                                    <AccordionButton className=''>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                            Who is eligible to apply for the Germany Job Seeker Visa?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base text-wrap'>
                                    Indian nationals who hold a recognized university degree and have relevant qualifications and work experience are eligible to apply for <br />
                                    the Germany Job Seeker Visa.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        Can I bring my family with me on a Job Seeker Visa?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        How can I apply for the Germany Job Seeker Visa from India?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        Can I work in Germany with a Job Seeker Visa?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        Can I extend my stay if I find a job within the six months?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        Can I apply for work visa from India in Germany with a Job Seeker Visa?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        What are the advantages of applying for a Work Visa in Germany for Indians?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='text-white bg-blue-900 text-base p-2 border-white'>
                                        what is the processing time for a Job Seeker Visa?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-blue-900 bg-white text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div className="img">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Faq

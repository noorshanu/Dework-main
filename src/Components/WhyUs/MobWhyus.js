import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'

import { Pagination } from "swiper";
function MobWhyus() {
  return (
    <>
    <div className="container-fluid mob-why-swiper ">
        <div className="why-us-head text-center">
          <h1>Why Deelance</h1>
        </div>
    <div className='why-us-box'>
    
            <div className='row justify-content-center align-items-center'>
            <div className="col-md-3 col-12">
              <div className="content">
                <div className="border-down">
                  <p>Client Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Freelancer Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Withdrawal Fee</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Decentralized</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Content Ownership</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Efficient Escrow</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>No Limit on task size</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>scalable dispute system</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>NFT / Metaverse</p>
                  <hr />
                </div>
                <div className="border-down">
                  <p>Staff Recruitment</p>
                  <hr />
                </div>
                
              </div>
            </div>
            </div>

           <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div className='row justify-content-center align-items-center'>
            <div className="col-md-2 col-6">
              <div className="content-2 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/logo-white_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672338028484"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>2%</p>
                  <hr />
                </div>
                <div className="">
                  <p>10%</p>
                  <hr />
                </div>
                <div className="">
                  <p>Crypto/Instant</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
                <div className="">
                  <p>Yes</p>
                  <hr />
                </div>
              </div>
            </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row justify-content-center align-items-center'>
        <div className="col-md-2 col-6">
              <div className="content-3 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672314856661"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>3%</p>
                  <hr />
                </div>
                <div className="">
                  <p>10%</p>
                  <hr />
                </div>
                <div className="short-dis">
                  <p>Min payout $100</p>
                  <p>(2.75% fee for withdrawal for currency conversion)</p>
                  <hr />
                </div>
                <div className="">
                  <p className='cross'><MdOutlineCancel/></p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No/partial</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
              </div>
            </div>
           
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row  justify-content-center align-items-center'>
        <div className="col-md-2 col-6">
              <div className="content-3 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Upwork_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672338028457"
                    alt=""
                  />
                </div>
                <div className="up-work">
                  <p style={{marginBottom:'0px'}}>3.5%</p>
                  {/* <p className="each">(Each milestone)</p> */}
                  <hr />
                </div>
                <div className="">
                  <p>20%</p>
                  <hr />
                </div>
                <div className="short-dis">
                  <p>Min payout $100</p>
                  <p>(5% fee for withdrawal for currency conversion)</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No/partial</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
              </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='row  justify-content-center align-items-center'>
        <div className="col-md-2 col-6">
              <div className="content-3 text-center">
                <div className="why-content-img-head">
                  <img
                    src="https://ik.imagekit.io/cforcrypto/Dework/Fiverr_New_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672314856553"
                    alt=""
                  />
                </div>
                <div className="up-work">
                  <p style={{marginBottom:'0px'}}>3.5%</p>
                  {/* <p className="each">(Each milestone)</p> */}
                  <hr />
                </div>
                <div className="">
                  <p>20%</p>
                  <hr />
                </div>
                <div className="short-dis">
                  <p>Min payout $100</p>
                  <p>(5% fee for withdrawal for currency conversion)</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No/partial</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
                <div className="">
                  <p>No</p>
                  <hr />
                </div>
              </div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default MobWhyus
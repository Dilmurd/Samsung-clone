import React from 'react'
import Mobile from '../mobile/Mobile'
import rasm from "../../assets/s2.jpg"


function Main() {
  return (
    <>
    <Mobile
    title="Mobile & Computing"
    ul="Galaxy S24 Ultra"
    ul2="Galaxy Z Fold6"
    ul3="Galaxy Z Flip6"
    ul4="Galaxy Tab S10 Series"
    ul5="Galaxy Watch Ultra"
    img= "https://static.vecteezy.com/system/resources/previews/035/572/095/non_2x/samsung-galaxy-s23-ultra-black-transparent-image-free-png.png"
    inf="Galaxy S24 Ultra"
    btn="Learn more"
    btn2="Buy now"
    />
    <Mobile
    classn="wra"
    title="TV & Audio"
    ul="Neo QLED 8K QN900D"
    ul2="OLED S95D 77"
    ul3="Q990D soundbar"
    img="ok"
    inf="Let's make this super clear"
    inff="inf"
    btns="btns"
    style="#fff"
    btn="Learn more"
    btn2="Buy now"
    />

    <Mobile
    bg="#ddd"
    title="Home Appliances"
    ul="Early Black Friday"
    ul2="Refrigerators"
    ul3="Bespoke Laundry"
    ul4="Cooking Power Pair"
    img= "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/bespoke/rf23db9900qdaa/RF23DB9900QD_08_Stainless_Steel_SCOM.jpg?$product-details-jpg$"
    inf="Get the best deals of the season"
    btn="Shop Now"
    btn2="Buy now"
    />
    </>
  )
}

export default Main
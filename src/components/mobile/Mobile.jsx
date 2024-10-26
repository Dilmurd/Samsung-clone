import React from 'react'
import "./Mobile.scss"



function Mobile({title,ul,ul2,ul3,ul4,ul5,img,inf,btn,btn2,classn,inff,btns,style,bg}) {
  return (
    <main>
        <section className="mobile">
            <div className="container">
                <div className="wrapper" id={classn} style={{background:[bg]}}>
                    <p className='title' style={{color:[style]}}>{title}</p>
                    <ul className='collection'style={{color: [style]}}>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul}</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul2}</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul2}</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul3}</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul4}</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a href="#" className="link">
                                <span>{ul5}</span>
                            </a>
                        </li>
                    </ul>
                    <img src={img} className={img} alt=""/>   
                    <p className='inf' id={inff}>{inf}</p>
                    <div  className='btns' id={btns}>
                        <button>{btn}</button>
                        <button>{btn2}</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Mobile
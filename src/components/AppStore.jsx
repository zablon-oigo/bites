import React from 'react'
import appStore from '../assets/app_store.png'
import playStore from '../assets/play_store.png'
import gif from '../assets/mobile_bike.gif'
function AppStore() {
  return (
    <div>
        <div className="dark:bg-gray-900 dark:text-white bg-gray min-h-[400px] py-14">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 className="text-3xl text-center md:text-left font-semibold dark:text-gray-400 text-gray-700">
                            Food is available for Android and IOS
                        </h1>
                        <div className="flex flex-wrap justify-center md:justify-start items-center">
                            <a href=""><img src={appStore} alt="" className="max-w-[150px] md:max-w-[200px]" /></a>
                            <a href=""><img src={playStore} alt="" className="max-w-[150px] md:max-w-[200px]" /></a>
                        </div>
                    </div>
                    <div className="">
                        <img src={gif} alt="" className="max-w-[400px] mx-auto rounded object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AppStore
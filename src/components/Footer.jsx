import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-12 px-8 lg:px-24 xl:px-48 mt-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* SuperMetrics Logo and Social Icons */}
                    <div>
                        <a href="/" className="text-xl font-bold text-gray-800">SuperMetrics.com</a>
                        <div className="flex space-x-4 mt-4">
                            {/* <img src={icon} alt="" /> */}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h6 className="font-semibold text-gray-400 mb-2">Products</h6>
                        {/* <img src={dot} alt="" className='py-2' /> */}

                        <ul className="text-gray-600 space-y-1">
                            <li><a href="#" className="hover:text-gray-800 font-medium">Integrations</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Analytics</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Workspace</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Embed Charts</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">DataStudio</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Google add-on</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h6 className="font-semibold text-gray-400 mb-2">Resources</h6>
                        {/* <img src={dot} alt="" className='py-2' /> */}

                        <ul className="text-gray-600 space-y-1">
                            <li><a href="#" className="hover:text-gray-800 font-medium">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Changelog</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Knowledge base</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="font-semibold text-gray-400 mb-2">Legal</h6>
                        {/* <img src={dot} alt="" className='py-2' /> */}
                        <ul className="text-gray-600 space-y-1">
                            <li><a href="#" className="hover:text-gray-800 font-medium">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-gray-800 font-medium">Terms & Conditions</a></li>
                        </ul>
                        <a href="#" className="mt-4 inline-flex items-center gap-4 text-blue-500 hover:text-blue-700 border border-slate-300 bg-white p-2 rounded-xl">
                            {/* <img src={google} alt="" /> */}
                            Google add-on
                            {/* <img src={link} alt="" /> */}
                        </a>
                    </div>
                </div>

                <p className="mt-4 text-gray-500 text-sm text-center">Copyright 2024 © SuperMetrics.com</p>
                {/* Bottom SuperMetrics Text with Gradient */}
                {/* <div className="text-center"> */}
                {/* <div className="bg-gradient-to-b from-gray-300 to-gray-100 inline-block px-4 py-1 rounded-md"> */}
                <span className="md:text-[10rem] font-bold text-transparent bg-clip-text text-center flex justify-center "
                    style={{
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(156, 163, 175, 0.4), rgba(255, 255, 255, 1))",
                    }}
                >
                    SuperMetrics
                </span>
                {/* </div> */}
                {/* </div> */}
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react'
import { motion } from "framer-motion";
import { FaPen,FaWallet,FaQrcode} from "react-icons/fa";

const functions=[
    {
        title:"Create Account",
        description:"Get Three day free trial create instance to get your instance ID and Token",
        icon:<FaPen className="text-3xl text-green-600"/>
    },{
      title: "Scan QR",
      description:
        "Scan QR to authenticate your instance to send messages via your WhatsApp number",
      icon: <FaQrcode className="text-green-600 text-3xl" />,
    },
    {
      title: "Start Sending messages",
      description:
        "Start sending messages via API with your favorite programming languages",
      icon: <FaWallet  className="text-green-600 text-3xl" />,
    },
  ];


export default function Function (){
  return (
   
  <section className="bg-white-200 py-20 text-center px-4">
    <h2 className="text-4xl font-extrabold sm:text-2xl>">
        Ready to Get Started!</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10">
        {functions.map((functions, index) => (
          <React.Fragment key={functions.title}>
            <motion.div
              className="flex flex-col items-center max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-30 h-30 flex items-center justify-center rounded-full border-2 border-dotted border-green-900 mb-4">
                {functions.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-black ">
                {functions.title}
              </h3>
              <p className="text-gray-900  text-sm">{functions.description}</p>
            </motion.div>

            {index < functions.length - 1 && (
              <HiOutlineChevronRight className="text-3xl text-gray-500 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


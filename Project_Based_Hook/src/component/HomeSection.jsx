import React, { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
function HomeSection() {

    const [home , setHome] = useState(false)

    const btnClich = ()=>{
       setHome(true)
    }

    const Alert = ({ message, type, onClose }) => {
        const alertTypeClass = type === 'error' ? 'bg-red-100 text-red-700 border-red-400' : 'bg-[#55F] text-white border-green-400';
      
        return (
          <div className={`fixed  justify-center h-[300px] w-[700px] ${alertTypeClass}`}>
            <div className=' flex justify-end top-2 right-10 me-2 pt-4'>
                <button onClick={onClose} className="text-lg font-bold">
                &times;
              </button>
              </div>
            <div className="flex justify-between items-center p-10 mt-10">
                <div className=' justify-center'>
                     <p className='text-4xl font-bold '>Welcome to MyApp! To get started  </p>
               <p> with our platform, simply click the 'Get Started' button below. If you're
                 looking for more information about our features and offerings, click 'Full Details' for an in-depth overview.</p></div>
            
            </div>
          </div>
        );
      };

      const [showAlert, setShowAlert] = useState(false);

      useEffect(() => {
        if(home == true) {
        
        const timer = setTimeout(() => {
          setShowAlert(true);
          const hideAlertTimer = setTimeout(() => {
            setShowAlert(false);
          }, 8000); // Hide alert after 1 second
    
          // Cleanup hideAlertTimer if the component is unmounted before the timer completes
          return () => clearTimeout(hideAlertTimer);
        }, 1000); // Show alert after 1 second
    
        // Cleanup timer if the component is unmounted before the timer completes
        return () => clearTimeout(timer);
      }
      }, [home]);
  return (
    <div className="p-4">
    
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
        Discover the amazing features we have to offer. Get started with a seamless experience.
      </p>
      <div className="flex space-x-4">
        <Link to='contact'  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         
          Get Started
        </Link>
        <button  onClick={btnClich} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Learn More
        </button>
      </div>
      {showAlert && (
        <Alert 
         
          onClose={() => setShowAlert(false)}
        />
      )}
    </section>
  </div>
  )
}

export default HomeSection

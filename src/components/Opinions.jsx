import customer1 from '../assets/Customers/customer-1.jpg'
import customer2 from '../assets/Customers/customer-2.jpg'
import start from '../assets/Customers/start.png'


function Opinions () {

    /*
  #9fffcb
  #25a18e
  #7ae582

  #00a5cf
  */ 
    return(
        <div id="opinions_section" className="h-[90vh] w-full flex flex-col justify-center items-center">
            <h1 className="text-[30px] font-sans font-semibold text-[#5f5f5f]">Lo que dicen <span className='bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-extrabold'>nuestros </span>clientes</h1>
            <p className="text-[#5f5f5f] md:text-[15px] text-[10px] pl-[10px] pr-[10px] w-[50%] text-center">nuestros clientes satisfechos sobre las experiencias excepcionales con nosotros.</p>
            <div className="h-[50%] md:w-[50%] sm:w-[90%] flex flex-row justify-center items-center bg-[#e4e4e4] rounded-[10px]">
                <div className="h-[100%] w-[50%] flex flex-col justify-center items-center">
                    <img src={customer1} className="md:h-[100px] h-[70px] md:w-[100px] w-[70px] rounded-full" alt="customer" />
                    <p className="font-sans font-semibold text-[#707070] md:text-[12px] text-[10px] pl-[10px] pr-[10px] w-[90%]">"La mejor hamburguesa que he probado en mucho tiempo. ¡Volveré pronto!"</p>
                    <div className='flex flex-row'>
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                    </div>
                    <h1 className="text-[#707070] font-sans font-semibold">Maia Moore - Facebook</h1>
                </div>
                <div className="h-[100%] w-[50%] flex flex-col justify-center items-center">
                    <img src={customer2} className="md:h-[100px] h-[70px] md:w-[100px] w-[70px] rounded-full" alt="customer" />
                    <p className="font-sans font-semibold text-[#707070] md:text-[12px] text-[10px] pl-[10px] pr-[10px] w-[90%]">"El servicio fue impecable y la comida estaba deliciosa. ¡Altamente recomendado!"</p>
                    <div className='flex flex-row'>
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                        <img src={start} className="h-[15px] w-[15px] mr-[10px]" alt="start" />
                    </div>
                    <h1 className="text-[#707070] font-sans font-semibold">Marc Goddard - Instagram</h1>
                </div>
            </div>  
            <button className='bg-[#7ae582] rounded-[10px] p-[5px] mt-[20px] font-sans font-semibold text-[#5f5f5f]'>Sigue Nuestras Redes</button>      
        </div>
    )
}


export default Opinions
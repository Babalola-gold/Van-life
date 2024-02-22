import img from '../assets/image 64.png';

const About = () => {
    return (
        <div >
            <div className='container' style={{ margin: 'auto', width: '80%' }}>
                <img src={img} alt="" srcset="" className="w-full" />
            </div>
            <div className="p-5">
                <h1 className=" text-2xl font-bold font-sans  text-center"  style={{ margin: 'auto', width: '100%', fontSize:'28px' }}>
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="p-5 my-5" style={{ margin: 'auto', width: '70%' }}>
                    Our mission is to enliven your road trip with the perfect travel van
                    rental. Our vans are recertified before each trip to ensure your
                    travel plans can go off without a hitch. (Hitch costs extra 😉)
                    <br />
                    <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic
                    of touring the world on 4 wheels.
                </p>
            </div>

            <div className="p-5 my-10 bg-orange-200 mb-20" style={{ margin: 'auto', width: '70%' }}>
                <p className="  fs-5" style={{ fontWeight: '700' }}>
                    Your destination is waiting,
                </p>
                <p className=" fs-5 " style={{ fontWeight: '700' }}>
                    Your van is ready.
                </p>
                <button className="bg-black text-white rounded-xl font-bold text-1xl my-3 p-3">Explore out vans</button>
            </div>
        </div>

    )
}

export default About
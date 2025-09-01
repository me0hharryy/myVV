import icon1 from '../assets/Objective.png'
const Objective = () => {
    const objectives = [
        {
            icon: icon1,
            title: 'Objective 1',
            description: 'description 1'
        },
        {
            icon: icon1,
            title: 'Objective 2',
            description: 'description 2'
        },
        {
            icon: icon1,
            title: 'Objective 3',
            description: 'description 3'
        },
        {
            icon: icon1,
            title: 'Objective 4',
            description: 'description 4'
        },
        {
            icon: icon1,
            title: 'Objective 5',
            description: 'description 5'
        },
        {
            icon: icon1,
            title: 'Objective 6',
            description: 'description 6'
        },
        {
            icon: icon1,
            title: 'Objective 7',
            description: 'description 7'
        }
    ];

    return (
        <section className="py-20 bg-rose-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest mb-7">
            Goals & Aims
          </h2>
              <div className='flex text-center justify-center'>
                <h2 className="text-4xl font-bold text-slate-800 mb-12 open-sans-hharryy">Our</h2>
                <h2 className="text-4xl font-bold text-rose-800 mb-12 edu-nsw-act-cursive-hharryy">Objectives</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {objectives.map((obj, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg ">
                            <img src={obj.icon} className="w-16 h-16 mx-auto"></img>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{obj.title}</h3>
                            <p className="text-gray-600">{obj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Objective;
import Image from 'next/image';

const events = [
    
    {
        title: "Évadnyitó",
        date: "Május",
        description: "",
        image: "/sail_race3.jpg"
    },
    {
        title: "Pünkösdi regatta",
        date: "Május",
        description: "A háromnapos vitorlás találkozó a Kékszalag után a második legnagyobb balatoni túraverseny, Balatonföldvárról Keszthelyig vitorlázik el a mezőny.",
        image: "/sail_race2.jpg"
    },
    {
        title: "Kék szalag",
        date: "Július",
        description: "A balatoni Kékszalag nemzetközi távolsági vitorlásverseny, a tavat megkerülő és évente megrendezésre kerülő sportesemény, amelyen közel harmincféle hajóosztályban hirdetnek eredményt az alapvetően túra jellegű hajók között.",
        image: "/sail_race2.jpg"
    },
    {
        title: "Pacal kupa",
        date: "Augusztus",
        description: "A Pacal kupa minden évben megrendezésre kerül, ahol a legjobb pacalosok mérhetik össze tudásukat.",
        image: "/sail_race.jpg"
    },
    {
        title: "Évadzáró vitorlás verseny",
        date: "Szeptember",
        description: "Verseny a kiírt kupák elnyeréséért a Balaton Keszthely-Zalatorok-Balatonberény-Vonyarcvashegy által határolt vízfelületen.",
        image: "/sail_race4.jpg"
    },
];

const Events = function Events() {
    return (
        events && (
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
                <div id="events" className="w-full my-10">
                    <h1 className="text-4xl font-bold mb-4 text-blue-950">Állandó eseményeink</h1>

                    {
                        events.map((event, index) => (
                            <div key={index} className={`flex my-10 flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden w-1/3 md:inline-block">
                                    <Image src={event.image} width={400} height={400} alt={event.image} />
                                </div>
                                <div className={`flex-col md:w-2/3 ${index % 2 == 0 ? 'md:ps-24' : ''}`}>
                                    <h2 className="text-2xl text-blue-950 font-bold">{event.title}</h2>
                                    <hr />
                                    <p className="text-gray-500 my-2 flex text-lg">
                                        <Image src="/calendar.svg" width={24} height={24} className="mr-3" alt="calendar" />
                                        {event.date}
                                    </p>
                                    <p className="text-lg">{event.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    );
};

export default Events;
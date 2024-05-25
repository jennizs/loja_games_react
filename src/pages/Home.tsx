


function Home() {
    return (
        <>
            <div className=" bg-[#fca5a5] flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde a JennizsGames!</h2>
                        <p className="text-lg">Os Melhores Jogos você encontra aqui!</p>
                        <div className="flex justify-around gap-4">
                            <button className="
                                rounded
                                text-white
                                border-white
                                border-solid
                                border-2
                                py-2
                                px-4
                                hover:bg-white
                                hover:text-indigo-900                                
                                ">
                                Produtos
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/cartoon-game-streamer-concept-elements_52683-60403.jpg"
                            alt=""
                            className="w-2/3 rounded-full" />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;

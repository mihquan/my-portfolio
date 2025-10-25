import profile from "../assets/profile.jpg"

function HeroSection() {
    return(
        <section className="flex items-center justify-center gap-4 h-screen     ">
            <div className="flex flex-col items-center">
                <h1>Hi, My name is Minh Quan</h1>
                <h2>I am a webapp developer from Vietnam</h2>
                <div>
                    <button className="bg-primary m-2 p-2 rounded-xl text-secondary border hover:text-text-secondary/50 transition">
                        View my work
                    </button>
                    <button className="bg-secondary m-2 p-2 rounded-xl text-primary hover:bg-secondary/50 transition">
                        Contact me
                    </button>
                </div>
            </div>
            <div>
                <img
                    src={profile} alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-border-color"
                />
            </div>
        </section>
    )
}

export default HeroSection;
import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        I’m a passionate college student and web developer with hands-on experience in building dynamic, responsive, and user-friendly websites. Over the past 2 years, I’ve worked on projects using HTML, CSS, JavaScript, React, and Node.js, and I’m always exploring new tools to stay updated with modern web trends.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy solving real-world problems through clean and efficient code, and I’m eager to collaborate on innovative projects. My goal is to grow as a full-stack developer and contribute to impactful solutions in the tech industry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='size-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Building responsive and dynamic websites using modern technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className='size-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className='size-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Collaboration </h4>
                                <p className="text-muted-foreground">Contributing to projects from planning to deployment while working effectively in teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
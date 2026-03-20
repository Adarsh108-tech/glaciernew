"use client";

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  FaHandsHelping,
  FaBalanceScale,
  FaPeopleArrows,
  FaPaintBrush,
  FaMountain,
  FaTemperatureHigh,
  FaWater,
  FaPeopleCarry,
  FaTractor,
  FaExclamationTriangle,
  FaGlobeAmericas,
  FaSeedling,
  FaUsers,
  FaGlobe,
  FaEye, FaBullseye , FaTint, FaBookOpen, FaMagic , FaLeaf
} from "react-icons/fa";
import Link from "next/link";
import { Landmark, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GapsSection from "@/components/GapsWeAreAdressing";
import GlacierTeam from "@/components/gaurdians";
import HowWeWorkSection from "@/components/howWeWork";
import ProgramsInActionSection from "@/components/programsInAction";

export default function HomePage() {

  const goals = [
  {
    title: "A Cryosphere Justice Framework",
    desc: "Glaciers legally and culturally protected in 10+ countries.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.webp",
  },
  {
    title: "Cryosphere Pedagogy & Education",
    desc: "Embedded in school systems worldwide.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.jpg",
  },
  {
    title: "Real-time Glacier Monitoring",
    desc: "Publicly accessible data for all.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.jpg",
  },
  {
    title: "Global Glacier Guardians Network",
    desc: "Mobilizing 100,000+ individuals across continents.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.jpg",
  },
  {
    title: "Glaciers Resacralized",
    desc: "Through art, ritual, memory, and community initiatives.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.jpg",
  },
  {
    title: "Humanity & Glaciers",
    desc: "A relationship built on reverence and reciprocity.",
    image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.jpg",
  },
];
  const [isScrolled, setIsScrolled] = useState(false);

  const stats = [
  {
    icon: <FaTemperatureHigh className="text-2xl text-glacier-primary" />,
    label: "3x Faster Warming",
    desc: "The Cryosphere is warming three times faster than the global average, signaling an urgent climate crisis.",
  },
  {
    icon: <FaWater className="text-2xl text-glacier-primary" />,
    label: "50% Melt by 2100",
    desc: "Half of the world's glaciers could disappear by 2100, threatening ecosystems, water supplies, and sea levels.",
  },
  {
    icon: <FaMountain className="text-2xl text-glacier-primary" />,
    label: "Himalayan Ice Loss",
    desc: "Himalayan glaciers have lost over 40% of their ice volume since 2000, destabilizing regional water systems.",
  },
  {
    icon: <FaPeopleCarry className="text-2xl text-glacier-primary" />,
    label: "2 Billion Lives at Risk",
    desc: "Over 2 billion people rely on glacier-fed rivers like the Ganges, Indus, Brahmaputra, and Yangtze for water and food.",
  },
  {
    icon: <FaTractor className="text-2xl text-glacier-primary" />,
    label: "Disrupted Livelihoods",
    desc: "Glacier retreat disrupts agriculture, hydropower generation, and water security, especially in vulnerable regions.",
  },
  {
    icon: <FaExclamationTriangle className="text-2xl text-glacier-primary" />,
    label: "Glacial Flood Threat",
    desc: "Glacial lake outburst floods (GLOFs) are increasing in frequency, putting lives, infrastructure, and economies at risk.",
  },
  {
    icon: <FaGlobeAmericas className="text-2xl text-glacier-primary" />,
    label: "Albedo Loss",
    desc: "Melting glaciers reduce Earth's reflectivity (albedo), causing the planet to absorb more heat and warm even faster.",
  },
  {
    icon: <FaLeaf className="text-2xl text-glacier-primary" />,
    label: "Ecological & Cultural Loss",
    desc: "Fragile mountain ecosystems are collapsing, and Indigenous cultures rooted in the cryosphere are eroding rapidly.",
  },
];



useEffect(() => {
  const onScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  window.addEventListener("scroll", onScroll);

  const video = document.getElementById("hero-video");
  if (video) {
    video.playbackRate = 0.7;
  }

  // ✅ Auto scroll to hash on page load
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // small delay for layout readiness
    }
  }

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const Button = ({ children, variant = "solid", className = "" }) => {
    const base = "px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105"; // More prominent buttons
    const styles = {
      solid: "bg-glacier-primary text-white hover:bg-glacier-dark shadow-lg",
      outline:
        "border-2 border-glacier-primary text-glacier-primary hover:bg-glacier-primary hover:text-white shadow-md",
    };
    return (
      <button className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </button>
    );
  };

  const SectionHeader = ({ title, description, isLightBackground = true }) => (
    <div className="text-center mb-16">
      <h2 className={`text-xl md:text-5xl font-nohemi font-bold mb-4 ${isLightBackground ? 'text-glacier-primary' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isLightBackground ? 'text-glacier-dark' : 'text-glacier-light'}`}>
          {description}
        </p>
      )}
    </div>
  );

  const ParallaxBackground = ({ imageUrl, children }) => (
    <div
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-glacier-dark/60"></div> {/* Dark overlay for readability */}
      <div className="relative z-10 py-24 px-6 md:px-16 text-white">
        {children}
      </div>
    </div>
  );


  return (
    <div className="bg-glacier-light text-glacier-dark">
      <Navbar />

      {/* Hero Banner */}
      <HeroSection/>

      


     {/* Parallax Section 1: Cryosphere Background */}
<section
  id="crisis"
  className="relative py-20 px-6 md:px-16 bg-glacier-dark text-glacier-light overflow-hidden"
>
  {/* 🔷 Decorative clipped image – top right */}
    <img
    src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img1.webp"
    alt=""
    className="absolute inset-0 m-auto w-96 md:w-[32rem] opacity-10 object-cover pointer-events-none"
    style={{
      clipPath: "polygon(20% 0%, 80% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)",
    }}
  />


  <div className="relative max-w-6xl mx-auto text-center z-10">
    <SectionHeader
      title="The Crisis"
      description="Glaciers are vanishing fast, threatening water, ecosystems, and life."
      isLightBackground={false}
    />

    {/* 🔹 Stats Cards */}
    <div className="grid md:grid-cols-2 gap-6 text-left mt-10 relative">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="cursor-pointer group flex items-start gap-4 p-5 bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:border-glacier-primary transition"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08 }}
          viewport={{ once: true }}
        >
          <div className="text-glacier-primary text-xl md:text-2xl">
            {stat.icon}
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-glacier-light mb-1">
              {stat.label}
            </h3>
            <p className="text-xs md:text-sm text-glacier-soft max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300">
              {stat.desc}
            </p>
          </div>
        </motion.div>
      ))}

    </div>

    {/* 🔹 Mid Image Divider */}

    {/* 🔹 Text + Side Image */}
<div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
  {/* Text */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-left"
  >
    <p className="text-sm md:text-lg leading-relaxed text-glacier-soft mb-6">
      Without glaciers, we lose
      <span className="text-glacier-light font-medium"> water</span>,
      <span className="text-glacier-light font-medium"> wisdom</span>,
      and
      <span className="text-glacier-light font-medium"> wonder</span>.
      Yet they remain invisible in policy, education, and public imagination.
    </p>

    <p className="text-sm md:text-xl leading-relaxed text-glacier-light/80 text-justify">
      <span className="text-2xl">&ldquo;</span>
      Glaciers store the world&#39;s freshwater, cool the planet, and sustain life.
      Their rapid disappearance is not just a climate crisis — it&#39;s a life
      crisis. The Voice of Glaciers Foundation exists to protect what remains,
      before silence replaces ice.
      <span className="text-2xl">&rdquo;</span>
    </p>
  </motion.div>

  {/* Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex justify-center md:justify-end"
  >
    <img
      src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img1.webp"
      alt="Glacier Detail"
      className="w-64 md:w-80 object-cover shadow-xl"
      style={{
        clipPath: "polygon(10% 0%, 90% 10%, 100% 90%, 20% 100%, 0% 40%)",
      }}
    />
  </motion.div>
</div>

  </div>
</section>

 {/* TVGF’s North Star & Core Values */}
      <section id="north-star" className="py-20 px-6 md:px-16 bg-glacier-light text-glacier-dark rounded-b-lg">

  {/* Main content on top of snow */}
      <div className="relative duration-1000">

  <SectionHeader
    title="TVGF's North Star: Goals by 2035"
    description="By 2035, we envision a world transformed in its relationship with glaciers."
    isLightBackground={true}
  />

  {/* Two Column Layout */}
  <div className="mt-14 grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT — Goals */}
    <ul className="space-y-8 md:text-lg text-sm">
      {goals.map((goal, index) => (
        <li
          key={index}
          className="group relative border-l-4 border-glacier-primary pl-6"
        >
          <div className="font-semibold text-glacier-primary">
            {goal.title}
          </div>

          <motion.div
            className="mt-2 text-glacier-dark/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            {goal.desc}
          </motion.div>
        </li>
      ))}
    </ul>

    {/* RIGHT — Vision Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative md:sticky md:top-28 flex justify-center"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
        alt="Glacier mountain landscape"
        className="shadow-lg w-full max-w-md object-cover"
      />

    </motion.div>

  </div>
</div>


  <div className="relative z-10 max-w-6xl mx-auto">

    <GlacierTeam/>

          {/* Core Values Grid (unchanged) */}
          <div className="mt-0" id="core-values">
            <h3 className="text-3xl font-bold text-glacier-primary mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {(() => {
                const coreValues = [
                  {
                    name: "Collaboration",
                    desc: "Bridging diverse disciplines and cultures for collective impact.",
                    icon: FaHandsHelping,
                  },
                  {
                    name: "Integrity",
                    desc: "Grounded in robust scientific evidence and deep community respect.",
                    icon: FaBalanceScale,
                  },
                  {
                    name: "Equity",
                    desc: "Uplifting indigenous wisdom and empowering local leadership.",
                    icon: FaPeopleArrows,
                  },
                  {
                    name: "Creativity",
                    desc: "Driving change through storytelling, science, and co-created art.",
                    icon: FaPaintBrush,
                  },
                  {
                    name: "Resilience",
                    desc: "Fostering long-term glacier guardianships and adaptive strategies.",
                    icon: FaMountain,
                  },
                  {
                    name: "Transparency",
                    desc: "Operating with open governance and unwavering accountability.",
                    icon: FaEye,
                  },
                ];
                return coreValues.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="p-6 bg-glacier-soft rounded-xl shadow-sm text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <Icon className="text-3xl text-glacier-primary mb-3 mx-auto" />
                      <h4 className="font-bold text-xl text-glacier-dark mb-2">
                        {value.name}
                      </h4>
                      <p className="text-sm text-glacier-dark/80">{value.desc}</p>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>

        </div>
      </section>


{/* how we work */}
<HowWeWorkSection/>

{/* Join the Movement CTA */}
<section className="relative py-24 px-6 md:px-16 overflow-hidden text-white">
  
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/AnuragMaloo.mp4" 
      type="video/mp4"
    />
  </video>

  {/* Glacier Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-glacier-primary/50 to-glacier-dark/50" />

  {/* Content Container */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT – Team Image */}
    <div className="flex flex-col justify-center md:justify-start">
        <div className="w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-glacier-primary shadow-xl mb-3">
          <img
            src="https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/hero-image.webp"
            alt="Anurag Maloo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold">Anurag Maloo</p>
        <p className="text-glacier-soft text-sm italic mb-3">Founder</p>
        <Link href="/story">
          <Button className="hover:bg-glacier-primary hover:text-white transition duration-300">
            Watch Anurag&apos;s Story
          </Button>
        </Link>
    </div>

    {/* RIGHT – CTA Content */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        Join the Movement
      </h2>

      <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        Join researchers, storytellers, communities, and leaders working to
        protect glaciers and the people who depend on them.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        <Button className="bg-glacier-dark font-semibold hover:bg-glacier-soft transition">
          <Link href="/collaborate">Get Involved</Link>
        </Button>

        <Button className="bg-glacier-dark  font-semibold hover:bg-glacier-soft transition">
          <Link href="/media">Explore our Media</Link>
        </Button>
      </div>
    </div>

  </div>
</section>
     
 
      

      <Footer/>
    </div>
  );
}
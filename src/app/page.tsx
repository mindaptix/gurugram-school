"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/3.png",
    title: "Best DPS School for Nursery to Class 12 in Gurugram",
  },
];

const academicPrograms = [
  {
    title: "Early Childhood Centre",
    classes: "Preschool - Grade 2",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Elementary School",
    classes: "Grade 3 - 6",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Middle School",
    classes: "Grade 7 - 9",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "High School",
    classes: "Grade 10 - 12",
    image:
      "https://images.unsplash.com/photo-1577896852618-9f29b3fcb9d6?auto=format&fit=crop&w=1400&q=85",
  },
];

const programCardThemes = [
  {
    shell: "bg-transparent",
    bottom: "bg-[#07233e]/88",
    bottomHeight: "group-hover:h-[76%]",
    bottomText: "text-white",
    label: "text-white/90",
    arrow: "text-white",
    accent: "",
    accentPositions: [],
    imageOverlay: "bg-gradient-to-t from-[#08233e]/92 via-[#08233e]/58 to-transparent",
  },
  {
    shell: "bg-transparent",
    bottom: "bg-[#07233e]/88",
    bottomHeight: "group-hover:h-[76%]",
    bottomText: "text-white",
    label: "text-white/90",
    arrow: "text-white",
    accent: "",
    accentPositions: [],
    imageOverlay: "bg-gradient-to-t from-[#08233e]/92 via-[#08233e]/58 to-transparent",
  },
  {
    shell: "bg-transparent",
    bottom: "bg-[#07233e]/88",
    bottomHeight: "group-hover:h-[76%]",
    bottomText: "text-white",
    label: "text-white/90",
    arrow: "text-white",
    accent: "",
    accentPositions: [],
    imageOverlay: "bg-gradient-to-t from-[#08233e]/92 via-[#08233e]/58 to-transparent",
  },
  {
    shell: "bg-transparent",
    bottom: "bg-[#07233e]/88",
    bottomHeight: "group-hover:h-[74%]",
    bottomText: "text-white",
    label: "text-white/90",
    arrow: "text-white",
    accent: "",
    accentPositions: [],
    imageOverlay: "bg-gradient-to-t from-[#08233e]/92 via-[#08233e]/58 to-transparent",
  },
];

const trustPoints = [
  {
    title: "Academic Excellence & Board Results",
    icon: "A+",
    color: "bg-[#7b18d5]",
    accent: "bg-[#ffc64c]",
    text: "text-white",
  },
  {
    title: "Experienced & Qualified Faculty",
    icon: "T",
    color: "bg-[#05a865]",
    accent: "border-[#ffc64c]",
    text: "text-[#003b73]",
  },
  {
    title: "Smart Classrooms & Digital Learning",
    icon: "D",
    color: "bg-[#f45aa3]",
    accent: "bg-[#003b73]",
    text: "text-[#003b73]",
  },
  {
    title: "Focus on English Communication",
    icon: "EN",
    color: "bg-[#ffc64c]",
    accent: "bg-[#7b18d5]",
    text: "text-[#003b73]",
  },
  {
    title: "Sports, Arts & Co-curricular Excellence",
    icon: "S",
    color: "bg-[#096ce8]",
    accent: "border-white",
    text: "text-white",
  },
  {
    title: "Safe & Secure Campus with CCTV",
    icon: "C",
    color: "bg-[#14314a]",
    accent: "bg-[#ffc64c]",
    text: "text-white",
  },
  {
    title: "Transport Facility Available",
    icon: "B",
    color: "bg-[#ffffff]",
    accent: "border-[#096ce8]",
    text: "text-[#003b73]",
  },
];

const foundationItems = [
  {
    title: "CBSE Structured Learning",
    detail: "Curriculum-led concept building from core subjects to applied learning.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Regular Assessments",
    detail: "Frequent checks, feedback loops, and doubt-clearing support.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "JEE / NEET Foundation",
    detail: "Early competitive exam readiness through analytical practice.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Personalized Attention",
    detail: "Student-specific mentoring that strengthens confidence and clarity.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1500&q=85",
  },
];

const infrastructureItems = [
  {
    title: "Smart Classrooms",
    detail: "Technology-enabled learning spaces for engaging daily lessons.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Science & Computer Labs",
    detail: "Purpose-built labs for experiments, coding, robotics, and research.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3ae986dc?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Library & Reading Zones",
    detail: "Quiet, resource-rich spaces that build reading habits and inquiry.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Sports Grounds",
    detail: "Cricket, football, basketball, athletics, and structured sports coaching.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Auditorium & Activity Rooms",
    detail: "Performance, debate, music, dance, theatre, and activity-led learning.",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "CCTV-Enabled Campus",
    detail: "A safe, monitored campus planned around student security and care.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1500&q=85",
  },
];

const admissionSteps = [
  "Submit online enquiry or application form",
  "School counsellor connects with the parent",
  "Campus visit, interaction, and document review",
  "Admission confirmation and fee formalities",
];

const importantDates = [
  ["Applications Open", "Now Open"],
  ["Campus Interaction", "Every Week"],
  ["Session Begins", "April 2026"],
];

const galleryItems = [
  {
    title: "Classroom Learning",
    label: "Smart Classrooms",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Sports Events",
    label: "Cricket, Football & Basketball",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Cultural Programs",
    label: "Music, Dance & Theatre",
    image:
      "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Annual Day Highlights",
    label: "Stage, Awards & Celebrations",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Clubs & Activities",
    label: "Leadership Beyond Books",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=85",
  },
];

const navLinks = [
  ["Our Vision", "#about"],
  ["Learning Journey", "#academics"],
  ["The Child We Nurture", "#foundation"],
  ["Campus", "#infrastructure"],
  ["Admissions", "#admissions"],
  ["Insights", "#gallery"],
  ["Connect", "#contact"],
];

const announcementItems = [
  "Admissions Open Nursery to Grade XII",
  "Campus Visits Every Saturday",
  "Download Prospectus",
  "Transport Routes Across Gurugram",
  "Scholarship Interactions Open",
];

export default function Home() {
  const activeSlide = 0;
  const [activeInfrastructure, setActiveInfrastructure] = useState(2);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const trustRailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setIsNavbarVisible(true);
      } else if (scrollDifference > 8) {
        setIsNavbarVisible(false);
      } else if (scrollDifference < -8) {
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTrustRail = (direction: "prev" | "next") => {
    const rail = trustRailRef.current;
    if (!rail) return;

    const delta = rail.clientWidth * 0.72;
    rail.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#06264a]">
      <section className="relative min-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}

        <header
          className={`site-navbar fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="h-7 overflow-hidden border-t-[3px] border-[#3a251f] bg-[#006b37] text-[#fff200]">
            <div className="flex h-full w-max animate-[ticker-scroll_30s_linear_infinite] items-center gap-14 whitespace-nowrap text-[13px] font-black uppercase leading-none tracking-normal md:text-[15px]">
              {[...announcementItems, ...announcementItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-5">
                  {item}
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[11px] leading-none text-[#006b37]">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="border-b border-[#d2ccbb] bg-[#fffdf7] shadow-[0_2px_0_rgba(0,0,0,0.12)]">
            <div className="mx-auto flex h-[96px] max-w-[1900px] items-center justify-between gap-5 pl-3 pr-8 text-[#121827]">
              <a href="#" className="relative h-[84px] w-[320px] shrink-0 md:w-[390px]">
                <Image
                  src="/logo11.png"
                  alt="Delhi Public School SPR Gurugram logo"
                  fill
                  sizes="390px"
                  className="object-contain"
                  priority
                />
              </a>

              <nav
                className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-6"
                aria-label="Primary navigation"
              >
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="nav-link whitespace-nowrap px-1.5 py-1 text-[10.24px] font-black uppercase tracking-[0.12em] text-[#111827] transition hover:text-[#006b37]"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                className="inline-flex h-[40px] shrink-0 items-center justify-center rounded-full bg-[#1b3b22] px-5 text-[12px] font-black uppercase tracking-[0.1em] text-white shadow-[0_18px_38px_rgba(27,59,34,0.24)] transition hover:bg-[#006b37] 2xl:px-6"
              >
                Schedule A Visit
              </a>
            </div>
          </div>

          <nav
            className="flex gap-2 overflow-x-auto border-b border-[#d7d2bf] bg-[#fffdf7] px-4 py-2 text-[#111827] shadow-xl shadow-[#03192e]/10 xl:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="shrink-0 rounded-full border border-[#ded8c5] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#006b37] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-6 pt-40 sm:px-8 sm:pb-8 lg:px-14 lg:pb-10 lg:pt-44">
          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-6xl text-white [text-shadow:0_4px_22px_rgba(0,0,0,0.46)]">
              <h1 className="max-w-6xl text-5xl font-black leading-[1.04] tracking-normal sm:text-6xl lg:text-[86px]">
                {slides[activeSlide].title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-white sm:text-2xl">
                Excellence in Academics, Sports, and Holistic Development
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:max-w-[360px] lg:ml-auto lg:w-full lg:pb-3">
              <a
                href="#admissions"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#f6c343] px-7 text-base font-black text-[#061a33] shadow-xl shadow-black/20 transition hover:bg-white"
              >
                Admissions Open 2026-27
              </a>
              <a
                href="#tour"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/75 bg-black/35 px-7 text-base font-black text-white shadow-xl shadow-black/20 backdrop-blur-sm transition hover:bg-white hover:text-[#061a33]"
              >
                Schedule a Campus Tour
              </a>
              <a
                href="#apply"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-black text-[#003b73] shadow-xl shadow-black/20 transition hover:bg-[#eaf2ff]"
              >
                Apply Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="about-section relative isolate overflow-hidden bg-white px-5 py-24 text-[#003b73] sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute bottom-0 left-0 h-3 w-[46%] bg-[#05b982]" />
        <div className="absolute right-0 top-0 hidden h-[90px] w-[356px] bg-[#8a19d6] px-10 text-white lg:flex lg:items-center lg:justify-between">
          <span className="text-2xl font-medium">News & Events</span>
          <span className="text-5xl font-light">&#8594;</span>
        </div>

        <div className="mx-auto max-w-[1440px]">
          <p className="about-eyebrow text-[20px] font-black uppercase leading-none tracking-[0.28em] text-[#003b73] max-sm:text-sm">
            About Our DPS School
          </p>
          <h2 className="sr-only">About Our DPS School</h2>

          <div className="about-copy mt-10 max-w-[1280px] text-[47px] font-medium leading-[1.22] tracking-normal text-[#111111] max-xl:text-4xl max-md:text-3xl">
            <span className="text-[#111111]">We carry the</span>{" "}
            <span className="about-shape about-hourglass bg-[#111111]" />{" "}
            <span className="text-[#111111]">legacy of excellence under</span>{" "}
            <span className="font-black text-[#ffd400]">Delhi Public School</span>,{" "}
            <span className="text-[#111111]">shaping a</span>{" "}
            <span className="font-black text-[#a8f2c9]">Best CBSE school in Gurugram</span>{" "}
            <span className="text-[#111111]">for students from Nursery to Class 12. Our vision is holistic education where academics</span>{" "}
            <span className="about-shape about-circle bg-[#111111]" />{" "}
            <span className="text-[#111111]">
              personality development, values, discipline, and leadership grow
              together.
            </span>
          </div>

          <div className="about-grid mt-14 grid gap-5 lg:grid-cols-3">
            {[
              [
                "Holistic Mission",
                "Academic depth, confidence, communication, and character are developed together through a balanced school experience.",
              ],
              [
                "Admissions Pathway",
                "A trusted Nursery to 12th admission school for families seeking continuity, care, and strong CBSE foundations.",
              ],
              [
                "English Medium Focus",
                "A Top English medium school environment with daily emphasis on spoken English, presentation, and leadership.",
              ],
            ].map(([title, text], index) => (
              <article
                key={title}
                className="about-card group relative overflow-hidden bg-[#f4f8fc] p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#ffd400] transition duration-500 group-hover:scale-150" />
                <h3 className="relative text-2xl font-black uppercase leading-tight tracking-[0.12em] text-[#003b73]">
                  {title}
                </h3>
                <p className="relative mt-5 text-lg font-semibold leading-8 text-[#425a73]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

            <section
        id="academics"
        className="learning-journey-section relative isolate overflow-hidden bg-white px-5 pb-0 pt-4 text-[#003b73] sm:px-8 lg:px-[74px]"
      >
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#096ce8]" />
        <div className="mx-auto max-w-[1920px]">
          <div className="program-heading mx-auto text-center">
            <p className="text-[18px] font-black uppercase leading-none tracking-[0.26em] text-[#003b73] max-sm:text-[12px]">
              From Preschool To Grade 12
            </p>
            <h2 className="mt-7 text-[72px] font-black leading-none tracking-normal text-[#003b73] max-xl:text-6xl max-md:text-4xl">
              Our Learning Journey
            </h2>
          </div>

          <div className="program-grid mt-[94px] grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {academicPrograms.map((program, index) => (
              <article
                key={program.title}
                className={`program-card group relative min-h-[590px] overflow-hidden text-white transition duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(5,34,74,0.18)] ${programCardThemes[index].shell}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className={`absolute inset-0 transition duration-700 ease-out group-hover:opacity-0 ${programCardThemes[index].imageOverlay}`} />
                <div className={`absolute inset-x-0 bottom-0 h-[38%] ${programCardThemes[index].bottom}`} />

                <div className="relative flex h-full min-h-[590px] flex-col justify-end px-[38px] pb-[34px]">
                  <h3 className="max-w-[300px] whitespace-nowrap text-[24px] font-medium leading-[1.18] tracking-normal text-white transition duration-700 max-lg:max-w-full max-lg:whitespace-normal">
                    {program.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between gap-6">
                    <p className="whitespace-nowrap text-[12px] font-normal uppercase leading-none tracking-[0.16em] text-white/90 transition duration-700">
                      {program.classes}
                    </p>
                    <a
                      href="#apply"
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-[42px] font-light leading-none text-white transition duration-700 group-hover:translate-x-2"
                      aria-label={`Explore ${program.title}`}
                    >
                      &#8594;
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust"
        className="trust-section relative isolate overflow-hidden bg-white px-5 pb-10 pt-14 text-[#003b73] sm:px-8 lg:px-[18px]"
      >
        <div className="mx-auto max-w-[1720px]">
          <div className="trust-heading mx-auto max-w-[1180px] text-center">
            <p className="text-[16px] font-black uppercase leading-none tracking-[0.26em] text-[#05b982] max-sm:text-[12px]">
              DPS At A Glance
            </p>
            <h2 className="mt-6 whitespace-nowrap text-[58px] font-bold leading-none tracking-normal text-[#111111] max-xl:text-5xl max-lg:whitespace-normal max-md:text-4xl">
              Why Parents Trust Our DPS School
            </h2>
          </div>

          <div className="mt-14 grid gap-4 xl:grid-cols-[1.05fr_1.35fr]">
            <div className="trust-photo relative min-h-[540px] overflow-hidden max-xl:min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1500&q=85)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#041f3b]/72 via-[#041f3b]/30 to-transparent" />
            </div>

            <div className="min-w-0">
              <div
                ref={trustRailRef}
                className="trust-cards flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {trustPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className={`trust-card group relative min-h-[490px] w-[64vw] max-w-[360px] shrink-0 snap-start overflow-hidden ${point.color} ${point.text}`}
                    style={{ animationDelay: `${index * 95}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/10" />
                    <div className="absolute inset-x-0 top-0 h-[56%] bg-white/0" />

                    <div className="absolute right-3 top-3 h-20 w-20 opacity-95 transition duration-700 ease-out group-hover:scale-105">
                      <div className={`absolute right-0 top-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                      <div className={`absolute left-0 top-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                      <div className={`absolute right-0 bottom-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                      <div className={`absolute left-0 bottom-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                    </div>

                    <div className="relative flex min-h-[490px] flex-col justify-end p-7">
                      <div className="trust-icon mb-4 text-[60px] font-light leading-none tracking-normal">
                        {point.icon}
                      </div>
                      <h3 className="max-w-[240px] text-[21px] font-medium leading-[1.18] tracking-normal">
                        {point.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-5 max-sm:flex-col">
                <a
                  href="#apply"
                  className="inline-flex min-h-[62px] min-w-[334px] items-center justify-center rounded-full border-2 border-[#003b73] bg-white px-8 text-[15px] font-black uppercase tracking-[0.24em] text-[#003b73] transition hover:-translate-y-1 hover:bg-[#003b73] hover:text-white max-sm:min-w-0 max-sm:w-full"
                >
                  Discover More Facts <span className="ml-5 text-2xl">&#8594;</span>
                </a>

                <div className="flex gap-4 max-lg:hidden">
                  <button
                    type="button"
                    className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#003b73] text-2xl font-light leading-none text-[#003b73] transition hover:bg-[#003b73] hover:text-white"
                    aria-label="Previous fact"
                    onClick={() => scrollTrustRail("prev")}
                  >
                    &#8249;
                  </button>
                  <button
                    type="button"
                    className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#003b73] text-2xl font-light leading-none text-[#003b73] transition hover:bg-[#003b73] hover:text-white"
                    aria-label="Next fact"
                    onClick={() => scrollTrustRail("next")}
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="foundation"
        className="foundation-section relative isolate bg-[#f4f5f1] px-5 py-14 text-[#05224a] sm:px-8 lg:px-[86px] lg:py-20"
      >
        <div className="absolute left-0 top-0 h-full w-[34%] bg-white max-lg:hidden" />
        <div className="mx-auto grid max-w-[1680px] gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div className="foundation-sticky relative z-10 lg:sticky lg:top-10 lg:self-start">
            <div className="flex flex-col justify-start pb-10 pt-2 lg:pr-6 lg:pt-4">
              <p className="text-[18px] font-black uppercase leading-none tracking-[0.28em] text-[#003b73] max-sm:text-sm">
                Academic Foundation
              </p>
              <h2 className="mt-4 max-w-[680px] text-[56px] font-black uppercase leading-[0.96] tracking-normal text-[#05224a] max-xl:text-5xl max-md:text-4xl">
                Strong Academic Foundation
                <span className="block text-[#096ce8]">For Future Success</span>
              </h2>
              <p className="mt-5 max-w-[620px] text-[16px] font-semibold leading-7 text-[#40546d]">
                Structured CBSE learning, guided assessments, focused doubt
                clearing, and early competitive readiness help students move
                ahead with confidence.
              </p>
              <p className="mt-2 max-w-[620px] text-sm font-bold uppercase tracking-[0.12em] text-[#05224a]">
                - Competitive exam preparation (JEE/NEET foundation)
              </p>

              <div className="mt-6 grid max-w-[640px] gap-2">
                {foundationItems.slice(0, 3).map((item, index) => (
                  <div
                    key={item.title}
                    className="foundation-point flex items-start gap-4 rounded-[22px] bg-white px-4 py-2.5 shadow-sm"
                    style={{ animationDelay: `${index * 110}ms` }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#05224a] text-xl font-light text-[#40f4f4]">
                      +
                    </span>
                    <div>
                      <h3 className="text-base font-black uppercase leading-tight tracking-[0.08em] text-[#05224a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#637083]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="foundation-scroll relative z-10 grid gap-8 pb-16 pt-8 lg:pt-12">
            {foundationItems.map((item, index) => (
              <article
                key={item.title}
                className={`foundation-image-card group relative ml-auto overflow-visible ${
                  index === 0
                    ? "min-h-[600px] w-full max-w-[860px] max-md:min-h-[430px]"
                    : "min-h-[380px] w-full max-w-[700px] max-md:min-h-[320px]"
                } ${index > 0 ? "-mt-16" : ""}`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <div
                  className={`relative h-full overflow-hidden rounded-[0_0_42px_0] ${
                    index === 0
                      ? "min-h-[600px] max-md:min-h-[430px]"
                      : "min-h-[380px] max-md:min-h-[320px]"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05224a]/30 via-transparent to-transparent" />
                </div>

                <div
                  className={`foundation-label absolute grid place-items-center rounded-[0_24px_24px_0] bg-[#f4f5f1] px-6 text-center ${
                    index === 0
                      ? "-left-20 top-8 min-h-[118px] w-[236px] max-xl:left-[-28px] max-md:left-0 max-md:top-0 max-md:w-[220px]"
                      : "-left-16 top-6 min-h-[100px] w-[196px] max-xl:left-[-20px] max-md:left-0 max-md:top-0 max-md:w-[196px]"
                  }`}
                >
                  <h3 className={`${index === 0 ? "text-[22px] max-md:text-2xl" : "text-[19px] max-md:text-xl"} font-black uppercase leading-[1.12] tracking-[0.06em] text-[#05224a]`}>
                    {item.title}
                  </h3>
                </div>

                <div className={`foundation-plus absolute grid place-items-center rounded-[28px] bg-white ${index === 0 ? "-right-5 bottom-8 h-[96px] w-[96px] max-md:right-4 max-md:h-20 max-md:w-20" : "-right-4 bottom-6 h-[82px] w-[82px] max-md:right-4 max-md:h-16 max-md:w-16"}`}>
                  <span className={`foundation-plus-core grid place-items-center rounded-full bg-[#05224a] font-light leading-none text-[#40f4f4] ${index === 0 ? "h-[62px] w-[62px] text-[40px] max-md:h-14 max-md:w-14 max-md:text-4xl" : "h-[52px] w-[52px] text-[32px] max-md:h-12 max-md:w-12 max-md:text-3xl"}`}>
                    +
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>

      <section
        id="infrastructure"
        className="infrastructure-section relative isolate overflow-hidden bg-white pb-10 pt-8 text-white"
      >
        <div className="infra-accordion mt-8 flex h-[500px] w-full gap-1 overflow-hidden border-y-[4px] border-white max-lg:h-auto max-lg:flex-col">
          {infrastructureItems.map((item, index) => {
            const isActive = activeInfrastructure === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveInfrastructure(index)}
                onFocus={() => setActiveInfrastructure(index)}
                tabIndex={0}
                className={`infra-card group relative min-w-0 cursor-pointer overflow-hidden outline-none transition-[flex,filter] duration-700 ease-out max-lg:min-h-[360px] ${
                  isActive ? "flex-[2.7]" : "flex-[0.82]"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-[#071d34]/38 transition duration-500 group-hover:bg-[#071d34]/20" />
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/78 via-black/42 to-transparent" />

                <div className="relative flex h-full flex-col justify-between p-6 lg:p-7">
                  <h3
                    className={`max-w-[520px] text-[30px] font-black leading-tight tracking-normal transition duration-500 max-lg:text-3xl ${
                      isActive
                        ? "translate-y-[355px] text-[56px] max-xl:text-5xl max-lg:translate-y-0"
                        : "translate-y-0"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`transition duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0 max-lg:opacity-100"
                    }`}
                  >
                    <p className="max-w-[560px] text-lg font-semibold leading-8 text-white/88">
                      {item.detail}
                    </p>
                    <div className="mt-6 flex items-center gap-5">
                      <span className="h-1.5 w-16 bg-[#ffd400]" />
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-[#003b73] text-[56px] font-light leading-none text-white transition group-hover:rotate-90">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto -mt-10 max-w-[1720px] px-5 sm:px-8 lg:px-14">
          <div className="infra-heading mx-auto w-fit rounded-[32px] bg-white/95 px-6 py-4 text-center shadow-[0_20px_60px_rgba(5,34,74,0.10)] ring-1 ring-[#e2ebf3] backdrop-blur-md">
            <p className="text-[16px] font-black uppercase leading-none tracking-[0.28em] text-[#05b982] max-sm:text-sm">
              Campus Designed For Learning
            </p>
            <h2 className="mt-3 whitespace-nowrap text-[50px] font-bold leading-none tracking-normal text-[#111111] max-xl:text-5xl max-lg:whitespace-normal max-md:text-4xl">
              World-Class School <span className="text-[#05b982]">Infrastructure</span>
            </h2>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section relative isolate overflow-hidden bg-[#f7f9fb] px-5 py-24 text-[#05224a] sm:px-8 lg:px-[86px] lg:py-32"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#05224a 1px, transparent 1px), linear-gradient(90deg, #05224a 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0">
          <div className="contact-visual relative min-h-[650px] overflow-visible bg-white max-lg:min-h-[540px]">
            <div
              className="absolute left-0 top-[88px] h-[430px] w-[78%] overflow-hidden max-lg:w-full"
            >
              <div
                className="h-full w-full bg-cover bg-center transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05224a]/32 via-transparent to-transparent" />
            </div>

            <div className="contact-badge absolute right-[12%] top-[88px] grid h-32 w-32 place-items-center rounded-full bg-[#b20d3a] shadow-2xl shadow-[#05224a]/15 max-lg:right-8">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white">
                <Image
                  src="/logo11.png"
                  alt="Delhi Public School Gurugram logo"
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="absolute left-[48%] top-[298px] hidden h-px w-[37%] bg-[#b20d3a] lg:block">
              <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-[#b20d3a]" />
            </div>

            <div className="absolute bottom-0 right-0 h-[310px] w-[64%] overflow-hidden bg-[#102f45] max-lg:left-0 max-lg:w-full">
              <iframe
                title="Gurugram campus map"
                src="https://www.google.com/maps?q=Gurugram%2C%20Haryana%2C%20India&output=embed"
                className="h-full w-full border-0 opacity-85 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#05224a]/25 mix-blend-multiply" />
              <span className="absolute left-[54%] top-[46%] rounded-full bg-[#b20d3a] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-white">
                Gurugram
              </span>
            </div>
          </div>

          <div className="contact-panel relative bg-white px-8 py-12 shadow-2xl shadow-[#05224a]/8 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-[18px] font-black uppercase leading-none tracking-[0.28em] text-[#003b73] max-sm:text-sm">
              Location & Contact
            </p>
            <h2 className="mt-8 text-[78px] font-black leading-none tracking-normal text-[#05224a] max-xl:text-6xl max-md:text-5xl">
              Visit Our Campus
            </h2>
            <p className="mt-7 max-w-[650px] text-lg font-semibold leading-8 text-[#516177]">
              Plan a school visit, explore the campus environment, and meet our
              admissions team in Gurugram.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                ["Address", "Delhi Public School, Gurugram, Haryana, India"],
                ["Contact", "+91 98765 43210"],
                ["Email", "admissions@dpsgurugram.edu.in"],
                ["Office Hours", "Monday - Saturday, 8:30 AM - 3:30 PM"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="contact-detail flex gap-5 border-t border-[#d9e1ea] py-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffd400] text-xl font-black text-[#05224a]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#096ce8]">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-bold leading-7 text-[#05224a]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#apply"
              className="contact-cta mt-8 inline-flex min-h-[64px] items-center justify-center rounded-full bg-[#05224a] px-9 text-[15px] font-black uppercase tracking-[0.24em] text-white transition hover:-translate-y-1 hover:bg-[#ffd400] hover:text-[#05224a]"
            >
              Book A Campus Visit <span className="ml-5 text-2xl">&#8594;</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="admissions"
        className="admission-section relative isolate overflow-hidden bg-[#05224a] px-5 py-24 text-white sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(255,212,0,0.22),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(9,108,232,0.34),transparent_32%),linear-gradient(135deg,#05224a_0%,#07182d_62%,#003b73_100%)]" />
        <div className="absolute left-0 top-0 h-2 w-full bg-[#ffd400]" />

        <div className="mx-auto max-w-[1680px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="admission-heading">
              <p className="text-[20px] font-black uppercase leading-none tracking-[0.28em] text-[#ffd400] max-sm:text-sm">
                Admissions 2026-27
              </p>
              <h2 className="mt-8 text-[78px] font-black leading-none tracking-normal text-white max-xl:text-6xl max-md:text-5xl">
                Admissions Open for Nursery to Class 12
              </h2>
              <p className="mt-8 max-w-[680px] text-xl font-semibold leading-8 text-white/78">
                A clear, guided admission journey for families seeking strong
                academics, holistic development, and a trusted CBSE school
                environment.
              </p>
            </div>

            <div className="admission-dates grid gap-4 sm:grid-cols-3">
              {importantDates.map(([label, value], index) => (
                <div
                  key={label}
                  className="admission-date-card bg-white/10 p-6 backdrop-blur"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffd400]">
                    {label}
                  </p>
                  <p className="mt-4 text-3xl font-black leading-tight text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="admission-timeline relative grid gap-5">
              <div className="absolute left-[38px] top-8 hidden h-[calc(100%-4rem)] w-px bg-white/25 sm:block" />
              {admissionSteps.map((step, index) => (
                <article
                  key={step}
                  className="admission-step group relative grid gap-5 bg-white p-6 text-[#05224a] shadow-2xl shadow-black/10 sm:grid-cols-[76px_1fr]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-[#ffd400] text-2xl font-black text-[#05224a] transition group-hover:rotate-12 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#096ce8]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-tight tracking-normal">
                      {step}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <aside className="admission-eligibility relative overflow-hidden bg-[#ffd400] p-8 text-[#05224a] lg:p-10">
              <div className="absolute right-[-72px] top-[-72px] h-48 w-48 rounded-full border-[34px] border-[#05224a]/12" />
              <h3 className="relative text-4xl font-black uppercase leading-tight tracking-normal">
                Eligibility Criteria
              </h3>
              <div className="relative mt-8 grid gap-5">
                {[
                  "Nursery admission as per age norms for the academic session.",
                  "Class 1 to 9 admission based on previous school records and interaction.",
                  "Class 11 admission based on stream preference, aptitude, and Class 10 performance.",
                  "Documents required: birth certificate, transfer certificate, report card, photographs, and address proof.",
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#05224a] text-lg font-light text-white">
                      +
                    </span>
                    <p className="text-lg font-bold leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="admission-cta mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-[#ffd400] px-9 text-[15px] font-black uppercase tracking-[0.24em] text-[#05224a] transition hover:-translate-y-1 hover:bg-white"
            >
              Apply Now <span className="ml-5 text-2xl">&#8594;</span>
            </a>
            <a
              href="#prospectus"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full border border-white/50 px-9 text-[15px] font-black uppercase tracking-[0.24em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#05224a]"
            >
              Download Prospectus
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-white/12 px-9 text-[15px] font-black uppercase tracking-[0.24em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-[#096ce8]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="gallery-section relative isolate overflow-hidden bg-white px-5 py-24 text-[#05224a] sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[34%] bg-[#ffd400]" />
        <div className="mx-auto max-w-[1720px]">
          <div className="gallery-heading flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[20px] font-black uppercase leading-none tracking-[0.28em] text-[#096ce8] max-sm:text-sm">
                Gallery / Campus Life
              </p>
              <h2 className="mt-8 text-[82px] font-black leading-none tracking-normal text-[#003b73] max-xl:text-7xl max-md:text-5xl">
                Life at Our DPS School
              </h2>
            </div>
            <p className="max-w-[520px] text-xl font-semibold leading-8 text-[#516177]">
              A lively campus where classroom learning, sports, cultural
              programs, clubs, and annual day moments shape confident students.
            </p>
          </div>

          <div className="gallery-grid mt-16 grid auto-rows-[260px] gap-5 md:grid-cols-4 lg:auto-rows-[300px]">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`gallery-card group relative overflow-hidden bg-[#05224a] text-white ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3
                      ? "md:col-span-2"
                      : ""
                }`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03192e]/88 via-[#03192e]/28 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <p className="mb-4 w-fit bg-[#ffd400] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#05224a]">
                    {item.label}
                  </p>
                  <h3 className="text-4xl font-black leading-tight tracking-normal">
                    {item.title}
                  </h3>
                  <span className="mt-6 h-1.5 w-16 bg-[#ffd400] transition duration-500 group-hover:w-28" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer relative overflow-hidden bg-[#03192e] px-5 py-14 text-white sm:px-8 lg:px-[74px]">
        <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border-[48px] border-[#ffd400]/10" />
        <div className="mx-auto grid max-w-[1720px] gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <div className="relative h-24 w-24 overflow-hidden border-2 border-white bg-white">
              <Image
                src="/logo11.png"
                alt="Delhi Public School Gurugram logo"
                fill
                sizes="96px"
                className="object-contain p-2"
              />
            </div>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-normal">
              Delhi Public School Gurugram
            </h2>
            <p className="mt-4 max-w-[560px] text-base font-semibold leading-7 text-white/70">
              A CBSE school for Nursery to Class 12 focused on academics,
              values, leadership, communication, and holistic development.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd400]">
              Quick Links
            </h3>
            <div className="mt-6 grid gap-3 text-lg font-bold text-white/78">
              {[
                ["About", "#about"],
                ["Programs", "#academics"],
                ["Infrastructure", "#infrastructure"],
                ["Admissions", "#admissions"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-[#ffd400]">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd400]">
              Admissions Office
            </h3>
            <div className="mt-6 grid gap-3 text-lg font-bold leading-7 text-white/78">
              <p>Gurugram, Haryana, India</p>
              <p>+91 98765 43210</p>
              <p>admissions@dpsgurugram.edu.in</p>
            </div>
            <a
              href="#admissions"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ffd400] px-6 text-sm font-black uppercase tracking-[0.18em] text-[#05224a] transition hover:-translate-y-1 hover:bg-white"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1720px] flex-col gap-3 border-t border-white/12 pt-6 text-sm font-semibold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Delhi Public School Gurugram. All rights reserved.</p>
          <p>Designed for a smooth, animated school experience.</p>
        </div>
      </footer>
    </main>
  );
}



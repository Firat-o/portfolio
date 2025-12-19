import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, GradientTexture } from "@react-three/drei";
import { ArrowDown, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Nebula = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 100, 100]} scale={2.2}>
        <MeshDistortMaterial
          color="#00f2ff"
          speed={2}
          distort={0.3}
          radius={1}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#00f2ff', '#004d4d', '#050505']}
          />
        </MeshDistortMaterial>
      </Sphere>
    </Float>
  );
};

export const DevSection = () => {
  return (
    <section
      id="dev"
      className="relative z-20 min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
          <Suspense fallback={null}>
            <Nebula />
          </Suspense>
        </Canvas>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            <span className="opacity-0 animate-fade-in inline-block mr-4">
              Hey, ich bin
            </span>
            <span className="glitch-hover text-primary opacity-0 animate-fade-in-delay-1 inline-block">
              Firat
            </span>
            <span className="hollow-text ml-4 opacity-0 animate-fade-in-delay-3 inline-block">
              O.
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-10 opacity-0 animate-fade-in-delay-4">
            <Terminal size={20} className="text-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground font-mono typing-effect">
              Ich code und adaptiere Ideen
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="extra-button">
              Zeig mir die Projekte
            </a>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-bold hidden sm:block">
              Available for projects // 2025
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <ArrowDown className="h-4 w-4 text-primary mt-2" />
      </div>

      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

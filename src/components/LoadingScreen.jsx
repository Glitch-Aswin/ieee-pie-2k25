import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const LoadingScreen = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Load the full tsParticles engine
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Centered Logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10, // Ensure logo is above particles
        }}
      >
        <img
          src="https://pie.ieeekerala.org/pielogo.png"
          alt="IEEE PIE Logo"
          style={{
            width: "250px", // Increased logo size to 250px
            height: "auto",
            filter: "drop-shadow(0px 0px 10px #f15a25)", // Add subtle glow
          }}
        />
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000", // Black background
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Lines appear when hovered
              },
              onClick: {
                enable: true,
                mode: "push", // Add particles on click
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150, // Distance for connecting lines
                links: {
                  opacity: 1, // Visible links
                },
              },
              push: {
                quantity: 4, // Add particles on click
              },
            },
          },
          particles: {
            number: {
              density: {
                enable: true,
                area: 800, // Particle density
              },
              value: 80, // Fewer particles for simplicity
            },
            color: {
              value: ["#f15a25", "#dedede"], // Orange and light gray particles
            },
            links: {
              enable: true,
              distance: 120, // Connection distance
              color: {
                value: "#dedede", // Link color
              },
              opacity: 0.4, // Transparency for the links
              width: 1.5, // Thickness of the links
            },
            move: {
              enable: true,
              speed: 0.5, // Slower movement
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
            shape: {
              type: "circle", // Circular particles
            },
            opacity: {
              value: { min: 0.4, max: 0.8 }, // Opacity variation
            },
            size: {
              value: { min: 4, max: 7 }, // Size variation
              animation: {
                enable: false, // No size pulsating
              },
            },
          },
          detectRetina: true, // High-DPI screen support
        }}
      />
    </div>
  );
};

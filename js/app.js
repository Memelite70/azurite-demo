particlesJS('particles-js', {
  particles: {
    number: {
      value: 86,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: '#676b7e'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1,
        rotateY: 1
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 2,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 10
      },
      remove: {
        particles_nb: 10
      }
    }
  },
  retina_detect: true
});
window.onload = () => {
    document.querySelectorAll("button.particleButton").forEach(btn => {
        let btnBg = btn.parentNode.querySelector(".particles")
        let initalListener = () => {
            btnBg.classList.add("animated")
            btn.removeEventListener("click", initalListener)
        }
        btn.addEventListener("click", initalListener)
    })
}
import { ExternalLink, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend the three.js catalog for react-three-fiber
extend(THREE);

export default function Index() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ShaderGradient background */}
      <div className="absolute inset-0">
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.7&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%23ca923f&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&toggleAxis=true&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=8&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main layout container */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left container - nobi text and streaming links */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-pirata font-normal tracking-tight text-white opacity-90">
                nobi
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-white/80 mb-8">Listen on your favorite platform</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://open.spotify.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">♪</span>
                    </div>
                    <span className="text-white font-medium">Spotify</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                  </a>
                  
                  <a 
                    href="https://music.apple.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">♪</span>
                    </div>
                    <span className="text-white font-medium">Apple Music</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                  </a>
                  
                  <a 
                    href="https://soundcloud.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">♪</span>
                    </div>
                    <span className="text-white font-medium">SoundCloud</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right container - SoundCloud embed */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white/90 mb-4">Latest Tracks</h2>
                
                {/* SoundCloud embed placeholder - replace with your actual playlist */}
                <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl font-bold">♪</span>
                    </div>
                    <p className="text-white/70 text-sm">
                      SoundCloud playlist will appear here
                    </p>
                    <p className="text-white/50 text-xs">
                      Replace this with your embedded SoundCloud playlist
                    </p>
                  </div>
                </div>
                
                {/* To add your SoundCloud playlist, replace the placeholder above with:
                <iframe
                  width="100%"
                  height="400"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=YOUR_PLAYLIST_URL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="rounded-xl"
                  title="SoundCloud Playlist"
                ></iframe>
                */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Contact info */}
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/60" />
                <a 
                  href="mailto:contact@nobi.music" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@nobi.music
                </a>
              </div>
              
              {/* Social links */}
              <div className="flex items-center gap-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

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
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left container - nobi text and streaming links */}
            <div className="text-center lg:text-left space-y-8 lg:pt-6">
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-pirata font-normal tracking-tight text-white opacity-90">
                nobi
              </h1>

              <div className="space-y-6">
                <p className="text-xl text-white/80">Listen on your favorite platform</p>

                <div className="flex flex-col gap-3 items-center lg:items-start max-w-xs mx-auto lg:mx-0">
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFAC1C">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.313c-.233.384-.735.505-1.12.272-3.06-1.87-6.914-2.293-11.455-1.257-.436.099-.871-.178-.97-.614-.099-.435.178-.87.614-.969 4.954-1.129 9.186-.644 12.659 1.458.384.233.505.735.272 1.11zm1.6-3.57c-.294.479-.919.629-1.398.335-3.508-2.157-8.853-2.785-13.008-1.524-.532.162-1.094-.138-1.256-.67-.162-.532.138-1.094.67-1.256 4.757-1.443 10.653-.734 14.657 1.717.479.294.629.919.335 1.398zm.137-3.718c-4.206-2.496-11.145-2.728-15.158-1.508-.639.194-1.314-.165-1.508-.804-.194-.639.165-1.314.804-1.508 4.588-1.396 12.218-1.126 16.989 1.743.581.35.771 1.102.421 1.683-.35.581-1.102.771-1.683.421-.135-.081-.27-.162-.405-.243z"/>
                    </svg>
                    <span className="text-white font-medium">Spotify</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80 ml-auto" />
                  </a>

                  <a
                    href="https://music.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFAC1C">
                      <path d="M18.715 11.423c-.028-2.139 1.734-3.169 1.814-3.22-1.004-1.462-2.564-1.665-3.105-1.684-1.297-.138-2.561.775-3.204.775-.657 0-1.645-.755-2.73-.734-1.377.021-2.684.814-3.378 2.024-1.464 2.544-.375 6.258.913 8.302.646.998 1.408 2.122 2.41 2.081 1.002-.041 1.36-.631 2.566-.631 1.207 0 1.537.631 2.731.61 1.135-.021 1.708-1.011 2.354-2.009.725-1.135 1.027-2.25 1.041-2.306-.021-.014-1.999-.76-2.027-3.027l.615-.181zm-2.604-7.742c.546-.646 .91-1.544.811-2.44-.784.034-1.761.537-2.335 1.184-.517.582-.969 1.517-.847 2.398.896.07 1.831-.455 2.371-1.142z"/>
                    </svg>
                    <span className="text-white font-medium">Apple Music</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80 ml-auto" />
                  </a>

                  <a
                    href="https://soundcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFAC1C">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.104.101.104.053 0 .094-.046.101-.104L1.51 14.48l-.234-2.155c-.007-.058-.048-.1-.101-.1zm1.49.876c-.057 0-.103.048-.103.109L2.36 14.48l.201 1.269c0 .061.046.109.103.109.057 0 .104-.048.104-.109L3.069 14.48l-.301-1.379c0-.061-.047-.109-.104-.109h.001zm1.01.5c-.064 0-.115.053-.115.12l-.138.938.138.988c0 .067.051.12.115.12s.115-.053.115-.12l.168-.988-.168-.938c0-.067-.051-.12-.115-.12zm1.001.542c-.072 0-.132.062-.132.139l-.105.792.105.862c0 .077.06.139.132.139.072 0 .132-.062.132-.139l.127-.862-.127-.792c0-.077-.06-.139-.132-.139zm1.225-.148c-.081 0-.147.069-.147.154l-.096.743.096.942c0 .085.066.154.147.154.082 0 .148-.069.148-.154l.125-.942-.125-.743c0-.085-.066-.154-.148-.154zm1.192.018c-.09 0-.164.076-.164.171l-.08.706.08.977c0 .095.074.171.164.171.091 0 .165-.076.165-.171l.104-.977-.104-.706c0-.095-.074-.171-.165-.171zm1.217-.093c-.1 0-.181.084-.181.189l-.062.658.062 1.05c0 .105.081.189.181.189.1 0 .182-.084.182-.189l.08-1.05-.08-.658c0-.105-.082-.189-.182-.189zm1.25-.185c-.109 0-.197.092-.197.206l-.043.632.043 1.14c0 .114.088.206.197.206.109 0 .197-.092.197-.206l.063-1.14-.063-.632c0-.114-.088-.206-.197-.206zm1.297-.35c-.118 0-.214.1-.214.224l-.025.609.025 1.268c0 .124.096.224.214.224.119 0 .215-.1.215-.224l.044-1.268-.044-.609c0-.124-.096-.224-.215-.224zm1.325.217c-.128 0-.232.108-.232.243l-.007.392.007 1.469c0 .135.104.243.232.243.129 0 .233-.108.233-.243l.027-1.469-.027-.392c0-.135-.104-.243-.233-.243zm1.354.16c-.137 0-.248.117-.248.263v.129l.248 1.633-.248.169c0 .146.111.263.248.263.138 0 .249-.117.249-.263l.008-1.802-.008-.129c0-.146-.111-.263-.249-.263zm1.394-.057c-.147 0-.266.125-.266.281v.054l.266 1.859-.266.179c0 .156.119.281.266.281.148 0 .267-.125.267-.281l-.267-2.038.267-.054c0-.156-.119-.281-.267-.281zm1.456-.248c-.157 0-.284.133-.284.298v2.333c0 .165.127.298.284.298.158 0 .285-.133.285-.298V12.993c0-.165-.127-.298-.285-.298zm1.508.299c-.167 0-.302.141-.302.315v1.735c0 .174.135.315.302.315.168 0 .303-.141.303-.315V13.34c0-.174-.135-.315-.303-.315zm1.566-.397c-.177 0-.32.149-.32.333v2.469c0 .184.143.333.32.333.178 0 .321-.149.321-.333v-2.469c0-.184-.143-.333-.321-.333zm1.627.054c-.187 0-.339.157-.339.352v2.315c0 .195.152.352.339.352.188 0 .34-.157.34-.352v-2.315c0-.195-.152-.352-.34-.352zm1.685-.299c-.198 0-.358.166-.358.371v2.913c0 .205.16.371.358.371.199 0 .359-.166.359-.371v-2.913c0-.205-.16-.371-.359-.371z"/>
                    </svg>
                    <span className="text-white font-medium">SoundCloud</span>
                    <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80 ml-auto" />
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

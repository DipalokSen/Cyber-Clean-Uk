export const CyberCleanLogo = ({ className = "w-64 h-32" }) => (
  <svg className={className} viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="logo-icon">
      {/* Building structure */}
      <path 
        d="M30 25 L50 15 L70 25 L70 55 L30 55 Z" 
        fill="white" 
        fillOpacity="0.2" 
        stroke="white" 
        strokeWidth="2.5"
      />
      
      {/* Roof line */}
      <path 
        d="M25 25 L50 12 L75 25" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Star */}
      <path 
        d="M50 8 L51.5 11 L55 11 L52.5 13 L53.5 16 L50 14 L46.5 16 L47.5 13 L45 11 L48.5 11 Z" 
        fill="white"
      />
      
      {/* Windows - cleaner grid */}
      <rect x="38" y="32" width="7" height="7" fill="white" rx="1"/>
      <rect x="48" y="32" width="7" height="7" fill="white" rx="1"/>
      <rect x="38" y="42" width="7" height="7" fill="white" rx="1"/>
      <rect x="48" y="42" width="7" height="7" fill="white" rx="1"/>
      
      {/* Broom - simplified and cleaner */}
      <rect 
        x="60" y="35" 
        width="4" height="30" 
        transform="rotate(-30 62 50)" 
        fill="white" 
        rx="2"
      />
      
      {/* Broom bristles - cleaner design */}
      <path 
        d="M45 50 L55 45 L65 50 L62 60 L48 60 Z" 
        fill="white" 
        fillOpacity="0.3" 
        stroke="white" 
        strokeWidth="2"
      />
      
      {/* Bristle lines */}
      <line x1="50" y1="52" x2="50" y2="58" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="55" y1="50" x2="55" y2="57" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="60" y1="51" x2="60" y2="57" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Shield with check */}
      <path 
        d="M52 48 C52 48 52 52 52 53 C52 55 54 56 55 56 C56 56 58 55 58 53 C58 52 58 48 58 48" 
        stroke="white" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M53 50 L55 52 L57 49" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
    </g>
    
    {/* Text */}
    <g id="logo-text">
      <text 
        x="90" 
        y="35" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="28" 
        fontWeight="700" 
        fill="white"
      >
        Cyber
      </text>
      <text 
        x="90" 
        y="60" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="28" 
        fontWeight="500" 
        fill="white"
      >
        Clean
      </text>
    </g>
  </svg>
);
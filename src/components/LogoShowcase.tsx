import logoOption1 from "@/assets/logo-option-1.png";
import logoOption2 from "@/assets/logo-option-2.png";
import logoOption3 from "@/assets/logo-option-3.png";

const LogoShowcase = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">InfluencersKit Logo Options</h1>
      
      <div className="grid gap-12 max-w-4xl mx-auto">
        {/* Text-based gradient logos */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-muted-foreground">Text-based Gradient Logos</h2>
          
          {/* Option 1: Simple gradient text */}
          <div className="p-8 bg-card rounded-lg border text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              InfluencersKit
            </div>
            <p className="text-sm text-muted-foreground mt-2">Simple gradient text</p>
          </div>

          {/* Option 2: Stylized with shadow */}
          <div className="p-8 bg-card rounded-lg border text-center">
            <div className="text-4xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-lg">
                Influencers
              </span>
              <span className="text-foreground">Kit</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Gradient + standard text combination</p>
          </div>

          {/* Option 3: All caps with different styling */}
          <div className="p-8 bg-card rounded-lg border text-center">
            <div className="text-3xl font-black tracking-widest uppercase">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                INFLUENCERS
              </span>
              <span className="text-accent block text-lg tracking-[0.3em] mt-1">
                KIT
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Stacked uppercase design</p>
          </div>

          {/* Option 4: With icon integration */}
          <div className="p-8 bg-card rounded-lg border text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">IK</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                InfluencersKit
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Icon + text combination</p>
          </div>
        </div>

        {/* Image-based logos */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-muted-foreground">AI-Generated Logo Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border text-center">
              <img src={logoOption1} alt="InfluencersKit Logo Option 1" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Typography focused</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border text-center">
              <img src={logoOption2} alt="InfluencersKit Logo Option 2" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Icon + text emblem</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border text-center">
              <img src={logoOption3} alt="InfluencersKit Logo Option 3" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Monogram style</p>
            </div>
          </div>
        </div>

        {/* Usage examples */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-muted-foreground">Usage Examples</h2>
          
          {/* Header example */}
          <div className="p-6 bg-gradient-hero rounded-lg border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IK</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  InfluencersKit
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Navigation example</div>
            </div>
          </div>

          {/* Dark background example */}
          <div className="p-6 bg-foreground rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                InfluencersKit
              </div>
              <p className="text-white/70">Works great on dark backgrounds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
/**
 * BackgroundAurora - Premium organic aurora gradient animation
 * Creates 3 large, blurred blobs that drift slowly for a calming, expensive feel
 */
export default function BackgroundAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Blob 1 - Vibrant Mint/Green */}
      <div 
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(52, 211, 153, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Aurora Blob 2 - Deep Cyan/Teal */}
      <div 
        className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Aurora Blob 3 - Warm Gold/Cream */}
      <div 
        className="absolute -bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full animate-aurora-3"
        style={{
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.25) 0%, rgba(253, 230, 138, 0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Additional strong overlay for depth */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}

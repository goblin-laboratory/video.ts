interface CoverProps {
  // playing: boolean;
  src?: string;
  alt?: string;
}

export default function Cover({ src, alt }: CoverProps) {
  if (!src) {
    return null;
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        objectFit: 'cover',
        // filter: 'blur(4px)',
      }}
    />
  );
}

type PictureProps = {
  name: string;
  alt: string;
  widths: readonly number[];
  sizes: string;
  width: number;
  height: number;
  priority?: boolean;
  eager?: boolean;
  className?: string;
  pictureClassName?: string;
};

export function Picture({
  name,
  alt,
  widths,
  sizes,
  width,
  height,
  priority = false,
  eager = false,
  className = "",
  pictureClassName = "",
}: PictureProps) {
  const avif = widths.map((w) => `/images/${name}-${w}.avif ${w}w`).join(", ");
  const webp = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");
  const fallback = `/images/${name}-${widths[Math.min(1, widths.length - 1)]}.webp`;

  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        loading={priority || eager ? "eager" : "lazy"}
      />
    </picture>
  );
}

export const PORTRAIT_WIDTHS = [480, 768, 1100] as const;
export const LANDSCAPE_WIDTHS = [768, 1280, 1800] as const;

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

/** Titanium iPhone mockup with dynamic island + side buttons. */
export function PhoneFrame({ src, alt, priority }: Props) {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="phone-dynamic-island" aria-hidden="true" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 44vw, 300px"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority={priority}
        />
      </div>
      <div className="phone-buttons" aria-hidden="true">
        <span className="phone-button btn-action" />
        <span className="phone-button btn-vol-up" />
        <span className="phone-button btn-vol-down" />
        <span className="phone-button btn-power" />
      </div>
    </div>
  );
}

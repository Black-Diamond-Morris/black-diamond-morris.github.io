import Image from "next/image";

function FacebookLink() {
  return (
    <a href="https://facebook.com/darlomorris">
      <Image
        className="w-10"
        src="/facebook.png"
        alt=""
        width={2084}
        height={2084}
      />
    </a>
  );
}

function InstagramLink() {
  return (
    <a href="https://www.instagram.com/black_diamondmorris">
      <Image
        className="w-10"
        src="/instagram.svg"
        alt=""
        width={150}
        height={150}
      />
    </a>
  );
}

function EmailLink() {
  return (
    <a href="mailto:nicklecheffie@gmail.com">
      <Image
        className="w-10"
        src="/envelope.svg"
        alt=""
        width={150}
        height={150}
      />
    </a>
  );
}

function PhoneLink() {
  return (
    <a href="tel:+447791490995">
      <Image
        className="w-10 text-white"
        src="/phone.svg"
        alt=""
        width={150}
        height={150}
      />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <FacebookLink />
      <InstagramLink />
      <EmailLink />
      <PhoneLink />
    </div>
  );
}

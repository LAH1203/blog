import Image from 'next/image';

const SOCIAL_LINKS = [
  { href: 'https://github.com/LAH1203', icon: '/images/github.svg', alt: 'github', size: 20 },
  {
    href: 'https://www.linkedin.com/in/lah1203',
    icon: '/images/linked-in.svg',
    alt: 'linked-in',
    size: 14,
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-2">
    {SOCIAL_LINKS.map(({ href, icon, alt, size }) => (
      <a key={alt} href={href} target="_blank">
        <Image src={icon} alt={alt} width={size} height={size} />
      </a>
    ))}
  </div>
);

const ProfileName = () => (
  <>
    <p className="text-xl font-medium">이아현</p>
    <p className="text-sm text-center text-gray-400">Frontend Engineer</p>
  </>
);

const ProfileImage = () => (
  <Image
    src="/images/profile.jpg"
    alt="profile"
    width={60}
    height={60}
    unoptimized
    className="aspect-square rounded-full object-cover"
  />
);

const Profile = () => {
  return (
    <div className="w-full">
      {/* Mobile */}
      <div className="xs:hidden relative w-full h-[182px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <ProfileImage />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 absolute top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm shadow-[0_0_80px_rgba(0,0,0,0.07)] rounded-2xl w-full pt-8 pb-6">
          <div className="flex flex-col items-center gap-1">
            <ProfileName />
          </div>
          <SocialLinks />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xs:flex items-center gap-5 bg-white/10 backdrop-blur-sm shadow-[0_0_80px_rgba(0,0,0,0.07)] rounded-2xl w-full px-8 py-6">
        <ProfileImage />
        <div className="flex flex-col gap-0.5">
          <ProfileName />
        </div>
        <div className="ml-auto">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Profile;

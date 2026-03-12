import Image from 'next/image';

const MobileProfile = () => {
  return (
    <div className="xs:hidden relative w-full h-54">
      <div className="absolute top-0 left-0 w-full h-38 bg-[#E0EBE0]" />
      <Image
        src="/images/profile.jpg"
        alt="profile"
        width={60}
        height={60}
        unoptimized
        className="absolute top-4 left-1/2 -translate-x-1/2 aspect-square rounded-full object-cover z-10"
      />
      <div className="flex flex-col justify-center items-center gap-3 absolute top-[46px] left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm shadow-[0_0_80px_rgba(0,0,0,0.07)] rounded-2xl w-7/10 pt-11 pb-6">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xl font-medium">이아현 (Ahhyun Lee)</p>
          <p className="text-sm text-gray-400">Frontend Engineer</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/LAH1203" target="_blank">
            <Image src="/images/github.svg" alt="github" width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/in/lah1203" target="_blank">
            <Image src="/images/linked-in.svg" alt="linked-in" width={14} height={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;

import Image from 'next/image';

const Profile = () => {
  return (
    <section className="flex w-full flex-col gap-4">
      <Image
        src="/images/profile.jpg"
        alt="It's me!"
        width={40}
        height={40}
        unoptimized
        className="aspect-square rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-sm">이아현</h2>
        <p className="text-xs text-[#4B5945]">야생의 프론트엔드 개발자</p>
      </div>
      <div className="flex items-center gap-2">
        {/* TODO: update resume url */}
        <a href="https://github.com/LAH1203" target="_blank">
          <Image src="/images/resume.svg" alt="resume" width={18} height={18} />
        </a>
        <a href="https://github.com/LAH1203" target="_blank">
          <Image src="/images/github.svg" alt="github" width={20} height={20} />
        </a>
        <a href="https://www.linkedin.com/in/lah1203" target="_blank">
          <Image src="/images/linked-in.svg" alt="linked-in" width={14} height={14} />
        </a>
      </div>
    </section>
  );
};

export default Profile;

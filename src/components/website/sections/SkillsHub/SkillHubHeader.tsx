const SkillHubHeader = () => {
  return (
    <div id="heading-container">
    <div id="skillhub heading">
      <h2 className="font-heading-serif text-[clamp(1.7rem,calc(1.5rem+0.65*calc((100vw-36rem)/55)),1.9rem)] font-semibold text-left max-w-[36em] leading-normal">
        All the skills you need in one place
      </h2>
    </div>
    <div id="skillhub subheading" className="font-text max-w-[55rem] mt-1 text-left text-[clamp(1rem,calc(1rem+0.2*calc((100vw-36rem)/55)),1.2rem)]">
      From critical skills to technical topics, Udemy supports your professional development.
    </div>
  </div>
  )
}

export default SkillHubHeader
export function Finale() {
  return (
    <section id="app" className="section section--white section--tight">
      <div className="container container--narrow">
        <div className="finale" data-in>
          <div className="finale__aurora" aria-hidden="true">
            <span className="aurora-ray" />
            <span className="aurora-ray aurora-ray--2" />
          </div>

          <span className="eyebrow finale__eye">
            <span className="eyebrow-dot" aria-hidden="true" />
            7-day free trial · iPhone · No account
          </span>

          <h2 className="display finale__h">
            Say it out loud. <em className="display-serif">Stop carrying it around.</em>
          </h2>

          <p className="finale__sub">
            Thirty seconds of talking and your head is emptier. Mialo
            transcribes it, tags how you sounded, and follows up days later
            like a thoughtful friend. Free for the first week. No card needed.
          </p>

          <div className="finale__cta">
            <a href="#" className="dialo-shimmer-btn" data-magnetic>
              <span className="dialo-shimmer-btn__inner">
                <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3" />
                </svg>
                Download on the App Store
              </span>
            </a>
            <a href="#how" className="btn-secondary finale__btn2" data-magnetic>
              See how it works
            </a>
          </div>

          <p className="finale__meta">
            Built by someone who kept talking to himself in the car.
          </p>
        </div>
      </div>
    </section>
  );
}

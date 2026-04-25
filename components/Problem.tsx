import { Counter } from "./Counter";

export function Problem() {
  return (
    <section
      id="problem"
      className="section section--cream has-index"
      data-index="01"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            The problem
          </span>
          <h2 className="display section__h" data-in>
            The blank page <em className="display-serif">beat you.</em>
          </h2>
          <p className="section__sub" data-in>
            You open a journal app, stare at a cursor, close it. Your mouth
            moves faster than your fingers. Log Your Mind skips the blank
            page. The moment you press record, it&apos;s already working.
          </p>
        </div>

        <div className="grid grid--3">
          <article className="card card--peach tiltable" data-in>
            <div className="stat-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
            </div>
            <div className="stat-n">
              <Counter end={6} /> out of <Counter end={10} />
            </div>
            <p className="stat-lbl">
              Journals get started. One in ten makes it past a week.
            </p>
            <p className="stat-src">Harvard Gazette · 2023</p>
          </article>

          <article className="card card--sand tiltable" data-in>
            <div className="stat-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <div className="stat-n">
              <Counter end={3} />× faster
            </div>
            <p className="stat-lbl">
              People speak 3× faster than they type. The mouth was the point.
            </p>
            <p className="stat-src">Stanford HAI · 2022</p>
          </article>

          <article className="card card--white tiltable" data-in>
            <div className="stat-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
              </svg>
            </div>
            <div className="stat-n">
              <Counter end={73} />%
            </div>
            <p className="stat-lbl">
              Of people think better when they hear themselves out loud.
            </p>
            <p className="stat-src">Psych Today · 2024</p>
          </article>
        </div>
      </div>
    </section>
  );
}

// components/WaveformDivider.js
//
// The site's signature element: a control-chart trace. A signal drifts,
// crosses a spec line, gets flagged, and gets pulled back in - a visual
// shorthand for the DFMEA / process-control instinct that runs through
// the work on this site. Used as a section divider throughout.

export default function WaveformDivider({ label }) {
  return (
    <div className="waveform" role="presentation" aria-hidden="true">
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="waveform-svg"
      >
        <line x1="0" y1="30" x2="1200" y2="30" className="waveform-spec" />
        <path
          className="waveform-trace"
          d="M0,40 C60,38 120,42 180,36 C260,28 320,55 380,60
             C440,65 470,30 520,30 C600,30 610,15 660,12
             C700,10 720,40 760,46 C820,55 860,30 920,30
             C1000,30 1040,34 1100,32 C1140,31 1170,30 1200,30"
          fill="none"
        />
        <circle cx="660" cy="12" r="5" className="waveform-flag" />
      </svg>
      {label ? <span className="waveform-label">{label}</span> : null}
    </div>
  );
}

import type { FC } from 'react';
import './Features.css';

const Features: FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <span className="features-subtitle">Your storage. Your cloud bill. Your rules.</span>
          <h2>Built for editors who live in huge files.</h2>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Fast, Native Mount</h3>
            <p>
              Mounts as a real macOS volume via a lightweight local mount layer — cold reads
              measured at multiple GB/s against local disk, well ahead of the bottleneck
              most editors actually hit.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📌</div>
            <h3>Partial Pin, Not All-or-Nothing</h3>
            <p>
              Pin exactly the range you need — the first minute of an 80GB file, not the
              whole thing — instead of choosing between "download everything" and "hope
              scrubbing keeps up."
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">☁️</div>
            <h3>S3-Backed, Not Locked In</h3>
            <p>
              Your media lives in your own S3 bucket. Truss is the fast mount and
              caching layer on top of storage you already own and control.
            </p>
          </div>
        </div>

        <div id="how-it-works" className="feature-highlight">
          <div className="highlight-content">
            <div className="badge">Under the Hood</div>
            <h3>A cache built for scrubbing, not just downloading</h3>
            <p>
              Most cloud-mount tools either download the whole file or stall mid-scrub
              waiting on the network. Truss fetches in small chunks, reads ahead of your
              playhead automatically, and lets you pin the ranges you know you'll need.
            </p>
            <ul className="highlight-list">
              <li>Chunked caching with automatic read-ahead</li>
              <li>Byte-range Pin for arbitrary clip segments</li>
              <li>Real, nested folders — mkdir and drag-and-drop upload</li>
              <li>Symlinks on the roadmap for cross-project organization</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div className="code-header">
              <span className="code-lang">Mount Pipeline</span>
              <span className="code-label">How A Read Works</span>
            </div>
            <div className="dashboard-mock">
              <div className="dashboard-row"><span>Finder read request</span><span className="dashboard-score good">→</span></div>
              <div className="dashboard-row"><span>Local mount layer</span><span className="dashboard-score good">→</span></div>
              <div className="dashboard-row"><span>Chunk cache (disk)</span><span className="dashboard-score good">hit / miss</span></div>
              <div className="dashboard-row"><span>S3 range fetch</span><span className="dashboard-score mid">on miss only</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

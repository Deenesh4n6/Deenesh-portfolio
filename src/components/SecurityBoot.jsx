import { useEffect, useState } from 'react'
import { LockKeyhole, ShieldCheck, Terminal } from 'lucide-react'

const bootSteps = [
  'Establishing encrypted channel',
  'Mapping perimeter nodes',
  'Verifying identity signature',
  'Opening secure portfolio',
]

export default function SecurityBoot({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startedAt = Date.now()
    const duration = 2600
    const timer = window.setInterval(() => {
      const nextProgress = Math.min(100, ((Date.now() - startedAt) / duration) * 100)
      setProgress(nextProgress)
      if (nextProgress >= 100) {
        window.clearInterval(timer)
        window.setTimeout(onComplete, 260)
      }
    }, 40)

    return () => window.clearInterval(timer)
  }, [onComplete])

  const activeStep = Math.min(bootSteps.length - 1, Math.floor(progress / 25))

  return (
    <div className="security-boot" role="status" aria-live="polite">
      <div className="security-boot__noise" aria-hidden="true" />
      <div className="security-boot__scanline" aria-hidden="true" />

      <div className="security-boot__topbar">
        <span>DA // SECURE ACCESS PROTOCOL</span>
        <span className="security-boot__topbar-status"><span /> SYSTEM ONLINE</span>
      </div>

      <div className="security-boot__center">
        <div className="security-boot__eyebrow"><Terminal size={14} /> INCOMING SESSION</div>
        <div className="security-boot__lockup">
          <div className="security-boot__shield">
            <div className="security-boot__rings" aria-hidden="true" />
            <ShieldCheck size={52} strokeWidth={1.25} />
            <span>SEC</span>
          </div>
          <div>
            <p className="security-boot__kicker">PORTFOLIO NODE 01</p>
            <h1>Secure the<br /><strong>connection.</strong></h1>
            <p className="security-boot__copy">A network-minded portfolio by Deenesh Arumugam.</p>
          </div>
        </div>

        <div className="security-boot__progress-wrap">
          <div className="security-boot__progress-label">
            <span>{bootSteps[activeStep]}</span>
            <strong>{Math.round(progress).toString().padStart(3, '0')}%</strong>
          </div>
          <div className="security-boot__progress-track"><div style={{ width: `${progress}%` }} /></div>
        </div>

        <div className="security-boot__steps">
          {bootSteps.map((step, index) => (
            <div key={step} className={index <= activeStep ? 'is-active' : ''}>
              <span>{index <= activeStep ? '01' : '··'}</span>{step}
            </div>
          ))}
        </div>
      </div>

      <div className="security-boot__footer">
        <span><LockKeyhole size={13} /> TLS 1.3 / AES-256</span>
        <button type="button" onClick={onComplete}>Skip boot sequence <span>↵</span></button>
      </div>
    </div>
  )
}
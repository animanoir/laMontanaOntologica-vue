import './style.css'
import typescriptLogo from './typescript.svg'
import animanoirLogo from '/images/animanoir.jpg'
import { setupCounter } from './counter.ts'
import "./bases/const-let.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <img src="${animanoirLogo}" class="logo" alt="Animanoir" />
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import React, { ReactNode } from 'react'
import { containerMaxW } from '../config'
import JustboilLogo from './JustboilLogo'

type Props = {
  children: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-1 relative px-4 bottom ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b>
            &copy;{year},{` `}
            <a href="'./'" rel="noreferrer" target="_blank">
              ERP.co
            </a>
            .
          </b>
          {` `}
        </div>
      </div>
    </footer>
  )
}

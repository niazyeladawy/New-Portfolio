'use client'
import { BallCanvas } from "./canvas"
import { technologies } from "@/constants"
import styles from '@/styles/Skills.module.css'

const Tech = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.skills_wrapper}>
          {
            technologies?.map((tech, index) => (
              <div className="w-28 h-28" key={tech.name} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BallCanvas icon={tech.icon} />
              </div>
            ))
          }
        </div>
      </div>
    </section>

  )
}
export default Tech


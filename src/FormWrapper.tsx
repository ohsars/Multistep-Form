import { ReactNode } from "react"

type FormWrapperProps = {
  title: string,
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h2 style={{textAlign: "center", margin: 0, font:"2xl", fontStyle:"bold", paddingBottom: "1rem"}}>{title}</h2>
            <div style={{ display: "grid", gap: "1em .5em", justifyContent: "flex-start", gridTemplateColumns: "auto minmax(auto, 400px)" }}>
                {children}
            </div>
        </>
    )
}
export type Service = {
  id: number
  title: string
  subtitle: string
  promocode: string
  activated: boolean
}

export type Financial = {
  id: number
  type: string
  amount: string
}

export type Section = {
  id: number
  name: string
  activeLogo: string
  logo: string
  active: boolean
}

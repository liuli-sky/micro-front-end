declare module 'nprogress' {
  interface NProgressStatic {
    start(): NProgressStatic
    done(force?: boolean): NProgressStatic
    configure(options: Partial<{ showSpinner: boolean }>): NProgressStatic
  }
  const NProgress: NProgressStatic
  export default NProgress
}



